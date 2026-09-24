import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import {
  buildBreadcrumb,
  personSchema,
  AUTHOR_NAME,
} from "@/lib/seo";

const EXPERTISE = [
  {
    title: "Premium facade systems",
    body: "Specification and delivery of high-end curtain wall and glazed envelopes on complex commercial developments.",
  },
  {
    title: "Structural glazing",
    body: "Two- and four-side structural silicone glazing, from carrier design through mock-up and execution.",
  },
  {
    title: "Cladding technologies",
    body: "Metal, composite and ventilated rain-screen systems across large-scale elevations.",
  },
  {
    title: "High-rise execution",
    body: "Exterior architecture and building-envelope execution on high-rise and large-format projects.",
  },
];

export default function Leadership() {
  return (
    <>
      <Seo
        title="Leadership & Projects — Akhilesh Kumar Singh"
        description="Akhilesh Kumar Singh, Director — Facade Projects at Fenza, brings 25+ years in facade engineering, structural glazing, cladding and high-rise exterior execution. His career record sets Fenza's engineering standard."
        path="/leadership"
        image="/og/leadership-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Leadership", path: "/leadership" },
          ]),
          personSchema,
        ]}
      />

      <PageHero
        image="leadership-hero"
        eyebrow="Facade Leadership"
        title={AUTHOR_NAME}
        intro="Director — Facade Projects · 25+ years in facade engineering, exterior architecture and advanced building-envelope systems."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Leadership", to: "/leadership" },
        ]}
      />

      {/* Bio */}
      <section className="relative overflow-hidden bg-ink pt-20 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-full max-w-2xl bg-[radial-gradient(55%_60%_at_32%_100%,rgba(198,161,91,0.13),transparent_70%)]"
        />
        <div className="container-content grid items-end gap-10 md:grid-cols-12">
          <Reveal variant="left" className="order-2 md:order-1 md:col-span-5">
            <img
              src="/images/akhilesh-cutout.png"
              alt={`${AUTHOR_NAME}, Director — Facade Projects, Fenza`}
              className="mx-auto block w-full max-w-[21rem] drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
          <div className="order-1 pb-14 md:order-2 md:col-span-7 md:pb-28">
            <Reveal>
              <p className="text-pretty text-xl leading-relaxed text-cream/85 md:text-2xl">
                Twenty-five years in facade engineering, exterior architecture and
                advanced building-envelope systems.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty leading-relaxed text-cream/65">
                Deep expertise in premium facade solutions, structural glazing,
                cladding technologies and high-rise exterior execution — having
                led complex commercial and large-scale developments through to
                completion. His technical command of materials and execution sets
                the engineering standard Fenza's line is built to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">What he brings</span>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Depth across the building envelope.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {EXPERTISE.map((e, i) => (
              <Reveal key={e.title} delay={(i % 2) * 90}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink p-7">
                  <h3 className="font-display text-xl text-cream">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {e.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Honesty note + CTA */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <div className="rounded-lg border border-gold/20 bg-cream/[0.03] p-8">
              <span className="eyebrow">A note on projects</span>
              <p className="mt-4 text-pretty leading-relaxed text-cream/75">
                Project experience referenced here is {AUTHOR_NAME}'s own career
                record. Fenza Facade Engineering is newly established and its
                project portfolio is being built — completed work will be
                published as Fenza's own as it is delivered.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Work with the team
              </Link>
              <Link to="/systems" className="btn-outline">
                Explore systems
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
