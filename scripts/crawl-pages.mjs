// Runtime crawl of EVERY page in a real headless browser, at desktop and phone size.
//   npm run build && npm run crawl                       # local: starts its own preview server
//   CRAWL_URL=https://fenzafacade.com npm run crawl      # a deployed site instead
//   CRAWL_MODES=phone npm run crawl                      # only one size (desktop | phone)
//   BROWSER_PATH="C:\path\to\chrome.exe" npm run crawl   # if Edge/Chrome are not found automatically
//
// Per page: JavaScript errors, console errors/warnings (this is where React hydration
// mismatches show up), HTTP >= 400, failed requests, images that never load (after scrolling
// the whole page so lazy images fire), sideways scroll, missing <h1>. Then, from the home page,
// clicks every distinct header/footer link (client-side navigation) and checks the result.
//
// Needs Node 22+ (global WebSocket) and Edge or Chrome. Exits 1 if anything fails.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import url from "node:url";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const LIVE = process.env.CRAWL_URL?.replace(/\/$/, "");
const PORT = 4173;
const BASE = LIVE ?? `http://localhost:${PORT}`;
const MODES = (process.env.CRAWL_MODES ?? "desktop,phone").split(",");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (typeof WebSocket === "undefined") { console.error("This script needs Node 22+ (global WebSocket)."); process.exit(1); }

// ---------- find a browser ----------
const candidates = [
  process.env.BROWSER_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/microsoft-edge",
].filter(Boolean);
const BROWSER = candidates.find((p) => fs.existsSync(p));
if (!BROWSER) { console.error("No Edge/Chrome found. Set BROWSER_PATH to its executable."); process.exit(1); }

// ---------- routes: from the sitemap (so a new page is crawled automatically) ----------
let sitemap = "";
const localSitemap = path.join(ROOT, "dist", "sitemap.xml");
if (fs.existsSync(localSitemap)) sitemap = fs.readFileSync(localSitemap, "utf8");
else if (LIVE) sitemap = await (await fetch(`${LIVE}/sitemap.xml`)).text();
else { console.error("No dist/sitemap.xml — run `npm run build` first."); process.exit(1); }
const ROUTES = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
if (!LIVE) ROUTES.push("/404"); // a deployed 404 correctly returns status 404, so it is only crawled locally
if (ROUTES.length < 2) { console.error("Could not read routes from the sitemap."); process.exit(1); }

// ---------- preview server (local only) ----------
let server;
if (!LIVE) {
  server = spawn(process.execPath, [path.join(ROOT, "node_modules/vite/bin/vite.js"), "preview", "--port", String(PORT), "--strictPort"], { cwd: ROOT, stdio: "ignore" });
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(BASE)).ok) break; } catch { /* not up yet */ }
    await sleep(250);
    if (i === 59) { console.error(`Preview server did not start on :${PORT} (is something already using it?)`); server.kill(); process.exit(1); }
  }
}

