// Locations: the cities and regions Fenza takes facade projects in, one page each at
// /locations/<slug>, plus the /locations index.
//
// This file is the full page text and loads ONLY on a city page (pages/LocationRoute.tsx). The
// names, slugs and cards live in location-index.ts, which the rest of the site imports. Never
// import this file from the Navbar, Footer, Home, seo.ts or anything else in the main script.
//
// What these pages may and may not say (docs/AFTER-EVERY-EDIT.md, section 3):
//  - Fenza has ONE facility, in Gurugram. There is no local office in any other city, so never
//    write one, and never give a city page its own address or LocalBusiness markup. The schema is
//    a Service whose areaServed is the city, provided by the one Organization.
//  - `record` lists only real entries from PROJECTS in that region. They are Akhilesh Kumar
//    Singh's career record, shown with the record disclaimer. Do not add a city's project unless
//    it is in projects.ts.
//  - Climate and building notes are general design guidance, not claims about Fenza. No wind
//    speeds, seismic-zone numbers, distances or lead times: they belong to the project's
//    structural engineer and facade consultant. Needs engineering review before launch.
//  - Every page must be genuinely about its city. Do not clone one city and swap the name:
//    search engines treat that as doorway pages and AI answer engines ignore it.
//
// Inline links: {{glossary-slug|label}} or {{/path|label}}, rendered by JournalText (the audit
// checks every one).

import type { FaqItem } from "./seo";
import { LOCATION_INDEX, type LocationBase } from "./location-index";

export interface LocationSystem {
  /** Slug from SYSTEMS. */
  slug: string;
  /** Why this system suits the city's buildings or climate. One or two sentences. */
  why: string;
}

export interface LocationContent {
  /** Nearby places the page also covers, shown in the page's fact panel. */
  covers: string[];
  /** <title> without the brand suffix: 43 characters at most. */
  seoTitle: string;
  /** Meta description: 120-160 characters. */
  description: string;
  /** Social image (public/og). */
  og: string;
  /** Hero intro, one or two sentences. */
  intro: string;
  /** "Building in <city>": what gets built there and what that asks of a facade. */
  context: string[];
  /** Climate: a one-line summary, then the design points that follow from it. */
  climate: { summary: string; points: string[] };
  systems: LocationSystem[];
  /** Slugs from PROJECTS (career record) located in this region. Usually empty. */
  record: string[];
  /** How a project here is delivered from the Gurugram line. */
  delivery: string;
  /** Further reading on the site: journal articles, testing, glossary. */
  reading: { to: string; label: string }[];
  /** Visible on the page and published as FAQPage markup. Plain text, no links. */
  faq: FaqItem[];
}

// Shared sentences, kept identical everywhere they appear.
const NCR_DELIVERY =
  "Our fabrication line is in Gurugram, so a project here is local to us. Site visits, the measured survey and mock-up reviews are easy to arrange, and fabricated frames reach site by road in the sequence the installation needs.";
const FAR_DELIVERY = (city: string) =>
  `Every Fenza facade is engineered and fabricated on our own line in Gurugram, then delivered to ${city} in the sequence the site needs. The site visit, delivery plan and installation are agreed with you at the quote stage, so the programme is clear before anything is made.`;

