import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SystemCard from "@/components/SystemCard";
import EnquiryForm from "@/components/EnquiryForm";
import { SYSTEMS, imgUrl } from "@/lib/systems";
import {
  PROCESS_STEPS,
  STANDARDS,
  AUDIENCE_SPLIT,
  AT_A_GLANCE,
  PARTNER_POINTS,
} from "@/lib/content";
import { BRAND } from "@/lib/site";
import {
  buildFaqSchema,
  buildSystemSchema,
  AUTHOR_NAME,
} from "@/lib/seo";

const HOME_FAQS = [
  {
    question: "What does Fenza Facade Engineering make?",
    answer:
      "Fenza is a dedicated building-envelope manufacturer. We design, fabricate and install curtain wall, structural glazing, spider glazing, aluminium windows and doors, cladding, rain-screen facades, louvers, railings, skylights and pergolas — thirteen system families in all.",
  },
  {
    question: "Where is Fenza located?",
    answer:
      "Fenza fabricates from its facility in Gurugram, Haryana, India, and serves projects across the country.",
  },
  {
    question: "Is Fenza part of a larger group?",
    answer:
      "Yes — Fenza Facade Engineering is a separate legal entity within the Hagerstone group, focused exclusively on facades. Its registrations and certifications are held in its own name.",
  },
  {
    question: "Which facade standards does Fenza work to?",
    answer:
      "Fenza's systems are designed and tested against reference standards including IS 1948 and, as specified per project, ASTM E283, E330 and E331 and EN 12207, 12208 and 12210 for air, water and structural performance.",
  },
];

