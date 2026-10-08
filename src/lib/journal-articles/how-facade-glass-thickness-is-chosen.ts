import type { Article } from "../journal";

const article: Article = {
  slug: "how-facade-glass-thickness-is-chosen",
  title: "How facade glass thickness is chosen",
  seoTitle: "How Facade Glass Thickness Is Chosen",
  description: "Glass thickness is calculated, not guessed. The loads, pane size, support type and glass type that decide it, and what to ask your supplier.",
  excerpt: "Thickness is the result of a calculation that weighs load, size, support and glass type. Knowing the inputs helps you read a quote and spot a number that has been assumed.",
  teaser: "The inputs behind a glass thickness, and why a catalogue number is not enough.",
  topic: "Glazing",
  date: "2026-10-08",
  hero: "gthick-hero",
  card: "gthick-card",
  og: "/og/structural-glazing.jpg",
  terms: ["toughened-glass", "laminated-glass", "wind-load"],
  systems: ["structural-glazing", "curtain-wall"],
  faq: [
    {
      question: "How is facade glass thickness decided?",
      answer: "It is calculated by the facade engineer from the wind load, the size of the pane, how the edges are supported, the glass type and the allowed movement. Safety requirements and the weight the frame can carry are also checked. A thickness quoted without those inputs is only an assumption.",
    },
    {
      question: "Is thicker glass always stronger and better?",
      answer: "Thicker glass is stiffer, but it is also heavier, which loads the frame and anchors, and it may reduce light or change the colour slightly. The aim is the right thickness for the load and the support, not the largest available. Heat treatment and lamination can matter as much as thickness.",
    },
    {
      question: "Does glass size affect how thick it must be?",
      answer: "Yes. A larger pane bends more under the same wind pressure, so it usually needs more thickness, more support or a stronger glass type. The ratio of height to width and the number of supported edges also play a part. This is why large panes are checked individually, not copied from smaller ones.",
    },
    {
      question: "What thickness of glass is used in a curtain wall?",
      answer: "There is no single thickness. It depends on the project's wind load, the pane size, the support system, the glass type and whether it is a double-glazed unit. The facade engineer confirms the build-up for each zone, and the specification should give it from outside to inside.",
    },
  ],
  body: [
    {
      t: "p",
      x: "When a quote lists a glass thickness, it is easy to treat that number as a simple product choice, like picking a paint colour. In practice it is the result of an engineering check. The right thickness depends on the force the glass will meet, the size of the pane, how it is held, what kind of glass it is and how much movement is acceptable. This article explains those inputs so you can read a specification with confidence.",
    },
    { t: "h2", x: "Why thickness is calculated" },
    {
      t: "p",
      x: "Glass is strong in compression and weaker in tension, and it breaks suddenly rather than bending and warning. Because of this, facade glass is designed with a margin of safety, not with a hope that it will be fine. The facade engineer uses recognised methods to check the stress in the glass under the loads it must carry, and chooses a build-up that stays within the permitted limits.",
    },
    {
      t: "p",
      x: "The result can be surprising. A small pane may need only modest thickness, and a tall narrow one may need much more than its area suggests. A catalogue that lists a standard thickness for a standard use cannot account for the particular height, exposure and fixing of your building. That is the reason the number should come from a calculation for the project.",
    },
    { t: "h2", x: "The loads the glass must carry" },
    {
      t: "p",
      x: "The dominant load on most facade glass is {{wind-load|wind load}}, acting as a push or a pull across the pane. A taller building, an exposed site or a corner position increases it. Other loads also count. The glass carries its own weight through its supports, it can be subject to thermal stress when the sun heats part of the pane, and in some locations it must resist impact from people or objects.",
    },
    {
      t: "p",
      x: "In a double-glazed unit the load is shared between the panes, but not always equally. The way the two panes are linked through the sealed cavity changes how pressure is divided. The engineer accounts for this, and it is one more reason why the build-up as a whole, not one pane alone, is what gets checked.",
    },
    {
      t: "img",
      id: "gthick-1",
      cap: "Thickness depends on pane size, wind pressure and how the edges are held, not on appearance alone.",
    },
    { t: "h2", x: "Pane size and shape" },
    {
      t: "p",
      x: "A large pane bends more than a small one under the same pressure, and the bending grows quickly as the size increases. Doubling the span does not simply double the movement. The proportions matter as well. A long thin pane behaves differently from a squarer one of the same area, because it spans mainly in one direction.",
    },
    {
      t: "p",
      x: "This is why a change in module size late in a design is not a small change. If the grid is widened or the floor height increases, the glass has to be re-checked, and it may need a thicker build-up, a different glass type or a stiffer frame. Ask your architect and supplier to confirm that the thickness shown was checked against the final pane sizes, not an earlier set.",
    },
    { t: "h2", x: "How the edges are supported" },
    {
      t: "p",
      x: "The way a pane is held decides how it carries load. A pane supported on all four edges, as in a framed {{/systems/curtain-wall|curtain wall}}, spreads the load to the frame around it. A pane supported on two edges, such as a system with open joints, carries it differently and bends more in the unsupported direction. A pane held at points, such as with a {{spider-fitting|spider fitting}}, concentrates the stress around the holes.",
    },
    {
      t: "p",
      x: "In {{/systems/structural-glazing|structural glazing}}, the glass is held by structural silicone to the frame, so the bond and the glass work together. The engineer checks both. For point-fixed systems, the glass near the fixing is checked with care, since that is where the stress is highest. Different supports can lead to quite different thicknesses for the same pane size.",
    },
    { t: "h2", x: "The type of glass changes the answer" },
    {
      t: "p",
      x: "Glass types differ in how much stress they can take. {{toughened-glass|Toughened glass}} is heat treated so that it can carry a higher stress than ordinary glass of the same thickness, which can allow a thinner pane for the same load. Heat-strengthened glass sits between the two. {{laminated-glass|Laminated glass}} is made of layers joined by an interlayer, and the engineer must decide how much the layers work together.",
    },
    {
      t: "p",
      x: "A laminated pane is not simply as strong as its combined thickness. How well the layers share load depends on the interlayer and on the loading, including how long the load lasts and the temperature. The calculation allows for this, and so the thickness of each layer has to be confirmed, not just the total. For help choosing the type, see {{/journal/choosing-facade-glass|choosing facade glass}}.",
    },
    {
      t: "p",
      x: "Safety requirements add another layer. In places where people may walk close to the glass, or where a break could cause a fall, the code may require a particular glass type regardless of the strength calculation. The thickness is then chosen for that type. In overhead locations the engineer also checks what happens after a break, so the build-up is not chosen for strength alone.",
    },
    {
      t: "p",
      x: "Temperature plays a quiet role as well. When sun heats the middle of a pane while the edge stays shaded inside a frame, the glass develops stress between the warm and cool areas. Tinted and coated glass absorbs more heat, so it is more affected. The engineer may recommend heat-strengthened or toughened glass for this reason, even where wind alone would allow a plain pane.",
    },
    { t: "h2", x: "Movement as well as strength" },
    {
      t: "p",
      x: "Even a pane that will not break may bend too far. Excess movement can stress the edge seals of a double-glazed unit, distort reflections, or make a large pane look uneven. The specification often sets a limit on how much the glass may bend, and the thickness is chosen to keep within it as well as to keep the stress safe.",
    },
    {
      t: "p",
      x: "The frame has its own limit on movement, and the two should be consistent. A stiff glass in a flexible frame, or the reverse, leaves one of them carrying more than it was designed for. This is why glass thickness and frame design are checked together by the same team, not separately.",
    },
    { t: "h2", x: "Weight and the cost of going thicker" },
    {
      t: "p",
      x: "Thicker glass is not a free safety margin. It is heavier, and that load goes into the frame, the anchors and the structure behind. It can also complicate handling, since heavy panes need stronger lifting equipment and more careful installation. Thicker glass may slightly change colour and light transmission, which matters on a large elevation.",
    },
    {
      t: "ul",
      items: [
        "The frame sections and anchors must be sized for the weight of the glass chosen.",
        "Handling and hoisting methods depend on pane weight and size.",
        "Replacement is harder and slower for large heavy panes.",
        "Appearance and light transmission can shift as thickness changes.",
      ],
    },
    { t: "h2", x: "What to ask your supplier" },
    {
      t: "ol",
      items: [
        "What wind pressure and which other loads was each thickness checked against?",
        "Were the final pane sizes and the final support arrangement used?",
        "Which method and code were used for the glass calculation, and who checked it?",
        "What glass type is each layer, and how is laminated glass treated?",
        "What movement limit applies, and does it match the frame?",
        "What is the weight of the largest pane, and how will it be handled?",
      ],
    },
    {
      t: "p",
      x: "A supplier who can answer these questions has done the work. One who points only to a catalogue has not yet shown that the thickness suits your building. It also helps to ask for the calculation summary alongside the {{/journal/reading-facade-shop-drawings|shop drawings}}, so the numbers and the drawings can be compared.",
    },
    { t: "h2", x: "Changes during the project" },
    {
      t: "p",
      x: "Thickness is not fixed once the first drawing is issued. Changes to pane size, floor height, wind data, glass type or support can all mean a re-check. Build in a rule that any such change goes back to the engineer before the glass is ordered. Glass is cut to size and often cannot be returned, so a mistake caught after ordering is a costly one.",
    },
    {
      t: "p",
      x: "A {{mock-up|mock-up}} can help confirm the choice in practice, showing the glass in its frame at real size. It will not replace the calculation, but it lets the team see the appearance, the flatness and the details before they are repeated across the building.",
    },
    {
      t: "note",
      x: "This article is general guidance. Glass thickness, glass type, loads and standards are calculated and confirmed for each project with the facade consultant and the facade engineer.",
    },
  ],
};

export default article;
