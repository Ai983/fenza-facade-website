// Career record of Akhilesh Kumar Singh, Director — Facade Projects.
//
// IMPORTANT: these are NOT Fenza Facade Engineering's own completed projects.
// Fenza is newly established and its portfolio is still being built. The framing
// is load-bearing, not decorative — every page that renders PROJECTS must also
// render RECORD_DISCLAIMER, and the JSON-LD for this data must attach to the
// Person node, never to the Organization. Lifted verbatim from the Fenza
// Facade Engineering Company Profile 2026, pages 37–41.

export type ProjectGroup =
  | "Commercial & IT workplaces"
  | "Aviation & healthcare"
  | "High-end residential"
  | "Residential & serviced apartments"
  | "Industrial & institutional";

export interface ProjectRecord {
  /** Stable key and anchor id. Not a route — there are no per-project pages. */
  slug: string;
  name: string;
  /** As written in the profile, e.g. "Cyber City, Gurgaon". */
  location: string;
  /** Normalised city, drives the geography roll-up. */
  city: string;
  buildingType: string;
  scope: string;
  quantity: string;
  group: ProjectGroup;
}

/** Profile ordering — keep it; the groups build from workplace to industrial. */
export const PROJECT_GROUPS: ProjectGroup[] = [
  "Commercial & IT workplaces",
  "Aviation & healthcare",
  "High-end residential",
  "Residential & serviced apartments",
  "Industrial & institutional",
];

export const PROJECTS: ProjectRecord[] = [
  {
    slug: "dlf-building-8",
    name: "DLF — Building 8",
    location: "Cyber City, Gurgaon",
    city: "Gurugram",
    buildingType: "IT space",
    scope:
      "Stick curtain wall glazing, aluminium solid sheet, Galvalume & Shera board cladding",
    quantity: "14,175 sq. m.",
    group: "Commercial & IT workplaces",
  },
  {
    slug: "dlf-wework",
    name: "DLF — WeWork",
    location: "Cyber City, Gurgaon",
    city: "Gurugram",
    buildingType: "IT space",
    scope: "Kingspan dry cladding ventilated system",
    quantity: "3,325 sq. m.",
    group: "Commercial & IT workplaces",
  },
  {
    slug: "rajiv-gandhi-international-airport",
    name: "Rajiv Gandhi International Airport",
    location: "Shamshabad, Hyderabad, Telangana",
    city: "Hyderabad",
    buildingType: "Aviation infrastructure",
    scope: "ACP cladding, SS cladding",
    quantity: "17,000 sq. m.",
    group: "Aviation & healthcare",
  },
  {
    slug: "max-hospital-saket",
    name: "Max Hospital",
    location: "Saket, Delhi",
    city: "New Delhi",
    buildingType: "Healthcare facility",
    scope: "Pre-coated sheet & glass work",
    quantity: "20,000 sq. ft.",
    group: "Aviation & healthcare",
  },
  {
    slug: "krisumi-waterfall-residences",
    name: "Krisumi Waterfall Residences",
    location: "Sector 36A, Gurgaon",
    city: "Gurugram",
    buildingType: "High-end residence",
    scope: "Imported aluminium doors & windows + SS railing",
    quantity: "13,871 sq. m. + 7,107 r. m.",
    group: "High-end residential",
  },
  {
    slug: "adani-samsara-vilasa",
    name: "Adani Samsara Vilasa",
    location: "Sector 60, Gurgaon",
    city: "Gurugram",
    buildingType: "High-end residence",
    scope: "Imported aluminium doors & windows",
    quantity: "6,398 sq. m.",
    group: "High-end residential",
  },
  {
    slug: "m3m-sector-79",
    name: "M3M",
    location: "Sector 79, Gurugram",
    city: "Gurugram",
    buildingType: "Residential",
    scope: "Doors & windows (aluminium & glass work)",
    quantity: "28,000 sq. ft.",
    group: "Residential & serviced apartments",
  },
  {
    slug: "broadway-service-apartment",
    name: "Broadway Service Apartment",
    location: "Dwarka Expressway, Sector 83, Gurugram",
    city: "Gurugram",
    buildingType: "Serviced apartments",
    scope: "Curtain wall glazing & aluminium doors & windows",
    quantity: "10,550 sq. m.",
    group: "Residential & serviced apartments",
  },
  {
    slug: "anygraphics-factory",
    name: "Anygraphics Factory",
    location: "Noida, Uttar Pradesh",
    city: "Noida",
    buildingType: "Industrial / factory",
    scope: "PIR panel, rock wool panel, semi-unitised structural glazing",
    quantity: "6,500 sq. m.",
    group: "Industrial & institutional",
  },
  {
    slug: "dee-development",
    name: "Dee Development",
    location: "Bhuj, Gujarat",
    city: "Bhuj",
    buildingType: "Admin block",
    scope: "Glazing & ACP cladding",
    quantity: "25,000 sq. ft.",
    group: "Industrial & institutional",
  },
];

