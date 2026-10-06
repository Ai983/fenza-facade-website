import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { buildBreadcrumb, buildFaqSchema } from "@/lib/seo";

// Guardrails (docs/AFTER-EVERY-EDIT.md, section 3): this page explains what each test MEASURES.
// It never says Fenza has passed a test, and it states no pressures or pass criteria: those are
// set per project by the specification and the facade consultant. Engineering should review the
// wording before launch.

const GOLD = "#C6A15B";
const CREAM = "rgba(243,238,227,0.5)";
const FAINT = "rgba(243,238,227,0.28)";

/** Horizontal arrow from x1 to x2 at height y. */
const Arrow = ({ x1, x2, y, color }: { x1: number; x2: number; y: number; color: string }) => (
  <path
    d={`M${x1} ${y} H${x2} M${x2 - 7} ${y - 4.5} L${x2} ${y} L${x2 - 7} ${y + 4.5}`}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const Frame = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 240 160" fill="none" aria-hidden className="h-full w-full">
    {children}
  </svg>
);

/** A wall seen from the side: most air stops, some finds the joints. */
const AirDiagram = () => (
  <Frame>
    {[[14, 38], [62, 34], [106, 40]].map(([y, h]) => (
      <rect key={y} x="108" y={y} width="24" height={h} rx="2" stroke={CREAM} strokeWidth="1.5" />
    ))}
    {[30, 80, 126].map((y) => (
      <Arrow key={y} x1={28} x2={100} y={y} color={FAINT} />
    ))}
    {[57, 101].map((y) => (
      <Arrow key={y} x1={28} x2={212} y={y} color={GOLD} />
    ))}
  </Frame>
);

/** Spray against the outside face; the wall holds. */
const WaterDiagram = () => (
  <Frame>
    <rect x="108" y="14" width="24" height="132" rx="2" stroke={CREAM} strokeWidth="1.5" />
    {[30, 54, 78, 102, 126].map((y, i) => {
      const o = i % 2 ? 8 : 0;
      return (
        <path
          key={y}
          d={`M${30 + o} ${y} l16 7 M${58 + o} ${y} l16 7 M${84 + o} ${y} l14 6`}
          stroke={GOLD}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      );
    })}
  </Frame>
);

/** Pressure bows the wall; the gap between the lines is the deflection. */
const WindDiagram = () => (
  <Frame>
    <path d="M120 14 V146" stroke={FAINT} strokeWidth="1.5" strokeDasharray="3 4" />
    <path d="M120 14 C152 52 152 108 120 146" stroke={CREAM} strokeWidth="1.5" />
    <path d="M136 14 C168 52 168 108 136 146" stroke={CREAM} strokeWidth="1.5" />
    {[44, 80, 116].map((y) => (
      <Arrow key={y} x1={30} x2={102} y={y} color={GOLD} />
    ))}
    <path d="M121 80 H143 M121 73 V87 M143 73 V87" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
  </Frame>
);

const TESTS = [
  {
    id: "air",
    n: "01",
    name: "Air leakage",
    std: "ASTM E283",
    term: "astm-e283",
    Diagram: AirDiagram,
    question:
      "How much air leaks through the closed facade when there is a pressure difference across it?",
    rows: [
      {
        k: "How it is done",
        v: "The sample is sealed into one side of a test chamber. A fan raises or lowers the air pressure in the chamber to a set level, and the airflow needed to hold that pressure is measured. That flow is the leakage.",
      },
      {
        k: "What is recorded",
        v: "Leakage as airflow per square metre of facade, or per metre of joint, at the specified pressure.",
      },
      {
        k: "Why it matters",
        v: "Leaky joints waste energy, let in noise and dust, and can be the path that carries moisture into the wall.",
      },
    ],
  },
  {
    id: "water",
    n: "02",
    name: "Water penetration",
    std: "ASTM E331",
    term: "astm-e331",
    Diagram: WaterDiagram,
    question: "Does water get through when wind is pushing rain against the facade?",
    rows: [
      {
        k: "How it is done",
        v: "Water is sprayed evenly over the outer face while a fan holds a steady pressure difference across the sample, pushing the water inwards like wind-driven rain. Observers on the inside watch for leaks.",
      },
      {
        k: "What is recorded",
        v: "Whether, where and at what pressure any water gets through, judged against the pass criteria in the specification.",
      },
      {
        k: "Why it matters",
        v: "Water is the failure building owners notice first. Finding a leaking joint on a mock-up is a drawing change; finding it on site is rework on every floor.",
      },
    ],
  },
  {
    id: "wind",
    n: "03",
    name: "Structural and wind load",
    std: "ASTM E330",
    term: "astm-e330",
    Diagram: WindDiagram,
    question: "Does the facade hold up under wind pressure, and how much does it bend?",
    rows: [
      {
        k: "How it is done",
        v: "Air pressure is applied in steps, both pushing in (wind pressure) and pulling out (suction), up to the design wind load and, in many specifications, a higher proof load. Gauges on the framing record how far it deflects.",
      },
      {
        k: "What is recorded",
        v: "Deflection at each step, and any permanent set once the load is removed, judged against the limits in the specification.",
      },
      {
        k: "Why it matters",
        v: "Wind loads on a tall building are large. The test checks that mullions, transoms, glass and fixings behave as the calculations say, and that the glass and seals are never overstressed.",
      },
    ],
  },
] as const;

