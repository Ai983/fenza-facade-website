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

const readTimes = [];
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

// ---------- 11. Journal source data (things the built HTML cannot reveal) ----------
// Each article is one file in src/lib/journal-articles/. Checked from source: inline {{target|label}}
// links point at real glossary terms / pages; every image slot exists in journal-images.json with a real
// file of the declared size, a proper alt text and (for real photos) a credit; the card/hero/OG files
// exist; descriptions/titles are the right length; and the article is a proper long read (6-10 min).
const jdir = path.join(ROOT, "src/lib/journal-articles");
if (fs.existsSync(jdir)) {
  const glossarySlugs = new Set([...fs.readFileSync(path.join(ROOT, "src/lib/glossary.ts"), "utf8").matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]));
  const sitePaths = new Set(["/", ...pages.keys()]);
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "src/lib/journal-images.json"), "utf8"));
  const webpSize = (file) => {
    const f = path.join(ROOT, "public/images", `${file}.webp`);
    if (!fs.existsSync(f)) return null;
    const b = fs.readFileSync(f);
    const tag = b.toString("ascii", 12, 16);
    if (tag === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (tag === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (tag === "VP8L") { const v = b.readUInt32LE(21); return [1 + (v & 0x3fff), 1 + ((v >> 14) & 0x3fff)]; }
    return null;
  };
  const checkedSlots = new Set();
  const checkSlot = (w, id, role) => {
    const img = manifest[id];
    if (!img) { bad(w, `${role} image slot "${id}" is not in journal-images.json`); return null; }
    if (!checkedSlots.has(id)) {
      checkedSlots.add(id);
      const sz = webpSize(img.file);
      if (!sz) bad(`journal-images.json/${id}`, `file "${img.file}.webp" is missing from public/images`);
      else if (sz[0] !== img.w || sz[1] !== img.h) bad(`journal-images.json/${id}`, `file is ${sz.join("x")} but the entry says ${img.w}x${img.h}`);
      if (!img.alt || img.alt.trim().length < 15) bad(`journal-images.json/${id}`, "alt text is missing or too short");
      if (!img.placeholder && !img.url && !img.source) bad(`journal-images.json/${id}`, "a photo needs its source page (or a url) recorded");
    }
    return img;
  };
  const files = fs.readdirSync(jdir).filter((f) => f.endsWith(".ts"));
  const seenSlugs = new Set();
  let nImgs = 0, nLinks = 0;
  for (const f of files) {
    const src = fs.readFileSync(path.join(jdir, f), "utf8");
    const w = `journal/${f.replace(/\.ts$/, "")}`;
    const one = (k) => new RegExp(`\\b${k}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(src)?.[1];
    const slug = one("slug");
    if (slug !== f.replace(/\.ts$/, "")) bad(w, `slug "${slug}" does not match the file name`);
    if (seenSlugs.has(slug)) bad(w, "duplicate slug");
    seenSlugs.add(slug);
    const desc = one("description") ?? "", seoTitle = one("seoTitle") ?? "", teaser = one("teaser") ?? "";
    if (desc.length < 120 || desc.length > 160) bad(w, `description is ${desc.length} chars (want 120-160)`);
    if (seoTitle.length > 43) bad(w, `seoTitle is ${seoTitle.length} chars (want <= 43)`);
    if (teaser.length > 85) bad(w, `teaser is ${teaser.length} chars (want <= 85)`);

    const heroImg = checkSlot(w, one("hero"), "hero");
    if (heroImg && Math.max(heroImg.w, heroImg.h) < 1200) bad(w, `hero is only ${heroImg.w}x${heroImg.h} (want 1200px+ on the long side)`);
    const cardImg = checkSlot(w, one("card"), "card");
    if (cardImg && (cardImg.w !== 720 || cardImg.h !== 480)) bad(w, `card image should be 720x480, it is ${cardImg.w}x${cardImg.h}`);
    const inline = [...src.matchAll(/t:\s*"img",\s*id:\s*"([^"]+)"/g)].map((m) => m[1]);
    if (inline.length < 1 || inline.length > 3) bad(w, `has ${inline.length} inline images (want 1-3)`);
    for (const id of inline) { nImgs++; checkSlot(w, id, "inline"); }
    const ids = [one("hero"), one("card"), ...inline];
    if (new Set(ids).size !== ids.length) bad(w, "uses the same image slot twice");
    const nFaq = (src.match(/\bquestion:\s*"/g) || []).length;
    if (nFaq < 3 || nFaq > 5) bad(w, `has ${nFaq} FAQ items (want 3-5)`);
    else {
      const built = path.join(ROOT, "dist", "journal", `${slug}.html`);
      if (fs.existsSync(built)) {
        const html = fs.readFileSync(built, "utf8");
        if (!html.includes('"@type":"FAQPage"')) bad(w, "FAQPage JSON-LD is missing from the built page");
        if (!/Frequently asked/.test(html)) bad(w, "the visible 'Frequently asked' section is missing");
      }
    }
    const og = one("og");
    if (!og || !fileExists(og)) bad(w, `og image ${og} is missing`);

    for (const m of src.matchAll(/\{\{([^|}]*)(?:\|([^}]*))?\}\}/g)) {
      nLinks++;
      const [raw, target, label] = m;
      if (!label || !label.trim()) bad(w, `link without a label: ${raw}`);
      else if (target.startsWith("/")) { if (!sitePaths.has(target.replace(/\/$/, ""))) bad(w, `link to a page that does not exist: ${target}`); }
      else if (!glossarySlugs.has(target)) bad(w, `link to an unknown glossary term: ${target}`);
    }
    for (const m of src.matchAll(/terms:\s*\[([^\]]*)\]/g)) for (const t of [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])) if (!glossarySlugs.has(t)) bad(w, `related term "${t}" is not in the glossary`);
    if (src.replace(/\{\{[^}]*\}\}/g, "").match(/\{\{|\}\}/)) bad(w, "unbalanced {{ }} in the text");

    // Reading time, as the page prints it ("N min read"): a proper long read is 6-10 minutes.
    const html = pages.get(`/journal/${slug}`)?.html ?? "";
    // React prints the number and the words as two text nodes: "7<!-- --> min read".
    const mins = Number(/(\d+)(?:<!-- -->)?\s*min read/.exec(html)?.[1]);
    if (!mins) bad(w, "could not find the printed reading time in the built page");
    else if (mins < 6) bad(w, `reads in ${mins} min (articles should be 6-10 min, about 1,200-2,000 words)`);
    else if (mins > 10) warn.push(`${w}: reads in ${mins} min (target is 6-10)`);
    readTimes.push(mins || 0);
  }
  // The Resources panel's image card is written out in resources.ts (so the main script does not
  // import the whole Journal). It must describe the FIRST article in JOURNAL exactly.
  const jsrc = fs.readFileSync(path.join(ROOT, "src/lib/journal.ts"), "utf8");
  const firstName = /export const JOURNAL: Article\[\] = \[\s*(\w+),/.exec(jsrc)?.[1];
  const firstFile = new RegExp(`import ${firstName} from "\\./journal-articles/([^"]+)"`).exec(jsrc)?.[1];
  const rsrc = fs.readFileSync(path.join(ROOT, "src/lib/resources.ts"), "utf8");
  const feat = (k) => new RegExp(`\\b${k}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(rsrc.slice(rsrc.indexOf("const FEATURED")))?.[1];
  if (!firstFile) bad("resources.ts", "could not work out the first article in JOURNAL");
  else {
    const fsrc = fs.readFileSync(path.join(jdir, `${firstFile}.ts`), "utf8");
    const art = (k) => new RegExp(`\\b${k}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(fsrc)?.[1];
    const card = manifest[art("card")];
    for (const [k, want] of [["slug", art("slug")], ["title", art("title")], ["teaser", art("teaser")], ["image", card?.file], ["alt", card?.alt]]) {
      if (feat(k) !== want) bad("resources.ts", `the featured Journal card has ${k} "${feat(k)}" but the first article says "${want}". Update FEATURED in src/lib/resources.ts`);
    }
  }
  const placeholders = Object.entries(manifest).filter(([, i]) => i.placeholder).map(([id]) => id);
  stats.journal = `${files.length} articles (${Math.min(...readTimes)}-${Math.max(...readTimes)} min reads), ${nImgs} inline images, ${nLinks} inline links, ${Object.keys(manifest).length} image slots`;
  if (placeholders.length) warn.push(`JOURNAL PHOTOS: ${placeholders.length} of ${Object.keys(manifest).length} image slots are still PLACEHOLDERS (site images standing in). Replace them with licensed photos in src/lib/journal-images.json before launch.`);
  if (files.length < 2) warn.push("journal: fewer than 2 articles");
}

// ---------- 12. script weight (the main script is downloaded by EVERY page) ----------
// Baseline 2026-10-06: ~154 KB gzip. Content that only some pages need (the Journal) loads on demand.
import zlib from "node:zlib";
const assetsDir = path.join(DIST, "assets");
const MAIN_GZ_BUDGET_KB = 175;
if (fs.existsSync(assetsDir)) {
  const js = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".js")).map((f) => ({
    f, gz: zlib.gzipSync(fs.readFileSync(path.join(assetsDir, f))).length / 1024,
  })).sort((a, b) => b.gz - a.gz);
  stats.scripts = js.map((j) => `${j.f.replace(/-[\w-]{8}\.js$/, ".js")} ${j.gz.toFixed(0)} KB gzip`).join(", ");
  const main = js.find((j) => /^index-/.test(j.f)) ?? js[0];
  if (main && main.gz > MAIN_GZ_BUDGET_KB) bad("scripts", `the main script is ${main.gz.toFixed(0)} KB gzip (budget ${MAIN_GZ_BUDGET_KB} KB). Something large is being imported by every page: load it on demand (see src/pages/JournalRoute.tsx).`);
}

// ---------- report ----------
console.log(`pages audited: ${contentPages.length} (+404)   links: ${stats.links}   anchors/hash links: ${stats.hashes}   asset refs: ${stats.assets}   images: ${stats.imgs}   JSON-LD blocks: ${stats.jsonld}`);
console.log(`sitemap: ${pageLocs.length} pages, ${imgLocs.length} images   llms.txt URLs: ${llmsUrls.length}   declared routes: ${declared.length}`);
if (stats.journal) console.log(`journal source: ${stats.journal}`);
if (stats.scripts) console.log(`scripts: ${stats.scripts}`);
if (stats.external.size) { console.log(`external links (${stats.external.size} distinct):`); for (const [u, n] of stats.external) console.log(`   ${n}x ${u}`); }
console.log(warn.length ? `\nWARNINGS (${warn.length}) - not blocking, but worth fixing:\n  ` + [...new Set(warn)].join("\n  ") : "\nno warnings");
if (problems.length) {
  console.log(`\nPROBLEMS (${problems.length}):\n  ` + [...new Set(problems)].join("\n  "));
  process.exit(1);
}
console.log("\nPROBLEMS: none");
