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
 * NO PROJECT GALLERY — deliberate.
 *
 * The profile's "Selected envelopes" gallery draws on an image pool that is
 * mostly AI-generated renders (f_031_069, f_032_072, f_034_078, f_036_084,
 * f_037_087, f_038_090, f_039_093 and others), mixed with a few genuine
 * photographs (f_028_057 / f_035_081 — DLF WeWork, with tenant signage
 * visible). Publishing that mix under a "project imagery as supplied" caption
 * would assert real project photography we cannot stand behind, which is the
 * exact misrepresentation the record framing above exists to prevent.
 *
 * Publishing rights for the genuine photographs are also unconfirmed, and they
 * carry third-party trademarks. If Fenza confirms both which images are real
 * photographs and that it may publish them, add the gallery then.
 */

export const projectsByGroup = (group: ProjectGroup): ProjectRecord[] =>
  PROJECTS.filter((p) => p.group === group);
