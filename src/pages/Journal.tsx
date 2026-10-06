import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import JournalCard from "@/components/JournalCard";
import { buildBreadcrumb, buildCollectionSchema } from "@/lib/seo";
import { JOURNAL, TOPICS } from "@/lib/journal";

// Topics that actually have articles, in the order defined in journal.ts.
const USED = TOPICS.filter((t) => JOURNAL.some((a) => a.topic === t));

/**
 * /journal — every article. The first render (and the prerendered HTML) lists them all; the topic
 * filter only narrows the grid in the browser, so crawlers and no-JS readers get the full page.
 */
export default function Journal() {
  const [topic, setTopic] = useState<string>("All");
  const [featured, ...rest] = JOURNAL;
  const shown = useMemo(
    () => (topic === "All" ? rest : JOURNAL.filter((a) => a.topic === topic)),
    [topic, rest]
  );
  const showFeatured = topic === "All";

  return (
    <>
      <Seo
        title="Journal: Facade Engineering Explained"
        description="Plain-language guides for specifiers and developers: curtain wall, cladding, glazing, windows and doors, testing and finishes, from Fenza Facade Engineering."
        path="/journal"
        image="/og/resources-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Journal", path: "/journal" },
          ]),
          buildCollectionSchema({
            name: "Fenza Journal",
            description:
              "Plain-language guides to facade systems, testing and specification.",
            path: "/journal",
            items: JOURNAL.map((a) => ({ name: a.title, path: `/journal/${a.slug}` })),
          }),
        ]}
      />

      <PageHero
        image="resources-hero"
        eyebrow="Journal"
        title={
          <>
            Facade engineering,{" "}
            <span className="italic text-gold-soft">explained.</span>
          </>
        }
        intro="Plain-language guides for the people who specify, buy and build facades: how systems work, how to compare them, and what to ask before you commit."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Resources", to: "/resources" },
          { name: "Journal", to: "/journal" },
        ]}
      />

      {/* Topic filter. A real <button> group; "All" is the default and the crawled state. */}
      <div className="sticky top-[74px] z-30 border-b border-cream/10 bg-ink/90 backdrop-blur-md">
        <div className="container-content">
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 py-3 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
          >
            {["All", ...USED].map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
                className={clsx(
                  "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide2 transition-colors",
                  topic === t
                    ? "border-gold bg-gold text-ink"
                    : "border-cream/20 text-cream/70 hover:border-gold hover:text-gold"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-ink py-16 md:py-24">
        <div className="container-content">
          {showFeatured && (
            <Reveal>
              <div className="mb-10 md:mb-14">
                <JournalCard article={featured} featured eager />
              </div>
            </Reveal>
          )}

          <p
            role="status"
            aria-live="polite"
            className="mb-8 text-xs uppercase tracking-wide2 text-sand"
          >
            {topic === "All"
              ? `${JOURNAL.length} articles`
              : `${shown.length} ${shown.length === 1 ? "article" : "articles"} in ${topic}`}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <JournalCard article={a} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-16 max-w-2xl text-xs leading-relaxed text-cream/45">
              General guidance for orientation, not a specification. Applicable
              standards, values and details are confirmed per project with the
              facade consultant.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-cream/70">
              Share your drawings and system intent, and we come back with a
              measured scope and an itemised offer.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start an enquiry
              </Link>
              <Link to="/glossary" className="btn-outline">
                Browse the glossary
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
