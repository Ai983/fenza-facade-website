// The Journal: articles for specifiers, consultants and developers.
//
// ADDING AN ARTICLE
//   1. Copy any file in src/lib/journal-articles/ and edit it (one article per file).
//   2. Import it below and add it at the TOP of JOURNAL (newest first; the first
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
import a_windLoadOnFacadesWhatItMeans from "./journal-articles/wind-load-on-facades-what-it-means";
import a_firestoppingAtCurtainWallSlabEdges from "./journal-articles/firestopping-at-curtain-wall-slab-edges";
import a_howFacadeGlassThicknessIsChosen from "./journal-articles/how-facade-glass-thickness-is-chosen";
import a_laminatedOrToughenedGlassForFacades from "./journal-articles/laminated-or-toughened-glass-for-facades";
import a_insulatedGlassUnitsWhatIsInside from "./journal-articles/insulated-glass-units-what-is-inside";
import a_lowECoatingsExplainedForFacades from "./journal-articles/low-e-coatings-explained-for-facades";
import a_sealantsAndGasketsInFacades from "./journal-articles/sealants-and-gaskets-in-facades";
import a_aluminiumExtrusionTolerancesExplained from "./journal-articles/aluminium-extrusion-tolerances-explained";
import a_facadeInstallationSequenceOnSite from "./journal-articles/facade-installation-sequence-on-site";
import a_facadeWarrantyAndDefectLiability from "./journal-articles/facade-warranty-and-defect-liability";
import a_terracottaHplOrAcpCladding from "./journal-articles/terracotta-hpl-or-acp-cladding";
import a_perforatedMetalScreensOnFacades from "./journal-articles/perforated-metal-screens-on-facades";
import a_doubleSkinFacadesExplained from "./journal-articles/double-skin-facades-explained";
import a_glassReflectivityAndGlareForNeighbours from "./journal-articles/glass-reflectivity-and-glare-for-neighbours";
import a_airLeakageInFacadesWhatIsMeasured from "./journal-articles/air-leakage-in-facades-what-is-measured";
import a_structuralAndDeflectionTestsForFacades from "./journal-articles/structural-and-deflection-tests-for-facades";
import a_facadeDesignTimelineConceptToHandover from "./journal-articles/facade-design-timeline-concept-to-handover";
import a_valueEngineeringAFacadeWithoutLosingPerformance from "./journal-articles/value-engineering-a-facade-without-losing-performance";
import a_framelessGlassDoorsHardwareFloorAndHeader from "./journal-articles/frameless-glass-doors-hardware-floor-and-header";
import a_pergolasAndGlassCanopiesWeatherAndDrainage from "./journal-articles/pergolas-and-glass-canopies-weather-and-drainage";
import b_corrosionAndCoastalExposureForAluminiumFacades from "./journal-articles/corrosion-and-coastal-exposure-for-aluminium-facades";
import b_bracketsAndFastenersBehindAFacade from "./journal-articles/brackets-and-fasteners-behind-a-facade";
import b_designingAFacadeYouCanCleanAndMaintain from "./journal-articles/designing-a-facade-you-can-clean-and-maintain";
import b_uValuesForFacadesWhatTheNumberIncludes from "./journal-articles/u-values-for-facades-what-the-number-includes";
import b_glassOnSiteHandlingStorageAndProtection from "./journal-articles/glass-on-site-handling-storage-and-protection";
import b_birdFriendlyGlassOnFacades from "./journal-articles/bird-friendly-glass-on-facades";
import b_curvedAndColdBentGlassFacades from "./journal-articles/curved-and-cold-bent-glass-facades";
import b_balconySlidingDoorsTracksThresholdsAndDrainage from "./journal-articles/balcony-sliding-doors-tracks-thresholds-and-drainage";
import b_windowHardwareHandlesHingesAndLocks from "./journal-articles/window-hardware-handles-hinges-and-locks";
import b_stoneGfrcOrMetalCladding from "./journal-articles/stone-gfrc-or-metal-cladding";
import b_facadeLightingWithoutLeaks from "./journal-articles/facade-lighting-without-leaks";
import b_hoistingAndTransportingUnitisedFacadePanels from "./journal-articles/hoisting-and-transporting-unitised-facade-panels";
import b_surveyingAnExistingFacadeBeforeRefurbishment from "./journal-articles/surveying-an-existing-facade-before-refurbishment";
import b_aluminiumFacadesAndEmbodiedCarbon from "./journal-articles/aluminium-facades-and-embodied-carbon";
import b_readingAFacadeTestReport from "./journal-articles/reading-a-facade-test-report";
import c_spandrelPanelsAndShadowBoxesInCurtainWall from "./journal-articles/spandrel-panels-and-shadow-boxes-in-curtain-wall";
import c_windowWallOrCurtainWall from "./journal-articles/window-wall-or-curtain-wall";
import c_insectScreensAndMeshOnAluminiumWindows from "./journal-articles/insect-screens-and-mesh-on-aluminium-windows";
import c_matchingAluminiumColourAcrossBatches from "./journal-articles/matching-aluminium-colour-across-batches";
import c_briefingAFacadeConsultant from "./journal-articles/briefing-a-facade-consultant";
import c_aluminiumWindowsForVillasAndLowRiseHomes from "./journal-articles/aluminium-windows-for-villas-and-low-rise-homes";
import c_protectingAFacadeDuringConstruction from "./journal-articles/protecting-a-facade-during-construction";
import skylightDesign from "./journal-articles/skylight-design-and-drainage";
import anchors from "./journal-articles/curtain-wall-anchors-and-slab-edges";
import mockUps from "./journal-articles/facade-mock-up-review";
import windowDrainage from "./journal-articles/window-drainage-and-weep-holes";
import solarControl from "./journal-articles/solar-control-glass-and-shading";
import glassReplacement from "./journal-articles/replacing-damaged-facade-glass";
import { journalImage } from "./journal-images";
import { topicSlug } from "./topic-slug";

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

