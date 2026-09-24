// Building types the Fenza Facade Engineering system range applies to.
// Blurbs are verbatim from the Company Profile 2026, page 07; the `detail`
// sentence and the `systems` cross-links are added so each card carries real
// substance and routes the reader into the relevant system pages.

export interface Sector {
  /** Anchor id only — there are no per-sector routes. */
  slug: string;
  title: string;
  /** Profile one-liner, verbatim. */
  blurb: string;
  detail: string;
  /** Slugs from SYSTEMS. Validated at module load below. */
  systems: string[];
}

export const SECTORS: Sector[] = [
  {
    slug: "commercial-towers",
    title: "Commercial towers",
    blurb: "High-rise curtain wall and glazed envelopes",
    detail:
      "Stick and semi-unitised curtain walling to the tower's wind-load envelope, with cladding to the podium and service cores.",
    systems: ["curtain-wall", "structural-glazing", "cladding"],
  },
  {
    slug: "corporate-offices-it-parks",
    title: "Corporate offices & IT parks",
    blurb: "Glazed and clad workplace elevations",
    detail:
      "Large repeating elevations where the glazing grid and the cladding sub-frame are set out together on one carrier system.",
    systems: ["curtain-wall", "cladding", "rain-screen-facade"],
  },
  {
    slug: "residential-high-rise",
    title: "Residential high-rise",
    blurb: "Windows, doors and balcony balustrades",
    detail:
      "Mitred and crimped window and door units with structural glass or post-and-rail edge protection to every balcony.",
    systems: ["casement-windows", "sliding-windows-doors", "railings"],
  },
  {
    slug: "hospitality-serviced-apartments",
    title: "Hospitality & serviced apartments",
    blurb: "Terraces, slide & fold doors and glazed frontages",
    detail:
      "Openable frontages that stack clear of the opening, with shaded terraces and drained pergola structures above.",
    systems: ["slide-and-fold-doors", "pergolas", "railings"],
  },
  {
    slug: "retail-mixed-use",
    title: "Retail & mixed-use",
    blurb: "Entrance screens, frameless doors and canopies",
    detail:
      "Point-fixed and patch-fitted entrances at ground level, with cantilever canopies and overhead glazing to the mall line.",
    systems: ["frameless-glass-doors", "spider-glazing", "skylights"],
  },
  {
    slug: "institutional-healthcare",
    title: "Institutional & healthcare",
    blurb: "Durable cladding and fenestration",
    detail:
      "Finish and panel selections chosen for cleanability and long service life, on a ventilated and drained build-up.",
    systems: ["cladding", "casement-windows", "rain-screen-facade"],
  },
  {
    slug: "aviation-public-infrastructure",
    title: "Aviation & public infrastructure",
    blurb: "Large-span cladding, skylights and glazing",
    detail:
      "Long runs of ACP and stainless cladding alongside overhead glazing, detailed for internal gutters and large thermal movement.",
    systems: ["cladding", "skylights", "spider-glazing"],
  },
  {
    slug: "industrial-factory",
    title: "Industrial & factory",
    blurb: "Metal cladding, louvers and glazing",
    detail:
      "Insulated panel and metal cladding envelopes with louvered plant screening and semi-unitised glazing to office blocks.",
    systems: ["cladding", "louvers", "structural-glazing"],
  },
];

/** Verbatim, profile page 07. Keeps the sector claim honest. */
export const SECTORS_NOTE =
  "Building types reflect the applications of the Fenza system range and the project record of Akhilesh Kumar Singh.";
