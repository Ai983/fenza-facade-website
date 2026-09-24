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

export interface Machine {
  n: string;
  title: string;
  /** One-line summary, shown as the card lead. */
  body: string;
  img: string;
  /** Capability detail from the profile, listed under the summary. */
  points: string[];
}

export const MACHINES: Machine[] = [
  {
    n: "01",
    title: "Double Head Cutting",
    body: "Servo-driven, ±0.1 mm. Cuts aluminium profiles at any angle from 45° to 90°.",
    img: "mc_cut",
    points: [
      "Servo drive holding ±0.1 mm",
      "Any angle from 45° to 90°",
      "Manual, automatic and slicing cutting modes",
      "Automatic wedge-cutting program in short intervals",
      "Label and barcode printing, designed on the machine",
      "Cut files by USB, network or Wi-Fi",
      "Reads CSV cut-lists from window & door design software",
    ],
  },
  {
    n: "02",
    title: "Copy Router",
    body: "Copy-milling, triple-arm drilling and drainage slots on a single machine.",
    img: "mc_router",
    points: [
      "Copy-milling, triple-arm drilling and drainage on one machine",
      "Pneumatic clamping for repeatable accuracy",
      "Copier template, pin and span-limiting stoppers",
      "High-speed spindle with 8 mm router",
      "Movable milling head to extend shaft life",
      "Heat-treated shafts running frictionless on balls",
    ],
  },
  {
    n: "03",
    title: "Corner Crimping",
    body: "Two universal blades per head, three-axis adjustment, equal pressure both sides.",
    img: "mc_crimp",
    points: [
      "Two universal crimping blades per head",
      "Press heads adjustable in three axes",
      "Simultaneous pressure on left and right heads",
      "Equal pressure from both sides of the corner joint",
      "Prevents profile slip during crimping",
      "Foot-pedal operation for controlled cycles",
    ],
  },
  {
    n: "04",
    title: "End Milling",
    body: "Notch-and-tenon profile ends so transoms seat square against mullions.",
    img: "mc_mill",
    points: [
      "Notch-and-tenon ends for mullion-to-transom joints",
      "Twin pneumatic cylinders driving the milling head",
      "Adjustable tooling holder to suit multiple profile sections",
      "Quick-release clamp levers for fast profile changeover",
      "Integrated coolant and lubrication reservoir",
      "Panel-mounted controls with emergency stop",
    ],
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

/**
 * "Fenza at a glance" figures (profile page 04).
 * The 25+ years belong to Akhilesh Kumar Singh, not to the company — the note
 * carries that distinction and must be rendered in full, never trimmed to fit.
 */
export interface Stat {
  value: string;
  label: string;
  note: string;
}

export const AT_A_GLANCE: Stat[] = [
  {
    value: "13",
    label: "System families",
    note: "Across glazing, fenestration, cladding, solar control and architectural elements",
  },
  {
    value: "25+",
    label: "Years in facade",
    note: "Facade engineering experience of Akhilesh Kumar Singh, Director — Facade Projects",
  },
  {
    value: "±0.1 mm",
    label: "Cutting accuracy",
    note: "Servo-driven double head cutting of aluminium profiles",
  },
  {
    value: "4",
    label: "Specialist machines",
    note: "Double head cutting, copy routing, corner crimping and end milling",
  },
  {
    value: "45°–90°",
    label: "Cutting range",
    note: "Profiles cut at any angle across the range",
  },
  {
    value: "6",
    label: "Steps",
    note: "From site visit and measured survey to installation",
  },
];

/** Partner proposition — "Working with Fenza" (profile page 13). */
export const PARTNER_POINTS = [
  {
    title: "Single point of contact",
    body: "One point of contact established for the project.",
  },
  {
    title: "Frozen scope, itemised offer",
    body: "Envelope scope frozen with shop drawings for approval, and a transparent, itemised commercial offer against it.",
  },
  {
    title: "Made on our own line",
    body: "Fabrication on CNC-grade aluminium machinery, with in-process inspection before despatch.",
  },
  {
    title: "Installed by our own teams",
    body: "Erection by our own site teams, to programme.",
  },
];

/** The two methods that cover almost all aluminium fenestration and curtain wall. */
export const CONSTRUCTION_METHODS = [
  {
    title: "Mitred and crimped",
    body: "Profiles cut to a 45° mitre, hardware prepped on the copy router, and corners mechanically crimped for a tight, square joint that does not rely on welding.",
    caption: "Mitred, mechanically crimped corner",
  },
  {
    title: "Butt-jointed, notch-and-tenon",
    body: "Mullion-to-transom assemblies cut with a notch-and-tenon end mill, so transoms seat square against mullions and the joint stays watertight.",
    caption: "Mullion–transom junction",
  },
];

export const CAPACITY_NOTE =
  "Plant capacity and facility area for the Gurugram unit are being confirmed and are deliberately not stated here.";

/**
 * Inside the production house — how the work actually runs on the line.
 * Process description only; carries no capacity, certification or headcount
 * claim, all of which remain deliberately unstated for the Gurugram unit.
 */
export const PRODUCTION_STEPS = [
  {
    n: "01",
    title: "Profile cutting",
    body: "Aluminium is sliced with a non-ferrous circular blade, or a carbide-tipped fine blade, so the cut face stays clean and the section is not dragged out of square.",
  },
  {
    n: "02",
    title: "Drilling",
    body: "The bit is rotated at a set speed and fed at a set rate to open cylindrical holes, with the profile held down in vices and clamps throughout so nothing creeps mid-cut.",
  },
  {
    n: "03",
    title: "Assembly & racking",
    body: "Mullions are cut to length on the double head machine, holding angle and tolerance across the batch; transoms are cut, labelled and stacked to the erection sequence.",
  },
  {
    n: "04",
    title: "Visual inspection",
    body: "The production in-charge inspects against the approved drawing before despatch — the point is to find the problem here rather than on the elevation, where it becomes a programme delay.",
  },
];

/** In-process quality control (profile page 11). */
export const QUALITY_CHECKS = [
  {
    n: "01",
    title: "In-process checks",
    body: "Inspection at the machine as profiles are cut, routed, crimped and milled.",
  },
  {
    n: "02",
    title: "Batch verification",
    body: "Each production batch verified against the approved shop drawing before it moves on.",
  },
  {
    n: "03",
    title: "Machine condition monitoring",
    body: "Tooling and machine condition monitored so tolerance does not drift across a run.",
  },
  {
    n: "04",
    title: "Sign-off before despatch",
    body: "Nothing leaves the line without a sign-off against the frozen scope.",
  },
];

/** Installation and site safety (profile page 10). */
export interface SafetyGroup {
  n: string;
  title: string;
  body: string;
  items: string[];
}

export const SAFETY_GROUPS: SafetyGroup[] = [
  {
    n: "01",
    title: "Before work",
    body: "Safety is planned before anyone reaches the elevation.",
    items: [
      "Management commitment and planning",
      "Risk assessment",
      "Safe work planning",
      "Permit to work",
    ],
  },
  {
    n: "02",
    title: "On site",
    body: "Supervision and control while the envelope goes up.",
    items: [
      "Site supervision and inspection",
      "Personal protective equipment",
      "Controlled work at height",
      "Lifting and equipment use",
    ],
  },
  {
    n: "03",
    title: "Site conditions",
    body: "The conditions the work happens in, kept to standard.",
    items: [
      "Housekeeping and 5S",
      "Health and welfare",
      "Emergency preparedness",
      "Environmental protection",
    ],
  },
  {
    n: "04",
    title: "Equipment",
    body: "Issued to the site teams as standard.",
    items: [
      "Hard hats",
      "High-visibility clothing",
      "Steel-toed footwear",
      "Eye and ear protection",
      "Gloves",
      "Harnesses",
      "First aid",
      "Safety signage",
    ],
  },
];

/** Functional structure under the Director — Facade Projects (profile page 12). */
export const TEAM_FUNCTIONS = [
  {
    title: "Client coordination",
    body: "Single point of contact — site visit and measured survey.",
  },
  {
    title: "Design & engineering",
    body: "Envelope scope and system selection — shop drawings for approval.",
  },
  {
    title: "Estimation & commercial",
    body: "Transparent, itemised offers against the frozen scope.",
  },
  {
    title: "Production",
    body: "Cutting — routing — crimping — end milling — assembly — despatch.",
  },
  {
    title: "Quality",
    body: "In-process inspection — batch verification — sign-off before despatch.",
  },
  {
    title: "Site installation",
    body: "Erection by our own site teams, to programme — safe work at height.",
  },
];

export const TEAM_NOTE =
  "Functional structure, following the six-step process from site visit to installation. Team sizes are not stated.";

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