export { topicSlug };

export const topicFromSlug = (slug: string): Topic | undefined =>
  TOPICS.find((t) => topicSlug(t) === slug);

/** Heading, search description (120-160 chars) and intro for each topic page. General guidance only. */
export const TOPIC_COPY: Record<Topic, { title: string; description: string; intro: string }> = {
  "Curtain wall": {
    title: "Curtain wall guides",
    description: "Plain-language guides to curtain wall: stick versus unitised systems, anchors, slab edges, glazing and what to check before you specify one.",
    intro: "Curtain wall is the glazed skin hung in front of a building's structure. These guides explain how the systems differ, how they are anchored and what to review before one is specified.",
  },
  Cladding: {
    title: "Facade cladding guides",
    description: "Guides to facade cladding: ACP, solid aluminium, terracotta, HPL, stone and rain-screen systems, with what to compare before choosing a skin.",
    intro: "Cladding is the non-glazed outer skin of a facade. These guides compare the main panel materials and explain the ventilated cavity behind them.",
  },
  Glazing: {
    title: "Facade glazing guides",
    description: "Facade glass explained: thickness, laminated and toughened glass, insulated units, coatings, structural and spider glazing, and replacing damaged panes.",
    intro: "Glass does more than fill an opening. These guides cover how facade glass is chosen, built up and held in place, from coatings to structural and point-fixed glazing.",
  },
  "Windows & doors": {
    title: "Aluminium windows and doors guides",
    description: "Guides to aluminium windows and doors: casement and sliding types, slide-and-fold and frameless doors, drainage, hardware and balcony details.",
    intro: "Windows and doors are the moving parts of a facade. These guides explain how each type works, where water goes and which details decide how long they last.",
  },
  Performance: {
    title: "Facade performance guides",
    description: "Facade performance in plain language: wind load, U-values, condensation, solar control, glare, acoustics, monsoon exposure, maintenance and carbon.",
    intro: "A facade has to keep out weather, manage heat and light and stay serviceable for years. These guides explain the main performance questions and what each number includes.",
  },
  Elements: {
    title: "Facade elements and details",
    description: "Guides to facade components and details: sealants, gaskets, brackets, firestopping, extrusions, louvers, skylights, balustrades and pergolas.",
    intro: "Much of a facade's behaviour is decided in small details. These guides look at individual components and the places where they meet.",
  },
  Testing: {
    title: "Facade testing guides",
    description: "What facade tests measure and how to read them: water penetration, air leakage, structural load, mock-ups and test reports, explained without jargon.",
    intro: "Facade tests are only useful when you know what they measure. These guides describe the standard tests, mock-up reviews and how to read a report.",
  },
  Finishes: {
    title: "Aluminium finishes guides",
    description: "Guides to aluminium facade finishes: anodised, powder-coated and PVDF coatings, and how coastal exposure and maintenance affect them.",
    intro: "A finish decides how an aluminium facade looks after years outdoors. These guides compare the main coating options and what to ask about each.",
  },
  Enquiries: {
    title: "Facade enquiry and procurement guides",
    description: "Practical guides for buyers: what to send a facade manufacturer, shop drawings, warranty, installation sequence, timelines, value engineering and refurbishment.",
    intro: "A smoother facade project starts with a clear brief. These guides cover what to send, what to review and what to expect from enquiry to handover.",
  },
};