const CONTENT: Record<string, LocationContent> = {
  delhi: {
    covers: ["New Delhi", "South Delhi", "Dwarka", "Aerocity", "Rohini"],
    seoTitle: "Facade & Curtain Wall Company in Delhi",
    description:
      "Curtain wall, structural glazing, aluminium windows, cladding and louvers for Delhi projects, engineered and fabricated on Fenza's own line in nearby Gurugram.",
    og: "/og/about-hero.jpg",
    intro:
      "Curtain wall, structural glazing, aluminium windows and doors, cladding and louvers for offices, hospitals, institutions and homes across Delhi, made on our own line next door in Gurugram.",
    context: [
      "Delhi's facade work is unusually varied. Hospitals and institutional buildings sit alongside commercial offices, hotels around the airport and premium independent homes. Many plots are tight and surrounded by occupied buildings, so access, delivery windows and working hours shape the installation as much as the design does.",
      "Hospitals and institutions ask the most of a facade over its life: openings that seal well against dust and noise, glass that controls heat without darkening rooms, and finishes that can be cleaned and maintained without disrupting the people inside.",
    ],
    climate: {
      summary:
        "A composite climate: very hot, dry summers, cold winters, a short and heavy monsoon, and dust in the air for much of the year.",
      points: [
        "West and south faces take intense summer sun. Solar-control or {{low-e-coating|low-E}} {{double-glazed-unit|double glazing}} and external shading reduce {{solar-heat-gain|solar heat gain}} and the cooling load.",
        "{{thermal-break|Thermally broken}} frames matter in both directions here: they keep heat out in May and keep rooms warmer in January.",
        "Dust and pollution settle on every ledge. Drained joints, good {{gasket|gaskets}} and durable finishes such as {{pvdf-coating|PVDF}} or {{anodising|anodising}} keep the facade sealed and easy to clean.",
        "Monsoon downpours are short but heavy, so the facade's water-tightness should be proved on a {{mock-up|mock-up}} before production.",
        "Delhi lies in one of India's higher seismic zones. Brackets and {{movement-joint|movement joints}} must accommodate the building movement the structural engineer sets.",
      ],
    },
    systems: [
      { slug: "curtain-wall", why: "For office and institutional elevations: repeating glazed bays on a drained, thermally broken aluminium frame." },
      { slug: "structural-glazing", why: "Flush glass for hospital entrances, hotel frontages and corporate lobbies, with no visible cap on the outside." },
      { slug: "louvers", why: "External shading for west and south faces, cutting summer heat before it reaches the glass." },
      { slug: "casement-windows", why: "Openable windows that seal tightly against dust and noise, for homes and patient rooms." },
      { slug: "cladding", why: "Durable metal cladding for podiums, service cores and institutional blocks." },
    ],
    record: ["max-hospital-saket"],
    delivery: NCR_DELIVERY,
    reading: [
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
      { to: "/journal/thermal-breaks-in-aluminium-frames", label: "Thermal breaks in aluminium frames" },
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on facade projects in Delhi?",
        answer:
          "Yes. Fenza designs, fabricates and installs curtain wall, structural glazing, aluminium windows and doors, cladding, louvers and railings for projects across Delhi. Fabrication is on Fenza's own aluminium line in Gurugram, close to Delhi sites.",
      },
      {
        question: "What facade glass suits Delhi's summer heat?",
        answer:
          "As general guidance, solar-control or low-E double-glazed units limit heat gain, and external shading on west and south faces reduces it further. The exact glass is chosen per project with the facade consultant, balancing heat, daylight and glare.",
      },
      {
        question: "How should a facade in Delhi cope with dust and pollution?",
        answer:
          "Use drained joints with good gaskets so dust does not block the drainage path, and durable, easily cleaned finishes such as PVDF or anodising. Plan safe access for cleaning and maintenance at the design stage.",
      },
      {
        question: "How do I get a facade quote for a project in Delhi?",
        answer:
          "Send elevations and sections, the facade areas by type, the building height and any performance requirements through the enquiry form or by email. A partial package is enough for a first scope and budget range.",
      },
    ],
  },
  gurugram: {
    covers: ["Cyber City", "Golf Course Road", "Golf Course Extension Road", "Dwarka Expressway", "Sohna Road"],
    seoTitle: "Facade Company in Gurugram (Gurgaon)",
    description:
      "Fenza makes curtain wall, structural glazing, windows, doors and cladding on its own aluminium line in Gurugram (Gurgaon), for offices and high-rise homes.",
    og: "/og/home-hero.jpg",
    intro:
      "Our aluminium line is in Gurugram. We engineer, fabricate and install curtain wall, glazing, windows, doors and cladding for the city's office towers, IT campuses and high-rise residences.",
    context: [
      "Gurugram (Gurgaon) is where Fenza makes its facades. The city's skyline is built from glazed office towers and IT campuses around Cyber City and Golf Course Road, and from high-rise residential developments along Golf Course Extension Road, Sohna Road and the Dwarka Expressway.",
      "Tall buildings change the brief. Wind pressure rises with height, so frames, glass and fixings are sized to the {{wind-load|wind load}} the structural engineer sets. Residential towers add balconies and terraces, which bring sliding and slide-and-fold doors, glass {{balustrade|balustrades}} and railings into the facade package.",
    ],
    climate: {
      summary:
        "The same composite climate as Delhi, with very hot summers and cold winters, plus the extra wind exposure of a high-rise city.",
      points: [
        "Glazed towers need solar control: {{low-e-coating|low-E}} or solar-control glass, and fins or {{louver|louvers}} where the design allows, to keep cooling loads down.",
        "Wind load governs tall facades. {{mullion|Mullion}} depth, glass thickness and {{anchor|anchors}} are set from the design wind pressure, and {{deflection|deflection}} limits keep the glass safe.",
        "Balcony doors and windows on upper floors face wind-driven rain, so sills and tracks need proper drainage paths.",
        "Large, repeated elevations favour {{semi-unitised|semi-unitised}} or {{unitised|unitised}} approaches, where more of the work happens in the factory and less at height.",
      ],
    },
    systems: [
      { slug: "curtain-wall", why: "For office towers and IT campuses: stick and semi-unitised curtain walling sized to the tower's wind load." },
      { slug: "structural-glazing", why: "Flush, frameless-looking glass for corporate elevations and lobbies." },
      { slug: "sliding-windows-doors", why: "Multi-track sliding doors for high-rise balconies, with drained tracks for wind-driven rain." },
      { slug: "slide-and-fold-doors", why: "Wide terrace openings in premium residences, stacking clear of the opening." },
      { slug: "railings", why: "Glass balustrades and aluminium railings for balconies, terraces and podiums." },
    ],
    record: ["dlf-building-8", "dlf-wework", "krisumi-waterfall-residences", "adani-samsara-vilasa", "m3m-sector-79", "broadway-service-apartment"],
    delivery:
      "Our fabrication line is in Gurugram, so the factory, the survey team and the site are all in the same city. That makes measured surveys, mock-up reviews and coordination with the architect and main contractor straightforward.",
    reading: [
      { to: "/journal/stick-vs-unitised-curtain-wall", label: "Stick vs. unitised curtain wall" },
      { to: "/journal/structural-glazing-explained", label: "Structural glazing explained" },
      { to: "/manufacturing", label: "Inside our Gurugram line" },
    ],
    faq: [
      {
        question: "Where is Fenza Facade Engineering's factory?",
        answer:
          "Fenza fabricates on its own aluminium line in Gurugram (Gurgaon), Haryana. The line covers servo-driven double-head cutting, copy routing, corner crimping and end-milling. From Gurugram, Fenza takes on facade projects across India.",
      },
      {
        question: "Which facade systems does Fenza make for Gurugram high-rises?",
        answer:
          "Curtain wall and structural glazing for office towers, and sliding and slide-and-fold doors, windows, glass balustrades and railings for residential towers. Cladding, louvers, skylights and pergolas complete the envelope scope.",
      },
      {
        question: "Has Fenza's team worked on Gurugram projects before?",
        answer:
          "The project record of Akhilesh Kumar Singh, Fenza's Director for facade projects, includes DLF Building 8 and DLF WeWork in Cyber City, Krisumi Waterfall Residences, Adani Samsara Vilasa, M3M Sector 79 and Broadway Service Apartment. This is his own career record, not Fenza's completed projects.",
      },
      {
        question: "How is wind load handled on tall facades in Gurugram?",
        answer:
          "The structural engineer sets the design wind pressure for the building. Mullion depth, glass thickness, fixings and deflection limits are then sized to it, and the system is tested on a mock-up where the specification requires.",
      },
    ],
  },
  noida: {
    covers: ["Greater Noida", "Noida–Greater Noida Expressway", "Noida Extension"],
    seoTitle: "Facade & Curtain Wall Company in Noida",
    description:
      "Curtain wall, structural glazing, cladding and insulated panels for offices, factories and housing in Noida and Greater Noida, made on Fenza's NCR line.",
    og: "/og/curtain-wall.jpg",
    intro:
      "Glazed offices, insulated factory envelopes and high-rise housing across Noida and Greater Noida, engineered and fabricated on our own line in the NCR.",
    context: [
      "Noida combines three kinds of building that each ask something different of the envelope. Offices and IT campuses along the Expressway want large glazed elevations. Industrial sectors and Greater Noida want factory envelopes that are insulated, weather-tight and quick to install. And the city's high-rise housing wants balcony doors, windows and railings in large repeated quantities.",
      "Factory envelopes are often a mix: insulated wall panels for the production halls, glazed and clad fronts for the office and administration block, and louvers for ventilation and plant screening.",
    ],
    climate: {
      summary:
        "A composite climate shared with the rest of the NCR: hot summers, cold winters, monsoon rain and dust.",
      points: [
        "Large glazed office elevations need solar-control glass and {{thermal-break|thermally broken}} frames to keep cooling loads in check.",
        "Factory walls need continuous insulation and airtight joints, so heat and dust stay out of the production space.",
        "{{louver|Louvers}} handle ventilation and screen rooftop and ground-level plant while keeping rain out.",
        "Dust in the air means drainage paths and {{gasket|gaskets}} should be easy to inspect and keep clear.",
      ],
    },
    systems: [
      { slug: "curtain-wall", why: "For office and IT campus elevations, repeated across large facades." },
      { slug: "structural-glazing", why: "Flush glazed fronts for office and administration blocks on industrial sites." },
      { slug: "cladding", why: "Metal and composite cladding for factory and podium walls." },
      { slug: "louvers", why: "Ventilation and plant screening for industrial and commercial buildings." },
      { slug: "sliding-windows-doors", why: "Balcony doors and windows for high-rise housing, in large repeated quantities." },
    ],
    record: ["anygraphics-factory"],
    delivery: NCR_DELIVERY,
    reading: [
      { to: "/journal/acp-vs-solid-aluminium-cladding", label: "ACP vs. solid aluminium cladding" },
      { to: "/journal/structural-glazing-explained", label: "Structural glazing explained" },
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering work in Noida and Greater Noida?",
        answer:
          "Yes. Fenza takes on curtain wall, structural glazing, cladding, louvers, windows and doors for offices, factories and housing across Noida and Greater Noida. Fabrication is on Fenza's own line in Gurugram, in the same NCR.",
      },
      {
        question: "What facade suits a factory or industrial building in Noida?",
        answer:
          "Typically insulated wall panels or metal cladding for the production halls, a glazed and clad front for the office block, and louvers for ventilation and plant screening. The mix depends on the process inside and the building's use.",
      },
      {
        question: "Has Fenza's team worked on industrial facades in Noida?",
        answer:
          "The project record of Akhilesh Kumar Singh, Fenza's Director for facade projects, includes the Anygraphics factory in Noida, with PIR and rock wool panels and semi-unitised structural glazing. This is his own career record, not a completed Fenza project.",
      },
      {
        question: "How long does it take to get a facade quote?",
        answer:
          "It depends on the size of the project and how complete the information is. Sending dimensioned elevations, sections and the facade areas by type gets the fastest and most accurate first scope.",
      },
    ],
  },
  chandigarh: {
    covers: ["Mohali", "Panchkula", "Zirakpur", "the Chandigarh Tricity"],
    seoTitle: "Facade Company in Chandigarh & Mohali",
    description:
      "Facades for Chandigarh, Mohali and Panchkula: aluminium windows and doors, structural glazing, cladding and railings, made on Fenza's own aluminium line.",
    og: "/og/casement-windows.jpg",
    intro:
      "Aluminium windows and doors, structural glazing, cladding and railings for homes, offices and institutions across Chandigarh, Mohali and Panchkula.",
    context: [
      "Chandigarh is a planned city with a strong architectural identity, and much of it is governed by architectural controls that set how a building's front may look. Before choosing a facade, confirm with your architect which controls apply to the plot; the system and finish then follow from that.",
      "Around it, Mohali and Panchkula have grown with commercial offices, IT and institutional buildings and premium homes. Here the envelope brief is often about comfort through the seasons: windows that seal well in winter, shading for summer, and glazing that keeps rooms bright.",
    ],
    climate: {
      summary:
        "A composite climate with a sharper winter than Delhi: hot summers, cold and foggy winter mornings, and a strong monsoon from the hills.",
      points: [
        "Winter comfort matters here. {{thermal-break|Thermally broken}} frames with {{double-glazed-unit|double glazing}} reduce heat loss and condensation on cold mornings.",
        "Summer sun still needs controlling, with {{low-e-coating|low-E}} glass and shading on west and south faces.",
        "The city sits at the foot of the Shivalik hills and gets a strong monsoon, so window sills, door thresholds and {{drainage-slot|drainage slots}} need to work in sustained rain.",
        "Where architectural controls fix the look of the front, the system has to deliver the required sightlines and finish, which makes {{sightline|sightlines}} and colour matching part of the engineering.",
      ],
    },
    systems: [
      { slug: "casement-windows", why: "Openable windows with tight seals for cold winters and dusty summers." },
      { slug: "sliding-windows-doors", why: "Large sliding openings for homes and terraces, with drained tracks." },
      { slug: "structural-glazing", why: "Clean glazed fronts for offices and institutional buildings in Mohali and Panchkula." },
      { slug: "cladding", why: "Metal and composite cladding for commercial and institutional elevations." },
      { slug: "railings", why: "Glass and aluminium railings for balconies, terraces and stairs." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Chandigarh, Mohali and Panchkula"),
    reading: [
      { to: "/journal/thermal-breaks-in-aluminium-frames", label: "Thermal breaks in aluminium frames" },
      { to: "/journal/casement-or-sliding-windows", label: "Casement or sliding windows" },
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Chandigarh, Mohali and Panchkula?",
        answer:
          "Yes. Fenza takes on aluminium windows and doors, structural glazing, cladding, railings and other envelope work across the Chandigarh Tricity. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "Do architectural controls in Chandigarh affect the facade?",
        answer:
          "Often, yes. Much of Chandigarh is governed by architectural controls that set how building fronts look. Your architect will confirm what applies to the plot, and the facade system and finish are then chosen to meet it.",
      },
      {
        question: "Which windows are best for Chandigarh's cold winters?",
        answer:
          "As general guidance, thermally broken aluminium frames with double-glazed units and good seals reduce heat loss and condensation. Casement windows usually seal tighter than sliding ones, which matters on cold, windy days.",
      },
      {
        question: "How is a project in Chandigarh delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram and delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  ludhiana: {
    covers: ["Ludhiana", "Patiala", "Bathinda", "Moga", "Khanna"],
    seoTitle: "Facade Company in Ludhiana & Punjab",
    description:
      "Showroom glazing, factory cladding, aluminium windows, doors and railings for Ludhiana and across Punjab, engineered and made on Fenza's own aluminium line.",
    og: "/og/sliding-windows-doors.jpg",
    intro:
      "Showroom fronts, factory envelopes and premium homes across Ludhiana, Jalandhar, Amritsar and the rest of Punjab, engineered and fabricated on our own aluminium line.",
    context: [
      "Ludhiana is Punjab's largest city and one of North India's biggest industrial centres. That shapes its buildings: factories and warehouses with offices attached, commercial showrooms that want a strong glazed front onto the road, and large private homes built to a high specification.",
      "Each asks for a different envelope. Showrooms want big, clear glass with minimal frames and robust entrance doors. Factories want insulated, weather-tight walls and ventilation. Homes want windows and doors that seal well through a cold winter and open wide in good weather, with railings and pergolas for terraces.",
    ],
    climate: {
      summary:
        "A composite climate with cold, foggy winters, hot summers and monsoon rain, typical of the Punjab plains.",
      points: [
        "Cold winters make {{thermal-break|thermal breaks}} and {{double-glazed-unit|double glazing}} worthwhile in homes and offices, cutting heat loss and condensation.",
        "Large showroom glass faces summer sun, so solar-control or {{low-e-coating|low-E}} glass protects both comfort and the goods on display.",
        "Dust from roads and industry calls for well-sealed openings and durable finishes such as {{powder-coating|powder coating}} or {{pvdf-coating|PVDF}}.",
        "Factory walls need continuous insulation and airtight joints, with {{louver|louvers}} for controlled ventilation.",
      ],
    },
    systems: [
      { slug: "frameless-glass-doors", why: "Patch-fitted glass entrance doors for showrooms and commercial fronts." },
      { slug: "structural-glazing", why: "Large, flush glazed showroom and office frontages." },
      { slug: "cladding", why: "Metal and composite cladding for factories, warehouses and commercial buildings." },
      { slug: "slide-and-fold-doors", why: "Wide openings for premium homes, onto lawns and terraces." },
      { slug: "pergolas", why: "Aluminium pergolas for terraces and outdoor living, drained through the frame." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Ludhiana and the rest of Punjab"),
    reading: [
      { to: "/journal/slide-and-fold-doors-what-to-check", label: "Slide-and-fold doors: what to check" },
      { to: "/journal/anodised-powder-coated-or-pvdf", label: "Anodised, powder-coated or PVDF" },
      { to: "/journal/acp-vs-solid-aluminium-cladding", label: "ACP vs. solid aluminium cladding" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering work in Ludhiana and Punjab?",
        answer:
          "Yes. Fenza takes on showroom glazing, factory cladding, aluminium windows and doors, railings and pergolas in Ludhiana, Jalandhar, Amritsar, Patiala and across Punjab. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "What glazing suits a showroom front in Ludhiana?",
        answer:
          "Large structural glazing or framed glass with solar-control or low-E glass, and patch-fitted frameless glass doors at the entrance. Laminated or toughened safety glass is used where people can reach or impact the glass.",
      },
      {
        question: "What facade suits a factory in Punjab?",
        answer:
          "Usually insulated wall panels or metal cladding for the production hall, louvers for ventilation, and a glazed and clad front for the office block. The specification depends on the process inside the building.",
      },
      {
        question: "How is a project in Punjab delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  ahmedabad: {
    covers: ["Ahmedabad", "Gandhinagar", "GIFT City", "Vadodara", "Surat", "Rajkot", "Kutch"],
    seoTitle: "Facade Company in Ahmedabad & Gujarat",
    description:
      "Curtain wall, solar-control glazing, louvers and cladding for Ahmedabad, Gandhinagar and across Gujarat, engineered for the heat on Fenza's own aluminium line.",
    og: "/og/louvers.jpg",
    intro:
      "Curtain wall, solar-control glazing, louvers and cladding for offices, towers and industrial buildings in Ahmedabad, Gandhinagar and across Gujarat.",
    context: [
      "Ahmedabad and Gandhinagar are building upwards. Office towers and commercial buildings line the city's main corridors, GIFT City is adding high-rise offices, and the state's industrial estates keep growing. Across Gujarat, from Vadodara and Surat to Rajkot and Kutch, factories and administration blocks need envelopes that stand up to strong sun and, near the coast, salt air.",
      "Heat is the defining design problem. A glazed building in Ahmedabad that ignores the sun becomes very expensive to cool, so shading, glass selection and frame insulation are decided together, early in the design.",
    ],
    climate: {
      summary:
        "A hot and dry climate in Ahmedabad and much of the state: long, intense summers, strong sun all year and dust, with salt air along the coast.",
      points: [
        "Stop the sun outside the glass where you can. Fixed {{louver|louvers}} and fins on east, west and south faces cut {{solar-heat-gain|solar heat gain}} before it reaches the building.",
        "Solar-control and {{low-e-coating|low-E}} {{double-glazed-unit|double-glazed units}}, chosen with the facade consultant, keep heat out while letting daylight in.",
        "Strong ultraviolet light fades weaker coatings. {{pvdf-coating|PVDF}} and good {{anodising|anodising}} hold colour longer on sun-facing faces.",
        "Near the coast, salt air calls for the right coating system and stainless fixings. Kutch is also one of India's most earthquake-prone regions, which makes movement design critical there.",
      ],
    },
    systems: [
      { slug: "louvers", why: "External shading fins and louvers, the first line of defence against Gujarat's sun." },
      { slug: "curtain-wall", why: "For office towers and commercial buildings, with solar-control glass and thermally broken frames." },
      { slug: "structural-glazing", why: "Flush glazed elevations for corporate and GIFT City-style towers." },
      { slug: "cladding", why: "Durable metal and composite cladding for industrial and commercial buildings." },
      { slug: "rain-screen-facade", why: "A ventilated outer skin that keeps the sun's heat off the wall behind it." },
    ],
    record: ["dee-development"],
    delivery: FAR_DELIVERY("Ahmedabad and across Gujarat"),
    reading: [
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
      { to: "/journal/anodised-powder-coated-or-pvdf", label: "Anodised, powder-coated or PVDF" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on facade projects in Gujarat?",
        answer:
          "Yes. Fenza takes on curtain wall, structural glazing, louvers, cladding, windows and doors in Ahmedabad, Gandhinagar, GIFT City, Vadodara, Surat, Rajkot and across Gujarat. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "How do you keep a glass building cool in Ahmedabad?",
        answer:
          "Combine external shading such as louvers and fins with solar-control or low-E double glazing and thermally broken frames. Shading outside the glass is the most effective step, because it stops heat before it enters.",
      },
      {
        question: "Which aluminium finish lasts best in Gujarat's sun?",
        answer:
          "PVDF coatings and good-quality anodising hold their colour longest under strong ultraviolet light. Near the coast, the coating system and fixings should also be chosen for salt air.",
      },
      {
        question: "Has Fenza's team worked in Gujarat before?",
        answer:
          "The project record of Akhilesh Kumar Singh, Fenza's Director for facade projects, includes glazing and ACP cladding for the Dee Development admin block in Bhuj, Kutch. This is his own career record, not a completed Fenza project.",
      },
    ],
  },
  pune: {
    covers: ["Hinjewadi", "Kharadi", "Magarpatta", "Pimpri-Chinchwad", "Chakan"],
    seoTitle: "Facade & Curtain Wall Company in Pune",
    description:
      "Monsoon-ready curtain wall, windows, rain-screen cladding and louvers for Pune's IT parks, factories and homes, engineered on Fenza's own aluminium line.",
    og: "/og/rain-screen-facade.jpg",
    intro:
      "Curtain wall, windows, rain-screen cladding and louvers for Pune's IT parks, factories and residential towers, designed for a long, wet monsoon.",
    context: [
      "Pune builds for technology and manufacturing. IT parks and offices cluster in areas like Hinjewadi, Kharadi and Magarpatta, the industrial belt runs through Pimpri-Chinchwad and Chakan, and residential towers keep rising across the city.",
      "What sets Pune apart for a facade is the monsoon. Weeks of steady, wind-driven rain test every joint, sill and drainage path. A facade here is judged less by how it looks on handover day than by whether it is still dry inside after its fifth monsoon.",
    ],
    climate: {
      summary:
        "A long monsoon with weeks of steady, wind-driven rain (much heavier on the Ghats to the west), milder summers than North India, and a pleasant, dry winter.",
      points: [
        "Water management comes first. Curtain wall and windows should be drained and pressure-equalised, so water that gets past the outer seal is led back out through {{drainage-slot|drainage slots}}.",
        "A {{rain-screen|rain-screen}} facade, with a {{ventilated-cavity|ventilated cavity}} behind the panels, handles sustained rain better than a sealed face that relies on sealant alone.",
        "Water-tightness should be proved on a {{mock-up|mock-up}}. The test usually used is {{astm-e331|ASTM E331}}, which sprays water on the facade under an air-pressure difference.",
        "{{sealant-joint|Sealant joints}} and {{gasket|gaskets}} must be specified and installed for long wet periods, and inspected after the first monsoon.",
      ],
    },
    systems: [
      { slug: "rain-screen-facade", why: "A drained, back-ventilated outer skin that copes with weeks of wind-driven rain." },
      { slug: "curtain-wall", why: "For IT parks and offices, with drained and pressure-equalised joints." },
      { slug: "casement-windows", why: "Windows that seal tightly against driving rain, with proper sill drainage." },
      { slug: "cladding", why: "Metal and composite cladding for factories and commercial buildings in the industrial belt." },
      { slug: "louvers", why: "Louvers designed to shed water while ventilating and shading." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Pune"),
    reading: [
      { to: "/journal/what-astm-e331-tests", label: "What ASTM E331 actually tests" },
      { to: "/journal/rain-screen-cladding-the-gap", label: "Rain-screen cladding: why the gap matters" },
      { to: "/testing", label: "How facades are tested" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on facade projects in Pune?",
        answer:
          "Yes. Fenza takes on curtain wall, windows and doors, rain-screen cladding, louvers and other envelope work for IT parks, factories and residential towers in Pune. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "How do you stop a facade leaking in Pune's monsoon?",
        answer:
          "Use drained, pressure-equalised curtain wall and windows so water that passes the outer seal drains back out, consider a rain-screen facade for solid walls, and prove water-tightness on a mock-up before production.",
      },
      {
        question: "What is a rain-screen facade and does it suit Pune?",
        answer:
          "A rain-screen is an outer skin of panels with a drained, ventilated gap behind it. Most rain is stopped by the panels and any that gets through drains and dries in the cavity, which suits long, wet monsoons.",
      },
      {
        question: "How is a project in Pune delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  bengaluru: {
    covers: ["Outer Ring Road", "Whitefield", "Electronic City", "North Bengaluru", "Hebbal"],
    seoTitle: "Facade Company in Bengaluru (Bangalore)",
    description:
      "Curtain wall, structural glazing, spider glazing, louvers and windows for tech campuses and homes in Bengaluru (Bangalore), made on Fenza's own aluminium line.",
    og: "/og/spider-glazing.jpg",
    intro:
      "Curtain wall, structural and spider glazing, louvers and windows for Bengaluru's tech campuses, offices and premium homes.",
    context: [
      "Bengaluru (Bangalore) is India's technology capital, and its skyline shows it: large tech campuses and office parks along the Outer Ring Road, in Whitefield, Electronic City and North Bengaluru, with premium apartments and villas around them.",
      "Campus buildings put the envelope on show. Glazed lobbies, atria and entrance screens are part of how a company presents itself, and long office floors need daylight without glare. Because the climate is mild, openable windows and ventilated facades are more useful here than in the hotter north.",
    ],
    climate: {
      summary:
        "A moderate climate for most of the year, warm rather than extreme, with rain from two monsoon seasons.",
      points: [
        "Glare, not just heat, drives the glass choice. {{low-e-coating|Low-E}} glass with the right light transmission keeps office floors bright and comfortable.",
        "Mild weather makes natural ventilation practical, so openable windows and {{louver|louvers}} earn their place.",
        "Rain comes in two seasons, so drained frames and well-detailed sills matter all year, not just in June.",
        "Large glazed lobbies and atria are often {{spider-fitting|point-fixed}} or carried on {{glass-fin|glass fins}}, which needs careful engineering of the glass and fixings.",
      ],
    },
    systems: [
      { slug: "curtain-wall", why: "For campus office buildings: long, repeated glazed elevations with daylight and glare control." },
      { slug: "spider-glazing", why: "Point-fixed glass for lobbies, atria and entrance screens." },
      { slug: "structural-glazing", why: "Flush glazed corporate elevations with no visible outer cap." },
      { slug: "louvers", why: "Shading and natural ventilation in a climate that rewards opening up." },
      { slug: "skylights", why: "Daylight for atria, food courts and circulation spaces on campus buildings." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Bengaluru"),
    reading: [
      { to: "/journal/spider-glazing-and-glass-fins", label: "Spider glazing and glass fins" },
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
      { to: "/journal/structural-glazing-explained", label: "Structural glazing explained" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on facade projects in Bengaluru?",
        answer:
          "Yes. Fenza takes on curtain wall, structural and spider glazing, louvers, skylights, windows and doors for tech campuses, offices and homes in Bengaluru (Bangalore). Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "What facade suits a tech campus in Bengaluru?",
        answer:
          "Typically curtain wall or structural glazing for the office blocks, with low-E glass chosen for daylight and glare control, spider glazing for lobbies and atria, and louvers for shading and ventilation.",
      },
      {
        question: "What is spider glazing?",
        answer:
          "Spider glazing holds glass at points, on stainless steel fittings, instead of in a frame. It is used for lobbies, atria and entrance screens where an almost frameless glass wall is wanted.",
      },
      {
        question: "How is a project in Bengaluru delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  faridabad: {
    covers: ["Greater Faridabad", "Ballabgarh", "Faridabad industrial areas", "Palwal"],
    seoTitle: "Facade and Glazing Company in Faridabad",
    description:
      "Curtain wall, glazing, cladding, windows and doors for factories, offices and high-rise homes in Faridabad, fabricated on Fenza's own line in the NCR.",
    og: "/og/sectors.jpg",
    intro:
      "Glazed office and admin fronts, cladding for industrial buildings, and windows, doors and railings for Faridabad's new high-rise housing, made on our own line in the NCR.",
    context: [
      "Faridabad is one of Haryana's oldest industrial cities, and much of its building stock is industrial: engineering works, component makers and warehouses, each with an office or administration block that faces the road. Around the old city, Greater Faridabad has added large residential towers, and commercial buildings have followed along the main roads into Delhi.",
      "That mix shapes the envelope. A factory wants a weather-tight, insulated skin and good daylight inside; its office block wants a presentable glazed front. A residential tower wants balcony doors, windows and railings in large repeated quantities, delivered in the order the floors are finished.",
    ],
    climate: {
      summary:
        "The NCR's composite climate: very hot summers, cold winters, a short heavy monsoon, and dust from roads and industry.",
      points: [
        "Industrial walls need continuous insulation and airtight joints so heat and dust stay out of the working space.",
        "Glazed admin fronts face the same summer sun as Delhi, so solar-control or {{low-e-coating|low-E}} glass and {{thermal-break|thermally broken}} frames pay back.",
        "Dust settles in sliding tracks and drainage paths. Profiles and {{drainage-slot|drainage slots}} should be easy to clean.",
        "On residential towers, balcony doors face wind-driven monsoon rain, so sills and tracks need a proper drainage route.",
      ],
    },
    systems: [
      { slug: "cladding", why: "Metal and composite cladding for factories, warehouses and podiums." },
      { slug: "structural-glazing", why: "Flush glazed fronts for office and administration blocks." },
      { slug: "sliding-windows-doors", why: "Balcony doors and windows for high-rise housing, with drained tracks." },
      { slug: "railings", why: "Glass and aluminium railings for balconies and terraces." },
      { slug: "skylights", why: "Daylight into production halls and atria." },
    ],
    record: [],
    delivery: NCR_DELIVERY,
    reading: [
      { to: "/journal/acp-vs-solid-aluminium-cladding", label: "ACP vs. solid aluminium cladding" },
      { to: "/journal/casement-or-sliding-windows", label: "Casement or sliding windows" },
      { to: "/journal/choosing-a-facade-contractor-in-india", label: "Choosing a facade contractor" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Faridabad?",
        answer:
          "Yes. Fenza takes on cladding, structural glazing, curtain wall, windows, doors and railings for factories, offices and housing in Faridabad and Greater Faridabad. Fabrication is on Fenza's own line in Gurugram, in the same NCR.",
      },
      {
        question: "What facade suits a factory office block in Faridabad?",
        answer:
          "Usually a glazed or structurally glazed front for the office, cladding for the rest of the building, and solar-control glass to keep the office cool. The production hall itself often needs insulated cladding and skylights rather than glass.",
      },
      {
        question: "Which windows suit high-rise flats in Faridabad?",
        answer:
          "Sliding doors and windows are common on balconies because they save space; casement windows seal tighter against dust and noise. Either way, drained sills and good gaskets matter for monsoon rain on upper floors.",
      },
      {
        question: "How do I get a facade quote for a Faridabad project?",
        answer:
          "Send elevations and sections, the facade areas by type, the building height and any performance requirements through the enquiry form or by email. A partial package is enough for a first scope and budget range.",
      },
    ],
  },
  ghaziabad: {
    covers: ["Indirapuram", "Vaishali", "Raj Nagar Extension", "Sahibabad", "Crossings Republik"],
    seoTitle: "Facade and Glazing Company in Ghaziabad",
    description:
      "Windows, balcony doors, railings, curtain wall and cladding for high-rise housing, commercial and industrial buildings in Ghaziabad, made on Fenza's NCR line.",
    og: "/og/railings.jpg",
    intro:
      "Windows, balcony doors and railings for Ghaziabad's residential towers, and glazing and cladding for its commercial and industrial buildings.",
    context: [
      "East of Delhi, Ghaziabad has grown into one of the NCR's largest housing markets. Indirapuram, Vaishali, Raj Nagar Extension and Crossings Republik are dense with residential towers, and commercial centres have grown up around them. Older industrial areas such as Sahibabad sit alongside.",
      "Housing at this scale makes the facade a production job. Thousands of near-identical windows, balcony doors and railings have to be made consistently, delivered floor by floor and installed safely at height. Small details, such as how a sill drains or how a railing is fixed to the slab edge, are repeated hundreds of times, so they are worth getting right on the first floor.",
    ],
    climate: {
      summary:
        "The NCR's composite climate: very hot summers, cold winters, monsoon rain and dust.",
      points: [
        "Upper floors of towers see stronger wind and wind-driven rain than the street suggests, so windows and doors need drained sills and continuous {{gasket|gaskets}}.",
        "West-facing flats overheat in summer. {{low-e-coating|Low-E}} glass and shading on the worst elevations make a real difference to comfort.",
        "Glass {{balustrade|balustrades}} at height must be designed for wind and for impact, with the right safety glass and fixings.",
        "Traffic dust and pollution call for profiles and tracks that are easy to clean.",
      ],
    },
    systems: [
      { slug: "sliding-windows-doors", why: "Space-saving balcony doors and windows for flats, in large repeated quantities." },
      { slug: "casement-windows", why: "Windows that seal tightly against dust, noise and driving rain." },
      { slug: "railings", why: "Glass balustrades and aluminium railings for balconies, terraces and podiums." },
      { slug: "curtain-wall", why: "Glazed elevations for commercial and office buildings." },
      { slug: "cladding", why: "Cladding for podiums, service cores and industrial buildings." },
    ],
    record: [],
    delivery: NCR_DELIVERY,
    reading: [
      { to: "/journal/glass-balustrades-what-to-check", label: "Glass balustrades: what to check" },
      { to: "/journal/casement-or-sliding-windows", label: "Casement or sliding windows" },
      { to: "/journal/monsoon-proof-facades-and-windows", label: "Monsoon-proof facades and windows" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering work in Ghaziabad?",
        answer:
          "Yes. Fenza takes on windows, balcony doors, railings, curtain wall and cladding for residential towers, commercial and industrial buildings across Ghaziabad. Fabrication is on Fenza's own line in Gurugram, in the same NCR.",
      },
      {
        question: "What should I check in glass balustrades for a high-rise in Ghaziabad?",
        answer:
          "Check that the glass is a safety glass suitable for the height and the fixing method, usually laminated, and that the base shoe or posts are designed for the loads set by the engineer. Ask how the railing behaves if a pane breaks.",
      },
      {
        question: "Sliding or casement windows for a flat?",
        answer:
          "Sliding windows save space and suit balconies; casement windows seal tighter against dust, noise and rain. Many projects use sliding doors to the balcony and casement windows in bedrooms.",
      },
      {
        question: "How do I get a facade quote for a Ghaziabad project?",
        answer:
          "Send elevations and sections, window and door schedules if you have them, the building height and the finish you want through the enquiry form or by email. A partial package is enough for a first scope.",
      },
    ],
  },
  sonipat: {
    covers: ["Sonipat", "Kundli", "Rai", "Panipat", "Samalkha", "Karnal"],
    seoTitle: "Facade Company in Sonipat and Panipat",
    description:
      "Glazing, curtain wall, cladding, windows and doors for campuses, factories and homes in Sonipat, Kundli and Panipat, made on Fenza's own aluminium line.",
    og: "/og/leadership-hero.jpg",
    intro:
      "Glazed campus buildings, factory envelopes and homes along the GT Road corridor, from Kundli and Sonipat to Panipat.",
    context: [
      "North of Delhi, Sonipat has become an education city. Large private university campuses have been built around it, alongside new housing and the industrial estates of Kundli and Rai. Further up the GT Road, Panipat is known for its textile and handloom industry, with mills, warehouses and export houses.",
      "Campus buildings ask for generous glazing, daylight and durable, low-maintenance finishes, because they are used hard and maintained on tight budgets. Factories and mills want insulated, weather-tight walls, ventilation and daylight, with a presentable front for the office.",
    ],
    climate: {
      summary:
        "A composite climate on the Haryana plains: very hot summers, cold and often foggy winters, monsoon rain and dust.",
      points: [
        "Large campus glazing needs solar-control or {{low-e-coating|low-E}} glass and shading on east and west faces to keep classrooms and libraries comfortable.",
        "Winter fog and cold make {{thermal-break|thermally broken}} frames with {{double-glazed-unit|double glazing}} worthwhile in buildings used all year.",
        "Mills and factories need continuous insulation, airtight joints and {{louver|louvers}} for controlled ventilation.",
        "Durable finishes such as {{pvdf-coating|PVDF}} or {{anodising|anodising}} keep maintenance down on buildings that are cleaned rarely.",
      ],
    },
    systems: [
      { slug: "curtain-wall", why: "Glazed academic and administrative buildings with daylight and solar control." },
      { slug: "spider-glazing", why: "Point-fixed glass for campus lobbies, libraries and entrance halls." },
      { slug: "cladding", why: "Metal and composite cladding for mills, factories and warehouses." },
      { slug: "louvers", why: "Shading for glazed campus elevations and ventilation for industrial buildings." },
      { slug: "casement-windows", why: "Windows for hostels, homes and offices that seal well through foggy winters." },
    ],
    record: [],
    delivery: NCR_DELIVERY,
    reading: [
      { to: "/journal/spider-glazing-and-glass-fins", label: "Spider glazing and glass fins" },
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
      { to: "/journal/anodised-powder-coated-or-pvdf", label: "Anodised, powder-coated or PVDF" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Sonipat and Panipat?",
        answer:
          "Yes. Fenza takes on curtain wall, spider glazing, cladding, louvers, windows and doors for campuses, factories and homes in Sonipat, Kundli, Rai, Panipat and along the GT Road corridor. Fabrication is on Fenza's own line in Gurugram.",
      },
      {
        question: "What facade suits a university or school building?",
        answer:
          "Glazing chosen for daylight with solar control, shading on east and west faces, openable windows where natural ventilation helps, and durable finishes that need little maintenance. Entrance halls and libraries often use spider or structural glazing.",
      },
      {
        question: "What facade suits a textile mill or factory in Panipat?",
        answer:
          "Usually insulated wall cladding for the production hall, louvers for ventilation, skylights or high-level glazing for daylight, and a glazed front for the office. The specification depends on the process inside.",
      },
      {
        question: "How do I get a facade quote for a project near Sonipat or Panipat?",
        answer:
          "Send elevations and sections, the facade areas by type and the building use through the enquiry form or by email. A partial package is enough for a first scope and budget range.",
      },
    ],
  },
  amritsar: {
    covers: ["Amritsar", "Ranjit Avenue", "the airport road", "Jalandhar", "Batala"],
    seoTitle: "Facade and Glazing Company in Amritsar",
    description:
      "Hotel and commercial glazing, glass entrance doors, windows, slide-and-fold doors and railings for Amritsar and nearby Punjab, made on Fenza's aluminium line.",
    og: "/og/slide-and-fold-doors.jpg",
    intro:
      "Glazed hotel and commercial fronts, entrance doors, and windows and folding doors for premium homes across Amritsar and nearby Punjab.",
    context: [
      "Amritsar is one of India's great pilgrimage cities, and that drives much of its building: hotels and guest houses close to the Golden Temple and along the main roads, restaurants and showrooms, and commercial complexes. Around them, the city has a strong tradition of large private homes built to a high specification.",
      "Hotels and showrooms want an inviting glazed front and an entrance that works hard all day. Homes want windows that keep out a cold Punjab winter, and wide doors that open to lawns and terraces in good weather.",
    ],
    climate: {
      summary:
        "A composite climate on the Punjab plains, with cold and foggy winters, hot summers and monsoon rain.",
      points: [
        "Cold winters make {{thermal-break|thermally broken}} frames and {{double-glazed-unit|double glazing}} worthwhile in hotel rooms and homes, cutting heat loss and condensation.",
        "Glazed fronts face hot summer sun, so solar-control or {{low-e-coating|low-E}} glass protects comfort inside.",
        "Busy entrances need robust doors: patch-fitted glass doors on floor springs, with {{toughened-glass|toughened}} or {{laminated-glass|laminated}} safety glass.",
        "Dust from busy roads calls for well-sealed openings and finishes that are easy to clean.",
      ],
    },
    systems: [
      { slug: "frameless-glass-doors", why: "Patch-fitted glass entrance doors for hotels, restaurants and showrooms." },
      { slug: "structural-glazing", why: "Flush glazed fronts for hotels and commercial buildings." },
      { slug: "casement-windows", why: "Windows that seal tightly through cold, foggy winters." },
      { slug: "slide-and-fold-doors", why: "Wide openings from living rooms to lawns and terraces in premium homes." },
      { slug: "railings", why: "Glass and aluminium railings for balconies, terraces and stairs." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Amritsar"),
    reading: [
      { to: "/journal/slide-and-fold-doors-what-to-check", label: "Slide-and-fold doors: what to check" },
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
      { to: "/journal/thermal-breaks-in-aluminium-frames", label: "Thermal breaks in aluminium frames" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Amritsar?",
        answer:
          "Yes. Fenza takes on structural glazing, frameless glass doors, windows, slide-and-fold doors and railings for hotels, commercial buildings and homes in Amritsar and nearby Punjab. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "What entrance doors suit a hotel in Amritsar?",
        answer:
          "Patch-fitted frameless glass doors on floor springs are common for hotel and showroom entrances. They need the right safety glass and hardware rated for heavy daily use.",
      },
      {
        question: "Which windows keep a Punjab home warm in winter?",
        answer:
          "As general guidance, thermally broken aluminium frames with double-glazed units and good seals. Casement windows usually seal tighter than sliding ones on cold, windy days.",
      },
      {
        question: "How is a project in Amritsar delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  shimla: {
    covers: ["Shimla", "Solan", "Kasauli", "Baddi", "Manali", "Dharamshala"],
    seoTitle: "Facade Company in Shimla and Himachal",
    description:
      "Windows, glazing, skylights, cladding and railings for hotels, homes and industry in Shimla and across Himachal Pradesh, made on Fenza's aluminium line.",
    og: "/og/structural-glazing.jpg",
    intro:
      "Windows, glazing, skylights and cladding for hill hotels, homes and institutions, and for the industrial belt around Baddi.",
    context: [
      "Building in Himachal Pradesh is shaped by the hills. Hotels and resorts in Shimla, Kasauli, Manali and Dharamshala want big views and warm rooms at the same time. Homes and institutions are built on steep, tight sites. In the south of the state, Baddi and the surrounding industrial area are a major centre for pharmaceutical and other manufacturing, with factory envelopes to match.",
      "Planning rules in hill towns, including Shimla, can limit building height and construction in some areas, so confirm with your architect what applies to the site before the facade is designed. Access matters too: the size of unit that can reach a hill site, and how it is lifted into place, can decide the facade system.",
    ],
    climate: {
      summary:
        "A cold hill climate in the upper towns, with snow in winter and heavy monsoon rain, and a warmer climate in the lower valleys and Baddi.",
      points: [
        "Keeping heat in comes first in the hills. {{thermal-break|Thermally broken}} frames, {{double-glazed-unit|double glazing}} and airtight seals cut heat loss and condensation.",
        "Snow load on {{skylight|skylights}}, canopies and pergolas is set by the structural engineer for the site, and the framing and glass are sized to it.",
        "Heavy monsoon rain on exposed slopes calls for drained frames, well-detailed sills and proper flashing where the facade meets the roof.",
        "The region is earthquake-prone, so brackets and {{movement-joint|movement joints}} must accommodate the building movement the structural engineer sets.",
      ],
    },
    systems: [
      { slug: "casement-windows", why: "Tight-sealing, thermally broken windows for cold hill winters." },
      { slug: "sliding-windows-doors", why: "Large sliding openings for views from hotels and homes, with drained tracks." },
      { slug: "skylights", why: "Daylight for hotel atria and lobbies, framed for the site's snow load." },
      { slug: "cladding", why: "Metal cladding for factories and warehouses in the Baddi industrial area." },
      { slug: "railings", why: "Glass and aluminium railings for balconies and terraces with a view." },
    ],
    record: [],
    delivery:
      "Every Fenza facade is engineered and fabricated on our own line in Gurugram. Hill sites change the logistics: road access, the size of unit that can reach the site and how it is lifted into place are planned with you at the quote stage, so the programme is clear before anything is made.",
    reading: [
      { to: "/journal/thermal-breaks-in-aluminium-frames", label: "Thermal breaks in aluminium frames" },
      { to: "/journal/movement-joints-in-facades", label: "Movement joints in facades" },
      { to: "/journal/facades-for-indian-climates", label: "Facades for India's climates" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Himachal Pradesh?",
        answer:
          "Yes. Fenza takes on windows, glazing, skylights, cladding and railings for hotels, homes, institutions and factories in Shimla, Solan, Kasauli, Baddi, Manali, Dharamshala and across Himachal Pradesh. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "Which windows suit a hotel or home in the hills?",
        answer:
          "As general guidance, thermally broken aluminium frames with double-glazed units and airtight seals, to keep rooms warm and limit condensation. Large view windows need glass and frames sized for the site's wind exposure.",
      },
      {
        question: "Can skylights be used where it snows?",
        answer:
          "Yes, if the framing and glass are designed for the snow load the structural engineer sets for the site, with laminated glass overhead and proper drainage and condensation channels.",
      },
      {
        question: "How is a facade delivered to a hill site?",
        answer:
          "Facades are fabricated in Gurugram and delivered in the sequence the site needs. Road access, unit sizes and lifting are planned at the quote stage, which can affect the choice of system.",
      },
    ],
  },
  dehradun: {
    covers: ["Dehradun", "Mussoorie", "Rishikesh", "Haridwar", "the Haridwar industrial estate"],
    seoTitle: "Facade Company in Dehradun and Haridwar",
    description:
      "Monsoon-ready windows, glazing, cladding and skylights for institutions, hotels, homes and factories in Dehradun, Haridwar and Rishikesh, made by Fenza.",
    og: "/og/skylights.jpg",
    intro:
      "Windows, glazing, cladding and skylights for schools and institutions, hotels, homes and factories in the Doon valley and around Haridwar.",
    context: [
      "Dehradun, the capital of Uttarakhand, is known for its schools, colleges and national institutions, and it has grown fast with housing and commercial buildings. Mussoorie and Rishikesh draw hotels and resorts, and Haridwar adds a large industrial estate alongside its pilgrimage trade.",
      "Each brings a different envelope: durable, daylit buildings for institutions; hotels that want views and comfortable rooms; and factories that need weather-tight, insulated walls. Across all of them, the monsoon is the defining test.",
    ],
    climate: {
      summary:
        "A wet foothill climate: a long and heavy monsoon, warm summers and cool winters, in an earthquake-prone part of the Himalaya.",
      points: [
        "Heavy, sustained monsoon rain makes water management the priority: drained, pressure-equalised frames, {{drainage-slot|drainage slots}} that stay clear, and a {{rain-screen|rain-screen}} for solid walls.",
        "Water-tightness should be proved on a {{mock-up|mock-up}} before production, with a site water check on the first installed areas.",
        "Cool winters make {{thermal-break|thermally broken}} frames with {{double-glazed-unit|double glazing}} worthwhile in homes, hostels and hotels.",
        "The Himalayan foothills are earthquake-prone, so brackets and {{movement-joint|movement joints}} must accommodate the building movement the structural engineer sets.",
      ],
    },
    systems: [
      { slug: "casement-windows", why: "Windows that seal against driving rain, for institutions, hostels and homes." },
      { slug: "rain-screen-facade", why: "A drained, ventilated outer skin that handles a long, wet monsoon." },
      { slug: "curtain-wall", why: "Glazed elevations for institutional and commercial buildings, with drained joints." },
      { slug: "cladding", why: "Cladding for factories in the Haridwar industrial estate." },
      { slug: "skylights", why: "Daylight for atria, halls and corridors, with internal gutters for heavy rain." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Dehradun, Haridwar and Rishikesh"),
    reading: [
      { to: "/journal/monsoon-proof-facades-and-windows", label: "Monsoon-proof facades and windows" },
      { to: "/journal/rain-screen-cladding-the-gap", label: "Rain-screen cladding: why the gap matters" },
      { to: "/journal/what-astm-e331-tests", label: "What ASTM E331 actually tests" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Dehradun and Haridwar?",
        answer:
          "Yes. Fenza takes on windows, curtain wall, rain-screen cladding, cladding and skylights for institutions, hotels, homes and factories in Dehradun, Mussoorie, Rishikesh, Haridwar and across Uttarakhand. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "How do you keep a facade dry in Dehradun's monsoon?",
        answer:
          "Use drained, pressure-equalised windows and curtain wall so water that passes the outer seal drains back out, a rain-screen for solid walls, and prove water-tightness on a mock-up before production.",
      },
      {
        question: "What facade suits a school or institutional building?",
        answer:
          "Durable, low-maintenance finishes, daylight with glare control, openable windows that seal well against rain, and a drained facade system. Atria and corridors can use skylights with internal gutters.",
      },
      {
        question: "How is a project in Uttarakhand delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  jaipur: {
    covers: ["Jaipur", "Tonk Road", "Malviya Nagar", "Sitapura", "Mahindra World City"],
    seoTitle: "Facade and Glazing Company in Jaipur",
    description:
      "Louvers, solar-control glazing, curtain wall, cladding and pergolas for hotels, offices and homes in Jaipur, designed for heat and made on Fenza's own line.",
    og: "/og/pergolas.jpg",
    intro:
      "Shading, solar-control glazing, cladding and pergolas for hotels, offices, institutions and homes in Rajasthan's capital.",
    context: [
      "Jaipur's buildings carry a strong sense of place. The walled city has its own rules on how building fronts look, and much new work, especially hotels, borrows from the city's heritage of screens, courtyards and shade. Beyond the old city, offices, institutions and housing have spread along the main roads, and Sitapura and Mahindra World City add industry and IT.",
      "Before choosing a facade near the old city or a protected monument, confirm with the architect which controls apply. Elsewhere, the brief is about heat: glass that keeps rooms cool, shading that works with the architecture, and finishes that survive strong sun.",
    ],
    climate: {
      summary:
        "A hot, semi-arid climate: long, intense summers, strong sun, dust storms before the monsoon, and cool winter nights.",
      points: [
        "Stop the sun outside the glass. Fixed {{louver|louvers}}, fins and screens on east, west and south faces cut {{solar-heat-gain|solar heat gain}} and echo Jaipur's tradition of shade.",
        "Solar-control or {{low-e-coating|low-E}} {{double-glazed-unit|double glazing}}, chosen with the facade consultant, keeps rooms cool without darkening them.",
        "Strong ultraviolet light fades weaker coatings. {{pvdf-coating|PVDF}} and good {{anodising|anodising}} hold their colour longer.",
        "Dust storms test every seal. Continuous {{gasket|gaskets}} and drainage paths that are easy to clear keep the facade sealed.",
      ],
    },
    systems: [
      { slug: "louvers", why: "Sun-shading fins and louvers, the first defence against Rajasthan's heat." },
      { slug: "curtain-wall", why: "Glazed office and institutional elevations with solar-control glass." },
      { slug: "pergolas", why: "Aluminium pergolas for hotel terraces, courtyards and rooftops." },
      { slug: "cladding", why: "Durable metal cladding in colours that hold up to strong sun." },
      { slug: "frameless-glass-doors", why: "Glass entrance doors for hotels, restaurants and showrooms." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Jaipur"),
    reading: [
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
      { to: "/journal/facades-for-indian-climates", label: "Facades for India's climates" },
      { to: "/journal/anodised-powder-coated-or-pvdf", label: "Anodised, powder-coated or PVDF" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Jaipur?",
        answer:
          "Yes. Fenza takes on louvers, curtain wall, cladding, pergolas, glass doors, windows and other envelope work for hotels, offices, institutions and homes in Jaipur and across Rajasthan. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "How do you keep a glazed building cool in Jaipur?",
        answer:
          "Combine external shading such as louvers, fins or screens with solar-control or low-E double glazing and thermally broken frames. Shading outside the glass is the most effective step.",
      },
      {
        question: "Are there rules on facades near Jaipur's old city?",
        answer:
          "Often, yes. The walled city and areas near protected monuments have controls on how buildings look and what can be built. Your architect will confirm what applies to the plot before the facade is designed.",
      },
      {
        question: "How is a project in Jaipur delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  bhiwadi: {
    covers: ["Bhiwadi", "Neemrana", "Khushkhera", "Chopanki", "Dharuhera"],
    seoTitle: "Facade Company in Bhiwadi and Neemrana",
    description:
      "Industrial cladding, skylights, louvers and glazed admin fronts for factories in Bhiwadi, Neemrana and the Delhi–Jaipur belt, made on Fenza's nearby line.",
    og: "/og/cladding.jpg",
    intro:
      "Cladding, skylights, louvers and glazed office fronts for factories and warehouses along the Delhi–Jaipur industrial belt.",
    context: [
      "Bhiwadi and Neemrana, on Rajasthan's side of the Delhi–Jaipur corridor, are factory towns. Their industrial areas host automotive, component, consumer-goods and warehousing plants, and Neemrana is known for its Japanese investment zone. Most buildings here are production halls and warehouses, each with an office or administration block.",
      "Factory envelopes are judged on practical things: how well the walls keep out heat and dust, how much daylight reaches the floor, how the building is ventilated, and how quickly it can be closed in so production can start. The admin block is the company's face, so it usually gets a glazed front.",
    ],
    climate: {
      summary:
        "A hot, semi-arid climate at the edge of Rajasthan: very hot summers, dust, monsoon downpours and cool winters.",
      points: [
        "Insulated wall cladding and airtight joints keep heat and dust out of production halls.",
        "{{skylight|Skylights}} and high-level glazing bring daylight to the factory floor, cutting daytime lighting.",
        "{{louver|Louvers}} handle ventilation and screen plant while keeping rain out.",
        "Glazed admin fronts need solar-control or {{low-e-coating|low-E}} glass and {{thermal-break|thermally broken}} frames for the summer sun.",
      ],
    },
    systems: [
      { slug: "cladding", why: "Metal and composite cladding for production halls and warehouses." },
      { slug: "skylights", why: "Daylight for the factory floor, with internal gutters for monsoon rain." },
      { slug: "louvers", why: "Ventilation and plant screening for industrial buildings." },
      { slug: "structural-glazing", why: "Flush glazed fronts for office and administration blocks." },
      { slug: "frameless-glass-doors", why: "Glass entrance doors for reception and visitor areas." },
    ],
    record: [],
    delivery:
      "Bhiwadi and Neemrana are within easy road reach of our fabrication line in Gurugram. Site visits, the measured survey and mock-up reviews are straightforward to arrange, and fabricated frames and panels reach site in the sequence the installation needs.",
    reading: [
      { to: "/journal/acp-vs-solid-aluminium-cladding", label: "ACP vs. solid aluminium cladding" },
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
      { to: "/journal/choosing-a-facade-contractor-in-india", label: "Choosing a facade contractor" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering work in Bhiwadi and Neemrana?",
        answer:
          "Yes. Fenza takes on cladding, skylights, louvers, structural glazing and glass doors for factories, warehouses and admin blocks in Bhiwadi, Neemrana, Khushkhera, Chopanki and along the Delhi–Jaipur industrial belt. Fabrication is on Fenza's own line in Gurugram.",
      },
      {
        question: "What facade suits a factory in Bhiwadi or Neemrana?",
        answer:
          "Usually insulated wall cladding for the production hall, skylights for daylight, louvers for ventilation, and a glazed front for the admin block. The specification depends on the process and the climate inside.",
      },
      {
        question: "Can skylights keep a factory cool enough?",
        answer:
          "Skylights should be sized and glazed for daylight without excess heat: solar-control glazing, the right area for the floor, and shading where needed. The design is balanced with the building's ventilation.",
      },
      {
        question: "How do I get a facade quote for a factory project?",
        answer:
          "Send the building drawings, the facade and roof-light areas, the building use and any performance requirements through the enquiry form or by email. A partial package is enough for a first scope and budget range.",
      },
    ],
  },
  lucknow: {
    covers: ["Gomti Nagar", "Shaheed Path", "Hazratganj", "Sushant Golf City", "Kanpur"],
    seoTitle: "Facade and Glazing Company in Lucknow",
    description:
      "Curtain wall, structural glazing, skylights, windows and cladding for government, institutional, hospital and commercial buildings in Lucknow, made by Fenza.",
    og: "/og/resources-hero.jpg",
    intro:
      "Curtain wall, glazing, skylights, windows and cladding for Lucknow's government and institutional buildings, hospitals, offices and homes.",
    context: [
      "Lucknow, the capital of Uttar Pradesh, builds for government, institutions and healthcare as much as for commerce. Public buildings, universities, hospitals and offices sit alongside malls, hotels and a fast-growing residential belt around Gomti Nagar and Shaheed Path. The city's architectural heritage also shapes taste: arches, domes and generous public spaces.",
      "Institutional and public buildings are built to last and are often maintained on fixed budgets, so durability and ease of maintenance matter more than novelty. Large halls, atria and malls bring skylights and big glazed spans into the brief.",
    ],
    climate: {
      summary:
        "A composite climate on the Gangetic plain: very hot summers, cold and foggy winters, a humid monsoon and dust.",
      points: [
        "Large glazed elevations need solar-control or {{low-e-coating|low-E}} glass and shading on east and west faces.",
        "{{thermal-break|Thermally broken}} frames help in both seasons, keeping summer heat out and winter warmth in.",
        "{{skylight|Skylights}} over atria and halls need internal gutters and condensation channels for a humid monsoon.",
        "Durable finishes such as {{pvdf-coating|PVDF}} or {{anodising|anodising}} reduce maintenance on public buildings.",
      ],
    },
    systems: [
      { slug: "curtain-wall", why: "Glazed elevations for offices, institutions and hospitals." },
      { slug: "structural-glazing", why: "Flush glazed fronts for public buildings, hotels and malls." },
      { slug: "skylights", why: "Daylight for atria, halls and malls, with drainage designed in." },
      { slug: "casement-windows", why: "Openable windows that seal well, for hospitals, hostels and homes." },
      { slug: "cladding", why: "Durable metal cladding for institutional and commercial buildings." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Lucknow"),
    reading: [
      { to: "/journal/structural-glazing-explained", label: "Structural glazing explained" },
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
      { to: "/journal/choosing-a-facade-contractor-in-india", label: "Choosing a facade contractor" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Lucknow?",
        answer:
          "Yes. Fenza takes on curtain wall, structural glazing, skylights, windows, doors and cladding for government, institutional, hospital, commercial and residential buildings in Lucknow and across Uttar Pradesh. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "What facade suits a hospital or institutional building?",
        answer:
          "Windows and glazing that seal well against dust and noise, glass that controls heat without darkening rooms, durable finishes that are easy to clean, and safe access for maintenance. The specification is set with the facade consultant.",
      },
      {
        question: "What should I check before specifying a large skylight?",
        answer:
          "Check the glass type for overhead use, usually laminated, the drainage and condensation channels in the framing, how it will be cleaned, and how it handles heat gain in summer.",
      },
      {
        question: "How is a project in Lucknow delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
  agra: {
    covers: ["Agra", "Fatehabad Road", "Sikandra", "Mathura", "Vrindavan"],
    seoTitle: "Facade and Glazing Company in Agra",
    description:
      "Hotel glazing, glass entrance doors, windows, louvers and pergolas for hotels, commercial buildings and homes in Agra, Mathura and Vrindavan, made by Fenza.",
    og: "/og/contact-hero.jpg",
    intro:
      "Glazing, entrance doors, windows, louvers and pergolas for Agra's hotels, commercial buildings and homes, and for Mathura and Vrindavan nearby.",
    context: [
      "Agra is defined by the Taj Mahal and the visitors it draws. Hotels, from large properties to boutique stays, line the roads towards the monuments, along with restaurants, showrooms and craft emporiums. Mathura and Vrindavan nearby add pilgrimage hotels, ashrams and guest houses.",
      "Construction near protected monuments is regulated, and the area around the Taj has its own environmental controls. Before choosing a facade, confirm with the architect what applies to the site. For hotels, the envelope is part of the guest experience: welcoming entrances, quiet, comfortable rooms and terraces that make the most of the view.",
    ],
    climate: {
      summary:
        "A composite climate on the Yamuna plain: very hot summers, cold winter nights, monsoon rain and dust.",
      points: [
        "Solar-control or {{low-e-coating|low-E}} glass and external shading keep hotel rooms and lobbies cool through long summers.",
        "Good seals and {{double-glazed-unit|double glazing}} keep out dust and road noise, which matters as much to hotel guests as temperature.",
        "Terraces and rooftops gain from {{pergola|pergolas}} and fins that shade without closing in the view.",
        "Entrances used all day need robust hardware and safety glass.",
      ],
    },
    systems: [
      { slug: "frameless-glass-doors", why: "Patch-fitted glass entrance doors for hotel lobbies and showrooms." },
      { slug: "structural-glazing", why: "Flush glazed fronts for hotels and commercial buildings." },
      { slug: "casement-windows", why: "Quiet, tight-sealing windows for hotel rooms and homes." },
      { slug: "louvers", why: "Shading for sun-facing elevations that keeps the architecture light." },
      { slug: "pergolas", why: "Aluminium pergolas for rooftop restaurants and terraces." },
    ],
    record: [],
    delivery: FAR_DELIVERY("Agra, Mathura and Vrindavan"),
    reading: [
      { to: "/journal/choosing-facade-glass", label: "Choosing facade glass" },
      { to: "/journal/louvers-and-sun-shading-fins", label: "Louvers and sun-shading fins" },
      { to: "/journal/casement-or-sliding-windows", label: "Casement or sliding windows" },
    ],
    faq: [
      {
        question: "Does Fenza Facade Engineering take on projects in Agra?",
        answer:
          "Yes. Fenza takes on structural glazing, frameless glass doors, windows, louvers and pergolas for hotels, commercial buildings and homes in Agra, Mathura and Vrindavan. Facades are engineered and fabricated on Fenza's own line in Gurugram.",
      },
      {
        question: "Are there rules on building near the Taj Mahal?",
        answer:
          "Yes. Construction near protected monuments is regulated, and the area around the Taj has environmental controls. Your architect will confirm what applies to the site before the facade is designed.",
      },
      {
        question: "Which windows keep a hotel room quiet and cool?",
        answer:
          "As general guidance, double-glazed units with solar-control or low-E glass in well-sealed frames. Casement windows usually seal tighter than sliding ones, which helps with both noise and dust.",
      },
      {
        question: "How is a project in Agra delivered from Gurugram?",
        answer:
          "Facades are engineered and fabricated on Fenza's line in Gurugram, then delivered to site in the sequence the installation needs. The site visit, delivery plan and installation are agreed at the quote stage.",
      },
    ],
  },
};

export type Location = LocationBase & LocationContent;

/** Every city in the index, joined with its page text. A city with no text fails loudly. */
export const LOCATIONS: Location[] = LOCATION_INDEX.map((base) => {
  const content = CONTENT[base.slug];
  if (!content) throw new Error(`locations.ts: no page content for "${base.slug}"`);
  return { ...base, ...content };
});

export const getLocation = (slug: string): Location | undefined =>
  LOCATIONS.find((l) => l.slug === slug);
