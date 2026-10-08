import type { Article } from "../journal";

const article: Article = {
  slug: "wind-load-on-facades-what-it-means",
  title: "Wind load on facades: what it means for glass and frames",
  seoTitle: "Wind Load on Facades Explained",
  description: "Wind pushes and pulls on every facade panel. How wind load reaches glass, frames and anchors, and what to ask for in a specification.",
  excerpt: "Wind is the main everyday force on a facade. Understanding how it reaches the glass, the frame and the anchors helps you read a specification and ask better questions.",
  teaser: "How wind pushes and pulls on glass, frames and anchors.",
  topic: "Performance",
  date: "2026-10-08",
  hero: "wind-hero",
  card: "wind-card",
  og: "/og/curtain-wall.jpg",
  terms: ["wind-load", "deflection", "astm-e330"],
  systems: ["curtain-wall", "structural-glazing"],
  faq: [
    {
      question: "What is wind load on a facade?",
      answer: "Wind load is the pressure and suction that moving air puts on the outside of a building. On a facade it acts as a push on the windward face and a pull on other faces and corners. Glass, frames and anchors must carry it safely, and the project's design value comes from the wind data and the building height and shape.",
    },
    {
      question: "How is wind load calculated for a curtain wall?",
      answer: "The facade engineer takes the design wind pressure from the applicable code and the site's exposure, then applies it to each zone of the elevation. Corners and the top of a tall building usually see higher suction. The result is used to check the glass, the frame and the anchors for strength and movement.",
    },
    {
      question: "What does ASTM E330 test?",
      answer: "ASTM E330 is a method that measures how a facade sample behaves when air pressure is applied across it, in the push direction and the pull direction. It records movement and any permanent damage. It describes what the test measures; the project specification sets the pressures and what counts as acceptable.",
    },
    {
      question: "Why do corners of a building need stronger glazing?",
      answer: "Wind flows around a building and accelerates at corners and edges, which tends to create stronger suction there than on the middle of a wall. The facade design usually divides the elevation into zones and designs the corner zones for higher pressure. The exact zones and values are set per project.",
    },
  ],
  body: [
    {
      t: "p",
      x: "Wind is the force a facade feels every day. Unlike the weight of the glass, which pulls straight down and never changes, wind comes and goes, changes direction and can act as either a push or a pull. A building can look solid and still flex slightly in a gust. A well designed facade expects that, carries the force to the structure and returns to its original shape. This article explains where the force comes from and what it asks of the glass, the frame and the fixings.",
    },
    { t: "h2", x: "What wind load actually is" },
    {
      t: "p",
      x: "{{wind-load|Wind load}} is the pressure that moving air puts on the surface of a building. On the face turned toward the wind the air pushes inward. On the sides, the back and the roof edge, the air tends to pull outward, which is called suction. A facade has to resist both, because a panel that is safe against a push can still be pulled off its fixings.",
    },
    {
      t: "p",
      x: "The design value is not a single number for the whole building. It depends on the location and its weather data, how exposed the site is, the height of the building, its shape and the surrounding buildings. The code used on the project and the facade engineer set the value. A specifier does not need to calculate it, but should know that it exists and ask to see it stated clearly in the design brief.",
    },
    { t: "h2", x: "Pressure is not the same everywhere" },
    {
      t: "p",
      x: "Air accelerates around corners and over edges, so the strongest suction is usually found at the corners and along the top of a tall elevation. The middle of a flat wall usually sees a lower value. For this reason the design often divides each elevation into zones, with stronger requirements in the zones where the suction is higher.",
    },
    {
      t: "p",
      x: "This has a practical consequence. Two panes on the same building may need different glass, different frame sections or closer anchors, even though they look identical from the street. If the drawings show one glass build-up across an entire elevation, ask whether the corner and parapet zones have been checked separately. A good answer points to a zone diagram in the engineer's report.",
    },
    {
      t: "img",
      id: "wind-1",
      cap: "Wind creates a push on one face and a pull on the others, and the facade must resist both.",
    },
    { t: "h2", x: "How the force travels through the facade" },
    {
      t: "p",
      x: "Wind first acts on the glass. The glass passes the force to its supports, which may be the {{mullion|mullions}} and {{transom|transoms}} of a framed system, or the clamps and structural silicone of a system such as {{/systems/structural-glazing|structural glazing}}. The frame spans between its fixings and passes the force to the {{anchor|anchors}}, and the anchors transfer it into the slab or structural frame behind. Every link in that chain has to be strong enough, and the weakest link decides the safe limit.",
    },
    {
      t: "p",
      x: "In a {{/systems/curtain-wall|curtain wall}}, the frame members are long and slender, and they carry the wind load by bending between anchor points. That is why the section of the mullion, the spacing of the anchors and the stiffness of the connection are all part of the calculation. The glass itself is only one part. A strong pane in a weak frame is not a strong facade.",
    },
    { t: "h2", x: "Strength is only half of the question" },
    {
      t: "p",
      x: "A facade element can be strong enough not to break and still move too much. {{deflection|Deflection}} is the amount a member bends under load. Too much deflection can crack glass edges, stress the sealant, open a gasket or let water past a joint. It can also look unsettling to people standing near a large pane. The specification therefore limits movement as well as strength.",
    },
    {
      t: "p",
      x: "The limit is usually written as a proportion of the span, and the project documents state the value that applies. Ask who set it and whether the glass and the sealants were checked against the same movement as the frame. A frame that meets its own limit but squeezes the glass beyond what its edge can accept has not solved the problem.",
    },
    { t: "h2", x: "Thickness, glass type and the frame" },
    {
      t: "p",
      x: "Glass thickness is one of the main levers for resisting wind, but it is not the only one. A thicker pane is stiffer and stronger, a toughened or heat-strengthened pane carries more load than the same thickness of ordinary glass, and a double-glazed unit shares the load between its two panes. The size of the pane matters too, because a taller or wider pane bends more under the same pressure.",
    },
    {
      t: "p",
      x: "You can change the glass, the frame or the support spacing to reach the same result, and each choice has a cost. Thicker glass is heavier and raises the load on the frame and anchors. A deeper mullion takes more room and changes the sightline. Closer supports may reduce the glass thickness but add more fixings. The facade engineer balances these choices, and a {{/journal/how-facade-glass-thickness-is-chosen|companion article on glass thickness}} explains that side in more detail.",
    },
    { t: "h2", x: "What a wind pressure test measures" },
    {
      t: "p",
      x: "A laboratory or site test can apply controlled air pressure to a sample facade and observe what happens. The {{astm-e330|ASTM E330}} method measures how a facade assembly behaves under pressure in both the push and the pull direction, recording movement and any permanent damage. It does not decide what is acceptable. The project specification sets the pressures, the movement limits and the pass criteria.",
    },
    {
      t: "p",
      x: "When you see a test report, read three things before trusting it. First, check that the sample matched the real facade in glass, frame, anchors and spans. Second, check that the pressures tested match the project's design values, not a generic figure. Third, check what was observed afterward, including whether the sample returned to its original shape. A report on a small sample does not automatically describe a large one.",
    },
    { t: "h2", x: "What to put in a specification" },
    {
      t: "p",
      x: "A clear brief makes the rest easier. It should state the design wind pressure or the source of the data, the zones where it differs, the movement limits for the frame and for the glass, and the way the performance will be proved. If the building is tall or in an exposed location, the brief should say who will confirm the wind data.",
    },
    {
      t: "ul",
      items: [
        "The design wind pressure for each zone of each elevation, or the code and data used to find it.",
        "The deflection limit for frame members and the limit for glass.",
        "The anchor spacing and the structural fixing detail, shown on the {{shop-drawings|shop drawings}}.",
        "Whether a {{mock-up|mock-up}} will be tested under pressure before the full facade is made.",
        "Who is responsible for confirming the wind data and the final check.",
      ],
    },
    { t: "h2", x: "Questions to ask the facade supplier" },
    {
      t: "ol",
      items: [
        "What wind pressure was each glass type and each frame section checked against?",
        "Were the corner and top zones checked separately from the middle of the wall?",
        "What is the movement limit, and who agreed it?",
        "How were the anchors checked, and what does the fixing detail look like?",
        "Has a similar assembly been tested, and does the sample match this project?",
        "Is a pressure test planned on a mock-up, and what happens if it fails?",
      ],
    },
    {
      t: "p",
      x: "These questions do not need an engineering degree. They are the same ones a facade consultant would ask, and a supplier who can answer them clearly is usually working from a real calculation. A supplier who can only offer a general statement that the system is designed for high winds has not yet answered. See also {{/journal/reading-facade-shop-drawings|reading facade shop drawings}} for what the drawings should show.",
    },
    { t: "h2", x: "Wind and water travel together" },
    {
      t: "p",
      x: "Wind does more than push. It also drives rain sideways and changes the pressure across joints, so a detail that stays dry in still air can leak in a storm. This is why wind performance is judged together with water and air leakage, not in isolation. The {{/journal/what-astm-e331-tests|water penetration test}} measures how a facade sample behaves with water applied under pressure, and the two tests complement each other.",
    },
    {
      t: "p",
      x: "Movement matters here as well. If the frame deflects beyond what the gaskets and sealants were designed for, a joint can open at exactly the moment the wind is strongest. Designing for wind therefore includes checking the seals, the drainage path and the joints, and not only the glass and the metal.",
    },
    {
      t: "note",
      x: "This article is general guidance. Wind pressures, movement limits, glass thicknesses and test requirements are set for each project and confirmed with the facade consultant and the facade engineer.",
    },
  ],
};

export default article;