/** The lead paragraph for the record, verbatim from profile page 08. */
export const RECORD_LEAD =
  "Facade and envelope work led by Akhilesh Kumar Singh across IT campuses, aviation, healthcare, industrial and high-end residential developments in Delhi NCR and beyond.";

/** Must appear on every page that renders PROJECTS. Profile page 08 / 37. */
export const RECORD_DISCLAIMER =
  "Project experience shown is Akhilesh Kumar Singh's own career record. Fenza Facade Engineering is newly established; its project portfolio is being built, and completed work will be published as Fenza's own as it is delivered.";

/** Chip shown beside every group heading. */
export const GROUP_NOTE = "Career record — not Fenza's completed projects";

export interface GeographyEntry {
  city: string;
  region: string;
  detail: string;
  isFactory?: boolean;
}

export const GEOGRAPHY: GeographyEntry[] = [
  {
    city: "Gurugram / Gurgaon",
    region: "Haryana",
    detail:
      "DLF Cyber City · Sectors 36A, 60, 79 · Dwarka Expressway, Sector 83",
    isFactory: true,
  },
  { city: "Noida", region: "Uttar Pradesh", detail: "Industrial / factory envelope" },
  { city: "New Delhi", region: "Delhi", detail: "Saket" },
  { city: "Hyderabad", region: "Telangana", detail: "Shamshabad" },
  { city: "Bhuj", region: "Gujarat", detail: "Admin block" },
];

export const GEOGRAPHY_NOTE = "Locations shown approximately. Map not to scale.";

/**
 * NO "GALLERY" PAGE. The profile's portfolio images are a mix of genuine photographs and AI/architectural
 * renders, and publishing rights are unconfirmed. They appear only as small reference images on each
 * record card (see PROJECT_IMAGES), labelled "Image from the company profile", never as proof of
 * Fenza's own completed work.
 */

/**
 * One image per record, taken from the company profile's facade portfolio pages (29-38). The profile
 * mixes real photographs and architectural renders; the page labels them "Image from the company
 * profile". Third-party names (WeWork, Max) are visible in two of them: remove those two if the owners
 * object. Keys are project slugs.
 */
export const PROJECT_IMAGES: Record<string, { file: string; w: number; h: number; alt: string }> = {
  "dlf-building-8": { file: "proj-dlf-building-8", w: 836, h: 914, alt: "Glass and aluminium-clad office building at DLF Cyber City, Gurgaon" },
  "anygraphics-factory": { file: "proj-anygraphics-factory", w: 522, h: 400, alt: "Render of the dark-clad Anygraphics factory building in Noida" },
  "adani-samsara-vilasa": { file: "proj-adani-samsara-vilasa", w: 822, h: 900, alt: "Render of a terraced residential building at dusk, Adani Samsara Vilasa" },
  "broadway-service-apartment": { file: "proj-broadway-service-apartment", w: 836, h: 916, alt: "Render of glass office towers and a retail podium on Dwarka Expressway" },
  "rajiv-gandhi-international-airport": { file: "proj-rajiv-gandhi-international-airport", w: 836, h: 913, alt: "Terminal approach and control tower at Rajiv Gandhi International Airport, Hyderabad" },
  "krisumi-waterfall-residences": { file: "proj-krisumi-waterfall-residences", w: 836, h: 914, alt: "Render of two residential towers at dusk, Krisumi Waterfall Residences" },
  "dlf-wework": { file: "proj-dlf-wework", w: 822, h: 854, alt: "Curved aluminium-clad facade of the DLF WeWork building" },
  "max-hospital-saket": { file: "proj-max-hospital-saket", w: 899, h: 915, alt: "Render of a hospital facade lit at dusk, Max Hospital Saket" },
  "m3m-sector-79": { file: "proj-m3m-sector-79", w: 1000, h: 895, alt: "Looking up a vertical-finned tower at sunset, M3M Sector 79" },
  "dee-development": { file: "proj-dee-development", w: 833, h: 926, alt: "Render of a pale multi-storey industrial building in Bhuj" },
};

export const projectsByGroup = (group: ProjectGroup): ProjectRecord[] =>
  PROJECTS.filter((p) => p.group === group);
