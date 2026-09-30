// Static integrity audit of the BUILT site (dist/).  Run:  npm run build && npm run audit
//
// Reads every prerendered page the way a search engine would and checks that every link,
// anchor, image, sitemap entry, social tag and structured-data URL resolves the way Vercel
// (cleanUrls: true) will resolve it. Exits 1 if anything is wrong, so it can gate a deploy.
//
// See docs/AFTER-EVERY-EDIT.md for what each check protects.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const DIST = process.env.AUDIT_DIST ?? path.join(ROOT, "dist");
const SITE = /SITE_URL\s*=\s*"([^"]+)"/.exec(fs.readFileSync(path.join(ROOT, "src/lib/site.ts"), "utf8"))?.[1];
if (!SITE) throw new Error("Could not read SITE_URL from src/lib/site.ts");
if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("No dist/index.html — run `npm run build` first.");
  process.exit(1);
}

const problems = [];
const warn = [];
const bad = (where, msg) => problems.push(`${where}: ${msg}`);

// ---------- collect pages ----------
const SKIP_DIRS = new Set(["server", "assets", "images", "og"]);
const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? (SKIP_DIRS.has(e.name) ? [] : walk(`${d}/${e.name}`)) : [`${d}/${e.name}`]
  );
const dist = DIST.replace(/\\/g, "/");
const routeOf = (f) => {
  const r = f.slice(dist.length).replace(/\.html$/, "");
  return r === "/index" ? "/" : r;
};
const pages = new Map(); // route -> { html, ids }
for (const f of walk(dist).filter((f) => f.endsWith(".html"))) {
  const html = fs.readFileSync(f, "utf8");
  const idList = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  pages.set(routeOf(f), { html, ids: new Set(idList), idList });
}
const contentPages = [...pages.keys()].filter((r) => r !== "/404" && !r.startsWith("/downloads/"));

// ---------- resolver (Vercel cleanUrls semantics) ----------
const fileExists = (rel) => {
  try { return fs.statSync(`${dist}${rel}`).isFile(); } catch { return false; }
};
function resolve(p) {
  if (p === "" || p === "/") return { kind: "page", route: "/" };
  const clean = p.replace(/\/$/, "");
  if (pages.has(clean)) return { kind: "page", route: clean };
  if (fileExists(p)) return { kind: "file", route: p };
  return null;
}
const toPath = (u) => (u.startsWith(SITE) ? u.slice(SITE.length) || "/" : u);
const splitUrl = (u) => {
  const h = u.indexOf("#");
  const hash = h >= 0 ? u.slice(h + 1) : "";
  let rest = h >= 0 ? u.slice(0, h) : u;
  const qi = rest.indexOf("?");
  if (qi >= 0) rest = rest.slice(0, qi);
  return { p: rest, hash };
};

const stats = { links: 0, external: new Map(), hashes: 0, assets: 0, jsonld: 0, imgs: 0 };
const inbound = new Map(); // route -> Set of routes linking to it

