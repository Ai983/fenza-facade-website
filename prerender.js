import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render, getAllRoutes, buildSitemapXml } = await import(
  "./dist/server/entry-server.js"
);

const routes = getAllRoutes();
let ok = 0;
let failed = 0;

const writePage = (route, filePath) => {
  const { html: appHtml, headTags } = render(route);
  let html = template
    .replace("<!--app-head-->", headTags || "")
    .replace("<!--app-html-->", appHtml);
  const dir = path.dirname(toAbsolute(filePath));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(toAbsolute(filePath), html);
};

for (const route of routes) {
  try {
    const filePath = `dist${route === "/" ? "/index" : route}.html`;
    writePage(route, filePath);
    console.log("✓ pre-rendered:", filePath);
    ok++;
  } catch (err) {
    console.error("✗ failed:", route, err.message);
    failed++;
  }
}

// 404 page (Vercel/Netlify serve dist/404.html for unmatched routes).
try {
  writePage("/__not-found__", "dist/404.html");
  console.log("✓ pre-rendered: dist/404.html");
  ok++;
} catch (err) {
  console.error("✗ failed: 404", err.message);
  failed++;
}

// Sitemap
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(toAbsolute("dist/sitemap.xml"), buildSitemapXml(today));
console.log("✓ generated: sitemap.xml");

console.log(`\nPrerender complete: ${ok} succeeded, ${failed} failed`);
if (failed > 0) process.exit(1);
