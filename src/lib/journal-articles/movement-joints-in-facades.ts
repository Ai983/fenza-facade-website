import type { Article } from "../journal";

const article: Article = {
  slug: "movement-joints-in-facades",
  title: "Movement joints: why a facade must be allowed to move",
  seoTitle: "Movement Joints in Facades",
  description:
    "Buildings and facades move with temperature, wind and load. How movement joints let a facade move without cracking glass or failing seals.",
  excerpt:
    "A facade looks fixed, but it is not still. Heat, wind and the building's own settlement all move it. Movement joints are how it gets through that without damage.",
  teaser: "Why the facade has to move, and how joints let it.",
  topic: "Performance",
  date: "2026-10-06",
  hero: "joints-hero",
  card: "joints-card",
  og: "/og/systems-hero.jpg",
  terms: ["movement-joint", "deflection", "anchor", "sealant-joint", "wind-load", "mock-up", "facade-consultant", "gasket"],
  systems: ["curtain-wall", "cladding"],
  faq: [
    {
      question: "Why do facades need movement joints?",
      answer:
        "A facade is never still. It heats and cools, the building sways in the wind, and the structure flexes and settles over years. If the facade cannot move with all that, something has to give, usually the glass or the seals, so movement joints let it move without damage.",
    },
    {
      question: "What happens if a facade has no movement joints?",
      answer:
        "Glass can crack because it has no give when a frame pushes on it. Frames and panels can buckle, seals can tear and leak, parts can creak and pop as they bind, and fixings can loosen from repeated stress. Many facade failures that seem to be about water or noise have movement behind them.",
    },
    {
      question: "How wide should a facade sealant joint be?",
      answer:
        "A sealant joint can stretch and compress only a certain percentage of its width, so a narrow joint where there is a lot of movement will tear. The sealant manufacturer publishes each product's movement capacity, and the joint is sized to the expected movement with a margin.",
    },
    {
      question: "How should facade movement joints be inspected and maintained?",
      answer:
        "Look for sealant that has split, shrunk away from its edge or lost its colour, gaps narrower or wider than they should be, and water staining below a joint. Record what you see with photographs and compare year by year. Never seal or paint over a joint designed to open and close.",
    },
  ],
  body: [
    {
      t: "p",
      x: "A facade looks like a fixed thing, but nothing about it is still. It heats and cools through the day, the building sways in the wind, and the structure behind it flexes and settles over years. If the facade cannot move with all that, something has to give, and it is usually the glass or the seals. Most facade failures that appear to be about water, noise or cracked glass have movement somewhere in their cause.",
    },
    { t: "h2", x: "What moves it" },
    {
      t: "ul",
      items: [
        "Temperature. Aluminium and concrete expand and contract by different amounts as they heat and cool, so the facade and the structure move relative to each other. A long aluminium member in a hot sun can change length by several millimetres.",
        "Wind. A tall building sways, and each floor moves relative to the next, so the facade has to accommodate movement between floors.",
        "Structural deflection. Floor slabs bend under load and can creep over time, so the slab edge the facade is fixed to moves.",
        "Shrinkage of new concrete. This continues for some time after construction, so a facade fixed to a new frame will see the frame settle.",
        "Seismic movement, where it applies, which can be much larger than the movements above.",
      ],
    },
    {
      t: "img",
      id: "joints-1",
      cap: "The joint lines between panels are not only decoration. Some are where the facade is allowed to move.",
    },
    { t: "h2", x: "What goes wrong without it" },
    {
      t: "ul",
      items: [
        "Cracked or broken glass, when the frame pushes on it. Glass has no give, so a frame that grows or shifts presses on the edge and can break the pane.",
        "Buckled frames and panels. Metal that cannot expand sideways bows outward.",
        "Torn or failed seals, which then leak. A sealant joint stretched beyond its limit tears or separates from its edge.",
        "Creaking and popping noises as parts stick and slip against each other. This is rarely dangerous, but it tells you that something is binding.",
        "Fixings that loosen or fail from repeated stress.",
      ],
    },
    { t: "h2", x: "The principle: fix in one direction, free in another" },
    {
      t: "p",
      x: "A well-designed facade does not try to stop movement. It decides where movement is allowed, and arranges the fixings so the movement goes there. Each part is held firmly in the directions where it must be (for example, to resist wind), and left free to slide in the directions where the building or the temperature will move it. Fixed points and sliding points are laid out on purpose, and drawn on the drawings.",
    },
    { t: "h2", x: "How a facade is designed to move" },
    {
      t: "ul",
      items: [
        "{{anchor|Anchors}} that fix the facade in one direction and let it slide in another, so loads go into the structure but movement is not locked in.",
        "Splice joints in long vertical members, with a designed gap that opens and closes as the frame changes length. In a tall curtain wall the verticals are in lengths of one or two storeys, joined by a sleeve that allows the gap.",
        "{{sealant-joint|Sealant joints}} sized for the expected movement: the width of the joint decides how much it can take.",
        "Gaps between panels and at corners and changes of direction, detailed so they stay weathertight as they move.",
        "Slip joints at the head of a wall, where it meets the underside of a slab, so that the slab can deflect without loading the facade.",
      ],
    },
    {
      t: "img",
      id: "joints-2",
      cap: "Joints at panel edges and corners are where movement is taken up.",
    },
    { t: "h2", x: "Sealant joints: width matters" },
    {
      t: "p",
      x: "A sealant joint can stretch and compress only a certain percentage of its width. A narrow joint in a place that moves a lot will be torn within a season; a wider one will not. The sealant manufacturer publishes the movement capacity of each product, and the joint is sized to the expected movement with a margin. It is also shaped properly: a backing rod behind the sealant stops it from bonding to three sides, so that it can stretch freely instead of tearing. A joint that is full to the back with sealant and no rod is a failure waiting to happen.",
    },
    { t: "h2", x: "Interfaces are the weak points" },
    {
      t: "p",
      x: "Within a single facade system, movement is designed in. The trouble is at interfaces, where the facade meets something else: the concrete frame, a roof, a different cladding, a window set into masonry. Each of these is moving differently. A joint at an interface needs to be designed, shown on the drawings, and agreed by all the parties who meet at it. A line of sealant added later by the nearest trade is not a movement joint.",
    },
    { t: "h2", x: "An illustration with numbers" },
    {
      t: "p",
      x: "Aluminium expands by about 0.000023 of its length for every degree Celsius it warms. Take a 4 m length of aluminium that goes from a cool night to a hot afternoon, a swing of 50 degrees. The arithmetic is 4 m multiplied by 50 and by 0.000023, which gives 0.0046 m, or about 4.6 mm. A 4 m length of concrete, which expands about half as much, would move around 2 mm over the same range. The difference of 2 to 3 mm between the two is movement that has to go somewhere, and it is a small number for one member and a large one for a long run.",
    },
    {
      t: "p",
      x: "This is only an illustration. The real temperature range depends on the climate, the colour of the finish and the exposure, and the real design movement is set by the engineer, who adds the effects of wind sway and structural deflection. But the example shows why the amounts are never zero, and why every long run of metal needs a place to grow.",
    },
    { t: "h2", x: "Where joints are found on a typical building" },
    {
      t: "ul",
      items: [
        "Between lengths of vertical framing, as splice joints.",
        "Between panels, as the visible joints of a cladding system.",
        "At the head of a wall, where it meets the underside of a slab.",
        "At the corners of the building and at changes of direction.",
        "At the base, where the facade meets the ground or a podium.",
        "Around openings, where a window or door meets the wall.",
      ],
    },
    { t: "h2", x: "Inspection and maintenance" },
    {
      t: "p",
      x: "Joints are the part of a facade that wears, so they are the part to inspect. Look for sealant that has split, shrunk away from its edge, or lost its colour, for gaps that are narrower or wider than they should be, and for signs of water staining below a joint. Record what you see, with photographs, and compare it year by year. A joint that is repaired early costs little. One that is left until it leaks can be expensive, because the water is by then inside the wall.",
    },
    { t: "h2", x: "New buildings move more" },
    {
      t: "p",
      x: "A new concrete frame is not finished moving when the facade goes on. It continues to shrink and creep for a year or more, and the first full cycle of seasons is when the movement joints are tested for real. That is a good reason to inspect the joints after the first monsoon and the first hot season, and to repair anything that has opened, closed or torn, while the building is still under its defects liability period.",
    },
    { t: "h2", x: "What to ask" },
    {
      t: "ul",
      items: [
        "What movement was the facade designed for, and what assumptions about temperature, wind sway and slab deflection were used?",
        "Which limits did the structural engineer set for the building, such as {{deflection|deflection}} and drift?",
        "Are the joints and anchors tested on a {{mock-up|mock-up}}? See {{/testing|How facades are tested}}.",
        "Which anchors are fixed and which are sliding, and is that shown on the drawings?",
        "Who looks after the joints once the building is occupied? A movement joint that is sealed solid, or painted over, stops working.",
      ],
    },
    { t: "h2", x: "Mistakes to avoid" },
    {
      t: "ul",
      items: [
        "Fixing the facade rigidly at every point so that it cannot move.",
        "Using the structural engineer's drift limits from one design stage without checking the final structure.",
        "Treating sealant as a way to fill any gap, including those that move.",
        "Painting or sealing over a joint that was designed to open and close.",
        "Leaving the interface details until the site, when the structure has already been built a few millimetres out.",
      ],
    },
    {
      t: "p",
      x: "If your structural engineer has set movement limits for the building, include them with your enquiry. See {{/journal/what-to-send-a-facade-manufacturer|What to send a facade manufacturer}}. {{/journal/stick-vs-unitised-curtain-wall|Stick vs. unitised curtain wall}} also looks at how the choice of system changes how movement is taken up.",
    },
  ],
};

export default article;