const STANDARDS_TABLE = [
  { q: "Air leakage", astm: "ASTM E283", en: "EN 12207" },
  { q: "Water penetration", astm: "ASTM E331", en: "EN 12208" },
  { q: "Structural and wind load", astm: "ASTM E330", en: "EN 12210" },
];

const FAQS = [
  {
    question: "What is a facade mock-up?",
    answer:
      "A full-size sample of a representative part of the facade, built from the approved shop drawings with the real profiles, glass, gaskets, sealants and fixings. A performance mock-up is tested in a laboratory; a visual mock-up is used to agree how the facade will look.",
  },
  {
    question: "In what order are the tests done?",
    answer:
      "Usually air leakage first, then water penetration, then the structural test. Many specifications repeat the air and water tests after the structural load, to confirm that nothing opened up. The project specification sets the order and the pressures.",
  },
  {
    question: "Who carries out the tests?",
    answer:
      "Usually an independent test laboratory, with the facade consultant and the client's team witnessing and approving the result before production, as the project specification requires.",
  },
  {
    question: "Does passing the tests mean a facade will never leak?",
    answer:
      "No. The tests check a sample, at set pressures, at one point in time. Site workmanship, building movement and ageing of seals are separate questions, which is why specifications often add on-site and long-term checks.",
  },
  {
    question: "Are test reports available for Fenza systems?",
    answer:
      "Test reports are issued by the testing laboratory against the approved project mock-up. Fenza Facade Engineering is newly established, so please ask us about the status of reports for a particular system rather than assuming they exist.",
  },
];

