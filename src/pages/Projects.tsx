import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { AUTHOR_NAME, buildBreadcrumb, personSchema } from "@/lib/seo";
import { BRAND, CONTACT } from "@/lib/site";
import {
  GEOGRAPHY,
  GEOGRAPHY_NOTE,
  GROUP_NOTE,
  PROJECT_GROUPS,
  PROJECTS,
  RECORD_DISCLAIMER,
  RECORD_LEAD,
  projectsByGroup,
} from "@/lib/projects";

export default function Projects() {
  /**
   * The record attaches to the PERSON, never to the Organization. No `brand`,
   * `manufacturer` or Organization reference may appear in this graph — that
   * would assert Fenza Facade Engineering delivered these developments.
   * No `url` per item either: there are no per-project pages.
   */
  const recordList = {
    "@type": "ItemList",
    name: `Facade projects led by ${AUTHOR_NAME}`,
    description: RECORD_DISCLAIMER,
    about: { "@id": personSchema["@id"] },
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      description: `${p.buildingType} · ${p.location} · ${p.scope} · ${p.quantity}`,
    })),
  };

  return (
    <>
      <Seo
        title="Project Record — Facades Led by Akhilesh Kumar Singh"
        description="Ten facade and envelope developments led by Akhilesh Kumar Singh, Director — Facade Projects at Fenza Facade Engineering: DLF Cyber City, Rajiv Gandhi International Airport, Max Hospital, Krisumi Waterfall Residences, Adani Samsara Vilasa and more. His own career record — not Fenza's completed projects."
        path="/projects"
        image="/og/projects.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          personSchema,
          recordList,
        ]}
      />

      <PageHero
        image="leadership-hero"
        eyebrow="Project Record"
        title={
          <>
            Projects led by{" "}
            <span className="italic text-gold-soft">{AUTHOR_NAME}.</span>
          </>
        }
        intro={RECORD_LEAD}
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Projects", to: "/projects" },
        ]}
      />

      {/* Attribution note — deliberately ABOVE the record, not buried below it. */}
      <section className="border-t border-cream/10 bg-ink py-16">
        <div className="container-content max-w-3xl">
          <Reveal>
            <div className="rounded-lg border border-gold/20 bg-cream/[0.03] p-8">
              <span className="eyebrow">A note on attribution</span>
              <p className="mt-4 text-pretty leading-relaxed text-cream/75">
                {RECORD_DISCLAIMER}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The record, grouped as the company profile groups it. */}
      <div className="bg-ink">
        {PROJECT_GROUPS.map((group, gi) => {
          const items = projectsByGroup(group);
          if (!items.length) return null;
          return (
            <section
              key={group}
              className={`border-t border-cream/10 py-20 md:py-24 ${
                gi % 2 === 1 ? "bg-ink-soft" : "bg-ink"
              }`}
            >
              <div className="container-content">
                <Reveal>
                  <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-3">
                    <h2 className="font-display text-2xl text-cream md:text-3xl">
                      {group}
                    </h2>
                    <span className="hidden h-px flex-1 bg-cream/12 sm:block" />
                    <span className="rounded-full border border-gold/30 px-3 py-1 text-[0.62rem] uppercase tracking-wide2 text-gold">
                      {GROUP_NOTE}
                    </span>
                  </div>
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2">
                  {items.map((p, i) => (
                    <Reveal key={p.slug} delay={(i % 2) * 80}>
                      <article
                        id={p.slug}
                        className="h-full rounded-lg border border-cream/10 bg-ink-soft p-7"
                      >
                        <h3 className="font-display text-xl text-cream md:text-2xl">
                          {p.name}
                        </h3>
                        <table className="mt-5 w-full border-collapse text-sm">
                          <tbody>
                            {[
                              { label: "Location", value: p.location },
                              { label: "Type of building", value: p.buildingType },
                              { label: "Work scope", value: p.scope },
                              { label: "Quantity", value: p.quantity },
                            ].map((row) => (
                              <tr
                                key={row.label}
                                className="border-b border-cream/10 last:border-b-0"
                              >
                                <td className="w-[38%] py-3 pr-5 align-top text-sand">
                                  {row.label}
                                </td>
                                <td className="py-3 align-top text-cream/85">
                                  {row.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Geography */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content">
          <Reveal>
            <span className="eyebrow">Geography</span>
            <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
              From Gurugram,{" "}
              <span className="italic text-gold-soft">to site.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid items-start gap-10 md:grid-cols-12">
            <Reveal variant="left" className="md:col-span-5">
              <div className="rounded-lg border border-cream/10 bg-ink p-6">
                <img
                  src="/images/india-map.webp"
                  alt="Map of India showing the cities in the project record"
                  width={788}
                  height={900}
                  loading="lazy"
                  className="mx-auto w-full max-w-[19rem]"
                />
              </div>
            </Reveal>

            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl text-gold">
                    {GEOGRAPHY.length}
                  </span>
                  <span className="text-sm uppercase tracking-wide2 text-sand">
                    cities in the project record
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-cream/70">
                  Fenza Facade Engineering manufactures in {BRAND.location} —
                  Plus Code {CONTACT.plusCode}. Full postal address is being
                  confirmed.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <dl className="mt-8 rounded-lg border border-cream/10 bg-ink p-7 text-sm">
                  {GEOGRAPHY.map((g) => (
                    <div
                      key={g.city}
                      className="border-b border-cream/10 py-3.5 last:border-b-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <dt className="text-cream">
                          {g.city}
                          {g.isFactory && (
                            <span className="ml-2 rounded-full border border-gold/30 px-2 py-0.5 text-[0.58rem] uppercase tracking-wide2 text-gold">
                              Factory
                            </span>
                          )}
                        </dt>
                        <dd className="text-right text-sand">{g.region}</dd>
                      </div>
                      <p className="mt-1 text-xs text-cream/50">{g.detail}</p>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <p className="mt-5 text-xs text-cream/45">{GEOGRAPHY_NOTE}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Send us the elevation.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-cream/70">
              Share your drawings, elevation areas and system intent, and Fenza
              comes back with a measured scope and an itemised offer.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start an enquiry
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
