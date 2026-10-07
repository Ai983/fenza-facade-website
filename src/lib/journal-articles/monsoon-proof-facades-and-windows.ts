import type { Article } from "../journal";

const article: Article = {
  slug: "monsoon-proof-facades-and-windows",
  title: "Monsoon-proof facades and windows: how to keep the rain out",
  seoTitle: "Monsoon-Proof Facades and Windows",
  description:
    "Why facades and windows leak in the monsoon, and how to design, specify, test, install and maintain them so wind-driven rain stays outside.",
  excerpt:
    "Most monsoon leaks have ordinary causes: wind-driven rain, blocked drainage, failed sealant and poor sill details. Here is how to design, test, install and maintain facades and windows so they stay dry.",
  teaser: "Why facades leak in the monsoon, and how to keep the rain out.",
  topic: "Performance",
  date: "2026-10-07",
  hero: "monsoon-hero",
  card: "monsoon-card",
  og: "/og/rain-screen-facade.jpg",
  terms: ["drainage-slot", "gasket", "sealant-joint", "rain-screen", "pressure-plate", "mock-up", "astm-e331", "facade-consultant"],
  systems: ["curtain-wall", "casement-windows", "sliding-windows-doors", "rain-screen-facade"],
  faq: [
    {
      question: "Why do windows and facades leak in the monsoon?",
      answer:
        "Wind-driven rain and pressure differences push water into joints that stay dry in still rain. Most leaks come from blocked drainage slots, failed sealant, gaskets shrunk back from corners, poor sill details and the joint between the frame and the wall.",
    },
    {
      question: "What is a pressure-equalised facade?",
      answer:
        "It is a drained design built in layers. The space behind the outer seal is vented to the outside, so there is little pressure difference to drive water inwards, and water that gets past the outer line drains back out through weep paths before it reaches the inner seal.",
    },
    {
      question: "Should facade joints use gaskets or sealant?",
      answer:
        "Most good facades use both: gaskets for the main weather seals within the aluminium system, and sealant at the interfaces, such as frame to wall and facade to structure. Sealant depends heavily on joint design, clean and dry surfaces and careful application.",
    },
    {
      question: "What should be checked on a facade before the monsoon?",
      answer:
        "Clear sill tracks, drainage slots and weep holes, check sealant joints for cracks and loss of adhesion, and look for shrunk or perished gaskets. Check that vents close fully, look inside for signs of past leaks, and make sure no new fixings have been driven through the facade without sealing.",
    },
  ],
  body: [
    {
      t: "p",
      x: "The first heavy monsoon is the real test of a facade. A wall that looked fine in the dry months can show damp patches and wet floors once the wind-driven rain arrives. Monsoon-heavy cities such as Pune and Mumbai, and coastal cities exposed to strong onshore winds, test these details hardest. Most leaks have ordinary causes, and most can be designed out, tested for and checked before handover.",
    },
    { t: "h2", x: "Why facades leak in the monsoon" },
    {
      t: "p",
      x: "Water needs three things to get through a facade: water on the surface, an opening, and a force to push it through. In a monsoon storm all three are present at once. Rain is driven sideways and even upwards by the wind, it runs down the face in sheets, and it collects at every ledge, sill and joint.",
    },
    {
      t: "ul",
      items: [
        "Wind-driven rain. Wind pushes water into joints that stay dry in still rain, and carries it to places a vertical shower never reaches, such as the underside of a transom or the head of a window.",
        "Pressure difference. When the air pressure outside is higher than inside, the facade acts like a pump and pushes water through any gap it can find. Tall buildings and exposed corners see this most.",
        "Gravity. Water runs down the face and back into joints unless a slope or a drip sends it away.",
        "Capillary action. Narrow gaps between surfaces draw water in, even uphill, unless the gap is widened or broken.",
      ],
    },
    { t: "h2", x: "Where the water actually gets in" },
    {
      t: "p",
      x: "Monsoon leaks rarely start in the middle of a pane. They start at the details:",
    },
    {
      t: "ul",
      items: [
        "Blocked {{drainage-slot|drainage slots}} and weep holes, filled with dust, construction debris, paint or sealant, so water that enters a frame cannot get out.",
        "Failed or badly applied sealant, with gaps, poor adhesion or more movement than the joint can take.",
        "{{gasket|Gaskets}} cut short, stretched during fitting, or shrunk back from the corners.",
        "Sills without an upstand, end dams or a fall to the outside, so water pools and finds its way in under the frame.",
        "The joint between the window frame and the wall, which is often left to whoever plasters the opening.",
        "The slab edge, where the facade meets the structure and several trades meet each other.",
        "Site damage: frames knocked during installation, debris left in tracks, and fixings driven through the weather line without being sealed.",
      ],
    },
    { t: "h2", x: "Design: let the system drain" },
    {
      t: "p",
      x: "A facade that relies on one perfect seal will leak sooner or later. A monsoon-proof facade is designed in layers. The outer line stops most of the water. Behind it is a drained space, and behind that an inner seal that is kept dry and airtight. Water that gets past the outer line is collected and led back out through weep paths before it reaches the room.",
    },
    {
      t: "p",
      x: "In a {{curtain-wall|curtain wall}} this is called a drained, or pressure-equalised, design. The space behind the outer seal is vented to the outside, so its pressure stays close to the outside pressure. With little pressure difference across the outer line, there is little force to drive water inwards, and the inner seal does the airtight work where the rain cannot reach it. In a stick system, the frame behind the {{pressure-plate|pressure plate}} is drained zone by zone, so water does not collect at the bottom of the wall.",
    },
    {
      t: "p",
      x: "Windows follow the same idea. A good sliding or casement window has a drained sill: water that gets into the frame runs to the sill and leaves through weep slots on the outside face, often with a baffle or flap so that wind cannot blow it back in. Sliding windows need particular care, because the track sits exactly where water collects. For more on that choice, see {{/journal/casement-or-sliding-windows|Casement or sliding windows}}.",
    },
    { t: "h2", x: "Sills, slab edges and the window-to-wall joint" },
    {
      t: "p",
      x: "The sill is the most important line on a window drawing in a monsoon city. It should slope to the outside, have an upstand at the back and end dams at each side, and sit on a sub-sill or flashing that carries water clear of the wall below, finished with a drip. The joint under the frame should be sealed on the inner line, and left able to drain on the outer line, not sealed shut on both.",
    },
    {
      t: "p",
      x: "The window-to-wall joint should be designed, not improvised: packed, fixed, sealed with a continuous inner seal and closed outside so that it sheds water, with every fixing sealed where it crosses the weather line.",
    },
    {
      t: "p",
      x: "At the slab edge, agree early who is responsible for each layer, the facade contractor or the civil contractor. The weather seal, the fire and smoke seal and the allowance for movement all meet here. Every interface should appear on one large-scale drawing that shows the full sequence, so that nothing is assumed to be someone else's job. Joints between the facade and the structure must also allow for movement; see {{/journal/movement-joints-in-facades|Movement joints in facades}}.",
    },
    { t: "h2", x: "Solid walls: use a rain-screen" },
    {
      t: "p",
      x: "Where a facade has solid areas, such as spandrels, feature walls or cladding bands, a {{rain-screen|rain-screen}} is a forgiving way to keep them dry. The outer panels or slats shed most of the rain, a {{ventilated-cavity|ventilated cavity}} behind them drains and dries what gets through, and a continuous water barrier on the wall does the real weatherproofing. The layers are explained in {{/journal/rain-screen-cladding-the-gap|Rain-screen cladding: why the gap matters}}. In a monsoon, keep the cavity open at the base so water can get out, and make sure the barrier behind is lapped and sealed at every window opening.",
    },
    {
      t: "img",
      id: "monsoon-1",
      cap: "A slatted outer skin sheds most of the rain. The wall behind it still needs its own continuous, drained weather line.",
    },
    { t: "h2", x: "Gaskets or sealant" },
    {
      t: "compare",
      cols: ["Gaskets", "Wet sealant"],
      rows: [
        {
          k: "What it is",
          v: [
            "Pre-formed rubber profiles, commonly EPDM, fitted into the frame.",
            "A gun-applied sealant that cures in place in a joint.",
          ],
        },
        {
          k: "Strengths",
          v: [
            "A consistent, factory-made shape. Quick to fit, easy to inspect and replaceable.",
            "Fills irregular joints and seals interfaces with other materials where no gasket fits.",
          ],
        },
        {
          k: "Weak points",
          v: [
            "Corners and joins in the gasket, and gaskets stretched during fitting that later shrink back.",
            "Depends heavily on surface preparation, joint design, the weather on the day and the skill of the applicator.",
          ],
        },
        {
          k: "Best use",
          v: [
            "The main weather seals within the aluminium system.",
            "Interfaces: frame to wall, facade to structure, and joints that need adjustment on site.",
          ],
        },
      ],
    },
    {
      t: "p",
      x: "Most good facades use both: gaskets inside the system, and sealant at the interfaces. A {{sealant-joint|sealant joint}} needs the right width and depth, a backer rod, clean and dry surfaces and, where the supplier calls for it, a primer. Sealant rushed over dusty or damp surfaces before the rains is one of the commonest causes of a first-season leak.",
    },
    { t: "h2", x: "Specify and test" },
    {
      t: "p",
      x: "The exact performance requirements, including the water test pressure, are set per project by the {{facade-consultant|facade consultant}}, based on the building's height, location and exposure. As a buyer, make sure the specification covers water, air and structure, and that it asks for a test on a {{mock-up|mock-up}} that includes the hard details: a corner, a sill, an opening vent and the slab edge.",
    },
    {
      t: "p",
      x: "{{astm-e331|ASTM E331}} measures water penetration under a uniform static air-pressure difference: water is sprayed on the outside while a fan holds a steady pressure across the sample. {{astm-e283|ASTM E283}} measures air leakage, and {{astm-e330|ASTM E330}} measures structural performance under wind load. Each answers a different question, and a monsoon-proof facade needs all three. For how the water test runs and what it cannot tell you, see {{/journal/what-astm-e331-tests|What ASTM E331 actually tests}}. For the full sequence, see {{/testing|How facades are tested}}.",
    },
    { t: "h2", x: "Install it as it was tested" },
    {
      t: "p",
      x: "A tested mock-up proves a design, built a particular way. The site has to build it the same way. Common installation faults include:",
    },
    {
      t: "ul",
      items: [
        "Weep slots covered by sealant, paint, plaster or protective tape.",
        "Sill flashings cut short, or laid without a fall.",
        "Fixings through the weather line left unsealed.",
        "Gaskets stretched to fit, which then shrink back from the corners in the first hot season.",
        "Sealant applied in the rain, over dust, or without a backer rod.",
      ],
    },
    {
      t: "p",
      x: "Site water testing on the installed facade, on a sample of windows and joints chosen with the consultant, checks the workmanship before the interiors go in. Test early, on the first areas installed, so that a fault is corrected before it is repeated across the building. Plan the programme so that the envelope is closed before the monsoon, or protect open areas properly.",
    },
    { t: "h2", x: "Pre-monsoon inspection and maintenance" },
    {
      t: "p",
      x: "A facade that stayed dry last year can still leak this year. A short inspection before each monsoon is cheap and catches most problems.",
    },
    {
      t: "img",
      id: "monsoon-2",
      cap: "Sliding window tracks collect dust and leaves. Clearing them before the rains keeps the weep path open.",
    },
    {
      t: "ol",
      items: [
        "Clear sill tracks, drainage slots and weep holes of dust, leaves and debris.",
        "Check external sealant joints for cracks, splits, hardening and loss of adhesion.",
        "Look for gaskets that have shrunk back, slipped or perished, especially at corners.",
        "Check that opening vents close fully and evenly, and that hardware and seals are intact.",
        "Look inside for staining, damp or salt marks, which point to a past leak path.",
        "Check that new signs, cables or air-conditioning brackets have not been fixed through the facade without sealing.",
        "Record what was found and fixed, with photographs, so that next year's check starts from facts.",
      ],
    },
    {
      t: "p",
      x: "In coastal cities, salt in the air speeds up the ageing of seals and the corrosion of fixings, so look more closely and more often.",
    },
    { t: "h2", x: "A checklist for developers and architects" },
    {
      t: "ul",
      items: [
        "Appoint a facade consultant early, and ask for a specification that covers water, air and structural performance.",
        "Specify drained, pressure-equalised curtain wall and windows, not systems that depend on a single seal.",
        "Draw the sill, the window-to-wall joint and the slab edge at large scale, and name who builds each layer.",
        "Use a rain-screen for solid walls in exposed locations.",
        "Test a mock-up that includes the hard details, and freeze the tested details for production.",
        "Water-test the first installed areas on site before interior work starts.",
        "Hand over a maintenance plan with a pre-monsoon inspection, and keep the drainage paths clear.",
      ],
    },
    {
      t: "note",
      x: "This is general guidance. The exact specification, test pressures and pass criteria are set per project by the facade consultant.",
    },
    {
      t: "p",
      x: "Planning a project in a monsoon city? See {{/locations|where we work}}, including {{/locations/pune|Pune}}, or send your drawings through the {{/contact|enquiry form}}.",
    },
  ],
};

export default article;
