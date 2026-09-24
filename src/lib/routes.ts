import { SYSTEMS } from "./systems";

/** Every crawlable route, single source for the router and the prerenderer. */
export const STATIC_ROUTES = [
  "/",
  "/systems",
  "/manufacturing",
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
