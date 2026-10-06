import type { Article } from "../journal";

const article: Article = {
  slug: "what-astm-e331-tests",
  title: "What ASTM E331 actually tests",
  seoTitle: "What ASTM E331 Actually Tests",
  description:
    "ASTM E331 is the standard water-penetration test for facades. How it runs, where leaks usually come from, and what a single test cannot tell you.",
  excerpt:
    "A leaking facade is rarely a surprise: it is usually something a water test would have caught. Here is what the standard test does, and what it does not tell you.",
  teaser: "How the standard water test runs, and what it cannot tell you.",
  topic: "Testing",
  date: "2026-10-06",
  hero: "e331-hero",
  card: "e331-card",
  og: "/og/quality-safety.jpg",
  terms: ["astm-e331", "mock-up", "drainage-slot", "gasket", "air-infiltration", "mullion", "transom", "astm-e283", "astm-e330", "sealant-joint"],
  systems: ["curtain-wall"],
  faq: [
    {
      question: "What does ASTM E331 test?",
      answer: "ASTM E331 is the standard test method for water penetration of exterior windows, curtain walls and doors under a uniform static air pressure difference. Water is sprayed on the outside of a full-size sample while a fan holds a steady pressure, pushing water inwards the way wind-driven rain would.",
    },
    {
      question: "How is the ASTM E331 water penetration test done?",
      answer: "A facade sample is built into a test chamber, water is sprayed evenly over its outer face, and a fan holds a static pressure difference for a specified time. Observers inside look for water reaching the room side. Pressure and duration come from the project specification.",
    },
    {
      question: "Where do facade leaks usually come from?",
      answer: "Leaks usually start at corners and junctions where mullions and transoms meet, short or badly seated gaskets, blocked drainage slots, sealant joints with gaps or poor adhesion, unsealed fixings through the weather line, and interfaces with other trades such as the roof edge, base of the wall and openings.",
    },
    {
      question: "Does passing ASTM E331 mean a facade will never leak?",
      answer: "No. It is a static test on a sample, not the finished building, so site workmanship is checked separately. It does not replace air leakage or structural testing, and it says nothing about how seals age over decades. A production facade that departs from the tested sample is no longer covered.",
    },
  ],
  body: [
    {
      t: "p",
      x: "Water is the failure building owners notice first, and it is usually found late: after handover, after the first monsoon, often after the fit-out has gone in behind the glass. A water test on a sample, before the facade is made in volume, is how that gets found early, when the fix is a drawing change and not a repair programme.",
    },
    { t: "h2", x: "The question it answers" },
    {
      t: "p",
      x: "Does water get through the facade when it is being driven against it by wind? {{astm-e331|ASTM E331}} is the standard test method for water penetration of exterior windows, curtain walls and doors under a uniform static air pressure difference. In plain terms: water is sprayed on the outside of a full-size sample while a fan holds a steady pressure difference across it, pushing the water inwards the way wind-driven rain would.",
    },
    {
      t: "p",
      x: "The pressure matters because rain on its own is rarely the problem. A joint that stays dry under a gentle drizzle can leak badly when wind pushes water sideways and upwards into it. The test recreates that driving force in a laboratory, where it can be controlled and repeated.",
    },
    { t: "h2", x: "How the test runs" },
    {
      t: "ol",
      items: [
        "A sample of the facade is built into a test chamber, with its outer face exposed to a spray rack and its inner face inside a sealed chamber.",
        "Water is sprayed evenly over the outer face at a specified rate.",
        "A fan creates a static pressure difference across the sample and holds it for a specified time. The pressure and the duration come from the project specification.",
        "Observers inside look for water getting through to the room side. The specification defines exactly what counts as a failure.",
        "If water appears, its location and the pressure at which it appeared are recorded, so the detail can be corrected and the test repeated.",
      ],
    },
    {
      t: "img",
      id: "e331-1",
      cap: "Joints are where water finds its way in, which is why the test is run on a sample that includes them.",
    },
    { t: "h2", x: "What the sample has to include" },
    {
      t: "p",
      x: "A test is only as honest as the sample. It should be a representative part of the facade, built from the approved drawings with the real profiles, glass, gaskets and sealants, by the people who will build the real thing. The sample normally includes a typical corner, the junction between different elements, the opening vents or doors if there are any, and the connection to a slab edge. A flat, perfect panel in the middle of the wall tells you very little, because the weakest points are the details.",
    },
    {
      t: "p",
      x: "The sample, often called a {{mock-up|mock-up}}, is also where the installation method is tested. If the people who built it needed a trick to make the joint work, that trick needs to be written into the method statement for the site, or the building will not match the sample.",
    },
    { t: "h2", x: "Where leaks usually come from" },
    {
      t: "ul",
      items: [
        "Corners and junctions where {{mullion|mullions}} and {{transom|transoms}} meet, because several seals and drainage paths have to line up in one small place.",
        "{{gasket|Gaskets}} that are cut short, stretched or not seated properly at corners. A gasket that shrinks back from the corner leaves a gap.",
        "Blocked or badly placed {{drainage-slot|drainage slots}}, so water that gets in cannot get out and finds its own way.",
        "{{sealant-joint|Sealant joints}} with gaps, poor adhesion or more movement than they can take.",
        "Fixings that pass through the weather line without being sealed, such as screws and brackets.",
        "Changes of direction and interfaces with other trades, such as the roof edge, the base of the wall and openings.",
      ],
    },
    { t: "h2", x: "A facade is designed to let a little water in" },
    {
      t: "p",
      x: "This surprises many people. A well-designed curtain wall does not rely on one perfect seal. It is built in layers: an outer seal that stops most of the water, a drained space behind it, and an inner seal that stops the rest. Any water that gets past the first seal is meant to run down inside the frame and drain out through weep paths. This is called a drained and ventilated, or pressure-equalised, design.",
    },
    {
      t: "p",
      x: "That is why blocked drainage is so harmful, and why the test must be run on a sample built exactly as the real facade will be. Painting over a weep slot or filling a drainage path with sealant, with the best intentions, turns a forgiving design into a fragile one.",
    },
    { t: "h2", x: "What it does not tell you" },
    {
      t: "ul",
      items: [
        "It is a static test. Real gusts change the pressure constantly, so some specifications add cyclic or dynamic water tests (AAMA 501.1 is one example) for that reason.",
        "It tests a sample, not the finished building. Site workmanship is checked separately, for example with a field test such as ASTM E1105 on the installed facade.",
        "A pass on one test does not replace {{astm-e283|air leakage}} or {{astm-e330|structural}} testing. Each answers a different question.",
        "It says nothing about how the seals will age over decades. Sealants, gaskets and coatings change with sun, heat and movement.",
        "It does not cover water coming from elsewhere, such as condensation inside the frame or a roof leak running down the wall.",
      ],
    },
    
    { t: "h2", x: "Reading a test result" },
    {
      t: "p",
      x: "A test report is more than a pass or fail. Read it for what was tested (the exact configuration, with drawings), at what pressure and for how long, what the criteria were, what was observed, and what was changed along the way. If the sample was modified during testing to make it pass, the real facade must include the same modifications. Ask to see the final drawings of the tested sample, and compare them with the production drawings.",
    },
    {
      t: "p",
      x: "Be careful with reports for other projects. A report on a similar system is useful background, but the pressure, the glass, the corners, and the details can all differ. The test that counts is the one on your approved mock-up, to your specification.",
    },
    { t: "h2", x: "Where the test sits in a project" },
    {
      t: "p",
      x: "The water test is one step in a sequence, and its value depends on the steps around it. A typical order looks like this:",
    },
    {
      t: "ol",
      items: [
        "The system design and the shop drawings are approved by the consultant.",
        "The mock-up is built, by the team and with the methods that will be used for production.",
        "The mock-up is installed in the test chamber, instrumented and checked against the drawings.",
        "The tests are run in sequence: air leakage first, then water penetration, then the structural test.",
        "Any failure is investigated, the detail is changed and the test is repeated.",
        "The report is issued and approved, and the tested details are frozen.",
        "Production starts, built to the approved and tested details.",
      ],
    },
    {
      t: "p",
      x: "The point of step seven is easy to miss. A passing test proves that a particular design, built a particular way, performs. It does not prove that any variation of it will. If the production facade departs from the tested sample, the test no longer covers it, and a change should go back to the consultant before it is made.",
    },
    { t: "h2", x: "Questions people ask" },
    {
      t: "ul",
      items: [
        "Can a facade fail the test and still be approved? Yes. A failure on a mock-up is a normal and useful result. The detail is changed and the test repeated. What matters is that the final tested sample matches what is built.",
        "Does the test apply only to curtain walls? No. The same method is used for windows, doors and skylights, and similar procedures exist for other elements. The specification says what is tested.",
        "Is the test pressure the same as the wind pressure? Not necessarily. The specification states the test pressure, which is usually related to the design wind load but is chosen by the designer for the water test and is often a fraction of the structural design pressure.",
        "Can the test be done on site? A field version, such as ASTM E1105, can be carried out on the installed facade. It is useful for checking workmanship, and it is a different test from the laboratory one.",
      ],
    },
    { t: "h2", x: "Why it belongs before production" },
    {
      t: "p",
      x: "A mock-up is tested early, before the facade is made in volume. A leak found on a mock-up is a drawing or detail change; found on site, it is rework on every floor, often from scaffolding, with the interior already finished behind it. The cost of testing a sample is small beside the cost of opening a completed wall. For the full sequence of air, water and structural tests, see {{/testing|How facades are tested}}.",
    },
    {
      t: "note",
      x: "Applicable standards, pressures, durations and pass criteria are set per project by the specification and the facade consultant. This article explains the test; it is not a statement of any test result.",
    },
  ],
};

export default article;
