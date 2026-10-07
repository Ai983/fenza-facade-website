import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import JournalText from "@/components/JournalText";
import NotFound from "./NotFound";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { getSystem, imgUrl } from "@/lib/systems";
import { PROCESS_STEPS } from "@/lib/content";
import { GROUP_NOTE, PROJECTS, RECORD_DISCLAIMER } from "@/lib/projects";
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildLocationSchema,
  personSchema,
} from "@/lib/seo";

export default function Location() {
  const { slug } = useParams<{ slug: string }>();
  const loc = slug ? getLocation(slug) : undefined;
  if (!loc) return <NotFound />;

  const path = `/locations/${loc.slug}`;
  const record = PROJECTS.filter((p) => loc.record.includes(p.slug));
  const others = LOCATIONS.filter((l) => l.slug !== loc.slug);
  const label = loc.alsoKnownAs ? `${loc.name} (${loc.alsoKnownAs})` : loc.name;

  return (
    <>
      <Seo
        title={loc.seoTitle}
        description={loc.description}
        path={path}
        image={loc.og}
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: loc.name, path },
          ]),
          buildLocationSchema(loc, path),
          buildFaqSchema(loc.faq),
          // The record on this page is the Person's, never the Organization's.
          ...(record.length ? [personSchema] : []),
        ]}
      />

      <PageHero
        image={loc.hero}
        eyebrow={`Facades in ${loc.name}`}
        title={
          <>
            Facade engineering for{" "}
            <span className="italic text-gold-soft">{label}.</span>
          </>
        }
        intro={loc.intro}
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Locations", to: "/locations" },
          { name: loc.name, to: path },
        ]}
      >
        <Link to="#enquire" className="btn-gold">
          Enquire about a project
        </Link>
        <Link to="/systems" className="btn-outline">
          Explore systems
        </Link>
      </PageHero>

      {/* Building in <city> */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Building in {loc.name}</span>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] text-cream">
                What {loc.name} asks of a{" "}
                <span className="italic text-gold-soft">facade.</span>
              </h2>
            </Reveal>
            {loc.context.map((para, i) => (
              <Reveal key={i} delay={80 + i * 60}>
                <p className="mt-6 text-pretty leading-relaxed text-cream/70">
                  <JournalText>{para}</JournalText>
                </p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <dl className="rounded-lg border border-cream/10 bg-ink-soft p-7 text-sm">
                {[
                  { k: "Areas", v: loc.covers.join(" · ") },
                  { k: "Made on", v: "Our own aluminium line in Gurugram, Haryana" },
                  { k: "Scope", v: "Design, fabrication and installation of the building envelope" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="border-b border-cream/10 py-3.5 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-[0.62rem] uppercase tracking-wide2 text-sand">
                      {row.k}
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-cream/85">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Climate */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">Climate</span>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
                Designing for {loc.name}'s weather
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-cream/65">
                {loc.climate.summary}
              </p>
            </Reveal>
          </div>
          <ul className="space-y-4 lg:col-span-8">
            {loc.climate.points.map((pt, i) => (
              <Reveal as="li" key={i} delay={i * 60}>
                <div className="flex gap-5 rounded-lg border border-cream/10 bg-ink p-6">
                  <span className="font-display text-2xl italic leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-pretty text-sm leading-relaxed text-cream/75 md:text-base">
                    <JournalText>{pt}</JournalText>
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="container-content">
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-cream/45">
            General design guidance. Wind, seismic and performance values for a building are set
            per project by the structural engineer and the facade consultant.
          </p>
        </div>
      </section>

      {/* Systems that suit the city */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <span className="eyebrow">Systems</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] text-cream">
              What we make for{" "}
              <span className="italic text-gold-soft">{loc.name}.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loc.systems.map((s, i) => {
              const sys = getSystem(s.slug);
              if (!sys) return null;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80}>
                  <Link
                    to={`/systems/${sys.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-cream/10 bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={imgUrl(sys.card)}
                        alt={`${sys.name} by Fenza`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl text-cream">{sys.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">
                        {s.why}
                      </p>
                      <span className="mt-5 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career record in the region, only where real entries exist */}
      {record.length > 0 && (
        <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
          <div className="container-content">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <h2 className="font-display text-2xl text-cream md:text-3xl">
                  Project record in the region
                </h2>
                <span className="hidden h-px flex-1 bg-cream/12 sm:block" />
                <span className="rounded-full border border-gold/30 px-3 py-1 text-[0.62rem] uppercase tracking-wide2 text-gold">
                  {GROUP_NOTE}
                </span>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {record.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <Link
                    to={`/projects#${p.slug}`}
                    className="block h-full rounded-lg border border-cream/10 bg-ink p-6 transition-colors hover:border-gold/40"
                  >
                    <h3 className="font-display text-xl text-cream">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide2 text-sand">
                      {p.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-cream/65">{p.scope}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-xs leading-relaxed text-cream/50">
              {RECORD_DISCLAIMER}
            </p>
          </div>
        </section>
      )}

      {/* How a project here works */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">How it works</span>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] text-cream">
                A {loc.name} project, step by step.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-cream/70">{loc.delivery}</p>
            </Reveal>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={(i % 3) * 80}>
                <div className="h-full bg-ink-soft p-7">
                  <span className="font-display text-2xl italic text-gold">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Common questions</span>
            <h2 className="mt-4 font-display text-3xl text-cream">
              Facades in {loc.name}
            </h2>
            <ul className="mt-8 space-y-3 text-sm">
              {loc.reading.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="link-underline">
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-cream/10">
              {loc.faq.map((f, i) => (
                <Reveal key={f.question} delay={i * 60}>
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

      {/* Enquiry */}
      <section id="enquire" className="scroll-mt-24 border-t border-cream/10 bg-ink py-24 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Enquiries</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] text-cream">
              Building in{" "}
              <span className="italic text-gold-soft">{loc.name}?</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/70">
              Tell us about the project: the location, the building, and the drawings you have.
              Our team will get in touch to discuss the next steps.
            </p>
            <p className="mt-6 text-sm">
              <Link to="/journal/what-to-send-a-facade-manufacturer" className="link-underline">
                What to send for an accurate quote →
              </Link>
            </p>
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

      {/* Other locations */}
      <section className="border-t border-cream/10 bg-ink-soft py-16">
        <div className="container-content">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl text-cream">Also across India</h2>
            <Link to="/locations" className="link-underline text-sm font-semibold">
              All locations →
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {others.map((l) => (
              <li key={l.slug}>
                <Link
                  to={`/locations/${l.slug}`}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-cream/15 px-5 text-sm text-cream/75 transition-colors hover:border-gold hover:text-gold"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
