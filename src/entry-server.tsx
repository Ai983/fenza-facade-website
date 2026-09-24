import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import ServerApp from "./ServerApp";

export { getAllRoutes } from "./lib/routes";
export { buildSitemapXml } from "./lib/sitemap";

export function render(url: string) {
  const helmetContext: Record<string, unknown> = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <ServerApp helmetContext={helmetContext} />
    </StaticRouter>
  );

  const { helmet } = helmetContext as {
    helmet: Record<string, { toString(): string }>;
  };

  const headTags = helmet
    ? [
        helmet.title?.toString() ?? "",
        helmet.meta?.toString() ?? "",
        helmet.link?.toString() ?? "",
        helmet.script?.toString() ?? "",
      ].join("\n")
    : "";

  return { html, headTags };
}
