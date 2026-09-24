import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { MESSAGING_PILLARS } from "@/lib/content";
import { buildBreadcrumb } from "@/lib/seo";
import { BRAND } from "@/lib/site";

export default function About() {
  return (
    <>
      <Seo
        title="About Fenza"
        description="Fenza Facade Engineering is a dedicated building-envelope manufacturer in Gurugram — a separate legal entity within the Hagerstone group, focused exclusively on facades, with its own registrations held in its own name."
        path="/about"
        image="/og/about-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        image="about-hero"
        eyebrow="The Company"
        title={
          <>
            A facade manufacturer,{" "}
            <span className="italic text-gold-soft">and nothing else.</span>
          </>
        }
        intro="Fenza is a dedicated building-envelope manufacturer. We work on one thing: the outside of the building."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "About", to: "/about" },
        ]}
      />

      {/* Company copy */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-pretty text-xl leading-relaxed text-cream/85 md:text-2xl">
                Curtain wall, structural glazing, fenestration, cladding, louvers
                and the architectural elements that sit alongside them —
                engineered, fabricated on our own line, and installed by our own
                teams.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-pretty leading-relaxed text-cream/65">
                Our fabrication line runs CNC-grade aluminium machinery for
                cutting, routing, crimping and end-milling, which lets us hold
                tolerance at the profile level — the discipline that decides
                whether a facade stays watertight, square and true once it is up.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <dl className="rounded-lg border border-cream/10 bg-ink-soft p-7 text-sm">
                <div className="flex justify-between border-b border-cream/10 py-3">
                  <dt className="text-sand">Entity</dt>
                  <dd className="text-right text-cream">{BRAND.legalName}</dd>
                </div>
                <div className="flex justify-between border-b border-cream/10 py-3">
                  <dt className="text-sand">Focus</dt>
                  <dd className="text-right text-cream">Building envelope only</dd>
                </div>
                <div className="flex justify-between border-b border-cream/10 py-3">
                  <dt className="text-sand">Manufacturing</dt>
                  <dd className="text-right text-cream">{BRAND.location}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-sand">Group</dt>
                  <dd className="text-right text-cream">Hagerstone group</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <span className="eyebrow">What we stand for</span>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Envelope specialists, not generalists.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {MESSAGING_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink p-7">
                  <h3 className="font-display text-xl text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Group relationship note */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <div className="rounded-lg border border-gold/20 bg-cream/[0.03] p-8">
              <span className="eyebrow">Group relationship</span>
              <p className="mt-4 text-pretty leading-relaxed text-cream/75">
                {BRAND.legalName} is a separate legal entity within the Hagerstone
                group. Registrations and certifications are held in Fenza's own
                name and are being established; they are not shared with other
                group companies. The group is stated as backing — not as a source
                of transferable legal or technical credentials.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/manufacturing" className="btn-gold">
                See the factory
              </Link>
              <Link to="/leadership" className="btn-outline">
                Meet the leadership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
