// The "Resources" family — one list that drives every place these pages are
// surfaced: the desktop header panel, the footer, and the Resources page.
//
// ADDING A NEW PAGE (Testing, Journal, Downloads…): add ONE entry to
// RESOURCE_ENTRIES below, and it appears in all of those places. The page
// itself still needs its own route (src/lib/routes.ts + src/AppRoutes.tsx).
//
// The header panel also has an optional "spotlight" — the image card on its
// right. Point RESOURCE_SPOTLIGHT at whatever deserves the eye: today the new
// glossary; later, the latest Journal article (set title/blurb/to/image from
// the article's data). Set it to null and the panel drops back to entries only.

import { GLOSSARY } from "./glossary";

export interface ResourceEntry {
  title: string;
  /** Route, optionally with a #hash. */
  to: string;
  /** One plain line under the title. */
  blurb: string;
  /** The Resources page already shows this one in full (e.g. the catalogue
   *  form), so its "Also available" cards skip it. */
  onResourcesPage?: boolean;
}

export const RESOURCE_ENTRIES: ResourceEntry[] = [
  {
    title: "Catalogue",
    to: "/resources#catalogue",
    blurb: "All thirteen system families, with indicative technical data.",
    onResourcesPage: true,
  },
  {
    title: "Facade glossary",
    to: "/glossary",
    blurb: `${GLOSSARY.length} facade terms, in plain language.`,
  },
];

export interface ResourceSpotlight {
  eyebrow: string;
  title: string;
  blurb: string;
  to: string;
  /** Image key in /public/images (see imgUrl). Keep it light: ~720x480 WebP. */
  image: string;
  alt: string;
}

export const RESOURCE_SPOTLIGHT: ResourceSpotlight | null = {
  eyebrow: "New",
  title: "The facade glossary",
  blurb: "Mullion, transom, spandrel, U-value: the terms explained without the jargon.",
  to: "/glossary",
  image: "spotlight-glossary",
  alt: "Cut section of an aluminium curtain wall profile with glazing unit and gaskets",
};

export const RESOURCES_HEADING = {
  eyebrow: "Resources",
  lead: "Everything to specify",
  accent: "with Fenza.",
};
