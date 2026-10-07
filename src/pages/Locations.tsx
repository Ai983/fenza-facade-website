import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import {
  LOCATION_INDEX as LOCATIONS,
  LOCATION_REGIONS,
  SERVED_SENTENCE,
} from "@/lib/location-index";
import { imgUrl } from "@/lib/systems";
import { buildBreadcrumb, buildFaqSchema, canonical } from "@/lib/seo";

const FAQS = [
  {
    question: "Which cities does Fenza Facade Engineering work in?",
    answer: `Fenza takes on facade projects across India, including ${SERVED_SENTENCE}. Every facade is engineered and fabricated on Fenza's own aluminium line in Gurugram, Haryana.`,
  },
  {
    question: "Does Fenza have offices in other cities?",
    answer:
      "Fenza works from its facility in Gurugram, Haryana. Projects in other cities are engineered and fabricated there, and the site visit, delivery and installation are planned with the client for each project.",
  },
  {
    question: "Can Fenza take on a project in a city that is not listed?",
    answer:
      "Yes. The listed cities are where we focus, not a limit. Send the project location and drawings through the enquiry form and we will confirm how we can deliver it.",
  },
];

export default function Locations() {
  const itemList = {
    "@type": "ItemList",
    name: "Facade engineering by Fenza across India",
    numberOfItems: LOCATIONS.length,
    itemListElement: LOCATIONS.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Facade engineering in ${l.name}`,
      url: canonical(`/locations/${l.slug}`),
    })),
  };

  return (
    <>
      <Seo
        title="Facade Company Across India: Locations"
        description="Facades made in Gurugram for projects across India: Delhi NCR, Punjab, Himachal, Uttarakhand, Rajasthan, Uttar Pradesh, Gujarat, Pune and Bengaluru."
        path="/locations"
        image="/og/systems-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ]),
          itemList,
          buildFaqSchema(FAQS),
        ]}
      />

      <PageHero
        image="systems-hero"
        eyebrow="Locations"
        title={
          <>
            Facades for projects{" "}
            <span className="italic text-gold-soft">across India.</span>
          </>
        }
        intro="One aluminium line in Gurugram, and projects from Delhi NCR to Punjab, the hills, Rajasthan, Uttar Pradesh, Gujarat, Pune and Bengaluru. Each city brings its own climate and its own buildings; here is what that means for the facade."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Locations", to: "/locations" },
        ]}
      />

      {LOCATION_REGIONS.map((region, ri) => {
        const items = LOCATIONS.filter((l) => l.region === region);
        if (!items.length) return null;
        return (
          <section
            key={region}
            className={`border-t border-cream/10 py-20 md:py-24 ${ri % 2 ? "bg-ink-soft" : "bg-ink"}`}
          >
            <div className="container-content">
              <Reveal>
                <h2 className="font-display text-2xl text-cream md:text-3xl">{region}</h2>
              </Reveal>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((l, i) => (
                  <Reveal key={l.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/locations/${l.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-lg border border-cream/10 bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={imgUrl(l.hero)}
                          alt=""
                          loading={ri === 0 && i < 3 ? "eager" : "lazy"}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-2xl text-cream">
                          {l.name}
                          {l.alsoKnownAs && (
                            <span className="ml-2 text-base text-cream/45">({l.alsoKnownAs})</span>
                          )}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-wide2 text-sand">{l.state}</p>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65">{l.card}</p>
                        <span className="mt-5 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                          Facades in {l.name} →
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Common questions</span>
            <h2 className="mt-4 font-display text-3xl text-cream">Where we work</h2>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-cream/10">
              {FAQS.map((f, i) => (
                <Reveal key={f.question} delay={i * 60}>
                  <div className="py-6 first:pt-0">
                    <dt className="font-display text-xl text-cream">{f.question}</dt>
                    <dd className="mt-3 text-pretty leading-relaxed text-cream/65">{f.answer}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Discuss your project
              </Link>
              <Link to="/manufacturing" className="btn-outline">
                Inside the factory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
