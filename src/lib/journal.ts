// The Journal: articles for specifiers, consultants and developers.
//
// ADDING AN ARTICLE
//   1. Copy any file in src/lib/journal-articles/ and edit it (one article per file).
//   2. Import it below and add it to JOURNAL (the order here is the display order; the first
//      one is the featured article and the image card in the header Resources panel).
//   3. Make its card thumbnail (720x480 WebP in public/images, key = `card`).
//   4. Add a line for it to public/llms.txt.
//   5. npm run check.
//
// Inline links inside any text string:
//   {{mullion|mullions}}              -> /glossary#mullion, shown as "mullions"
//   {{/systems/cladding|Cladding}}    -> that page (any path on the site)
// The audit fails the build if a glossary slug, page or image does not exist.
//
// Guardrails (docs/AFTER-EVERY-EDIT.md, section 3): general industry guidance only, credited to the
// company. Test standards are described by what they MEASURE, never as something Fenza has passed.
// No invented capacity, certification or project claims. Say only what the site already says about
// Fenza's own systems. All articles need engineering review before launch.

import stickVsUnitised from "./journal-articles/stick-vs-unitised-curtain-wall";
import acpVsSolid from "./journal-articles/acp-vs-solid-aluminium-cladding";
import astmE331 from "./journal-articles/what-astm-e331-tests";
import structuralGlazing from "./journal-articles/structural-glazing-explained";
import spiderGlazing from "./journal-articles/spider-glazing-and-glass-fins";
import rainScreen from "./journal-articles/rain-screen-cladding-the-gap";
import thermalBreaks from "./journal-articles/thermal-breaks-in-aluminium-frames";
import facadeGlass from "./journal-articles/choosing-facade-glass";
import casementSliding from "./journal-articles/casement-or-sliding-windows";
import slideFold from "./journal-articles/slide-and-fold-doors-what-to-check";
import louvers from "./journal-articles/louvers-and-sun-shading-fins";
import balustrades from "./journal-articles/glass-balustrades-what-to-check";
import movementJoints from "./journal-articles/movement-joints-in-facades";
import finishes from "./journal-articles/anodised-powder-coated-or-pvdf";
import quote from "./journal-articles/what-to-send-a-facade-manufacturer";
import climates from "./journal-articles/facades-for-indian-climates";
import contractor from "./journal-articles/choosing-a-facade-contractor-in-india";
import monsoon from "./journal-articles/monsoon-proof-facades-and-windows";
import maintenance from "./journal-articles/facade-maintenance-checklist";
import drawings from "./journal-articles/reading-facade-shop-drawings";
import acoustic from "./journal-articles/acoustic-glazing-for-noisy-sites";
import condensation from "./journal-articles/condensation-on-windows-and-facades";
import skylightDesign from "./journal-articles/skylight-design-and-drainage";
import anchors from "./journal-articles/curtain-wall-anchors-and-slab-edges";
import mockUps from "./journal-articles/facade-mock-up-review";
import windowDrainage from "./journal-articles/window-drainage-and-weep-holes";
import solarControl from "./journal-articles/solar-control-glass-and-shading";
import glassReplacement from "./journal-articles/replacing-damaged-facade-glass";
import { journalImage } from "./journal-images";

export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "note"; x: string }
  | { t: "compare"; cols: string[]; rows: { k: string; v: string[] }[] }
  /** An inline photo: `id` is a slot in journal-images.json (file, alt, size and credit live there). */
  | { t: "img"; id: string; cap: string };

