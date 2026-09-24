import { SITE_URL } from "./site";
import { getAllRoutes } from "./routes";
import { SYSTEMS, imgUrl } from "./systems";

const loc = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

const priority = (path: string) =>
  path === "/" ? "1.0" : path.split("/").length <= 2 ? "0.8" : "0.7";

export function buildSitemapXml(lastmod: string): string {
  const rows = getAllRoutes().map((path) => {
    const sys = SYSTEMS.find((s) => `/systems/${s.slug}` === path);
    const images = sys
      ? "\n" +
        [sys.hero, ...sys.gallery.map((g) => g.img)]
          .map(
            (k) =>
              `    <image:image><image:loc>${SITE_URL}${imgUrl(k)}</image:loc></image:image>`
          )
          .join("\n")
      : "";
    return `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority(path)}</priority>${images}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${rows.join("\n")}
</urlset>
`;
}