function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <img
          src={imgUrl("home-hero")}
          alt="Fenza glazed curtain wall facade"
          className="h-[116%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink" />
      </motion.div>

      <div className="container-content relative z-10 pt-[74px]">
        <span className="eyebrow animate-fade-up">
          Facade Engineering · {BRAND.location}
        </span>
        <h1
          className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,5.4rem)] leading-[1.02] text-cream animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          The building envelope,{" "}
          <span className="italic text-gold-soft">engineered.</span>
        </h1>
        <p
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream/80 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          {BRAND.short} designs, fabricates and installs curtain wall, glazing,
          cladding and architectural elements — precision-made on our own
          aluminium line in {BRAND.location}.
        </p>
        <div
          className="mt-9 flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Link to="/contact" className="btn-gold">
            Enquire
          </Link>
          <Link to="/systems" className="btn-outline">
            Explore systems
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <span className="animate-scroll-cue block h-10 w-6 rounded-full border border-cream/30">
          <span className="mx-auto mt-2 block h-2 w-0.5 rounded bg-gold" />
        </span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Facade Manufacturer in Gurugram, India"
        description="Fenza Facade Engineering designs, fabricates and installs curtain wall, structural glazing, cladding, aluminium windows and doors, louvers and architectural elements — engineered on our own line in Gurugram."
        path="/"
        image="/og/home-hero.jpg"
        schema={[
          buildFaqSchema(HOME_FAQS),
          buildSystemSchema({
            name: "Building envelope systems",
            description:
              "Curtain wall, structural glazing, fenestration, cladding, louvers and architectural elements engineered and fabricated by Fenza.",
            path: "/systems",
            image: "/og/home-hero.jpg",
          }),
        ]}
      />

      <HomeHero />

      {/* Fenza at a glance — the profile's headline figures. The 25+ years are
          Akhilesh Kumar Singh's, not the company's; the note says so. */}
      <section className="border-y border-cream/10 bg-ink-soft py-14">
        <div className="container-content">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {AT_A_GLANCE.map((s, i) => (
              <Reveal key={s.label} delay={(i % 6) * 60}>
                <div>
                  <p className="font-display text-3xl leading-none text-gold md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm font-medium text-cream">
                    {s.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-cream/50">
                    {s.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capability + audience split */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-content">
          <SectionHeading
            eyebrow="A facade manufacturer, and nothing else"
            title={
              <>
                Fenza works on one thing:{" "}
                <span className="italic text-gold-soft">
                  the outside of the building.
                </span>
              </>
            }
            intro="Curtain wall, structural glazing, fenestration, cladding, louvers and the architectural elements that sit alongside them — engineered, fabricated on our own line, and installed by our own teams."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {AUDIENCE_SPLIT.map((a, i) => (
              <Reveal key={a.to} delay={i * 100}>
                <Link
                  to={a.to}
                  className="group flex h-full flex-col justify-between rounded-lg border border-cream/10 bg-ink-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div>
                    <h3 className="font-display text-2xl text-cream">
                      {a.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/60">
                      {a.body}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* System families */}
      <section className="border-t border-cream/10 bg-ink-soft py-24 md:py-32">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product Range"
              title={
                <>
                  Thirteen system families,{" "}
                  <span className="italic text-gold-soft">
                    one envelope scope.
                  </span>
                </>
              }
            />
            <Reveal>
              <Link to="/systems" className="link-underline text-sm font-semibold">
                View all systems →
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SYSTEMS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <SystemCard system={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing teaser */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[52vh] overflow-hidden">
            <img
              src={imgUrl("mc_cut")}
              alt="Servo-driven double-head cutting on the Fenza aluminium line"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/30" />
          </div>
          <div className="flex items-center bg-ink px-6 py-20 md:px-16">
            <div>
              <span className="eyebrow">Manufacturing</span>
              <Reveal>
                <p className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-tight text-cream">
                  Precision set at the{" "}
                  <span className="italic text-gold-soft">profile level</span> —
                  servo-controlled cutting to{" "}
                  <span className="text-gold">±0.1 mm.</span>
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/65">
                  A CNC-grade line for cutting, routing, crimping and end-milling
                  lets us hold tolerance where it decides whether a facade stays
                  watertight, square and true once it is up.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  to="/manufacturing"
                  className="btn-outline mt-9 inline-flex"
                >
                  Inside the factory
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden border-y border-cream/10 bg-ink-soft pt-24 md:pt-32">
        {/* soft grounding glow so the cut-out reads as lit, not pasted */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-full max-w-2xl bg-[radial-gradient(55%_60%_at_32%_100%,rgba(198,161,91,0.13),transparent_70%)]"
        />
        <div className="container-content grid items-end gap-10 md:grid-cols-12">
          <Reveal variant="left" className="order-2 md:order-1 md:col-span-5">
            <img
              src="/images/akhilesh-cutout.png"
              alt="Akhilesh Kumar Singh, Director — Facade Projects, Fenza"
              loading="lazy"
              className="mx-auto block w-full max-w-[21rem] drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
          <div className="order-1 pb-14 md:order-2 md:col-span-7 md:pb-32">
            <span className="eyebrow">Facade Leadership</span>
            <Reveal>
              <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] text-cream">
                {AUTHOR_NAME}
              </h2>
            </Reveal>
            <p className="mt-3 text-sm uppercase tracking-wide2 text-gold">
              Director · 25+ years
            </p>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-cream/70">
                Twenty-five years in facade engineering, exterior architecture and
                advanced building-envelope systems — premium facades, structural
                glazing, cladding and high-rise exterior execution. His technical
                command of materials and execution sets the engineering standard
                Fenza's line is built to.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/leadership" className="link-underline mt-8 text-sm font-semibold">
                Leadership & projects →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-content">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                Six steps from first visit to{" "}
                <span className="italic text-gold-soft">first fix.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 80}>
                <div className="h-full bg-ink-soft p-8">
                  <span className="font-display text-3xl italic text-gold">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working with Fenza — partner proposition */}
      <section className="border-t border-cream/10 bg-ink-soft py-24 md:py-32">
        <div className="container-content">
          <SectionHeading
            eyebrow="Working with Fenza"
            title={
              <>
                One <span className="italic text-gold-soft">envelope scope.</span>
              </>
            }
            intro="Engineered, fabricated on our own line and installed by our own teams."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 80}>
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

      {/* Proof / standards */}
      <section className="border-t border-cream/10 bg-ink py-24 md:py-32">
        <div className="container-content">
          <SectionHeading
            eyebrow="Quality & Standards"
            title={
              <>
                Built to the{" "}
                <span className="italic text-gold-soft">reference standards.</span>
              </>
            }
            intro="Systems are designed and tested against the standards below. Applicable standards and revisions are confirmed per project with the facade consultant; independent test reports are issued against the approved mock-up."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 80}>
                <div className="h-full rounded-lg border border-cream/10 bg-ink p-7">
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
        </div>
      </section>

      {/* Closing enquiry */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="container-content grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Enquiries</span>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.4vw,3.6rem)] text-cream">
              Send us the{" "}
              <span className="italic text-gold-soft">elevation.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/70">
              Share your drawings, elevation areas and system intent, and we will
              come back with a measured scope and an itemised offer.
            </p>
            <div className="mt-8 space-y-1 text-sm text-cream/60">
              <p>{BRAND.legalName}</p>
              <p>{BRAND.location}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal variant="scale">
              <div className="rounded-xl border border-cream/10 bg-cream/[0.03] p-6 md:p-8">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