export interface Article {
  slug: string;
  /** Page heading (h1). */
  title: string;
  /** Shorter title for the <title> tag (the brand suffix is added). Keep it under ~43 characters. */
  seoTitle: string;
  /** Meta description: 120-160 characters. */
  description: string;
  /** Shown on cards and under the heading. */
  excerpt: string;
  /** One short line for the header panel's image card (under ~85 characters). */
  teaser: string;
  topic: Topic;
  /** ISO date (YYYY-MM-DD). Used in structured data only; the pages do not show a date. */
  date: string;
  /** Banner photo: a slot id in journal-images.json (1200px+ on the long side). */
  hero: string;
  /** Card thumbnail: a slot id in journal-images.json (720x480). */
  card: string;
  /** Social-share image path in /public/og. */
  og: string;
  /** Glossary slugs and system slugs shown at the end as related reading. */
  terms: string[];
  systems: string[];
  /** 3-4 question-and-answer pairs shown under the article and published as FAQPage markup. Answers: 1-3 sentences, plain text, no links. */
  faq: { question: string; answer: string }[];
  body: Block[];
}

export const TOPICS = [
  "Curtain wall",
  "Cladding",
  "Glazing",
  "Windows & doors",
  "Performance",
  "Elements",
  "Testing",
  "Finishes",
  "Enquiries",
] as const;
export type Topic = (typeof TOPICS)[number];

/** Display order. Newest or most important first; the first is featured. */
export const JOURNAL: Article[] = [
  climates,
  contractor,
  monsoon,
  maintenance,
  drawings,
  acoustic,
  condensation,
  skylightDesign,
  anchors,
  mockUps,
  windowDrainage,
  solarControl,
  glassReplacement,
  stickVsUnitised,
  acpVsSolid,
  astmE331,
  structuralGlazing,
  spiderGlazing,
  rainScreen,
  thermalBreaks,
  facadeGlass,
  casementSliding,
  slideFold,
  louvers,
  balustrades,
  movementJoints,
  finishes,
  quote,
];

// ---------- helpers (used by the pages, the sitemap and the Resources panel) ----------

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-10-06" -> "6 October 2026". Manual, so server and browser always agree (no Intl/timezone). */
export const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

const plain = (s: string) =>
  s.replace(/\{\{[^|}]+\|([^}]+)\}\}/g, "$1").replace(/\{\{([^}]+)\}\}/g, "$1");

/** Whole-article word count, from the same text that is displayed. */
export const wordCount = (a: Article): number =>
  a.body.reduce((n, b) => {
    const text =
      b.t === "p" || b.t === "h2" || b.t === "note"
        ? b.x
        : b.t === "ul" || b.t === "ol"
          ? b.items.join(" ")
          : b.t === "compare"
            ? b.rows.map((r) => `${r.k} ${r.v.join(" ")}`).join(" ")
            : "";
    return n + plain(text).split(/\s+/).filter(Boolean).length;
  }, 0);

export const readingMinutes = (a: Article): number => Math.max(1, Math.round(wordCount(a) / 200));

export const getArticle = (slug: string): Article | undefined => JOURNAL.find((a) => a.slug === slug);

/** The other articles to suggest at the end of one: same topic first, then the rest in display order. */
export const relatedArticles = (slug: string, count = 3): Article[] => {
  const me = getArticle(slug);
  const others = JOURNAL.filter((a) => a.slug !== slug);
  return [...others.filter((a) => a.topic === me?.topic), ...others.filter((a) => a.topic !== me?.topic)].slice(0, count);
};

/** Every image file an article shows (banner + inline), for the sitemap. */
export const articleImages = (a: Article): string[] => [
  journalImage(a.hero).file,
  ...a.body.flatMap((b) => (b.t === "img" ? [journalImage(b.id).file] : [])),
];

/** Photo credits to print under an article (real photos only, one line each, no repeats). */
export const articleCredits = (a: Article): { credit: string; source?: string }[] => {
  const seen = new Set<string>();
  const out: { credit: string; source?: string }[] = [];
  for (const id of [a.hero, ...a.body.flatMap((b) => (b.t === "img" ? [b.id] : []))]) {
    const img = journalImage(id);
    if (img.placeholder || !img.credit || seen.has(img.credit)) continue;
    seen.add(img.credit);
    out.push({ credit: img.credit, source: img.source });
  }
  return out;
};