export const articlesByTopic = (t: Topic): Article[] => JOURNAL.filter((a) => a.topic === t);

/** Display order. Newest or most important first; the first is featured. */
export const JOURNAL: Article[] = [
  c_spandrelPanelsAndShadowBoxesInCurtainWall,
  c_windowWallOrCurtainWall,
  c_insectScreensAndMeshOnAluminiumWindows,
  c_matchingAluminiumColourAcrossBatches,
  c_briefingAFacadeConsultant,
  c_aluminiumWindowsForVillasAndLowRiseHomes,
  c_protectingAFacadeDuringConstruction,
  b_corrosionAndCoastalExposureForAluminiumFacades,
  b_bracketsAndFastenersBehindAFacade,
  b_designingAFacadeYouCanCleanAndMaintain,
  b_uValuesForFacadesWhatTheNumberIncludes,
  b_glassOnSiteHandlingStorageAndProtection,
  b_birdFriendlyGlassOnFacades,
  b_curvedAndColdBentGlassFacades,
  b_balconySlidingDoorsTracksThresholdsAndDrainage,
  b_windowHardwareHandlesHingesAndLocks,
  b_stoneGfrcOrMetalCladding,
  b_facadeLightingWithoutLeaks,
  b_hoistingAndTransportingUnitisedFacadePanels,
  b_surveyingAnExistingFacadeBeforeRefurbishment,
  b_aluminiumFacadesAndEmbodiedCarbon,
  b_readingAFacadeTestReport,
  a_windLoadOnFacadesWhatItMeans,
  a_firestoppingAtCurtainWallSlabEdges,
  a_howFacadeGlassThicknessIsChosen,
  a_laminatedOrToughenedGlassForFacades,
  a_insulatedGlassUnitsWhatIsInside,
  a_lowECoatingsExplainedForFacades,
  a_sealantsAndGasketsInFacades,
  a_aluminiumExtrusionTolerancesExplained,
  a_facadeInstallationSequenceOnSite,
  a_facadeWarrantyAndDefectLiability,
  a_terracottaHplOrAcpCladding,
  a_perforatedMetalScreensOnFacades,
  a_doubleSkinFacadesExplained,
  a_glassReflectivityAndGlareForNeighbours,
  a_airLeakageInFacadesWhatIsMeasured,
  a_structuralAndDeflectionTestsForFacades,
  a_facadeDesignTimelineConceptToHandover,
  a_valueEngineeringAFacadeWithoutLosingPerformance,
  a_framelessGlassDoorsHardwareFloorAndHeader,
  a_pergolasAndGlassCanopiesWeatherAndDrainage,
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
