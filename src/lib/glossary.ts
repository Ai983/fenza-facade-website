// Facade glossary — plain-language definitions for /glossary.
//
// Accuracy guardrails (same as the rest of the site): these are general
// industry definitions for orientation. Test-standard entries say what a test
// MEASURES — never that Fenza has passed it. Figures that appear elsewhere on
// the site (alloy, gasket, joint sizes) are not repeated here. Definitions were
// written for a non-specialist reader; have the engineering team review before
// launch.

export interface GlossaryTerm {
  /** Stable anchor id (/glossary#slug) and JSON-LD fragment. */
  slug: string;
  term: string;
  /** Other names, abbreviations — searched, and shown beside the term. */
  aka?: string;
  /** One or two plain sentences. */
  definition: string;
  /** Fenza system slugs (from systems.ts) this term relates to. */
  systems?: string[];
  /** Slugs of other glossary terms worth reading next. */
  see?: string[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "acp",
    term: "ACP",
    aka: "Aluminium Composite Panel",
    definition:
      "Two thin aluminium skins bonded to a lightweight core. The result is a flat, rigid, light panel that is widely used for cladding.",
    systems: ["cladding"],
    see: ["cladding", "cassette"],
  },
  {
    slug: "air-infiltration",
    term: "Air infiltration",
    definition:
      "Air leaking in or out through the joints and seals of a facade. Keeping it low saves energy and keeps the building comfortable.",
    see: ["astm-e283", "gasket"],
  },
  {
    slug: "anchor",
    term: "Anchor",
    aka: "Bracket",
    definition:
      "The metal fixing that ties a facade back to the building's floor slab or structure, carrying the facade's weight and the wind load into it.",
    systems: ["curtain-wall"],
    see: ["curtain-wall", "wind-load"],
  },
  {
    slug: "anodising",
    term: "Anodising",
    definition:
      "An electrochemical process that thickens aluminium's natural oxide layer. It gives a hard, durable, corrosion-resistant surface that keeps the metal's own look.",
    see: ["powder-coating", "pvdf-coating", "mill-finish"],
  },
  {
    slug: "astm-e283",
    term: "ASTM E283",
    definition:
      "A standard test method that measures how much air leaks through a facade specimen under a set pressure difference.",
    see: ["air-infiltration", "mock-up"],
  },
  {
    slug: "astm-e330",
    term: "ASTM E330",
    definition:
      "A standard test method for structural performance. A facade specimen is loaded with air pressure, simulating wind, to check it holds up and does not bend too far.",
    see: ["wind-load", "deflection", "mock-up"],
  },
  {
    slug: "astm-e331",
    term: "ASTM E331",
    definition:
      "A standard test method for water penetration. Water is sprayed on the outside of a facade specimen while air pressure is applied, to check that none gets through.",
    see: ["mock-up", "drainage-slot"],
  },
  {
    slug: "balustrade",
    term: "Balustrade",
    aka: "Railing",
    definition:
      "The barrier along the edge of a balcony, terrace or stair. It can be glass panels, or posts and rails in aluminium.",
    systems: ["railings"],
  },
  {
    slug: "building-envelope",
    term: "Building envelope",
    definition:
      "The outer shell of a building: walls, glazing, roof and openings. It separates inside from outside. Fenza works on the facade part of it.",
    see: ["facade", "fenestration"],
  },
  {
    slug: "capless",
    term: "Capless",
    aka: "Flush glazing",
    definition:
      "A glazed facade with no cover caps on the outside, so the glass reads as one smooth surface, separated only by a narrow joint.",
    systems: ["structural-glazing", "curtain-wall"],
    see: ["capped-system", "structural-glazing"],
  },
  {
    slug: "capped-system",
    term: "Capped system",
    definition:
      "A curtain wall where a cover cap on the outside hides the pressure plate that holds the glass. The caps show as a fine grid of lines across the facade.",
    systems: ["curtain-wall"],
    see: ["pressure-plate", "capless"],
  },
  {
    slug: "casement-window",
    term: "Casement window",
    definition:
      "A window hinged at the side, or at the top, that swings open like a small door.",
    systems: ["casement-windows"],
    see: ["mitre-joint", "corner-crimping"],
  },
  {
    slug: "cassette",
    term: "Cassette",
    definition:
      "A panel or framed unit assembled in the factory and hung on the building as one piece. Used for cladding trays and for semi-unitised curtain wall.",
    systems: ["cladding", "curtain-wall"],
    see: ["semi-unitised", "unitised"],
  },
  {
    slug: "cladding",
    term: "Cladding",
    definition:
      "A non-structural outer covering fixed to a building's frame, for appearance and weather protection.",
    systems: ["cladding", "rain-screen-facade"],
    see: ["acp", "rain-screen"],
  },
  {
    slug: "copy-router",
    term: "Copy router",
    definition:
      "A machine that follows a template to mill identical slots, drill holes and cut drainage openings in aluminium profiles.",
    see: ["drainage-slot", "extrusion"],
  },
  {
    slug: "corner-crimping",
    term: "Corner crimping",
    definition:
      "Joining mitred aluminium corners mechanically, by pressing them together under force, instead of welding.",
    systems: ["casement-windows"],
    see: ["mitre-joint"],
  },
  {
    slug: "curtain-wall",
    term: "Curtain wall",
    definition:
      "A light, non-load-bearing outer skin of aluminium framing and glass or panels, hung in front of a building's structure. It carries only its own weight and the wind load.",
    systems: ["curtain-wall"],
    see: ["mullion", "transom", "stick-system", "unitised"],
  },
  {
    slug: "deflection",
    term: "Deflection",
    definition:
      "How much a facade member bends under load, for example from wind. Limits are set so the glass and seals are never overstressed.",
    see: ["wind-load", "astm-e330"],
  },
  {
    slug: "double-glazed-unit",
    term: "Double-glazed unit",
    aka: "DGU, IGU, insulating glass unit",
    definition:
      "Two panes of glass held apart by a sealed spacer, enclosing an air- or gas-filled gap. It insulates against heat and noise far better than a single pane.",
    see: ["low-e-coating", "u-value", "laminated-glass"],
  },
  {
    slug: "drainage-slot",
    term: "Drainage slot",
    aka: "Weep hole",
    definition:
      "A small opening in a frame that lets any water that gets inside drain back outside.",
    see: ["astm-e331", "copy-router"],
  },
  {
    slug: "end-milling",
    term: "End milling",
    definition:
      "Machining the end of a profile into a notch-and-tenon shape so it seats against another profile.",
    systems: ["curtain-wall"],
    see: ["notch-and-tenon", "transom"],
  },
  {
    slug: "epdm",
    term: "EPDM",
    aka: "Ethylene propylene diene monomer",
    definition:
      "A synthetic rubber used for gaskets because it stays flexible and resists sunlight, ozone and weather for many years.",
    see: ["gasket"],
  },
  {
    slug: "extrusion",
    term: "Extrusion",
    aka: "Profile",
    definition:
      "Aluminium heated and pushed through a shaped die to make a long section with the same cross-section along its whole length. Mullions, transoms and window frames are all extrusions.",
    see: ["mullion", "thermal-break"],
  },
  {
    slug: "facade",
    term: "Facade",
    definition: "The exterior face of a building.",
    see: ["building-envelope", "cladding", "curtain-wall"],
  },
  {
    slug: "facade-consultant",
    term: "Facade consultant",
    definition:
      "An independent specialist who advises the design team on facade design, performance and specification, and reviews the contractor's work.",
    see: ["shop-drawings", "mock-up"],
  },
  {
    slug: "fenestration",
    term: "Fenestration",
    definition:
      "Windows, doors and other openings in a building's envelope.",
    systems: ["casement-windows", "sliding-windows-doors"],
    see: ["building-envelope"],
  },
  {
    slug: "gasket",
    term: "Gasket",
    definition:
      "A flexible seal, usually EPDM rubber, that grips the glass in its frame, cushions it off the metal and keeps out air and water.",
    systems: ["curtain-wall"],
    see: ["epdm", "air-infiltration", "setting-block"],
  },
  {
    slug: "glass-fin",
    term: "Glass fin",
    definition:
      "A vertical glass beam that supports glass panes, letting tall glazed walls span with almost no visible frame.",
    systems: ["spider-glazing"],
    see: ["spider-fitting"],
  },
  {
    slug: "glazing",
    term: "Glazing",
    definition: "Fitting glass into a building, or the glass itself.",
    see: ["double-glazed-unit", "structural-glazing"],
  },
  {
    slug: "glazing-bead",
    term: "Glazing bead",
    definition:
      "A removable strip that holds the glass in a window or door frame.",
    see: ["pressure-plate", "gasket"],
  },
  {
    slug: "laminated-glass",
    term: "Laminated glass",
    definition:
      "Two or more layers of glass bonded by a tough plastic interlayer. If it breaks, the pieces stay stuck to the interlayer, which is why it is used for safety.",
    see: ["toughened-glass", "double-glazed-unit"],
  },
  {
    slug: "louver",
    term: "Louver",
    aka: "Louvre",
    definition:
      "Angled blades, fixed or adjustable, that let air and light through while blocking rain, sun or a direct view.",
    systems: ["louvers"],
  },
  {
    slug: "low-e-coating",
    term: "Low-E coating",
    aka: "Low-emissivity coating",
    definition:
      "A near-invisible coating on glass that reflects heat radiation, so the glass insulates better and less heat passes through.",
    see: ["double-glazed-unit", "solar-heat-gain", "u-value"],
  },
  {
    slug: "mill-finish",
    term: "Mill finish",
    definition:
      "Aluminium exactly as it comes from the extrusion press, with no coating or colour applied.",
    see: ["anodising", "powder-coating"],
  },
  {
    slug: "mitre-joint",
    term: "Mitre joint",
    definition:
      "A corner made by cutting two profile ends at an angle, usually 45°, so they meet neatly.",
    systems: ["casement-windows"],
    see: ["corner-crimping", "notch-and-tenon"],
  },
  {
    slug: "mock-up",
    term: "Mock-up",
    definition:
      "A full-size sample of a section of the facade, built and tested before production starts. It proves the design performs and lets everyone agree how it will look.",
    see: ["astm-e283", "astm-e331", "astm-e330", "facade-consultant"],
  },
  {
    slug: "movement-joint",
    term: "Movement joint",
    aka: "Expansion joint",
    definition:
      "A deliberate gap that lets the facade and the building expand, contract and sway without damage.",
    see: ["anchor", "sealant-joint"],
  },
  {
    slug: "mullion",
    term: "Mullion",
    definition:
      "The vertical framing member of a curtain wall or window. Mullions carry the facade's weight and wind load back to the building.",
    systems: ["curtain-wall"],
    see: ["transom", "anchor", "extrusion"],
  },
  {
    slug: "notch-and-tenon",
    term: "Notch-and-tenon",
    definition:
      "A joint where the end of one profile is milled to a shape that fits against the face of another, so a transom seats square against a mullion.",
    systems: ["curtain-wall"],
    see: ["end-milling", "transom", "mullion"],
  },
  {
    slug: "patch-fitting",
    term: "Patch fitting",
    definition:
      "A stainless-steel fitting clamped to the corner of a frameless glass door, holding it and carrying its pivot.",
    systems: ["frameless-glass-doors"],
    see: ["toughened-glass"],
  },
  {
    slug: "pergola",
    term: "Pergola",
    definition:
      "An open outdoor structure with a slatted or louvred roof that gives shade while staying airy.",
    systems: ["pergolas"],
    see: ["louver"],
  },
  {
    slug: "powder-coating",
    term: "Powder coating",
    definition:
      "Dry coloured powder applied to aluminium with an electric charge, then baked so it melts into a hard, even finish.",
    see: ["anodising", "pvdf-coating"],
  },
  {
    slug: "pressure-plate",
    term: "Pressure plate",
    definition:
      "A metal strip fixed along the outside of a mullion or transom that clamps the glass against the gaskets.",
    systems: ["curtain-wall"],
    see: ["capped-system", "gasket"],
  },
  {
    slug: "pvdf-coating",
    term: "PVDF coating",
    aka: "Polyvinylidene fluoride",
    definition:
      "A fluoropolymer paint applied to aluminium, chosen for holding its colour and resisting weather over many years.",
    see: ["powder-coating", "anodising"],
  },
  {
    slug: "rain-screen",
    term: "Rain-screen",
    definition:
      "An outer layer of panels that sheds most of the rain, with a ventilated gap behind. Any water that gets past drains or dries away in the gap.",
    systems: ["rain-screen-facade"],
    see: ["ventilated-cavity", "cladding"],
  },
  {
    slug: "sealant-joint",
    term: "Sealant joint",
    definition:
      "A joint between two facade elements filled with flexible sealant, keeping out weather while allowing slight movement.",
    see: ["movement-joint", "structural-silicone"],
  },
  {
    slug: "semi-unitised",
    term: "Semi-unitised",
    definition:
      "A curtain wall between stick and unitised: frames are part-assembled into cassettes in the factory, then hung and finished on site.",
    systems: ["curtain-wall"],
    see: ["stick-system", "unitised", "cassette"],
  },
  {
    slug: "setting-block",
    term: "Setting block",
    definition:
      "A small pad, usually rubber, that the glass sits on in its frame. It carries the glass's weight so the glass never rests on bare metal.",
    see: ["gasket", "glazing"],
  },
  {
    slug: "shop-drawings",
    term: "Shop drawings",
    definition:
      "Detailed fabrication and installation drawings produced by the facade contractor. They show exactly how every element is made and fixed, and are reviewed before production.",
    see: ["facade-consultant", "mock-up"],
  },
  {
    slug: "sightline",
    term: "Sightline",
    definition:
      "The visible width of a frame seen from outside. Slimmer sightlines give a lighter, more open look.",
    systems: ["curtain-wall"],
    see: ["capped-system", "capless"],
  },
  {
    slug: "skylight",
    term: "Skylight",
    definition:
      "A glazed opening in a roof or overhead, letting daylight into the space below.",
    systems: ["skylights"],
  },
  {
    slug: "slide-and-fold-door",
    term: "Slide-and-fold door",
    definition:
      "A door of several panels that slide along a track and fold, stacking to one side to open a wide span.",
    systems: ["slide-and-fold-doors"],
  },
  {
    slug: "solar-heat-gain",
    term: "Solar heat gain",
    aka: "SHGC",
    definition:
      "The share of the sun's energy that passes through glass as heat. Lower means the glass blocks more of it.",
    see: ["low-e-coating", "u-value"],
  },
  {
    slug: "spandrel",
    term: "Spandrel",
    definition:
      "An opaque panel that hides the floor slab and services between the glass of one floor and the next.",
    systems: ["curtain-wall"],
    see: ["curtain-wall"],
  },
  {
    slug: "spider-fitting",
    term: "Spider fitting",
    aka: "Routel",
    definition:
      "A stainless-steel fitting with arms, each holding a corner of a glass pane through a drilled hole. It carries the glass at points rather than in a continuous frame.",
    systems: ["spider-glazing"],
    see: ["glass-fin"],
  },
  {
    slug: "stick-system",
    term: "Stick system",
    definition:
      "A curtain wall built piece by piece on site: mullions and transoms go up first, then the glass is fitted.",
    systems: ["curtain-wall"],
    see: ["unitised", "semi-unitised"],
  },
  {
    slug: "structural-glazing",
    term: "Structural glazing",
    aka: "SSG",
    definition:
      "Glass bonded with structural silicone to a concealed frame, so no metal caps show on the outside, only a fine silicone joint.",
    systems: ["structural-glazing"],
    see: ["structural-silicone", "capless"],
  },
  {
    slug: "structural-silicone",
    term: "Structural silicone",
    definition:
      "A high-strength silicone adhesive that bonds glass to a frame and carries load, not just seals a gap.",
    systems: ["structural-glazing"],
    see: ["structural-glazing", "sealant-joint"],
  },
  {
    slug: "thermal-break",
    term: "Thermal break",
    definition:
      "An insulating strip, often polyamide, set between the inner and outer parts of an aluminium frame. It stops heat conducting straight through the metal.",
    see: ["u-value", "extrusion"],
  },
  {
    slug: "toughened-glass",
    term: "Toughened glass",
    aka: "Tempered glass",
    definition:
      "Glass heat-treated to be much stronger than ordinary glass. If it does break, it crumbles into small, blunt pieces.",
    systems: ["frameless-glass-doors"],
    see: ["laminated-glass", "patch-fitting"],
  },
  {
    slug: "transom",
    term: "Transom",
    definition:
      "The horizontal framing member of a curtain wall or window. It ties the grid together and supports the glass above it.",
    systems: ["curtain-wall"],
    see: ["mullion", "notch-and-tenon", "end-milling"],
  },
  {
    slug: "u-value",
    term: "U-value",
    definition:
      "A measure of how quickly heat passes through a facade element. Lower means better insulation.",
    see: ["thermal-break", "low-e-coating", "double-glazed-unit"],
  },
  {
    slug: "unitised",
    term: "Unitised system",
    definition:
      "A curtain wall assembled and glazed in the factory into whole panels, which are then lifted into place. It is fast on site.",
    systems: ["curtain-wall"],
    see: ["stick-system", "semi-unitised"],
  },
  {
    slug: "ventilated-cavity",
    term: "Ventilated cavity",
    definition:
      "The open air gap behind rain-screen panels. Moving air carries away moisture and heat.",
    systems: ["rain-screen-facade"],
    see: ["rain-screen"],
  },
  {
    slug: "wind-load",
    term: "Wind load",
    definition:
      "The pressure and suction wind puts on a facade. It depends on the building's height, location and shape, and the facade is designed to resist it.",
    see: ["deflection", "astm-e330", "anchor"],
  },
];

/** First-letter groups, in A–Z order, for the page's jump links. */
export const glossaryLetters = (terms: GlossaryTerm[]): string[] =>
  Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort();
