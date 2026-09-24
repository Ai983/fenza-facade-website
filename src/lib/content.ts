// Shared factual content lifted verbatim from the Fenza catalogue (v4).
// Kept in one place so Home / Manufacturing / About never drift from source.

export const PROCESS_STEPS = [
  { n: "01", title: "Site Visit", body: "Measured survey and condition assessment." },
  { n: "02", title: "Single Contact", body: "One point of contact established for the project." },
  { n: "03", title: "Scope & Design", body: "Envelope scope frozen; shop drawings issued for approval." },
  { n: "04", title: "Quotation", body: "Transparent, itemised commercial offer against the frozen scope." },
  { n: "05", title: "Fabrication", body: "Production on our line, with in-process inspection before despatch." },
  { n: "06", title: "Installation", body: "Erection by our own site teams, to programme." },
];

export const MACHINES = [
  {
    n: "01",
    title: "Double Head Cutting",
    body: "Servo-driven, ±0.1 mm. Cuts aluminium profiles at any angle from 45° to 90°.",
    img: "mc_cut",
  },
  {
    n: "02",
    title: "Copy Router",
    body: "Copy-milling, triple-arm drilling and drainage slots on a single machine.",
    img: "mc_router",
  },
  {
    n: "03",
    title: "Corner Crimping",
    body: "Two universal blades per head, three-axis adjustment, equal pressure both sides.",
    img: "mc_crimp",
  },
  {
    n: "04",
    title: "End Milling",
    body: "Notch-and-tenon profile ends so transoms seat square against mullions.",
    img: "mc_mill",
  },
];

export const PLANT_GALLERY = [
  { img: "mf_racked", caption: "Profile racking" },
  { img: "mf_cnc", caption: "CNC cutting" },
  { img: "mf_bench", caption: "Frame assembly" },
  { img: "mf_pallet", caption: "Despatch" },
];

export const STANDARDS = [
  {
    n: "01",
    title: "IS 1948",
    body: "Bureau of Indian Standards specification for aluminium doors, windows and ventilators.",
  },
  {
    n: "02",
    title: "Air Infiltration",
    body: "Facade mock-up testing to ASTM E283 or the EN 12207 classification, as specified.",
  },
  {
    n: "03",
    title: "Water Penetration",
    body: "Static and dynamic water testing to ASTM E331 or EN 12208, as specified.",
  },
  {
    n: "04",
    title: "Structural / Wind Load",
    body: "Design and mock-up testing to ASTM E330 or EN 12210 against project wind pressures.",
  },
];

export const FINISHES = [
  {
    title: "Mill Finish",
    body: "Untreated extruded aluminium. For concealed sub-structure and carrier framing.",
  },
  {
    title: "Anodised",
    body: "Natural silver, champagne, bronze and black. Typical coating class 15–25 microns.",
  },
  {
    title: "Powder Coated",
    body: "Full RAL range, matt / satin / textured. Typical film thickness 60–80 microns.",
  },
  {
    title: "PVDF",
    body: "Polyvinylidene fluoride for high-UV external exposure. Metallic and solid shades.",
  },
];

export const MESSAGING_PILLARS = [
  {
    title: "Envelope specialists, not generalists",
    body: "Facade and building-envelope manufacturing is the whole business — curtain wall, glazing, cladding, windows and doors, and architectural elements.",
  },
  {
    title: "Engineered precision",
    body: "Servo-controlled cutting to ±0.1 mm on specialist machinery, with indicative technical data behind every system.",
  },
  {
    title: "Led by proven expertise",
    body: "Akhilesh Kumar Singh, Director — Facade Projects, sets the engineering standard the line is built to.",
  },
  {
    title: "Backed by a group",
    body: "Part of the Hagerstone group's manufacturing capability — stated as backing, with Fenza's own registrations held in its own name.",
  },
];

// Homepage audience self-select split (PRD §3, §6.1).
export const AUDIENCE_SPLIT = [
  {
    label: "Explore systems",
    body: "Thirteen system families across curtain wall, glazing, fenestration, cladding and architectural elements.",
    to: "/systems",
  },
  {
    label: "See the factory",
    body: "The aluminium line, the machinery and the quality approach behind every facade we make.",
    to: "/manufacturing",
  },
  {
    label: "Talk to us",
    body: "Send us the elevation. We come back with a measured scope and an itemised offer.",
    to: "/contact",
  },
];
