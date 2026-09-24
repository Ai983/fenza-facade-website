import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { SECTORS, SECTORS_NOTE } from "@/lib/sectors";
import { getSystem } from "@/lib/systems";
import { buildBreadcrumb, buildFaqSchema } from "@/lib/seo";

const FAQS = [
  {
    question: "Which building types does Fenza Facade Engineering make facades for?",
    answer:
      "Fenza Facade Engineering builds envelopes across eight building types: commercial towers, corporate offices and IT parks, residential high-rise, hospitality and serviced apartments, retail and mixed-use, institutional and healthcare, aviation and public infrastructure, and industrial and factory buildings. The same thirteen system families serve all eight.",
  },
  {
    question: "Does Fenza work on aviation and public infrastructure projects?",
    answer:
      "Aviation and public infrastructure is within the applications of the Fenza system range — large-span cladding, skylights and glazing. Aviation experience in the record, including Rajiv Gandhi International Airport, is the career record of Akhilesh Kumar Singh, Director — Facade Projects, rather than a completed Fenza project.",
  },
];

export default function Sectors() {
  const itemList = {
    "@type": "ItemList",
    name: "Building sectors served by Fenza Facade Engineering",
    numberOfItems: SECTORS.length,
    itemListElement: SECTORS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      description: s.blurb,
    })),
  };

  return (
    <>
      <Seo
        title="Sectors — Facades by Building Type"
        description="Fenza Facade Engineering builds envelopes across eight building types — commercial towers, corporate offices and IT parks, residential high-rise, hospitality and serviced apartments, retail and mixed-use, institutional and healthcare, aviation and public infrastructure, and industrial and factory."
        path="/sectors"
        image="/og/sectors.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/sectors" },
          ]),
          itemList,
          buildFaqSchema(FAQS),
        ]}
      />

      <PageHero
        image="cl-hero"
        eyebrow="Sectors"
        title={
          <>
            Envelopes across{" "}
            <span className="italic text-gold-soft">sectors.</span>
          </>
        }
        intro="Fenza Facade Engineering works on one thing — the outside of the building. The same thirteen system families serve towers, workplaces, homes, terminals and factories; what changes is the specification behind them."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Sectors", to: "/sectors" },
        ]}
      />

      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <article
                  id={s.slug}
                  className="flex h-full flex-col rounded-lg border border-cream/10 bg-ink-soft p-7"
                >
                  <h2 className="font-display text-xl text-cream">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gold-soft">
                    {s.blurb}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">
                    {s.detail}
                  </p>
                  <div className="mt-6 border-t border-cream/10 pt-5">
                    <span className="text-[0.62rem] uppercase tracking-wide2 text-sand">
                      Systems
                    </span>
                    <ul className="mt-3 space-y-2">
                      {s.systems.map((slug) => {
                        const sys = getSystem(slug);
                        if (!sys) return null;
                        return (
                          <li key={slug}>
                            <Link
                              to={`/systems/${sys.slug}`}
                              className="link-underline text-sm"
                            >
                              {sys.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <p className="text-sm leading-relaxed text-cream/60">
              {SECTORS_NOTE}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-outline">
                See the project record
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
