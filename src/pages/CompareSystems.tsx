import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { buildBreadcrumb } from "@/lib/seo";
import { INDICATIVE_NOTE, SYSTEMS, imgUrl, type SystemFamily } from "@/lib/systems";

const DEFAULT_A = "curtain-wall";
const DEFAULT_B = "structural-glazing";
const bySlug = (slug: string | null) => SYSTEMS.find((s) => s.slug === slug);

interface Row {
  label: string;
  a: string;
  b: string;
}

/** Rows to compare: the basics, then every spec label either system has (blank where only one does). */
const buildRows = (a: SystemFamily, b: SystemFamily): Row[] => {
  const spec = (s: SystemFamily, label: string) => s.specs.find((x) => x.label === label)?.value ?? "Not listed";
  const labels: string[] = [];
  for (const s of [a, b]) for (const x of s.specs) if (!labels.includes(x.label)) labels.push(x.label);
  return [
    { label: "Category", a: a.category, b: b.category },
    { label: "In short", a: a.summary, b: b.summary },
    { label: "Typical data", a: a.typical, b: b.typical },
    { label: "Variants", a: a.variants.join(", "), b: b.variants.join(", ") },
    ...labels.map((l) => ({ label: l, a: spec(a, l), b: spec(b, l) })),
  ];
};

const Picker = ({ which, value, onChange }: { which: "a" | "b"; value: string; onChange: (slug: string) => void }) => (
  <label className="block">
    <span className="eyebrow">{which === "a" ? "First system" : "Second system"}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-3 w-full rounded-lg border border-cream/20 bg-ink-soft px-4 py-3 text-base text-cream focus:border-gold focus:outline-none"
    >
      {SYSTEMS.map((s) => (
        <option key={s.slug} value={s.slug}>
          {s.name}
        </option>
      ))}
    </select>
  </label>
);

const Head = ({ s }: { s: SystemFamily }) => (
  <div>
    <div className="aspect-[4/3] overflow-hidden rounded-lg border border-cream/10 bg-ink-soft">
      <img
        src={imgUrl(s.hero)}
        alt={`${s.name} system`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
    <Link
      to={`/systems/${s.slug}`}
      className="mt-4 inline-block font-display text-2xl text-cream transition-colors hover:text-gold md:text-3xl"
    >
      {s.name} →
    </Link>
  </div>
);


/**
 * /compare-systems: pick any two system families and read them side by side. The server renders the
 * default pair; ?a=<slug>&b=<slug> (used by the selector and for sharing) is applied in the browser.
 */
export default function CompareSystems() {
  const [params, setParams] = useSearchParams();
  const [a, setA] = useState(DEFAULT_A);
  const [b, setB] = useState(DEFAULT_B);

  // Read the URL after the first render so the browser's first render equals the prerendered HTML.
  useEffect(() => {
    const pa = bySlug(params.get("a"));
    const pb = bySlug(params.get("b"));
    if (pa) setA(pa.slug);
    if (pb) setB(pb.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sa = bySlug(a)!;
  const sb = bySlug(b)!;
  const rows = useMemo(() => buildRows(sa, sb), [sa, sb]);

  const choose = (which: "a" | "b", slug: string) => {
    const next = which === "a" ? { a: slug, b } : { a, b: slug };
    if (which === "a") setA(slug);
    else setB(slug);
    setParams(next, { replace: true });
  };

  return (
    <>
      <Seo
        title="Compare Facade Systems"
        description="Compare any two Fenza facade systems side by side: curtain wall, structural glazing, windows, doors, cladding, louvers and more, with indicative technical data."
        path="/compare-systems"
        image="/og/systems-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Systems", path: "/systems" },
            { name: "Compare systems", path: "/compare-systems" },
          ]),
        ]}
      />

      <PageHero
        image="systems-hero"
        eyebrow="Tool"
        title={
          <>
            Two systems,{" "}
            <span className="italic text-gold-soft">side by side.</span>
          </>
        }
        intro="Pick any two of our system families and read what they are, what they are made of and where they differ. Values are indicative."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Systems", to: "/systems" },
          { name: "Compare systems", to: "/compare-systems" },
        ]}
      />

      <section className="bg-ink py-16 md:py-24">
        <div className="container-content">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <Picker which="a" value={a} onChange={(v) => choose("a", v)} />
              <Picker which="b" value={b} onChange={(v) => choose("b", v)} />
            </div>

            {a === b && (
              <p role="status" className="mt-6 text-sm text-gold">
                Both sides show the same system. Pick a different one to compare.
              </p>
            )}

            <div className="mt-10 grid grid-cols-2 gap-5 md:gap-8">
              <Head s={sa} />
              <Head s={sb} />
            </div>

            <div className="mt-10 border-t border-cream/10">
              {rows.map((r) => (
                <div key={r.label} className="border-b border-cream/10 py-6">
                  <h2 className="text-[0.7rem] font-semibold uppercase tracking-wide2 text-sand">
                    {r.label}
                  </h2>
                  <div className="mt-3 grid grid-cols-2 gap-5 md:gap-8">
                    <p
                      className={
                        r.a === "Not listed"
                          ? "text-sm text-cream/35"
                          : "text-pretty text-[0.95rem] leading-relaxed text-cream/85"
                      }
                    >
                      {r.a}
                    </p>
                    <p
                      className={
                        r.b === "Not listed"
                          ? "text-sm text-cream/35"
                          : "text-pretty text-[0.95rem] leading-relaxed text-cream/85"
                      }
                    >
                      {r.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 text-xs leading-relaxed text-cream/45">{INDICATIVE_NOTE}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <h2 className="font-display text-3xl text-cream md:text-4xl">Not sure which fits?</h2>
          <p className="mt-5 text-pretty leading-relaxed text-cream/70">
            Answer a few questions and we will suggest where to start, or send us the drawings and
            we will come back with a measured scope.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/system-selector" className="btn-gold">
              Use the system selector
            </Link>
            <Link to="/contact" className="btn-outline">
              Start an enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