for (const [route, pg] of pages) {
  if (route.startsWith("/downloads/")) continue;
  const html = pg.html;

  // ---------- 1. anchors ----------
  for (const m of html.matchAll(/<a\s([^>]*)>/g)) {
    const attrs = m[1];
    const href = /href="([^"]*)"/.exec(attrs)?.[1];
    if (href == null) { bad(route, `<a> without href: <a ${attrs.slice(0, 80)}>`); continue; }
    stats.links++;
    if (/^(mailto:|tel:)/.test(href)) {
      if (/0{6,}/.test(href)) bad(route, `placeholder contact link is live: ${href}`);
      continue;
    }
    if (href.startsWith("javascript:")) { bad(route, "javascript: link"); continue; }
    if (/^https?:\/\//.test(href) && !href.startsWith(SITE)) {
      stats.external.set(href, (stats.external.get(href) ?? 0) + 1);
      if (/target="_blank"/.test(attrs) && !/rel="[^"]*noopener/.test(attrs)) bad(route, `external _blank link missing rel=noopener: ${href}`);
      if (/wa\.me\/0{4,}|wa\.me\/91?0{6,}/.test(href)) bad(route, `placeholder WhatsApp link is live: ${href}`);
      continue;
    }
    if (href.startsWith("//")) { bad(route, `protocol-relative link ${href}`); continue; }
    const u = toPath(href);
    if (u === "" || u === "#") { if (href === "#") warn.push(`${route}: bare "#" link`); continue; }
    const { p, hash } = splitUrl(u);
    if (!p && hash) {
      stats.hashes++;
      if (!pg.ids.has(hash)) bad(route, `anchor #${hash} does not exist on this page`);
      continue;
    }
    if (!p.startsWith("/")) { bad(route, `relative link "${href}" (breaks on nested pages)`); continue; }
    if (p !== "/" && p.endsWith("/")) warn.push(`${route}: trailing-slash link ${href} (cleanUrls redirects it)`);
    if (/[A-Z]/.test(p)) bad(route, `uppercase in path ${href}`);
    const r = resolve(p);
    if (!r) { bad(route, `BROKEN LINK -> ${href}`); continue; }
    if (r.kind === "page" && r.route !== route) (inbound.get(r.route) ?? inbound.set(r.route, new Set()).get(r.route)).add(route);
    if (hash) {
      stats.hashes++;
      const target = r.kind === "page" ? pages.get(r.route) : null;
      if (!target) bad(route, `hash on a non-page: ${href}`);
      else if (!target.ids.has(hash)) bad(route, `BROKEN ANCHOR -> ${href} (no id="${hash}" on ${r.route})`);
    }
  }

  // ---------- 2. assets: src, srcset, <link href>, url() ----------
  const assetRefs = new Set();
  for (const m of html.matchAll(/\ssrc="([^"]*)"/g)) assetRefs.add(m[1]);
  for (const m of html.matchAll(/\ssrcset="([^"]*)"/g)) m[1].split(",").forEach((s) => assetRefs.add(s.trim().split(/\s+/)[0]));
  for (const m of html.matchAll(/<link\s[^>]*?href="([^"]*)"[^>]*>/g)) if (!/rel="(canonical|alternate)"/.test(m[0])) assetRefs.add(m[1]);
  for (const m of html.matchAll(/url\(([^)]+)\)/g)) assetRefs.add(m[1].replace(/["']/g, ""));
  for (const a of assetRefs) {
    if (!a || a.startsWith("data:") || /^https?:\/\/(fonts\.(googleapis|gstatic)\.com)/.test(a)) continue;
    stats.assets++;
    if (/^https?:\/\//.test(a) && !a.startsWith(SITE)) { warn.push(`${route}: external asset ${a.slice(0, 90)}`); continue; }
    const { p } = splitUrl(toPath(a));
    if (!p.startsWith("/")) { bad(route, `relative asset path "${a}"`); continue; }
    if (!fileExists(p)) bad(route, `MISSING ASSET -> ${a}`);
  }

  // ---------- 3. images: alt text ----------
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    stats.imgs++;
    if (!/\salt=/.test(m[0])) bad(route, `<img> without an alt attribute (use alt="" if decorative): ${m[0].slice(0, 90)}`);
  }

  // ---------- 4. document basics ----------
  const dups = pg.idList.filter((x, i) => pg.idList.indexOf(x) !== i);
  if (dups.length) bad(route, `duplicate id(s): ${[...new Set(dups)].join(", ")}`);
  if (!/<html[^>]*\slang="/.test(html)) bad(route, "<html> has no lang attribute");
  if (!/<meta[^>]*name="viewport"/.test(html)) bad(route, "missing viewport meta");
  const text = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
  const ph = /lorem ipsum|\bTODO\b|\bFIXME\b|\bTBD\b|\bXXX+\b|00000 00000|example\.com|undefined|\[object Object\]|NaN\b/i.exec(text);
  if (ph) bad(route, `placeholder / broken text in the page: "${ph[0]}"`);

  // ---------- 5. head: canonical, og, twitter, description, title, h1 ----------
  const get = (re) => re.exec(html)?.[1];
  const title = get(/<title[^>]*>([^<]*)<\/title>/);
  const canon = get(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) ?? get(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/);
  const desc = get(/<meta[^>]*name="description"[^>]*content="([^"]*)"/);
  const ogUrl = get(/<meta[^>]*property="og:url"[^>]*content="([^"]*)"/);
  const ogImg = get(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"/);
  const twImg = get(/<meta[^>]*name="twitter:image"[^>]*content="([^"]*)"/);
  pg.title = title;
  pg.desc = desc;
  if (route === "/404") continue;
  if (!title) bad(route, "missing <title>");
  else if (title.length > 70) warn.push(`${route}: title is ${title.length} chars (Google shows ~60)`);
  if (!desc) bad(route, "missing meta description");
  else if (desc.length > 170 || desc.length < 70) warn.push(`${route}: meta description is ${desc.length} chars (aim for 120-160)`);
  const want = SITE + (route === "/" ? "" : route);
  if (canon !== want) bad(route, `canonical is "${canon}", expected "${want}"`);
  if (ogUrl !== want) bad(route, `og:url is "${ogUrl}", expected "${want}"`);
  for (const [n, v] of [["og:image", ogImg], ["twitter:image", twImg]]) {
    if (!v) { bad(route, `missing ${n}`); continue; }
    const { p } = splitUrl(toPath(v));
    if (!v.startsWith(SITE)) bad(route, `${n} is not an absolute site URL: ${v}`);
    else if (!fileExists(p)) bad(route, `${n} file missing: ${v}`);
  }
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) bad(route, `has ${h1s} <h1> (want exactly 1)`);
  if (/noindex/.test(html)) bad(route, "has noindex");

  // ---------- 6. JSON-LD ----------
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let data;
    try { data = JSON.parse(m[1]); } catch (e) { bad(route, `JSON-LD does not parse: ${e.message}`); continue; }
    stats.jsonld++;
    const seen = (o) => {
      if (Array.isArray(o)) return o.forEach(seen);
      if (o && typeof o === "object")
        for (const [key, v] of Object.entries(o)) {
          if (["image", "logo", "url", "item"].includes(key) && typeof v === "string") {
            if (v.startsWith(SITE)) {
              const { p } = splitUrl(v.slice(SITE.length) || "/");
              if (!resolve(p)) bad(route, `JSON-LD ${key} -> ${v} does not resolve`);
            } else if (v.startsWith("/")) bad(route, `JSON-LD ${key} is not absolute: ${v}`);
          }
          seen(v);
        }
    };
    seen(data);
  }
}