export default function Testing() {
  return (
    <>
      <Seo
        title="How Facades Are Tested: Air, Water, Wind"
        description="How a facade is proven before production: the mock-up, then air leakage (ASTM E283), water penetration (E331) and wind load (E330), explained plainly."
        path="/testing"
        image="/og/quality-safety.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "How facades are tested", path: "/testing" },
          ]),
          buildFaqSchema(FAQS),
        ]}
      />

      <PageHero
        image="cw-hero"
        eyebrow="Testing"
        title={
          <>
            How a facade is proven to{" "}
            <span className="italic text-gold-soft">perform.</span>
          </>
        }
        intro="Before a facade goes into production, a full-size sample is built and tested. Three tests answer three questions: does air get through, does water get through, and does it stand up to the wind?"
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Resources", to: "/resources" },
          { name: "Testing", to: "/testing" },
        ]}
      >
        <nav aria-label="The three tests" className="flex flex-wrap gap-3">
          {TESTS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="rounded-full border border-cream/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide2 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              {t.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* The mock-up */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">The starting point</span>
            <Reveal>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
                It starts with a{" "}
                <span className="italic text-gold-soft">mock-up.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-pretty text-xl leading-relaxed text-cream/85">
                A <Link to="/glossary#mock-up" className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">mock-up</Link> is
                a full-size sample of a representative part of the facade, built
                from the approved{" "}
                <Link to="/glossary#shop-drawings" className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">shop drawings</Link>{" "}
                with the real profiles, glass, gaskets, sealants and fixings. It
                usually includes typical corners, joints and the connection to a
                slab edge, because that is where problems tend to be.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Visual mock-up",
                  b: "Agrees how the facade will look: colour, finish, proportions and joint lines.",
                },
                {
                  t: "Performance mock-up",
                  b: "Tested in a laboratory against the project specification. This is where the three tests below are carried out.",
                },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 90}>
                  <div className="h-full rounded-lg border border-cream/10 bg-ink-soft p-6">
                    <h3 className="font-display text-xl text-cream">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">{c.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-8 text-sm leading-relaxed text-cream/60">
                The{" "}
                <Link to="/glossary#facade-consultant" className="text-cream/80 underline decoration-cream/30 underline-offset-4 hover:text-gold">facade consultant</Link>{" "}
                and the client's team typically review the drawings, witness the
                tests and approve the result before production begins.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The three tests */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">The three tests</span>
          <Reveal>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-cream md:text-4xl">
              Usually run in this{" "}
              <span className="italic text-gold-soft">order.</span>
            </h2>
          </Reveal>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-cream/65">
            The order follows the severity of the test: the gentlest first, so
            the sample is still in good condition for the next. The project
            specification sets the pressures, the durations and what counts as a
            pass.
          </p>

          <div className="mt-14">
            {TESTS.map(({ id, n, name, std, term, Diagram, question, rows }) => (
              <Reveal key={id}>
                <article
                  id={id}
                  className="scroll-mt-28 grid gap-8 border-t border-cream/10 py-12 md:grid-cols-12 md:gap-12"
                >
                  <div className="md:col-span-4">
                    <div className="aspect-[3/2] rounded-lg border border-cream/10 bg-ink p-4">
                      <Diagram />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <span className="font-display text-lg italic text-gold">{n}</span>
                    <h3 className="mt-2 font-display text-3xl text-cream md:text-4xl">
                      {name}{" "}
                      <span className="whitespace-nowrap text-2xl italic text-gold-soft md:text-3xl">
                        {std}
                      </span>
                    </h3>
                    <p className="mt-4 text-pretty text-lg leading-relaxed text-cream/85">
                      {question}
                    </p>
                    <dl className="mt-8">
                      {rows.map((r) => (
                        <div
                          key={r.k}
                          className="grid gap-1 border-t border-cream/10 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                        >
                          <dt className="text-[0.66rem] font-semibold uppercase tracking-wide2 text-sand">
                            {r.k}
                          </dt>
                          <dd className="text-sm leading-relaxed text-cream/70">{r.v}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      to={`/glossary#${term}`}
                      className="link-underline mt-6 text-sm font-semibold"
                    >
                      Glossary: {std} →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-lg border border-gold/25 bg-cream/[0.03] p-7">
              <span className="eyebrow">Then, often, again</span>
              <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-cream/70">
                Many specifications repeat the air and water tests after the
                structural load, to confirm that nothing opened up under
                pressure. They can also add dynamic water tests, building-movement
                tests, and checks on the installed facade on site.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Standards</span>
            <Reveal>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
                The names you will{" "}
                <span className="italic text-gold-soft">see.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Test standards by what they measure
                </caption>
                <thead>
                  <tr className="border-b border-cream/15 text-[0.66rem] uppercase tracking-wide2 text-sand">
                    <th scope="col" className="py-3 pr-4 font-semibold">What it measures</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">ASTM test</th>
                    <th scope="col" className="py-3 font-semibold">European classification</th>
                  </tr>
                </thead>
                <tbody>
                  {STANDARDS_TABLE.map((r) => (
                    <tr key={r.q} className="border-b border-cream/10">
                      <th scope="row" className="py-4 pr-4 font-display text-lg font-medium text-cream">
                        {r.q}
                      </th>
                      <td className="py-4 pr-4 text-cream/75">{r.astm}</td>
                      <td className="py-4 text-cream/75">{r.en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-cream/60">
              Indian projects also refer to IS 1948, the Bureau of Indian Standards
              specification for aluminium doors, windows and ventilators. Which
              standards apply, in which edition and at what pressures, is set per
              project by the specification and the facade consultant.
            </p>
          </div>
        </div>
      </section>

      {/* Fenza and testing */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Working with Fenza</span>
            <Reveal>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
                Testing is part of the{" "}
                <span className="italic text-gold-soft">specification.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-cream/75">
                The standards, pressures and pass criteria for each project come
                from the project specification and the facade consultant. Fenza
                fabricates to that specification, and test reports are issued by
                the testing laboratory against the approved mock-up.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-pretty leading-relaxed text-cream/60">
                This page explains the tests. It is not a statement of Fenza's
                test results. Fenza Facade Engineering is newly established, so
                ask us about the status of reports for a particular system.
              </p>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Ask about a system
              </Link>
              <Link to="/quality-safety" className="btn-outline">
                Quality &amp; safety
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Common questions</span>
            <h2 className="mt-4 font-display text-3xl text-cream">
              About facade testing
            </h2>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-cream/10">
              {FAQS.map((f, i) => (
                <Reveal key={f.question} delay={i * 50}>
                  <div className="py-6 first:pt-0">
                    <dt className="font-display text-xl text-cream">{f.question}</dt>
                    <dd className="mt-3 text-pretty leading-relaxed text-cream/65">
                      {f.answer}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Specifying a facade?
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-cream/70">
              Share your drawings and performance requirements, and we come back
              with a measured scope and an itemised offer.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start an enquiry
              </Link>
              <Link to="/glossary" className="btn-outline">
                Browse the glossary
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
