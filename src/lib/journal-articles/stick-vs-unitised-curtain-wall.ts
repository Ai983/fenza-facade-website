import type { Article } from "../journal";

const article: Article = {
  slug: "stick-vs-unitised-curtain-wall",
  title: "Stick vs. unitised curtain wall: how to choose",
  seoTitle: "Stick vs. Unitised Curtain Wall",
  description:
    "Stick, semi-unitised and unitised curtain walls differ in site time, quality control and cost. A plain-language comparison to help you choose.",
  excerpt:
    "Curtain wall is not one product but a family of ways to build the same glazed skin. The main choice is where the work happens: on the building, or in the factory.",
  teaser: "Site time, quality control and cost: where the work happens.",
  topic: "Curtain wall",
  date: "2026-10-06",
  hero: "stick-hero",
  card: "stick-card",
  og: "/og/curtain-wall.jpg",
  terms: ["stick-system", "unitised", "semi-unitised", "cassette", "movement-joint", "mullion", "transom", "anchor", "mock-up"],
  systems: ["curtain-wall"],
  faq: [
    {
      question: "What is the difference between stick and unitised curtain wall?",
      answer: "The difference is where the work happens. A stick curtain wall is assembled and glazed piece by piece on the building, while a unitised curtain wall is assembled and glazed as whole panels in the factory, then lifted into position and connected to the slab edge and to each other.",
    },
    {
      question: "Is unitised curtain wall faster to install than stick?",
      answer: "Yes, installation is usually quicker because most of the work is done in the factory and fewer people are needed on the facade. The building can be made weathertight sooner. However, a unitised facade starts later, since units cannot be made until the set-out is fixed and approvals and a mock-up are done.",
    },
    {
      question: "Which curtain wall system is cheaper, stick or unitised?",
      answer: "Stick is often the more economical choice for small to medium areas and irregular buildings. Unitised tends to pay off on tall, repetitive, fast-track buildings, where speed and consistency outweigh the extra factory and handling cost. Compare the cost to close in the building, not just unit price.",
    },
    {
      question: "What is semi-unitised curtain wall and when should I use it?",
      answer: "Semi-unitised curtain wall has frames part-assembled into cassettes in the factory, then hung and finished on site. It keeps some of stick's flexibility while moving more labour indoors. It is a sensible middle path when the programme is tight but the structure is not perfectly regular, or the site cannot take full-size units.",
    },
  ],
  body: [
    {
      t: "p",
      x: "A {{curtain-wall|curtain wall}} is a light skin of aluminium and glass hung in front of a building's structure. It does not hold the building up. It carries only its own weight and the wind load, and passes both back to the floor slabs through its fixings. The same finished look can be built in several different ways, and the choice between them shapes the programme, the cost, and how much can go wrong on site.",
    },
    {
      t: "p",
      x: "The main question is simple to state: where does the work happen? On the building, piece by piece, or in the factory, panel by panel? Everything else, including price, speed, quality and risk, follows from the answer.",
    },
    { t: "h2", x: "What every curtain wall has to do" },
    {
      t: "p",
      x: "Whichever way it is built, a curtain wall has the same job list. It must keep out rain and air, resist wind pressure and suction, let in daylight, take up the movement of the building and of its own materials, and stay safe if a pane breaks. The three approaches below are different routes to the same list, and each handles the list in a slightly different way.",
    },
    { t: "h2", x: "The three approaches" },
    {
      t: "p",
      x: "{{stick-system|Stick}}: the {{mullion|mullions}} (verticals) and {{transom|transoms}} (horizontals) arrive as cut lengths. They are fixed to the structure and joined into a grid on the building, floor by floor, and then the glass and cover caps are fitted from the inside or the outside. The extrusions are cut, drilled and prepared in the factory, but the frame is assembled and glazed on site. The name comes from the fact that the frame goes up as a series of sticks.",
    },
    {
      t: "p",
      x: "{{unitised|Unitised}}: whole panels, usually one storey high and one bay wide, are assembled and glazed in the factory. They are delivered in racks, lifted into position and connected to the slab edge and to each other. Almost all of the work is done under cover, and the joints between units do the weather-sealing on the building.",
    },
    {
      t: "p",
      x: "{{semi-unitised|Semi-unitised}} sits between the two. Frames are part-assembled into {{cassette|cassettes}} in the factory, then hung and finished on site. The idea is to keep some of stick's flexibility while moving a good part of the labour indoors.",
    },
    {
      t: "img",
      id: "stick-1",
      cap: "Where a mullion meets a transom. On a stick system this joint is made on the building; on a unitised system it is made in the factory.",
    },
    { t: "h2", x: "Stick and unitised, side by side" },
    {
      t: "compare",
      cols: ["Stick", "Unitised"],
      rows: [
        {
          k: "Site labour and time",
          v: [
            "Most of the work happens on the facade, floor by floor, so it takes longer on site and needs skilled labour at height.",
            "Most of the work is done in the factory. Installation is quicker and needs fewer people on the facade.",
          ],
        },
        {
          k: "Quality control",
          v: [
            "Glazing and sealing happen outdoors at height, where weather and access make quality harder to control.",
            "Assembly, glazing and sealing are done under factory conditions, which gives more consistent quality.",
          ],
        },
        {
          k: "Tolerance of the building",
          v: [
            "Adapts easily to variations in slab edges and structure, since each piece is fitted to the actual building.",
            "Needs the structure and anchors set out accurately beforehand, because the units are made to fixed sizes.",
          ],
        },
        {
          k: "Logistics",
          v: [
            "Compact packs of extrusions and glass, easy to store and move on site.",
            "Large, delicate units that need transport, hoisting and storage space in the right sequence.",
          ],
        },
        {
          k: "Closing in the building",
          v: [
            "Slower: the envelope is completed bay by bay as glazing progresses.",
            "Faster: the building can be made weathertight sooner, so interior work can start earlier.",
          ],
        },
        {
          k: "Repairs",
          v: [
            "A damaged pane can often be replaced in place, from inside or outside, depending on the system.",
            "Replacing a pane usually means working on a whole unit, so the access method should be agreed at the start.",
          ],
        },
        {
          k: "Cost",
          v: [
            "Often the more economical choice for small to medium areas and irregular buildings.",
            "Tends to pay off on tall, repetitive, fast-track buildings, where speed and consistency outweigh the extra factory and handling cost.",
          ],
        },
      ],
    },
    { t: "h2", x: "Where the real differences show up" },
    {
      t: "p",
      x: "A comparison table hides the places where projects actually succeed or struggle. Five of them are worth thinking about before you choose.",
    },
    {
      t: "p",
      x: "Programme. A unitised facade starts later, because units cannot be made until the set-out is fixed and the factory has been through approvals and a {{mock-up|mock-up}}. Once installation starts, though, it moves fast. A stick facade can start earlier on site and runs for longer. If the building is time-critical, ask which curve suits your critical path, not just which one is shorter in total.",
    },
    {
      t: "p",
      x: "Set-out and tolerance. Concrete is never perfectly straight. A stick system fits itself to what was built, with adjustment at every {{anchor|anchor}}. Unitised units are made to the drawing, so the slab edges must be surveyed and the anchors positioned accurately before the units arrive. The more accurate the structure, the better unitised works, and the more variable it is, the more you will value stick's forgiveness.",
    },
    {
      t: "p",
      x: "Weather management. In a stick system the frame is built as a continuous grid with the glass sealed into it. In a unitised system each unit is complete, and the joints between units, often called stack joints, carry the weather-sealing. Those joints are detailed to drain and to move, and getting them right is the heart of a unitised design.",
    },
    {
      t: "p",
      x: "Site conditions. Stick needs scaffold, cradles or a building maintenance unit to work from, and enough time in good weather for glazing. Unitised needs a crane or hoist, laydown space and a sequence so that units arrive in the order they are fixed. A tight city site with no laydown area can rule one option out before price is discussed.",
    },
    {
      t: "p",
      x: "Movement. Both systems must allow the building to sway, settle and heat up and cool down without loading the glass. Stick does it through its anchors and splice joints; unitised does it largely at the unit-to-unit joints. See {{/journal/movement-joints-in-facades|Movement joints}} for why this matters so much.",
    },
    { t: "h2", x: "Where semi-unitised fits" },
    {
      t: "p",
      x: "Semi-unitised cassettes keep some of the site flexibility of stick and bring part of the factory advantage: less work at height, better control over assembly, and a lighter lifting load than full units. It is a sensible middle path when the programme is tight but the structure is not perfectly regular, or when the site cannot take full-size units.",
    },
    { t: "h2", x: "Mistakes that cost money" },
    {
      t: "ul",
      items: [
        "Choosing unitised for a small or irregular building, and paying for factory tooling that never gets used enough to repay it.",
        "Choosing stick on a tall, repetitive tower to save on price, then losing the saving to a longer programme and more site labour.",
        "Assuming the structure will be as accurate as the drawings. Survey the slab edges early.",
        "Forgetting storage. Unitised units need a safe, level place to wait, and stick packs need cover from rain.",
        "Judging by unit price alone. Compare the cost to close in the building, not just the cost to make it.",
      ],
    },
    { t: "h2", x: "How to choose" },
    {
      t: "ol",
      items: [
        "Start with the building: its height, how repetitive the grid is, and how accurately the structure will be built.",
        "Look at the programme. If the building must be closed in quickly, factory-built units help.",
        "Check access and logistics: hoisting, storage, and scaffold or cradle options.",
        "Ask the {{facade-consultant|facade consultant}} which approach the performance specification assumes, and what movement the structure will impose on the facade.",
        "Compare the full cost: design, tooling, factory work, transport, installation, and the time the building spends open.",
      ],
    },
    {
      t: "img",
      id: "stick-2",
      cap: "A repetitive grid on a tall building is where factory-built units earn their cost.",
    },
    { t: "h2", x: "Questions to ask a manufacturer" },
    {
      t: "ul",
      items: [
        "How long between approval of the drawings and the first delivery, and how long does installation take per floor?",
        "What happens at the interface with the slab edge, and who is responsible for surveying it?",
        "What mock-up testing will be done before production, and what does it cover? See {{/testing|How facades are tested}}.",
        "How is a broken pane replaced after handover, and from which side?",
        "What assumptions about movement and tolerance does the design make, and where are they written down?",
      ],
    },
    {
      t: "p",
      x: "Fenza's curtain wall range covers site-glazed stick and semi-unitised systems, with mullion depths from 50 to 150 mm according to span and wind load (indicative; confirmed per project). See {{/systems/curtain-wall|Curtain Wall}}, or send us your elevations and we will say which approach fits your building. {{/journal/what-to-send-a-facade-manufacturer|What to send a facade manufacturer}} lists what helps.",
    },
  ],
};

export default article;
