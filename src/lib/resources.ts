// The "Resources" family — one list that drives every place these pages are
// surfaced: the desktop header panel, the footer, and the Resources page.
//
// ADDING A NEW PAGE (Testing, Journal, Downloads…): add ONE entry to
// RESOURCE_ENTRIES below, and it appears in all of those places. The page
// itself still needs its own route (src/lib/routes.ts + src/AppRoutes.tsx).
//
// The header panel also has an optional "spotlight" — the image card on its
// right. RESOURCE_SPOTLIGHT features the newest Journal article (checked by the audit); set it to
// null and the panel drops back to entries only.

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
  {
    title: "Testing",
    to: "/testing",
    blurb: "How a facade is proven: air, water and wind, in order.",
  },
  {
    title: "Journal",
    to: "/journal",
    blurb: "Plain-language guides to facade systems and specification.",
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

/**
 * The image card in the header panel features the newest Journal article (the first in JOURNAL).
 * It is written out here, not read from journal.ts, on purpose: importing the Journal would put
 * all article text into the main script that every page downloads. The audit
 * (npm run audit) fails if this block ever differs from the first article, so it cannot drift.
 * Set RESOURCE_SPOTLIGHT to null to drop the card.
 */
const FEATURED = {
  slug: "facades-for-indian-climates",
  title: "Facades for India's climates: what changes from Delhi to Bengaluru",
  teaser: "Glass, shading, drainage and finishes, matched to the local climate.",
  /** The card image: its file and alt text, copied from journal-images.json (slot "climate-card"). */
  image: "j-facades-for-indian-climates",
  alt: "Horizontal louvres running along a green-framed glass facade",
};
export const RESOURCE_SPOTLIGHT: ResourceSpotlight | null = {
  eyebrow: "Journal",
  title: FEATURED.title,
  blurb: FEATURED.teaser,
  to: `/journal/${FEATURED.slug}`,
  image: FEATURED.image,
  alt: FEATURED.alt,
};

export const RESOURCES_HEADING = {
  eyebrow: "Resources",
  lead: "Everything to specify",
  accent: "with Fenza.",
};