// ---------- one browser per mode ----------
async function crawlMode(mode, port) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), `fenza-crawl-${mode}-`));
  const proc = spawn(BROWSER, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"], { stdio: "ignore" });
  let targets;
  for (let i = 0; i < 60; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break; } catch { await sleep(250); } }
  if (!targets) { proc.kill(); throw new Error("Could not connect to the browser"); }
  const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));

  let id = 0;
  const pending = new Map();
  let bucket = { console: [], http: [], failed: [] };
  const reqUrl = new Map();
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.method === "Runtime.exceptionThrown") bucket.console.push("EXCEPTION " + (d.params.exceptionDetails.exception?.description ?? "").split("\n")[0]);
    if (d.method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(d.params.type))
      bucket.console.push(d.params.type.toUpperCase() + " " + d.params.args.map((a) => a.value ?? a.description).join(" ").slice(0, 220));
    if (d.method === "Log.entryAdded" && ["error", "warning"].includes(d.params.entry.level))
      bucket.console.push("LOG " + d.params.entry.level + " " + d.params.entry.text.slice(0, 160) + " " + (d.params.entry.url ?? ""));
    if (d.method === "Network.requestWillBeSent") reqUrl.set(d.params.requestId, d.params.request.url);
    if (d.method === "Network.responseReceived" && d.params.response.status >= 400) bucket.http.push(`${d.params.response.status} ${d.params.response.url}`);
    if (d.method === "Network.loadingFailed" && !d.params.canceled) bucket.failed.push(`${d.params.errorText} ${reqUrl.get(d.params.requestId) ?? ""}`);
    if (pending.has(d.id)) { pending.get(d.id)(d.result); pending.delete(d.id); }
  };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const js = async (e) => (await send("Runtime.evaluate", { expression: e, returnByValue: true, awaitPromise: true })).result.value;
  await Promise.all(["Runtime", "Page", "Network", "Log"].map((d) => send(d + ".enable")));
  const [W, H, DPR, MOBILE] = mode === "phone" ? [390, 844, 2, true] : [1440, 900, 1, false];
  await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: DPR, mobile: MOBILE });

  // Third-party map noise (Edge's own privacy feature complaining about Google's iframe) is not our bug.
  const isThirdParty = (c) => /Tracking Prevention blocked access to storage for https:\/\/(www\.google\.com|maps\.gstatic\.com)/.test(c);

  const fullScroll = async () => {
    const total = await js("document.documentElement.scrollHeight");
    for (let y = 0; y < total + 1200; y += Math.round(H * 0.9)) {
      await js(`window.__lenis ? window.__lenis.scrollTo(${y}, {immediate:true}) : scrollTo(0, ${y})`);
      await sleep(140);
    }
    await sleep(900);
  };

  let failing = 0;
  console.log(`\n=== ${mode.toUpperCase()} (${W}x${H}) ===`);
  for (const route of ROUTES) {
    bucket = { console: [], http: [], failed: [] }; reqUrl.clear();
    await send("Page.navigate", { url: BASE + route });
    await sleep(2200);
    await fullScroll();
    const info = await js(`(() => {
      // Only images that are actually rendered: a display:none copy (e.g. phone-only) never loads, by design.
      const imgs = [...document.images].filter((i) => i.getClientRects().length > 0);
      return {
        h1: (document.querySelector('h1')?.textContent ?? '').trim().slice(0, 48),
        imgs: imgs.length,
        broken: imgs.filter((i) => i.complete && i.naturalWidth === 0 && i.currentSrc).map((i) => i.currentSrc.split('/').slice(-2).join('/')),
        pending: imgs.filter((i) => !i.complete).length,
        sideways: document.documentElement.scrollWidth - innerWidth,
      };
    })()`);
    const noise = bucket.console.filter(isThirdParty).length;
    const issues = [
      ...bucket.console.filter((c) => !isThirdParty(c)).map((c) => "console: " + c),
      ...bucket.http.map((c) => "http: " + c),
      ...bucket.failed.map((c) => "failed: " + c),
      ...(info.broken.length ? ["broken images: " + info.broken.join(", ")] : []),
      ...(info.pending ? [`${info.pending} images never finished loading`] : []),
      ...(info.sideways > 1 ? [`sideways scroll: ${info.sideways}px wider than the screen`] : []),
      ...(!info.h1 ? ["no h1 rendered"] : []),
    ];
    if (issues.length) failing++;
    console.log((issues.length ? "FAIL " : "ok   ") + route.padEnd(34) + `${String(info.imgs).padStart(3)} imgs  "${info.h1}"` + (noise ? `   (+${noise} third-party map notices ignored)` : ""));
    for (const i of issues) console.log("       - " + i);
  }

  // Client-side navigation: click every distinct header/footer link from the home page.
  bucket = { console: [], http: [], failed: [] };
  await send("Page.navigate", { url: BASE + "/" });
  await sleep(2500);
  const SEL = 'header a[href^="/"], footer a[href^="/"]';
  const hrefs = await js(`[...new Set([...document.querySelectorAll(${JSON.stringify(SEL)})].map((a) => a.getAttribute('href')))]`);
  let badClicks = 0;
  for (const h of hrefs) {
    await js(`(() => { const a = [...document.querySelectorAll(${JSON.stringify(SEL)})].find((x) => x.getAttribute('href') === ${JSON.stringify(h)}); a.click(); })()`);
    const want = h.split("#")[0].replace(/\/$/, "") || "/";
    // Journal and city routes load their JS on first visit. Wait for the destination heading,
    // rather than sampling an intentional loading placeholder at a fixed 700 ms.
    let r;
    for (let i = 0; i < 50; i++) {
      r = await js(`({ path: location.pathname, h1: (document.querySelector('h1')?.textContent ?? '').trim().slice(0, 40), notFound: /this elevation doesn.t exist/i.test(document.body.innerText) })`);
      if (r.path === want && r.h1 && !r.notFound) break;
      await sleep(100);
    }
    if (r.path !== want || !r.h1 || r.notFound) { badClicks++; console.log(`FAIL click ${h} -> ${r.path} h1="${r.h1}" notFound=${r.notFound}`); }
    await send("Page.navigate", { url: BASE + "/" });
    await sleep(900);
  }
  const clickConsole = bucket.console.filter((c) => !isThirdParty(c));
  if (badClicks || clickConsole.length) failing++;
  console.log(`${badClicks || clickConsole.length ? "FAIL" : "ok  "} click-through: ${hrefs.length} distinct header/footer links, ${badClicks} wrong, ${clickConsole.length} console issues`);
  for (const c of clickConsole) console.log("       - " + c);

  ws.close();
  proc.kill();
  return failing;
}

let failed = 0;
try {
  let port = 9338;
  for (const mode of MODES) failed += await crawlMode(mode, port++);
} finally {
  server?.kill();
}
console.log(failed ? `\nCRAWL FAILED: ${failed} problem group(s) above.` : "\nCRAWL OK: every page loaded cleanly.");
process.exit(failed ? 1 : 0);
