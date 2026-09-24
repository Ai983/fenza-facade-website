import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { QUALITY_CHECKS, SAFETY_GROUPS } from "@/lib/content";
import { imgUrl } from "@/lib/systems";
import { buildBreadcrumb, buildFaqSchema } from "@/lib/seo";

const FAQS = [
  {
    question: "How does Fenza Facade Engineering control facade quality?",
    answer:
      "Tolerance is held at the profile level: servo-driven cutting to ±0.1 mm, routed drainage and end-milled joints. Control is applied in four places — in-process checks at the machine, batch verification against the approved shop drawing, machine condition monitoring so tolerance does not drift across a run, and a sign-off before anything is despatched.",
  },
  {
    question: "What safety measures does Fenza apply on site?",
    answer:
      "Safety is planned before work begins: management commitment and planning, risk assessment, safe work planning and permit to work. On site that becomes supervision and inspection, personal protective equipment, controlled work at height and controlled lifting and equipment use, supported by housekeeping and 5S, health and welfare, emergency preparedness and environmental protection.",
  },
  {
    question: "Who installs Fenza facades?",
    answer:
      "Fenza Facade Engineering's own site teams. Erection follows fabrication and in-process inspection on Fenza's own line, and runs to the agreed programme rather than being subcontracted out.",
  },
];

export default function QualitySafety() {
  return (
    <>
      <Seo
        title="Quality Control & Site Safety"
        description="How Fenza Facade Engineering controls quality and safety — in-process checks, batch verification, machine condition monitoring and sign-off before despatch, with site safety planned before work begins across work at height, PPE, lifting, welfare and emergency preparedness."
        path="/quality-safety"
        image="/og/quality-safety.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Quality & Safety", path: "/quality-safety" },
          ]),
          buildFaqSchema(FAQS),
        ]}
      />

      <PageHero
        image="cw-hero"
        eyebrow="Assurance"
        title={
          <>
            Tolerance held at the{" "}
            <span className="italic text-gold-soft">profile level.</span>
          </>
        }
        intro="Fenza Facade Engineering controls the facade in two places: on the line, where tolerance is set, and on the elevation, where it is installed. Both are planned before work begins."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Quality & Safety", to: "/quality-safety" },
        ]}
      />

      {/* Quality control */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <Reveal variant="left" className="md:col-span-5">
              <span className="eyebrow">Quality</span>
              <p className="mt-5 font-display text-[clamp(3rem,7vw,4.5rem)] leading-none text-gold">
                ±0.1 mm
              </p>
              <p className="mt-4 text-sm uppercase tracking-wide2 text-sand">
                Tolerance held at the profile level
              </p>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/70">
                Servo-driven cutting, routed drainage and end-milled joints —
                the discipline that keeps a facade watertight, square and true
                once it is up.
              </p>
              <div className="mt-8 overflow-hidden rounded-lg border border-cream/10">
                <img
                  src={imgUrl("qc-profile")}
                  alt="Aluminium profile section — drainage and joint detail held to tolerance"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="md:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {QUALITY_CHECKS.map((c, i) => (
                  <Reveal key={c.n} delay={(i % 2) * 80}>
                    <div className="h-full rounded-lg border border-cream/10 bg-ink-soft p-7">
                      <span className="font-display text-2xl italic text-gold">
                        {c.n}
                      </span>
                      <h2 className="mt-3 font-display text-xl text-cream">
                        {c.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-cream/60">
                        {c.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & site safety */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <span className="eyebrow">Delivery</span>
            <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
              Safety, planned{" "}
              <span className="italic text-gold-soft">
                before work begins.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-cream/70">
              Erection to programme, after fabrication and in-process inspection
              on our own line. The site teams are Fenza's own, and the controls
              below apply to every elevation they work on.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 overflow-hidden rounded-lg border border-cream/10">
              <img
                src={imgUrl("safety-site")}
                alt="Glazing unit being installed at height, with harnessed site team and edge protection"
                loading="lazy"
                className="aspect-[16/7] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY_GROUPS.map((g, i) => (
              <Reveal key={g.n} delay={(i % 4) * 80}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink p-7">
                  <span className="font-display text-2xl italic text-gold">
                    {g.n}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-cream">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/55">
                    {g.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-cream/10 pt-5">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-2.5 text-sm leading-relaxed text-cream/70"
                      >
                        <span aria-hidden className="text-gold">
                          ·
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards — pointer, not a duplicate of /manufacturing */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <span className="eyebrow">Standards</span>
            <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
              Designed and tested against the references.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-cream/70">
              Fenza systems are designed and tested against IS 1948 and the
              ASTM and EN references for air infiltration, water penetration
              and structural wind load. Applicable standards and their current
              revisions are confirmed per project with the facade consultant,
              and independent test reports are issued against the approved
              project mock-up.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/manufacturing" className="btn-outline">
                Standards and the aluminium line
              </Link>
              <Link to="/contact" className="btn-gold">
                Discuss your project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
