import type { Article } from "../journal";

const article: Article = {
  slug: "facades-for-indian-climates",
  title: "Facades for India's climates: what changes from Delhi to Bengaluru",
  seoTitle: "Facade Design for India's Climates",
  description:
    "How facade glass, shading, frames, drainage and finishes should change across India's climates, from composite Delhi NCR to temperate Bengaluru.",
  excerpt:
    "A facade that works well in Delhi NCR can struggle on the coast. Here is how glass, shading, frames, drainage and finishes should change across India's main climate types.",
  teaser: "Glass, shading, drainage and finishes, matched to the local climate.",
  topic: "Performance",
  date: "2026-10-07",
  hero: "climate-hero",
  card: "climate-card",
  og: "/og/louvers.jpg",
  terms: ["low-e-coating", "solar-heat-gain", "thermal-break", "drainage-slot", "pvdf-coating", "movement-joint", "wind-load", "rain-screen"],
  systems: ["curtain-wall", "louvers", "rain-screen-facade", "casement-windows"],
  faq: [
    {
      question: "How should a facade change between Delhi and Bengaluru?",
      answer:
        "Delhi NCR has a composite climate with a hot summer, a monsoon and a cool winter, so low-E double glazing, thermal breaks and shading on the east and west earn their place. Bengaluru is milder, so openable windows are useful for more of the year and the glass can be chosen more by orientation, though the sun and the monsoon rain still need managing.",
    },
    {
      question: "What facade finish is best near the sea?",
      answer:
        "Salt air attacks finishes and fixings, so PVDF or a well-sealed anodised finish is the usual choice near the coast, with suitable stainless steel fixings and aluminium isolated from other metals. Powder coating can work, but pretreatment and coating thickness matter more there. Regular washing to remove salt deposits is part of the maintenance.",
    },
    {
      question: "How do you stop a facade leaking in heavy monsoon rain?",
      answer:
        "Assume some water will get past the outer seal and give it a planned route back out through drainage slots and weep paths, with continuous gaskets and properly sealed interfaces. Testing a mock-up for water penetration shows whether the drainage design works before the monsoon tests it.",
    },
    {
      question: "Who decides the facade specification for a particular climate?",
      answer:
        "The exact glass, frame, finish, fixing and drainage specification is set per project by the facade consultant and the structural engineer, using the site's own data. Climate guidance tells you where to look, not what to specify.",
    },
  ],
  body: [
    {
      t: "p",
      x: "A facade that works well in Delhi NCR can disappoint in a coastal city, and the reverse is just as true. The materials are the same everywhere: aluminium frames, glass, gaskets, sealants and coatings. What changes is what they have to resist. India has hot, dry inland cities, humid coastal ones, places where the monsoon drives rain against the building for months, and a few where the climate is mild for much of the year. This article goes through the main climate types, what each does to a building envelope, and where the design priorities shift. It is general guidance. The exact specification for any building is set per project by the facade consultant and the structural engineer.",
    },
    { t: "h2", x: "What stays the same everywhere" },
    {
      t: "p",
      x: "Some things do not change with the map. Every facade must keep water out, carry its {{wind-load|wind load}} back to the structure, allow for movement, and last. Every elevation sees the sun differently, so east and west faces need more attention than north ones almost anywhere in India. And every system depends on detail: a good profile with a poor joint still leaks. Climate does not replace these basics. It changes which of them is hardest to get right.",
    },
    { t: "h2", x: "The short version" },
    {
      t: "compare",
      cols: ["Main stresses", "Facade priorities"],
      rows: [
        {
          k: "Composite (Delhi NCR, Chandigarh, Punjab)",
          v: [
            "Hot summer, humid monsoon, cool winter, seasonal dust.",
            "Low-E double glazing, thermal breaks, east and west shading, drainage that is easy to clear.",
          ],
        },
        {
          k: "Hot-dry (Ahmedabad, much of Gujarat)",
          v: [
            "Intense sun, dry air, a wide swing between day and night, dust.",
            "External shading, solar-control glass, movement joints, UV-stable finishes and seals.",
          ],
        },
        {
          k: "Warm-humid and coastal",
          v: [
            "Salt air, humidity, strong winds and cyclonic storms on parts of the coast.",
            "Corrosion-resistant finishes and fixings, wind-load design, ventilated cladding.",
          ],
        },
        {
          k: "Heavy monsoon (Pune, Western Ghats side)",
          v: [
            "Long spells of wind-driven rain.",
            "Drainage design, continuous gaskets, sealed interfaces, water testing.",
          ],
        },
        {
          k: "Moderate (Bengaluru)",
          v: [
            "Milder temperatures, strong sun, a real monsoon season.",
            "Openable windows, glass chosen by orientation, sound drainage.",
          ],
        },
      ],
    },
    { t: "h2", x: "Composite climate: Delhi NCR, Chandigarh and Punjab" },
    {
      t: "p",
      x: "A composite climate has a bit of everything: a hot summer with strong sun, a humid monsoon, and a cool winter. Dust is common for part of the year. The facade has to work in both directions, keeping heat out in summer and holding it in on winter mornings, and it has to do both in the same building without adjustment.",
    },
    {
      t: "ul",
      items: [
        "Glass: a {{low-e-coating|low-E}} or solar-control {{double-glazed-unit|double-glazed unit}} suits this climate, because it helps in both seasons. Choose the coating for {{solar-heat-gain|solar heat gain}} first, since the cooling season is the longer and harder one. See {{/journal/choosing-facade-glass|Choosing facade glass}}.",
        "Frames: a {{thermal-break|thermal break}} earns its place here, because the frame sees a large difference between inside and outside in summer and again in winter. See {{/journal/thermal-breaks-in-aluminium-frames|Thermal breaks in aluminium frames}}.",
        "Shading: external louvers or fins on the east and west, sized to cut the summer sun and, where it helps, still admit some winter sun.",
        "Dust: drainage paths and {{drainage-slot|drainage slots}} must be easy to clear, and sliding tracks need a profile that does not trap grit.",
        "Movement: the seasonal range is wide, so joints and fixings must let the frame expand and contract without loading the glass.",
      ],
    },
    { t: "h2", x: "Hot-dry climate: Ahmedabad and much of Gujarat" },
    {
      t: "p",
      x: "Here the sun is the main load. Days are long, bright and hot, the air is dry, and nights can be noticeably cooler than the days. That daily swing matters to a facade as much as the heat itself.",
    },
    {
      t: "ul",
      items: [
        "Shading first. Stopping the sun outside the glass does more than any coating. Deep fins, {{louver|louvers}} or recessed glazing on the east, west and south are worth studying early. See {{/journal/louvers-and-sun-shading-fins|Louvers and sun-shading fins}}.",
        "Glass: solar control comes before insulation. A low-E or tinted unit with low solar heat gain suits large glazed areas, but balance it against daylight so that the lights are not on all day.",
        "Movement: the gap between day and night makes aluminium expand and contract every day. Long runs of frame and cladding need {{movement-joint|movement joints}} and slotted fixings that let them move without stressing the glass or the seals. See {{/journal/movement-joints-in-facades|Movement joints in facades}}.",
        "Finishes: strong UV fades and chalks weaker coatings. A {{pvdf-coating|PVDF}} finish or good-quality {{anodising|anodising}} holds its colour better on sun-facing elevations.",
        "Seals: gaskets and sealants should be grades that resist UV and heat ageing, and each {{sealant-joint|sealant joint}} should be sized for the movement it will actually see.",
      ],
    },
    { t: "h2", x: "Warm-humid and coastal climates" },
    {
      t: "p",
      x: "Coastal cities combine heat, humidity and salt air, and parts of the coast are exposed to cyclonic storms. Here the facade is fighting corrosion and wind as much as the sun. Solar control still matters, but the details that fail first are usually metal and seals.",
    },
    {
      t: "ul",
      items: [
        "Corrosion: salt air attacks fixings, brackets and finishes. Specify stainless steel fixings of a suitable grade, and isolate aluminium from other metals, because two different metals in contact with salty moisture corrode faster.",
        "Finishes: PVDF or a well-sealed anodised finish is the usual choice near the sea. {{powder-coating|Powder coating}} can work, but pretreatment and coating thickness matter more here than inland. See {{/journal/anodised-powder-coated-or-pvdf|Anodised, powder-coated or PVDF}}.",
        "Wind: on exposed coastal sites the design wind load can govern the whole system, from profile depth and glass thickness to anchor spacing and every bracket. Ask the structural engineer for it early, because it changes the price.",
        "Glass: where wind and flying debris are a concern, {{laminated-glass|laminated glass}} holds together when broken, which {{toughened-glass|toughened glass}} on its own does not.",
        "Humidity: moisture should not sit behind cladding. A {{rain-screen|rain screen}} with a {{ventilated-cavity|ventilated cavity}} lets the back of the panel dry out.",
        "Maintenance: salt deposits should be washed off on a regular schedule. Agree the cleaning regime at handover, because coating warranties often depend on it.",
      ],
    },
    { t: "h2", x: "Heavy-monsoon climate: Pune and the Western Ghats side" },
    {
      t: "p",
      x: "In Pune and the hill country of the Western Ghats around it, the defining load is water. The monsoon is long and wet, and the closer a site is to the Ghats, the heavier it tends to be. Wind drives the rain sideways against the facade and up under flashings. A facade that sheds ordinary rain can still leak in these conditions, usually at a joint, a corner or an interface with another trade.",
    },
    {
      t: "ul",
      items: [
        "Drainage design: assume some water will get past the outer seal, and give it a planned route back out. Pressure-equalised frames, drainage slots and weep paths that are not blocked by sealant are the core of it.",
        "Gaskets and joints: continuous {{gasket|gaskets}} with properly made corners, and sealant joints designed as a second line of defence, not the only one.",
        "Interfaces: most leaks happen where the facade meets something else, such as the slab edge, the roof, a parapet, a column, or cladding meeting glazing. Draw those junctions and agree who seals each one.",
        "Cladding: a {{/systems/rain-screen-facade|rain-screen facade}} with a drained, ventilated joint is often more reliable than trying to face-seal every panel joint. See {{/journal/rain-screen-cladding-the-gap|Rain-screen cladding and the gap}}.",
        "Testing: an {{astm-e331|ASTM E331}} test measures water penetration under a uniform static air-pressure difference. Specifying it on a {{mock-up|mock-up}}, and a site water check on installed work, shows whether the drainage design works before the monsoon tests it. See {{/journal/what-astm-e331-tests|What ASTM E331 tests}} and our {{/testing|testing page}}.",
      ],
    },
    {
      t: "img",
      id: "climate-2",
      cap: "Rain on the glass is the easy part. What matters is where water goes once it gets behind the outer seal.",
    },
    { t: "h2", x: "Moderate climate: Bengaluru" },
    {
      t: "p",
      x: "Bengaluru's climate is milder than that of most Indian cities, with a gentler range of temperatures through the year and a real monsoon season. That gives designers more freedom, but it is easy to read mild as anything goes. The sun is still strong on east and west elevations, and the rain still needs to be managed.",
    },
    {
      t: "ul",
      items: [
        "Ventilation: the mild climate suits openable windows for more of the year. {{/systems/casement-windows|Casement windows}} and well-sealed sliding systems let a building use fresh air when it can, and close up tight when it rains.",
        "Glass: solar control still matters on large glazed areas, but the case for the highest-performing units is weaker than in Delhi or Ahmedabad. Spend where the orientation demands it.",
        "Frames: slimmer frames and larger panes are easier to justify where heat and cold are less extreme, though a thermal break still helps in an air-conditioned building.",
        "Rain: the monsoon is real here too, so drainage and sealing deserve the same care as anywhere else.",
      ],
    },
    {
      t: "img",
      id: "climate-1",
      cap: "Slim aluminium frames with green beyond: in a milder climate, openable windows and daylight can do more of the work.",
    },
    { t: "h2", x: "Questions to settle early" },
    {
      t: "ol",
      items: [
        "Where exactly is the site, and how exposed is it? A tall building on open ground or at the coast sees far more wind than one in a sheltered street.",
        "What is the design wind load? The structural engineer sets it, and it drives profiles, glass and fixings.",
        "Which elevations take the worst sun? A simple sun study by orientation shows where shading pays.",
        "What finish suits the local air, and what cleaning does it need?",
        "What water and air tests will the facade consultant require, and on what?",
        "Which interfaces does the facade contractor own, and which belong to other trades?",
      ],
    },
    { t: "h2", x: "Mistakes to avoid" },
    {
      t: "ul",
      items: [
        "Copying a specification from a project in a different climate without checking it.",
        "Using the same glass and shading on every elevation regardless of orientation.",
        "Choosing a finish near the sea for its colour alone.",
        "Relying on sealant as the only barrier against monsoon rain.",
        "Leaving the wind load as an assumption until after the price is agreed.",
      ],
    },
    {
      t: "note",
      x: "Climate tells you where to look, not what to specify. The exact glass, frame, finish, fixing and drainage specification for a building is set per project by the {{facade-consultant|facade consultant}} and the structural engineer, using the site's own data.",
    },
    { t: "h2", x: "Projects in these cities" },
    {
      t: "p",
      x: "We fabricate in Gurugram and take projects across India. Each city has its own page: {{/locations/delhi|Delhi}}, {{/locations/gurugram|Gurugram}}, {{/locations/noida|Noida}}, {{/locations/chandigarh|Chandigarh}} and {{/locations/ludhiana|Ludhiana}} in the composite north; {{/locations/ahmedabad|Ahmedabad}} in the hot-dry west; {{/locations/pune|Pune}}, near the Western Ghats; and {{/locations/bengaluru|Bengaluru}} in the south. See {{/locations|all locations}}, or {{/contact|send us your drawings}} for a first look.",
    },
  ],
};

export default article;
