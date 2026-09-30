import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { buildBreadcrumb, buildGlossarySchema } from "@/lib/seo";
import { GLOSSARY, glossaryLetters, type GlossaryTerm } from "@/lib/glossary";
import { getSystem } from "@/lib/systems";

const SORTED = [...GLOSSARY].sort((a, b) =>
  a.term.localeCompare(b.term, "en", { sensitivity: "base" })
);
const BY_SLUG = new Map(SORTED.map((t) => [t.slug, t]));

const matches = (t: GlossaryTerm, q: string) =>
  `${t.term} ${t.aka ?? ""} ${t.definition}`.toLowerCase().includes(q);

/**
 * /glossary — plain-language facade terms. The first render (and the
 * prerendered HTML) lists every term; search only narrows the list on the
 * client, so crawlers and no-JS readers always get the full page.
 */
export default function Glossary() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    const visible = q ? SORTED.filter((t) => matches(t, q)) : SORTED;
    return glossaryLetters(visible).map((letter) => ({
      letter,
      terms: visible.filter((t) => t.term[0].toUpperCase() === letter),
    }));
  }, [q]);
  const shown = groups.reduce((n, g) => n + g.terms.length, 0);

  return (
    <>
      <Seo
        title="Facade Glossary — Terms in Plain Language"
        description="A plain-language glossary of facade and curtain wall terms: mullion, transom, spandrel, U-value, structural glazing, rain-screen, ASTM E331 and more, with each term linked to the systems it relates to."
        path="/glossary"
        image="/og/resources-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Facade glossary", path: "/glossary" },
          ]),
          buildGlossarySchema({
            name: "Fenza facade glossary",
            description:
              "Plain-language definitions of facade, curtain wall and building-envelope terms.",
            path: "/glossary",
            terms: SORTED,
          }),
        ]}
      />

      <PageHero
        image="qc-profile"
        eyebrow="Facade Glossary"
        title={
          <>
            Facade terms,{" "}
            <span className="italic text-gold-soft">in plain language.</span>
          </>
        }
        intro="The words that come up when a facade is specified, made and tested, from mullions and transoms to U-values and mock-ups, without the jargon."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Resources", to: "/resources" },
          { name: "Glossary", to: "/glossary" },
        ]}
      />

      {/* Search + A–Z. Sticky under the header so both stay in reach. */}
      <div className="sticky top-[74px] z-30 border-b border-cream/10 bg-ink/90 backdrop-blur-md">
        <div className="container-content flex flex-col gap-3 py-3 md:flex-row md:items-center md:gap-8">
          <div className="relative md:w-72 md:shrink-0">
            <label htmlFor="glossary-search" className="sr-only">
              Search the glossary
            </label>
            <input
              id="glossary-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms…"
              autoComplete="off"
              // 16px on phones stops iOS Safari zooming the page on focus.
              className="w-full rounded-full border border-cream/15 bg-cream/[0.04] px-5 py-2.5 text-base text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold sm:text-sm"
            />
          </div>

          <nav
            aria-label="Jump to letter"
            className="-mx-6 flex gap-1 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
          >
            {glossaryLetters(SORTED).map((l) => {
              const on = groups.some((g) => g.letter === l);
              return on ? (
                <a
                  key={l}
                  href={`#letter-${l}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-lg text-cream/70 transition-colors hover:bg-gold/15 hover:text-gold"
                >
                  {l}
                </a>
              ) : (
                <span
                  key={l}
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center font-display text-lg text-cream/20"
                >
                  {l}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      <section className="bg-ink py-16 md:py-24">
        <div className="container-content">
          <p
            role="status"
            aria-live="polite"
            className="mb-10 text-xs uppercase tracking-wide2 text-sand"
          >
            {q
              ? `${shown} ${shown === 1 ? "term" : "terms"} for “${query.trim()}”`
              : `${SORTED.length} terms`}
          </p>

          {shown === 0 && (
            <div className="max-w-md rounded-lg border border-cream/10 bg-cream/[0.03] p-8">
              <h2 className="font-display text-2xl text-cream">
                No matching term.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Try a shorter word, or ask us directly. If a term is missing
                from the glossary, we would like to add it.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="btn-outline !px-5 !py-2.5 !text-[0.7rem]"
                >
                  Clear search
                </button>
                <Link
                  to="/contact"
                  className="btn-gold !px-5 !py-2.5 !text-[0.7rem]"
                >
                  Ask us
                </Link>
              </div>
            </div>
          )}

          <div className="space-y-14 md:space-y-20">
            {groups.map(({ letter, terms }) => (
              <section
                key={letter}
                id={`letter-${letter}`}
                aria-label={`Terms beginning with ${letter}`}
                className="scroll-mt-40 grid gap-6 md:grid-cols-12 md:gap-10"
              >
                <div
                  aria-hidden
                  className="font-display text-6xl italic leading-none text-gold md:col-span-2 md:text-7xl"
                >
                  {letter}
                </div>

                <dl className="divide-y divide-cream/10 border-y border-cream/10 md:col-span-10">
                  {terms.map((t) => (
                    <div
                      key={t.slug}
                      id={t.slug}
                      className="scroll-mt-44 py-7 transition-colors target:bg-gold/[0.06] md:px-4"
                    >
                      <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-display text-2xl text-cream md:text-3xl">
                          {t.term}
                        </span>
                        {t.aka && (
                          <span className="text-xs uppercase tracking-wide2 text-sand">
                            {t.aka}
                          </span>
                        )}
                      </dt>
                      <dd className="mt-3 max-w-2xl text-pretty leading-relaxed text-cream/70">
                        {t.definition}
                      </dd>

                      {!!(t.systems?.length || t.see?.length) && (
                        <dd className="mt-4 flex flex-col gap-2 text-sm">
                          {!!t.systems?.length && (
                            <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
                              <span className="text-[0.66rem] uppercase tracking-wide2 text-cream/40">
                                Fenza system
                              </span>
                              {t.systems.map((slug) => (
                                <Link
                                  key={slug}
                                  to={`/systems/${slug}`}
                                  className="tap-safe text-gold transition-colors hover:text-gold-soft"
                                >
                                  {getSystem(slug)?.name} →
                                </Link>
                              ))}
                            </p>
                          )}
                          {!!t.see?.length && (
                            <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
                              <span className="text-[0.66rem] uppercase tracking-wide2 text-cream/40">
                                See also
                              </span>
                              {t.see.map((slug) => (
                                <Link
                                  key={slug}
                                  to={`/glossary#${slug}`}
                                  // The target may be filtered out: clear the
                                  // search so the link always lands.
                                  onClick={() => setQuery("")}
                                  className="tap-safe text-cream/70 transition-colors hover:text-gold"
                                >
                                  {BY_SLUG.get(slug)?.term}
                                </Link>
                              ))}
                            </p>
                          )}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>

          <Reveal>
            <p className="mt-16 max-w-2xl text-xs leading-relaxed text-cream/45">
              General industry definitions, for orientation. Test standards are
              described by what they measure, and applicable standards, values
              and revisions are confirmed per project with the facade
              consultant.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Specifying a facade?
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-cream/70">
              Share your drawings and system intent, and we come back with a
              measured scope and an itemised offer.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Start an enquiry
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
