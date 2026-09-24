import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SystemCard from "@/components/SystemCard";
import { SYSTEMS, SYSTEM_CATEGORIES } from "@/lib/systems";
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

        <section className="border-t border-cream/10 py-20">
          <div className="container-content">
            <Reveal>
              <div className="rounded-lg border border-cream/10 bg-ink-soft p-8 md:p-10">
                <span className="eyebrow">Also fabricated</span>
                <h3 className="mt-4 font-display text-2xl text-cream">
                  Tilt & turn windows · Glazed office partitions · Insect and
                  mesh screens
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/60">
                  Fabricated on the same line to the same tolerances. Detailed
                  system sheets are available on request.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
