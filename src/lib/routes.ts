import { SYSTEMS } from "./systems";

/** Every crawlable route, single source for the router and the prerenderer. */
// NOTE: every path here needs a matching <Route> in src/AppRoutes.tsx.
// Nothing enforces the pair — a path listed here with no route prerenders the
// NotFound page's content to that URL and still reports success.
export const STATIC_ROUTES = [
  "/",
  "/systems",
  "/sectors",
  "/projects",
  "/manufacturing",
  "/quality-safety",
  "/leadership",
  "/about",
  "/resources",
  "/contact",
];

export const getSystemPaths = (): string[] =>
  SYSTEMS.map((s) => `/systems/${s.slug}`);

export const getAllRoutes = (): string[] => [
  ...STATIC_ROUTES,
  ...getSystemPaths(),
];