// ---------- 7. sitemap ----------
const sm = fs.readFileSync(`${dist}/sitemap.xml`, "utf8");
const pageLocs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const imgLocs = [...sm.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((m) => m[1]);
for (const l of pageLocs) {
  const r = resolve(toPath(l) === l ? "" : toPath(l));
  if (!r || r.kind !== "page") bad("sitemap.xml", `<loc> does not resolve: ${l}`);
}
for (const l of imgLocs) if (!fileExists(l.slice(SITE.length))) bad("sitemap.xml", `image <loc> missing: ${l}`);
const inMap = new Set(pageLocs.map((l) => l.slice(SITE.length) || "/"));
for (const r of contentPages) if (!inMap.has(r)) bad("sitemap.xml", `page ${r} is not in the sitemap`);
if (new Set(pageLocs).size !== pageLocs.length) bad("sitemap.xml", "duplicate <loc> entries");

// ---------- 8. llms.txt + robots ----------
const llms = fs.readFileSync(`${dist}/llms.txt`, "utf8");
const llmsUrls = [...new Set([...llms.matchAll(new RegExp(SITE.replace(/[.]/g, "\\.") + "[^\\s)>\\]\"]*", "g"))].map((m) => m[0]))];
for (const u of llmsUrls) {
  const { p } = splitUrl(u.slice(SITE.length) || "/");
  if (!resolve(p)) bad("llms.txt", `URL does not resolve: ${u}`);
}
for (const r of contentPages) if (r !== "/" && !llmsUrls.some((u) => u === SITE + r)) warn.push(`llms.txt: does not mention ${r}`);
const robots = fs.readFileSync(`${dist}/robots.txt`, "utf8");
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) bad("robots.txt", "sitemap line missing");
if (/Disallow:\s*\/\s*$/m.test(robots)) bad("robots.txt", "site-wide Disallow: /");

// ---------- 9. uniqueness + orphans ----------
const titles = new Map(), descs = new Map();
for (const r of contentPages) {
  const p = pages.get(r);
  (titles.get(p.title) ?? titles.set(p.title, []).get(p.title)).push(r);
  (descs.get(p.desc) ?? descs.set(p.desc, []).get(p.desc)).push(r);
}
for (const [t, rs] of titles) if (rs.length > 1) bad("titles", `duplicate title "${t}" on ${rs.join(", ")}`);
for (const [d, rs] of descs) if (rs.length > 1) bad("descriptions", `duplicate description on ${rs.join(", ")}`);
const t404 = pages.get("/404")?.title;
for (const r of contentPages) if (pages.get(r).title === t404) bad(r, "page has the 404 title (route missing in AppRoutes.tsx?)");
for (const r of contentPages) if (r !== "/" && !inbound.get(r)?.size) bad(r, "ORPHAN: no other page links to it (add it to the nav, footer or a related page)");

// ---------- 10. router coverage (nothing else enforces this pair) ----------
const declared = [...fs.readFileSync(path.join(ROOT, "src/AppRoutes.tsx"), "utf8").matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
const staticRoutes = [...fs.readFileSync(path.join(ROOT, "src/lib/routes.ts"), "utf8").matchAll(/^\s*"(\/[^"]*)",/gm)].map((m) => m[1]);
for (const r of staticRoutes) if (!declared.includes(r)) bad("routes", `${r} is in STATIC_ROUTES but has no <Route> in AppRoutes.tsx`);
for (const d of declared) if (d !== "*" && !d.includes(":") && !staticRoutes.includes(d)) bad("routes", `<Route path="${d}"> is not in STATIC_ROUTES (it would not be prerendered)`);

// ---------- report ----------
console.log(`pages audited: ${contentPages.length} (+404)   links: ${stats.links}   anchors/hash links: ${stats.hashes}   asset refs: ${stats.assets}   images: ${stats.imgs}   JSON-LD blocks: ${stats.jsonld}`);
console.log(`sitemap: ${pageLocs.length} pages, ${imgLocs.length} images   llms.txt URLs: ${llmsUrls.length}   declared routes: ${declared.length}`);
if (stats.external.size) { console.log(`external links (${stats.external.size} distinct):`); for (const [u, n] of stats.external) console.log(`   ${n}x ${u}`); }
console.log(warn.length ? `\nWARNINGS (${warn.length}) - not blocking, but worth fixing:\n  ` + [...new Set(warn)].join("\n  ") : "\nno warnings");
if (problems.length) {
  console.log(`\nPROBLEMS (${problems.length}):\n  ` + [...new Set(problems)].join("\n  "));
  process.exit(1);
}
console.log("\nPROBLEMS: none");
