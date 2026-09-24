// AUTO-COMPOSED from the Fenza product catalogue (v4) + PRD content spec.
// Technical values are INDICATIVE (PRD §12.6) — confirmed per project against the
// approved system and the facade consultant's specification.

export interface SystemSpec {
  label: string;
  value: string;
}

export interface SystemGalleryItem {
  img: string;
  caption: string;
}

export interface SystemFaq {
  q: string;
  a: string;
}

export interface SystemFamily {
  code: string;
  slug: string;
  name: string;
  category: string;
  /** Plain-language "what it is / where it's used" answer — leads the page (PRD §8). */
  summary: string;
  /** Catalogue lead copy. */
  lead: string;
  /** Appendix "typical data" one-liner — the numbers a specifier scans for. */
  typical: string;
  variants: string[];
  specs: SystemSpec[];
  /** 3:2 (or 1:1) page hero. */
  hero: string;
  /** 1:1 grid thumbnail — matches the square card ratio. */
  card: string;
  gallery: SystemGalleryItem[];
  faqs: SystemFaq[];
}

export const INDICATIVE_NOTE =
  "Indicative values. Final sections, depths, glazing and performance are confirmed " +
  "per project against the approved system and the facade consultant's specification.";

export const SYSTEMS: SystemFamily[] = [
  {
    code: "FZ-CW",
    slug: "curtain-wall",
    name: "Curtain Wall",
    category: "Glazed Envelope",
    summary: "A curtain wall is a non-load-bearing aluminium-and-glass outer skin hung in front of a building's structure. Fenza fabricates mullion-and-transom curtain walling as a site-glazed stick system or semi-unitised cassettes, infilled with glass, ACP, stone or louvre, for commercial towers and high-rise facades.",
    lead: "Aluminium mullion-and-transom curtain walling, fabricated on our end-milling line so transoms seat square against mullions and the joint stays watertight. Site-glazed as a stick system, or part-assembled as semi-unitised cassettes to cut time on the scaffold.",
    typical: "Mullion depth 50–150 mm · glazing 6–36 mm",
    variants: ["Stick system", "Semi-unitised", "Capped", "Capless / SSG"],
    specs: [
      { label: "System types", value: "Stick (site-glazed), semi-unitised" },
      { label: "Mullion depth", value: "50–150 mm, by span and wind load" },
      { label: "Face sightline", value: "50 mm / 65 mm typical" },
      { label: "Glazing", value: "6–36 mm — single, laminated or DGU" },
      { label: "Infill options", value: "Glass, ACP, solid aluminium, stone, louvre" },
      { label: "Alloy", value: "6063-T6 extruded aluminium" },
      { label: "Gaskets", value: "EPDM, co-extruded" },
      { label: "Finish", value: "Anodised / powder coat / PVDF" },
    ],
    hero: "cw-hero",
    card: "cw-card",
    gallery: [
      { img: "cw-1", caption: "System specimen" },
      { img: "cw-2", caption: "Mullion–transom junction" },
      { img: "cw-3", caption: "Panel joint" },
      { img: "cw-4", caption: "Completed elevation" },
    ],
    faqs: [
      { q: "What is a curtain wall?", a: "A curtain wall is a lightweight, non-load-bearing external envelope of aluminium framing and infill panels — glass, metal or stone — fixed in front of the building structure. It carries only its own weight and wind load, transferring both back to the floor slabs." },
      { q: "What is the difference between a stick and a semi-unitised curtain wall?", a: "A stick system is assembled and glazed piece by piece on site. A semi-unitised system is part-assembled into cassettes in the factory, which speeds erection and improves quality control on the scaffold." },
    ],
  },
  {
    code: "FZ-SG",
    slug: "structural-glazing",
    name: "Structural Glazing",
    category: "Glazed Envelope",
    summary: "Structural glazing is a flush glass facade where the glass is bonded with structural silicone to a concealed aluminium carrier frame, leaving only a fine silicone joint outside. Fenza fabricates two-side and four-side SSG systems in-house for clean, frameless-looking commercial elevations.",
    lead: "Flush glazed facades where the glass is bonded to a concealed aluminium carrier frame, leaving only a fine silicone joint on the outside. Two-side and four-side systems, with the back-up framing fabricated in-house.",
    typical: "Silicone joint 12–20 mm · glazing 6–36 mm",
    variants: ["2-side SSG", "4-side SSG", "Semi-structural"],
    specs: [
      { label: "System types", value: "2-side and 4-side structural silicone glazing" },
      { label: "Silicone joint", value: "12–20 mm typical" },
      { label: "Glazing", value: "Laminated or DGU, 6–36 mm" },
      { label: "Back-up frame", value: "6063-T6 aluminium carrier" },
      { label: "Sealant", value: "Structural silicone, project-approved grade" },
      { label: "Setting blocks", value: "EPDM / silicone compatible" },
      { label: "Finish", value: "Anodised / powder coat / PVDF" },
    ],
    hero: "sg-hero",
    card: "sg-card",
    gallery: [
      { img: "sg-1", caption: "Flush glazed tower" },
      { img: "sg-2", caption: "Glazed elevation" },
      { img: "sg-3", caption: "Corner transition" },
      { img: "sg-4", caption: "Silicone joint" },
    ],
    faqs: [
      { q: "What is structural glazing?", a: "Structural glazing bonds glass panes to a hidden aluminium frame with structural silicone, so the outside face reads as an unbroken glass plane with only thin silicone joints between panels — with no visible aluminium caps." },
      { q: "What is the difference between 2-side and 4-side structural glazing?", a: "In 2-side SSG, two edges of each glass unit are silicone-bonded and two are mechanically captured; in 4-side SSG all four edges are bonded, giving a fully flush, capless appearance." },
    ],
  },
  {
    code: "FZ-SP",
    slug: "spider-glazing",
    name: "Spider & Point-Fixed Glazing",
    category: "Glazed Envelope",
    summary: "Spider glazing is a point-supported glass system where panes are carried on stainless-steel routel fittings rather than a continuous frame. Fenza supplies 2- and 4-arm spider systems on glass fins, tension rods or a steel back-structure for atria, lobbies, entrance screens and canopies.",
    lead: "Point-supported glazing for atria, lobbies and entrance screens, where the glass is carried on stainless routels rather than a frame. Supported on glass fins, tension rods or a steel back-structure.",
    typical: "Glass 10–19 mm · SS 304 / 316 fittings",
    variants: ["2-arm routel", "4-arm routel", "Glass fin", "Tension rod"],
    specs: [
      { label: "Fitting types", value: "2-arm and 4-arm spider routels" },
      { label: "Fitting material", value: "SS 304 / SS 316" },
      { label: "Glass", value: "Toughened or heat-strengthened laminated" },
      { label: "Glass thickness", value: "10–19 mm typical" },
      { label: "Support", value: "Glass fin, tension rod or steel structure" },
      { label: "Application", value: "Atria, lobbies, entrances, canopies" },
    ],
    hero: "sp-hero",
    card: "sp-card",
    gallery: [
      { img: "sp-1", caption: "Spider routel" },
      { img: "sp-2", caption: "Point-fixed plane" },
      { img: "sp-3", caption: "Entrance screen" },
      { img: "sp-4", caption: "Atrium glazing" },
    ],
    faqs: [
      { q: "What is spider glazing?", a: "Spider (point-fixed) glazing supports toughened glass at its corners using stainless-steel spider fittings and routels, instead of a framed edge. It creates a highly transparent facade ideal for atria and entrances." },
      { q: "What supports point-fixed glazing?", a: "The spider fittings mount on a secondary structure — glass fins, tension-rod trusses or a steel back-frame — selected for the span and wind load of the opening." },
    ],
  },
  {
    code: "FZ-CA",
    slug: "casement-windows",
    name: "Casement Windows",
    category: "Fenestration",
    summary: "Casement windows are hinged aluminium windows that open on side, top or bottom hinges. Fenza builds side-hung, top-hung, bottom-hung and fixed aluminium windows with 45-degree mitred, mechanically crimped corners and multi-point locking for a tight, weathertight seal.",
    lead: "Side-hung, top-hung and fixed aluminium windows built the traditional way — profiles cut to a 45° mitre, hardware prepped on the copy router, and corners mechanically crimped for a tight, square joint that does not rely on welding.",
    typical: "Frame depth 45–70 mm · glazing 5–28 mm",
    variants: ["Side-hung", "Top-hung / awning", "Bottom-hung", "Fixed light", "Combination"],
    specs: [
      { label: "Opening types", value: "Side-hung, top-hung, bottom-hung, fixed" },
      { label: "Construction", value: "45° mitred, mechanically crimped corners" },
      { label: "Frame depth", value: "45–70 mm typical" },
      { label: "Glazing", value: "5–28 mm, single or DGU" },
      { label: "Hardware", value: "Multi-point locking, friction stays" },
      { label: "Gaskets", value: "EPDM" },
      { label: "Drainage", value: "Routed weep slots, concealed" },
      { label: "Finish", value: "Anodised / powder coat / PVDF" },
    ],
    hero: "ca-hero",
    card: "ca-card",
    gallery: [
      { img: "ca-1", caption: "Window unit" },
      { img: "ca-2", caption: "Crimped corner" },
      { img: "ca-3", caption: "Internal view" },
      { img: "ca-4", caption: "In elevation" },
    ],
    faqs: [
      { q: "What is a casement window?", a: "A casement window is hinged along one edge and swings open like a door. Aluminium casements suit projects needing high air-tightness and secure multi-point locking." },
      { q: "How are Fenza's casement corners joined?", a: "Profiles are cut to a 45-degree mitre and mechanically crimped, producing a square, tight corner joint that does not rely on welding." },
    ],
  },
  {
    code: "FZ-SL",
    slug: "sliding-windows-doors",
    name: "Sliding Windows & Doors",
    category: "Fenestration",
    summary: "Sliding windows and doors move horizontally on tracks rather than swinging open, saving space. Fenza fabricates 2-, 3- and 4-track aluminium sliders (and lift-and-slide by system) on butt-jointed, end-milled frames with tandem rollers for smooth operation across large sash weights.",
    lead: "Two, three and four-track sliding systems on butt-jointed, end-milled frames. Tandem rollers and a brush-sealed interlock keep the action light across large sash weights.",
    typical: "Frame depth 60–120 mm · glazing 5–28 mm",
    variants: ["2 track", "3 track", "4 track", "Lift & slide"],
    specs: [
      { label: "Configurations", value: "2, 3 and 4 track; lift & slide by system" },
      { label: "Construction", value: "Butt-jointed, end-milled, screw-fixed" },
      { label: "Frame depth", value: "60–120 mm by track count" },
      { label: "Glazing", value: "5–28 mm, single or DGU" },
      { label: "Hardware", value: "Tandem rollers, adjustable" },
      { label: "Interlock", value: "Brush-sealed meeting stile" },
      { label: "Drainage", value: "Sloped sill with weep slots" },
      { label: "Finish", value: "Anodised / powder coat / PVDF" },
    ],
    hero: "sl-hero",
    card: "sl-card",
    gallery: [
      { img: "sl-1", caption: "Sliding unit" },
      { img: "sl-2", caption: "Interlock & track" },
      { img: "sl-3", caption: "Internal view" },
      { img: "sl-4", caption: "Three-track unit" },
    ],
    faqs: [
      { q: "How many tracks do Fenza sliding systems have?", a: "Fenza offers 2, 3 and 4-track sliding systems, with lift-and-slide available by system, letting panels stack or pass for wide openings." },
      { q: "Are large sliding doors hard to operate?", a: "Tandem, adjustable rollers and a brush-sealed interlock keep the action light even on large, heavy sashes." },
    ],
  },
  {
    code: "FZ-SF",
    slug: "slide-and-fold-doors",
    name: "Slide & Fold Doors",
    category: "Fenestration",
    summary: "Slide-and-fold (bi-fold) doors are multi-panel doors that concertina and stack clear of the opening. Fenza supplies 2- to 7-panel inward- or outward-folding aluminium doors on top-hung stainless carriages, so the floor track stays shallow — ideal for terraces, balconies and openable frontages.",
    lead: "Multi-panel folding doors that stack clear of the opening, for terraces, balconies and openable frontages. Top-hung carriages carry the sash weight so the floor track stays shallow.",
    typical: "2–7 panels · frame depth 70–120 mm",
    variants: ["2–7 panel", "Inward fold", "Outward fold", "Top-hung"],
    specs: [
      { label: "Configurations", value: "2 to 7 panels, inward or outward folding" },
      { label: "Running gear", value: "Top-hung stainless carriages" },
      { label: "Frame depth", value: "70–120 mm typical" },
      { label: "Glazing", value: "5–28 mm, single or DGU" },
      { label: "Hardware", value: "Multi-point locking on lead panel" },
      { label: "Threshold", value: "Standard or low-rise weathered sill" },
      { label: "Finish", value: "Anodised / powder coat / PVDF" },
    ],
    hero: "sf-hero",
    card: "sf-card",
    gallery: [
      { img: "sf-1", caption: "Stacked open" },
      { img: "sf-2", caption: "Hinge & carriage" },
      { img: "sf-3", caption: "Terrace opening" },
      { img: "bf_white", caption: "Unit, closed" },
    ],
    faqs: [
      { q: "What is a slide-and-fold door?", a: "A slide-and-fold (bi-fold) door has hinged panels that fold back on each other and slide to one side, opening up almost the entire width of an opening." },
      { q: "How many panels can a bi-fold door have?", a: "Fenza builds configurations from 2 to 7 panels, folding inward or outward, with multi-point locking on the lead panel." },
    ],
  },
  {
    code: "FZ-FD",
    slug: "frameless-glass-doors",
    name: "Frameless Glass Doors",
    category: "Fenestration",
    summary: "Frameless glass doors are toughened glass leaves held by minimal stainless patch fittings instead of a full frame. Fenza supplies patch-fitted single and double doors on floor springs, with matching fixed sidelights and fanlights, for lobbies and building entrances.",
    lead: "Patch-fitted toughened glass doors for lobbies and entrances, running on floor springs with stainless patch fittings top and bottom. Supplied with matching fixed sidelights and fanlights.",
    typical: "10 / 12 mm toughened · SS 304 patch fittings",
    variants: ["Single leaf", "Double leaf", "With sidelight", "With fanlight"],
    specs: [
      { label: "Door type", value: "Patch-fitted toughened glass" },
      { label: "Glass", value: "10 mm / 12 mm toughened" },
      { label: "Fittings", value: "SS 304 patch fittings" },
      { label: "Operation", value: "Floor spring, adjustable closing" },
      { label: "Options", value: "Sidelights, fanlights, over-panels" },
      { label: "Hardware", value: "Pull handles, locks, floor sockets" },
    ],
    hero: "fd-hero",
    card: "fd-card",
    gallery: [
      { img: "fd_patch", caption: "Patch fitting" },
      { img: "fd_base", caption: "Floor detail" },
      { img: "fd_wide", caption: "Entrance screen" },
      { img: "fd-4", caption: "Lobby context" },
    ],
    faqs: [
      { q: "What is a frameless glass door?", a: "A frameless glass door is a toughened glass leaf fixed with compact stainless patch fittings top and bottom, running on a concealed floor spring — a clean, minimal entrance with no surrounding frame." },
      { q: "What glass is used for frameless doors?", a: "Frameless doors use 10 mm or 12 mm toughened (tempered) glass for strength and safety, with SS 304 patch fittings." },
    ],
  },
  {
    code: "FZ-CL",
    slug: "cladding",
    name: "Metal & Composite Cladding",
    category: "Opaque Envelope",
    summary: "Metal and composite cladding is a non-glazed outer skin of panels — ACP, solid aluminium or HPL — fixed to an aluminium sub-frame. Fenza fabricates cassette and tray cladding to open or closed shadow-gap joints, with fire performance selected to the project requirement.",
    lead: "Cassette and tray cladding carried on an aluminium sub-frame fabricated on our line. Panels are selected to the project — composite, solid aluminium or high-pressure laminate — and set out to an open or closed joint.",
    typical: "Shadow gap 10–20 mm · 3–4 mm composite",
    variants: ["ACP", "Solid aluminium", "HPL", "Zinc / copper composite"],
    specs: [
      { label: "Panel types", value: "ACP, solid aluminium, HPL, composite metals" },
      { label: "Panel thickness", value: "3–4 mm composite; 2–4 mm solid" },
      { label: "Fixing", value: "Cassette / tray on aluminium carrier" },
      { label: "Joint", value: "10–20 mm shadow gap, open or closed" },
      { label: "Sub-frame", value: "6063-T6 aluminium rail and bracket" },
      { label: "Fire performance", value: "FR grade to project requirement" },
      { label: "Finish", value: "PVDF, HDP or anodised, per panel supplier" },
    ],
    hero: "cl-hero",
    card: "cl-card",
    gallery: [
      { img: "cl-1", caption: "Panel face" },
      { img: "cl-2", caption: "Shadow-gap joint" },
      { img: "cl-3", caption: "External corner" },
      { img: "cl-4", caption: "Clad elevation" },
    ],
    faqs: [
      { q: "What is ACP cladding?", a: "ACP (aluminium composite panel) cladding uses lightweight panels of two aluminium skins bonded to a core, fixed as cassettes or trays on an aluminium carrier to form a flat, durable facade surface." },
      { q: "Is Fenza cladding fire-rated?", a: "Panels are specified to the project's fire-performance requirement (FR grade), confirmed with the panel supplier and facade consultant per project." },
    ],
  },
  {
    code: "FZ-RV",
    slug: "rain-screen-facade",
    name: "Rain-Screen Ventilated Facade",
    category: "Opaque Envelope",
    summary: "A rain-screen ventilated facade is a drained, back-ventilated outer skin fixed on a thermally isolated carrier, with an open cavity so moisture and heat escape behind the panel. Fenza builds rain-screen systems for ACP, solid aluminium, HPL, terracotta or stone panels over insulation.",
    lead: "A drained and back-ventilated outer skin on a thermally isolated carrier system, with the cavity left open so moisture and heat can escape behind the panel. Insulation and membrane to the facade consultant's build-up.",
    typical: "Cavity 25–50 mm · mineral wool insulation",
    variants: ["Open joint", "Closed joint", "Concealed fix", "Visible fix"],
    specs: [
      { label: "System", value: "Drained and back-ventilated rainscreen" },
      { label: "Cavity", value: "25–50 mm typical, project dependent" },
      { label: "Carrier", value: "Aluminium rail and bracket, thermally isolated" },
      { label: "Panel options", value: "ACP, solid aluminium, HPL, terracotta, stone" },
      { label: "Insulation", value: "Mineral wool to specified thickness" },
      { label: "Fixing", value: "Concealed or visible, by panel type" },
    ],
    hero: "rv-hero",
    card: "rv-card",
    gallery: [
      { img: "rv-1", caption: "Bracket & rail" },
      { img: "rv-2", caption: "Panel clip" },
      { img: "rv-3", caption: "Open joint" },
      { img: "rv-4", caption: "Ventilated elevation" },
    ],
    faqs: [
      { q: "What is a ventilated rain-screen facade?", a: "A rain-screen facade separates the outer cladding from the insulated wall by an air cavity. The outer panels shed most water, while the ventilated cavity drains and dries any moisture that gets behind them." },
      { q: "What panels can be used on a rain-screen?", a: "ACP, solid aluminium, HPL, terracotta and stone can all be carried on the aluminium rail-and-bracket system, with concealed or visible fixing by panel type." },
    ],
  },
  {
    code: "FZ-LV",
    slug: "louvers",
    name: "Louvers & Sun-Shading Fins",
    category: "Solar Control",
    summary: "Louvers and sun-shading fins are extruded aluminium blades used for solar shading, plant screening and facade articulation. Fenza produces aerofoil, elliptical, rectangular and Z/C-type blades from 50 to 400 mm, run horizontally or vertically, fixed or operable.",
    lead: "Extruded aluminium blades for solar shading, plant screening and facade articulation. Aerofoil, elliptical and rectangular sections, run horizontally or vertically, fixed or operable.",
    typical: "Blades 50–400 mm · fixed or operable",
    variants: ["Aerofoil", "Elliptical", "Rectangular", "Z & C type", "Operable"],
    specs: [
      { label: "Blade profiles", value: "Aerofoil, elliptical, rectangular, Z and C" },
      { label: "Blade sizes", value: "50–400 mm, profile dependent" },
      { label: "Orientation", value: "Horizontal or vertical" },
      { label: "Operation", value: "Fixed or manually / motor operable" },
      { label: "Alloy", value: "6063-T6 extruded aluminium" },
      { label: "Applications", value: "Solar shading, plant screening, car parks, facade articulation" },
      { label: "Finish", value: "Anodised / powder coat / PVDF / wood-grain" },
    ],
    hero: "lv-hero",
    card: "lv-card",
    gallery: [
      { img: "lv-1", caption: "Vertical fins" },
      { img: "lv-2", caption: "Aerofoil section" },
      { img: "lv-3", caption: "Blade profile" },
      { img: "lv-4", caption: "Horizontal run" },
    ],
    faqs: [
      { q: "What are facade louvers used for?", a: "Aluminium louvers provide solar shading, screen rooftop plant and car-park openings, allow ventilation, and add depth and rhythm to a facade — fixed or operable." },
      { q: "What louver blade profiles does Fenza make?", a: "Aerofoil, elliptical, rectangular and Z- and C-type blades from 50 to 400 mm, oriented horizontally or vertically." },
    ],
  },
  {
    code: "FZ-RL",
    slug: "railings",
    name: "Railings & Balustrades",
    category: "Architectural Elements",
    summary: "Railings and balustrades provide edge protection for balconies, terraces and stairs. Fenza supplies structural glass balustrades on extruded aluminium base-shoe channel and aluminium post-and-rail systems, top- or fascia-mounted, with toughened laminated glass to the applicable code.",
    lead: "Structural glass balustrades on extruded base-shoe channel, and aluminium post-and-rail systems, for balconies, terraces, stairs and edge protection.",
    typical: "Glass 12–21.5 mm · height 1000–1200 mm",
    variants: ["Glass, base shoe", "Post & rail", "Top mount", "Side / fascia mount"],
    specs: [
      { label: "Types", value: "Structural glass, aluminium post and rail" },
      { label: "Glass", value: "12–21.5 mm toughened laminated" },
      { label: "Base shoe", value: "Extruded aluminium, top or fascia mount" },
      { label: "Height", value: "1000–1200 mm, to applicable code" },
      { label: "Handrail", value: "Aluminium or stainless steel, capped" },
      { label: "Setting", value: "Structural resin or mechanical wedge" },
    ],
    hero: "rl-hero",
    card: "rl-card",
    gallery: [
      { img: "rl-1", caption: "Base-shoe section" },
      { img: "rl-2", caption: "Post & rail" },
      { img: "rl-3", caption: "Balcony run" },
      { img: "rl-4", caption: "Terrace edge" },
    ],
    faqs: [
      { q: "What is a base-shoe glass balustrade?", a: "A base-shoe balustrade clamps toughened laminated glass into a continuous extruded aluminium channel at floor level, giving a frameless glass guard with no posts." },
      { q: "How tall should a balustrade be?", a: "Typical heights are 1000-1200 mm, set to the applicable building code for the location and use." },
    ],
  },
  {
    code: "FZ-SK",
    slug: "skylights",
    name: "Skylights & Canopies",
    category: "Architectural Elements",
    summary: "Skylights and canopies are overhead glazing and entrance covers on thermally isolated aluminium rafter-and-purlin framing. Fenza builds pyramid, ridge, barrel, flat and cantilever forms with internal gutters and condensation channels designed into the section, glazed with toughened laminated glass or DGU.",
    lead: "Overhead glazing and entrance canopies on thermally isolated aluminium rafter-and-purlin framing, with internal gutters and condensation channels designed into the section.",
    typical: "Minimum 5° fall · laminated or DGU",
    variants: ["Pyramid", "Ridge", "Barrel", "Flat", "Cantilever canopy"],
    specs: [
      { label: "Forms", value: "Pyramid, ridge, barrel, flat, cantilever canopy" },
      { label: "Framing", value: "Aluminium rafter and purlin, thermally isolated" },
      { label: "Glazing", value: "Toughened laminated or DGU" },
      { label: "Drainage", value: "Internal gutter and condensation channel" },
      { label: "Fall", value: "Minimum 5° recommended for self-cleaning" },
      { label: "Options", value: "Integrated vents, walk-on glass" },
    ],
    hero: "sk-hero",
    card: "sk-card",
    gallery: [
      { img: "sk-1", caption: "Pyramid skylight" },
      { img: "sk-2", caption: "Entrance canopy" },
      { img: "sk-3", caption: "Barrel vault" },
      { img: "sk-4", caption: "Glazed link" },
    ],
    faqs: [
      { q: "What fall should a skylight have?", a: "A minimum slope of about 5 degrees is recommended so rainwater runs off and the glass stays self-cleaning; internal gutters and condensation channels handle any residual water." },
      { q: "What forms of skylight does Fenza make?", a: "Pyramid, ridge, barrel and flat rooflights, plus cantilever entrance canopies." },
    ],
  },
  {
    code: "FZ-PG",
    slug: "pergolas",
    name: "Pergolas",
    category: "Architectural Elements",
    summary: "Pergolas are aluminium overhead structures with fixed or adjustable aerofoil blades for outdoor shade. Fenza builds free-standing and wall-mounted pergolas drained through concealed gutter posts, with fixed, adjustable-louvered or motorised blades and optional LED and side screens.",
    lead: "Aluminium pergola structures with fixed or adjustable aerofoil blades, drained through the frame so rainwater runs down concealed gutter posts rather than off the edge.",
    typical: "Indicative up to 4 m per bay",
    variants: ["Fixed blade", "Adjustable louvered", "Motorised", "Free-standing / wall-mounted"],
    specs: [
      { label: "Types", value: "Fixed blade, adjustable louvered, motorised" },
      { label: "Blade", value: "Extruded aluminium aerofoil" },
      { label: "Structure", value: "Extruded aluminium frame and posts" },
      { label: "Span", value: "Indicative up to 4 m per bay, subject to load" },
      { label: "Drainage", value: "Integrated gutter posts" },
      { label: "Options", value: "LED integration, side screens" },
    ],
    hero: "pg-hero",
    card: "pg-card",
    gallery: [
      { img: "pg-1", caption: "In setting" },
      { img: "pg-2", caption: "Blade mechanism" },
      { img: "pg-3", caption: "Terrace pergola" },
      { img: "pg_under", caption: "Underside" },
    ],
    faqs: [
      { q: "What is an aluminium louvered pergola?", a: "A louvered pergola is an aluminium roof structure whose aerofoil blades can be fixed or rotated to control sun and rain; water drains through the frame and concealed gutter posts." },
      { q: "Can pergola blades be motorised?", a: "Yes — blades can be fixed, manually adjustable or motorised, with optional integrated LED lighting and side screens." },
    ],
  },
];

export const SYSTEM_CATEGORIES = [
  "Glazed Envelope",
  "Fenestration",
  "Opaque Envelope",
  "Solar Control",
  "Architectural Elements",
];

export const getSystem = (slug: string): SystemFamily | undefined =>
  SYSTEMS.find((s) => s.slug === slug);

export const imgUrl = (key: string): string => `/images/${key}.webp`;

/** 1200x630 JPEG for social/OG cards (some scrapers still prefer JPEG). */
export const ogUrl = (key: string): string => `/og/${key}.jpg`;
