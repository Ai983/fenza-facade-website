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
    covers: ["New Delhi", "South Delhi", "Dwarka", "Aerocity", "Faridabad"],
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
    covers: ["Greater Noida", "Noida–Greater Noida Expressway", "Ghaziabad"],
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
    covers: ["Ludhiana", "Jalandhar", "Amritsar", "Patiala", "Bathinda"],
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
