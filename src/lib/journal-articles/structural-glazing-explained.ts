import type { Article } from "../journal";

const article: Article = {
  slug: "structural-glazing-explained",
  title: "Structural glazing: how glass is held without a visible frame",
  seoTitle: "Structural Glazing Explained",
  description:
    "How structural glazing bonds glass to a concealed frame with structural silicone, how two-side and four-side systems differ, and what to check.",
  excerpt:
    "From the street, structural glazing looks like an unbroken sheet of glass. Here is how it is held, what the two main types are, and what to check before you specify it.",
  teaser: "How glass is bonded to a hidden frame, and what to check.",
  topic: "Glazing",
  date: "2026-10-06",
  hero: "sg-hero",
  card: "sg-card",
  og: "/og/structural-glazing.jpg",
  terms: ["structural-glazing", "structural-silicone", "setting-block", "capless", "double-glazed-unit", "mock-up", "sealant-joint", "laminated-glass", "facade-consultant", "low-e-coating"],
  systems: ["structural-glazing", "curtain-wall"],
  faq: [
    {
      question: "How is glass held in structural glazing without a visible frame?",
      answer: "The glass is bonded to a concealed aluminium frame with structural silicone, so there are no cover caps on the outside, only a narrow silicone joint between panes. The silicone carries the wind load, while the weight of the glass is normally carried on setting blocks or a mechanical support at the bottom of each unit.",
    },
    {
      question: "What is the difference between two-side and four-side structural glazing?",
      answer: "In two-side systems, two opposite edges are bonded and the other two are held mechanically, so a thin line shows in one direction. In four-side systems all four edges are bonded, giving a fully flush, capless look in both directions. Four-side is more demanding to design and make, so it often costs more.",
    },
    {
      question: "Is structural glazing safe if the glass breaks?",
      answer: "It is normally specified with laminated glass on the inside, or a laminated outer lite, so a broken pane stays in its frame. Some projects add mechanical retention as a back-up, and the facade consultant decides. A replacement is a factory-bonded unit installed from the building, so plan for it at handover.",
    },
    {
      question: "Is structural glazing better than a capped glazing system?",
      answer: "Structural glazing is chosen for its appearance, where a flush glass wall is the point of the building. If the look matters less, a conventional capped system is simpler, usually cheaper and easier to repair, because the glass is clamped mechanically and can be removed from outside. Many buildings use both.",
    },
  ],
  body: [
    {
      t: "p",
      x: "Most glass facades show a grid of metal on the outside: cover caps that run along every joint and frame each pane. Structural glazing takes them away. The result reads as one smooth plane of glass, and it is held in a way that is worth understanding before you specify it, because the glass is not clamped. It is glued.",
    },
    {
      t: "p",
      x: "That sounds alarming until you know how it works. The adhesive is not ordinary sealant. It is a purpose-made, high-strength silicone designed to carry load, used in a carefully calculated amount, applied in factory conditions and tested. When it is done properly it is a well-established way to build, with a long track record on towers around the world.",
    },
    { t: "h2", x: "How it works" },
    {
      t: "p",
      x: "In a {{structural-glazing|structural glazing}} facade the glass is bonded to a concealed aluminium frame with {{structural-silicone|structural silicone}}. There are no cover caps on the outside, only a narrow silicone joint between panes. The frame behind the glass carries everything back to the building.",
    },
    {
      t: "p",
      x: "The silicone carries the wind load. Suction pulls the glass outwards and the bond holds it; pressure pushes it inwards and the frame supports it. The weight of the glass is normally carried separately, on {{setting-block|setting blocks}} or a mechanical support at the bottom of each unit, so that the bond is not asked to hold the glass up for decades. This split of jobs is central to the design.",
    },
    {
      t: "img",
      id: "sg-1",
      cap: "The only thing visible from outside: a narrow silicone joint between panes.",
    },
    { t: "h2", x: "Two-side or four-side" },
    {
      t: "p",
      x: "In two-side systems, two opposite edges of each glass unit are bonded and the other two are held mechanically by a cap or clip, so a thin line shows in one direction. In four-side systems all four edges are bonded, giving a fully flush, {{capless|capless}} appearance in both directions.",
    },
    {
      t: "compare",
      cols: ["Two-side", "Four-side"],
      rows: [
        {
          k: "Look",
          v: [
            "Lines show in one direction, where the mechanically held edges are.",
            "Flush in both directions: a uniform glass plane.",
          ],
        },
        {
          k: "How it is held",
          v: [
            "Two edges bonded with silicone, two held mechanically.",
            "All four edges bonded. The silicone carries the wind load, and the glass weight is carried on setting blocks or supports.",
          ],
        },
        {
          k: "Back-up",
          v: [
            "The mechanically held edges add a second line of retention if a bond were ever to fail.",
            "Relies on the bond alone unless mechanical retention is added, so design, quality control and testing matter more. Some projects add retention as a back-up; follow the facade consultant.",
          ],
        },
        {
          k: "Complexity",
          v: [
            "Usually the simpler and more economical of the two.",
            "More demanding to design and make, so often costs more.",
          ],
        },
        {
          k: "Weather side",
          v: [
            "The caps give extra protection to the two held edges.",
            "Everything depends on the outer weather joint, which must be detailed and applied well.",
          ],
        },
      ],
    },
    { t: "h2", x: "Two seals with two different jobs" },
    {
      t: "p",
      x: "A common misunderstanding is to treat the silicone at the joint as one thing. In fact there are two. The structural silicone, hidden behind the glass edge, carries load. The weather seal, the visible joint on the outside, keeps out rain and air. They are usually different products, applied separately, and they must not be confused or substituted for each other. A weather sealant is not designed to carry structural stress, and structural silicone is not chosen for appearance on the face.",
    },
    { t: "h2", x: "What makes it work" },
    {
      t: "ul",
      items: [
        "Compatibility. The silicone, the coating on the glass, the edge seal of the insulating unit and the frame finish must all be confirmed compatible by the silicone supplier. Not every glass coating can be bonded to, and some must be removed at the bonded edge.",
        "Factory bonding. The bond is made in clean, controlled conditions rather than on site, because surface preparation and curing time matter, and weather and dust cannot be controlled on a facade.",
        "Joint design. The bonded width and thickness are calculated for the wind load and the expected movement, with margins set by the silicone supplier and the applicable guidance.",
        "Quality control. Adhesion tests, records of the batch and the cure time, and checks on every unit, not only the first.",
        "Testing. Adhesion and compatibility tests, then a {{mock-up|mock-up}} under air, water and structural loads. See {{/testing|How facades are tested}}.",
      ],
    },
    { t: "h2", x: "If a pane breaks" },
    {
      t: "p",
      x: "Structural glazing is normally specified with {{laminated-glass|laminated glass}} on the inside, or with a laminated outer lite, so that a broken pane stays in its frame. If the glass is part of a {{double-glazed-unit|double-glazed unit}}, the edge seal of the unit also becomes part of the load path, which is another reason the unit and the silicone have to be designed together. When a pane does need replacing, the replacement is a factory-bonded unit installed from the building. It is a different process from replacing a pane in a capped system, and worth planning for at handover.",
    },
    { t: "h2", x: "Choosing between structural and capped" },
    {
      t: "p",
      x: "Structural glazing is chosen for its appearance. If the look of a flush glass wall is the point of the building, there is no substitute. If the look matters less, a conventional capped system is simpler, usually cheaper, and easier to repair, because the glass is clamped mechanically and can be removed from outside. Many buildings use both: flush glazing on the main elevations and capped glazing where access, cost or repairs matter more.",
    },
    {
      t: "img",
      id: "sg-2",
      cap: "A structurally glazed elevation reads as a single reflective surface.",
    },
    { t: "h2", x: "Inside the factory bonding process" },
    {
      t: "p",
      x: "The reason the bond is made in a factory is that the steps are exact, and each one affects the result. A typical sequence runs like this:",
    },
    {
      t: "ol",
      items: [
        "The glass edge and the frame surface are cleaned with the solvents and cloths the silicone supplier specifies, in the order they specify.",
        "A primer is applied where the supplier requires one.",
        "Structural silicone is applied to the frame with a metered two-part pump, so the mix is exact.",
        "The glass is placed and clamped, and the unit is held in position.",
        "The unit cures under controlled temperature and humidity for the time stated by the supplier.",
        "Test samples made alongside are checked, for example by peel and tensile tests, and the batch numbers are recorded against the unit.",
        "The unit is released only after full cure and inspection.",
      ],
    },
    {
      t: "p",
      x: "Each unit is traceable to its batch, its date and its checks. If a question arises years later, the record exists.",
    },
    { t: "h2", x: "Standards and approvals" },
    {
      t: "p",
      x: "Published guides and standards cover structural sealant glazing. ASTM C1401 is a guide to the design and use of structural sealant glazing, and EN 13022 covers glass in building with structural sealant glazing. Silicone manufacturers also test and approve their products with particular glass, spacers and frame finishes, and issue project-specific approvals and warranties. Which documents apply is for the consultant and the silicone supplier to decide. Ask for them early and keep them in the project file.",
    },
    { t: "h2", x: "Inspection over time" },
    {
      t: "p",
      x: "Silicone ages slowly, and it is worth looking at. Periodic inspection should check the weather joint for tearing, discolouration or loss of adhesion, look at the glass edge for any sign of the bond lifting, and note any units that are visibly out of line. Keep the inspection records with the original quality records. If a unit does show a problem, it is dealt with early, by a trained team and with the supplier's guidance, and not by a quick coat of sealant.",
    },
    { t: "h2", x: "Mistakes to avoid" },
    {
      t: "ul",
      items: [
        "Specifying structural glazing for the look without involving the silicone supplier early.",
        "Choosing a glass coating that cannot be bonded to, and finding out after the glass is ordered.",
        "Treating the weather sealant as structural, or the structural silicone as a weather seal.",
        "Leaving out any back-up retention on a high building without the consultant's agreement.",
        "Forgetting the maintenance plan, including how a pane would be replaced.",
      ],
    },
    { t: "h2", x: "What to ask before you specify" },
    {
      t: "ul",
      items: [
        "Who is the silicone supplier, and have they approved this project's glass, spacer and finishes in writing?",
        "Is the bonding done in the factory, and what quality records are kept for each unit?",
        "What design loads and joint dimensions were used, and who checked them?",
        "Does the facade consultant require mechanical retention as a back-up?",
        "How is a broken pane replaced, and how long will it take?",
      ],
    },
    {
      t: "p",
      x: "Fenza fabricates two-side and four-side structural glazing systems in-house, with silicone joints typically 12 to 20 mm and glazing from 6 to 36 mm, laminated or double-glazed, on a 6063-T6 aluminium carrier frame (indicative; the silicone grade is project-approved). See {{/systems/structural-glazing|Structural Glazing}}, or send us your elevations and glass intent.",
    },
  ],
};

export default article;
