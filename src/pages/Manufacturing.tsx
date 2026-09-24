import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { imgUrl } from "@/lib/systems";
import {
  MACHINES,
  PLANT_GALLERY,
  FINISHES,
  STANDARDS,
  CONSTRUCTION_METHODS,
  QUALITY_CHECKS,
  PRODUCTION_STEPS,
} from "@/lib/content";
import { buildBreadcrumb } from "@/lib/seo";
import { BRAND } from "@/lib/site";

export default function Manufacturing() {
  return (
    <>
      <Seo
        title="Manufacturing — the aluminium line"
        description="Inside Fenza's Gurugram fabrication line: servo-driven double-head cutting to ±0.1 mm, copy routing, corner crimping and end-milling, aluminium finishes and the reference standards our systems are tested against."
        path="/manufacturing"
        image="/og/systems-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Manufacturing", path: "/manufacturing" },
          ]),
        ]}
      />

      <PageHero
        image="mc_router"
        eyebrow="Manufacturing"
        title={
          <>
            Precision set at the{" "}
            <span className="italic text-gold-soft">profile level.</span>
          </>
        }
        intro="Our line covers the two construction methods that between them account for almost all aluminium fenestration and curtain wall: mitred corners mechanically crimped, and butt-jointed mullion-to-transom assemblies cut with a notch-and-tenon end mill."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Manufacturing", to: "/manufacturing" },
        ]}
      />

      {/* Lead */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="text-pretty text-xl leading-relaxed text-cream/85 md:text-2xl">
              Fenza fabricates from a facility in {BRAND.location}. We work on one
              thing — the outside of the building — engineered, made on our own
              line, and installed by our own teams.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-pretty leading-relaxed text-cream/65">
              The line runs CNC-grade aluminium machinery for cutting, routing,
              crimping and end-milling, which lets us hold tolerance at the
              profile level — the discipline that decides whether a facade stays
              watertight, square and true once it is up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Machines */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">The Line</span>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Four machines, one tolerance discipline.
          </h2>
          {/* 2-up, not 4-up: each card now carries the machine's capability
              list from the company profile and needs the vertical room. */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {MACHINES.map((m, i) => (
              <Reveal key={m.n} delay={(i % 2) * 80}>
                <div className="h-full overflow-hidden rounded-lg border border-cream/10 bg-ink">
                  <div className="aspect-[3/2] overflow-hidden bg-white">
                    <img
                      src={imgUrl(m.img)}
                      alt={m.title}
                      loading="lazy"
                      className="h-full w-full object-contain p-3"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[0.6rem] font-semibold tracking-wide2 text-gold">
                      {m.n}
                    </span>
                    <h3 className="mt-2 font-display text-lg text-cream">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/55">
                      {m.body}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-cream/10 pt-5">
                      {m.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-2.5 text-sm leading-relaxed text-cream/70"
                        >
                          <span aria-hidden className="text-gold">
                            ·
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Construction methods */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <span className="eyebrow">Method</span>
            <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
              Two ways to{" "}
              <span className="italic text-gold-soft">build a corner.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-cream/70">
              Our line covers the two construction methods that between them
              account for almost all aluminium fenestration and curtain wall.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {CONSTRUCTION_METHODS.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 80}>
                <div className="h-full overflow-hidden rounded-lg border border-cream/10 bg-ink-soft">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={imgUrl(m.img)}
                      alt={m.caption}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <h3 className="font-display text-2xl text-cream">
                      {m.title}
                    </h3>
                    <p className="mt-4 text-pretty leading-relaxed text-cream/65">
                      {m.body}
                    </p>
                    <p className="mt-6 border-t border-cream/10 pt-4 text-[0.62rem] uppercase tracking-wide2 text-sand">
                      {m.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the production house */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <span className="eyebrow">Production house</span>
            <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
              Where tolerance{" "}
              <span className="italic text-gold-soft">is set.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-cream/70">
              Precision at the profile level is what makes a facade watertight,
              square and durable on site. This is the order the work runs in.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTION_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 80}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink p-7">
                  <span className="font-display text-2xl italic text-gold">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plant gallery */}
      <section className="bg-ink py-20 md:py-24">
        <div className="container-content">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {PLANT_GALLERY.map((p, i) => (
              <Reveal key={p.img} delay={(i % 4) * 70}>
                <figure className="group relative aspect-[2/3] overflow-hidden rounded-md border border-cream/10">
                  <img
                    src={imgUrl(p.img)}
                    alt={p.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 py-2 text-[0.6rem] uppercase tracking-wide2 text-cream/80">
                    {p.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            </div>
          </div>
          <Reveal>
            <p className="container-content mt-8 max-w-2xl text-sm leading-relaxed text-cream/45">
              Plant capacity and facility area for the Gurugram unit are being
              confirmed and are deliberately not stated here.
            </p>
          </Reveal>
      </section>

      {/* Finishes */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">Surface & Finish</span>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Colour consistency, surface durability.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/60">
            All aluminium is finished to the project specification, applied to
            extruded 6063-T6 sections before fabrication.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FINISHES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink p-6">
                  <h3 className="font-display text-lg text-cream">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 max-w-2xl text-xs leading-relaxed text-cream/45">
              Finish ranges, coating thickness and any colour warranty are
              confirmed with the approved applicator for each project. Wood-grain
              and stone-effect sublimation finishes are available on request.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">Quality & Standards</span>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Built to the reference standards.
          </h2>

          {/* In-process control — the detail lives on /quality-safety. */}
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {QUALITY_CHECKS.map((c) => (
                <span
                  key={c.n}
                  className="rounded-full border border-gold/30 px-4 py-1.5 text-xs text-cream/75"
                >
                  {c.title}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/60">
              Control is applied at the machine, across the batch and before
              despatch.{" "}
              <Link to="/quality-safety" className="link-underline text-sm">
                Quality control &amp; site safety →
              </Link>
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 80}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink-soft p-7">
                  <span className="font-display text-2xl italic text-gold">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/55">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 max-w-3xl text-xs leading-relaxed text-cream/45">
              Standards are cited as the references our systems are designed and
              tested against. Applicable standards and their current revisions are
              confirmed per project with the facade consultant. Independent test
              reports are issued against the approved project mock-up.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12">
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
