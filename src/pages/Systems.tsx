import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SystemCard from "@/components/SystemCard";
import { SYSTEMS, SYSTEM_CATEGORIES, INDICATIVE_NOTE } from "@/lib/systems";
import { buildBreadcrumb, canonical } from "@/lib/seo";

export default function Systems() {
  const itemList = {
    "@type": "ItemList",
    name: "Fenza facade system families",
    itemListElement: SYSTEMS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: canonical(`/systems/${s.slug}`),
    })),
  };

  return (
    <>
      <Seo
        title="Facade Systems — 13 Families"
        description="Explore Fenza's thirteen facade system families: curtain wall, structural glazing, spider glazing, aluminium windows and doors, cladding, rain-screen, louvers, railings, skylights and pergolas."
        path="/systems"
        image="/og/systems-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Systems", path: "/systems" },
          ]),
          itemList,
        ]}
      />

      <PageHero
        image="systems-hero"
        eyebrow="Product Range"
        title={
          <>
            Thirteen system families,{" "}
            <span className="italic text-gold-soft">one envelope scope.</span>
          </>
        }
        intro="Everything we make is fabricated from extruded aluminium on our own line, glazed or infilled to the project specification, and installed as a complete system."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Systems", to: "/systems" },
        ]}
      />

      <div className="bg-ink">
        {SYSTEM_CATEGORIES.map((cat) => {
          const items = SYSTEMS.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <section
              key={cat}
              className="border-t border-cream/10 py-20 first:border-t-0 md:py-24"
            >
              <div className="container-content">
                <Reveal>
                  <div className="mb-10 flex items-center gap-4">
                    <h2 className="font-display text-2xl text-cream md:text-3xl">
                      {cat}
                    </h2>
                    <span className="h-px flex-1 bg-cream/12" />
                    <span className="text-xs text-sand">
                      {items.length} {items.length === 1 ? "system" : "systems"}
                    </span>
                  </div>
                </Reveal>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s, i) => (
                    <Reveal key={s.slug} delay={(i % 3) * 80}>
                      <SystemCard system={s} index={i} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* System index — every code, category, variant set and typical data
            in one table. Absorbs the old "Also fabricated" card's note. */}
        <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
          <div className="container-content">
            <Reveal>
              <span className="eyebrow">Appendix</span>
              <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
                System index.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              {/* Bleeds to the screen edge on phones so the table can scroll
                  inside its own wrapper rather than moving the page. */}
              <div className="-mx-6 mt-10 overflow-x-auto px-6 md:mx-0 md:px-0">
                <table className="w-full min-w-[54rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-cream/20">
                      {[
                        "Code",
                        "System family",
                        "Category",
                        "Variants",
                        "Typical data",
                      ].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="py-3 pr-6 text-left text-xs uppercase tracking-wide2 text-sand"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SYSTEMS.map((s) => (
                      <tr key={s.slug} className="border-b border-cream/10">
                        <td className="whitespace-nowrap py-3.5 pr-6 align-top font-medium text-gold">
                          {s.code}
                        </td>
                        <td className="py-3.5 pr-6 align-top">
                          <Link
                            to={`/systems/${s.slug}`}
                            className="link-underline text-sm"
                          >
                            {s.name}
                          </Link>
                        </td>
                        <td className="py-3.5 pr-6 align-top text-cream/65">
                          {s.category}
                        </td>
                        <td className="py-3.5 pr-6 align-top text-cream/65">
                          {s.variants.join(" · ")}
                        </td>
                        <td className="py-3.5 align-top text-cream/65">
                          {s.typical}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-3xl text-xs leading-relaxed text-cream/45">
                {INDICATIVE_NOTE} Tilt &amp; turn windows, glazed office
                partitions and insect and mesh screens are also fabricated on
                the same line to the same tolerances; detailed system sheets are
                available on request.
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
