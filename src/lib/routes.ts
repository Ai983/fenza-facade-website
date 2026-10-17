import { SYSTEMS } from "./systems";
import { JOURNAL, TOPICS, topicSlug } from "./journal";
import { LOCATION_INDEX } from "./location-index";

/** Every crawlable route, single source for the router and the prerenderer. */
// NOTE: every path here needs a matching <Route> in src/AppRoutes.tsx.
// Nothing enforces the pair — a path listed here with no route prerenders the
// NotFound page's content to that URL and still reports success.
export const STATIC_ROUTES = [
  "/",
  "/systems",
  "/system-selector",
  "/compare-systems",
  "/sectors",
  "/projects",
  "/manufacturing",
  "/quality-safety",
  "/leadership",
  "/about",
  "/resources",
  "/glossary",
  "/testing",
  "/journal",
  "/locations",
  "/contact",
];

export const getSystemPaths = (): string[] =>
  SYSTEMS.map((s) => `/systems/${s.slug}`);

export const getJournalPaths = (): string[] =>
  JOURNAL.map((a) => `/journal/${a.slug}`);

/** One page per topic that has articles: /journal/topic/<slug>. */
export const getJournalTopicPaths = (): string[] =>
  TOPICS.filter((t) => JOURNAL.some((a) => a.topic === t)).map((t) => `/journal/topic/${topicSlug(t)}`);

export const getLocationPaths = (): string[] =>
  LOCATION_INDEX.map((l) => `/locations/${l.slug}`);

export const getAllRoutes = (): string[] => [
  ...STATIC_ROUTES,
  ...getSystemPaths(),
  ...getJournalPaths(),
  ...getJournalTopicPaths(),
  ...getLocationPaths(),
];
