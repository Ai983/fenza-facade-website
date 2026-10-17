import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { buildBreadcrumb } from "@/lib/seo";
import { QUIZ, scoreQuiz } from "@/lib/system-guide";
import { INDICATIVE_NOTE } from "@/lib/systems";

/**
 * /system-selector: five quick questions that point to the system families worth looking at first.
 * The questions are real buttons and show in the prerendered HTML; results appear after the first
 * answer, in the browser only.
 */
export default function SystemSelector() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const results = useMemo(() => scoreQuiz(answers), [answers]);
  const answered = Object.keys(answers).length;

  // Tapping the chosen answer again clears it.
  const pick = (qid: string, oid: string) =>
    setAnswers((a) => {
      if (a[qid] !== oid) return { ...a, [qid]: oid };
      const { [qid]: _gone, ...rest } = a;
      return rest;
    });

  return (
    <>
      <Seo
        title="Facade System Selector"
        description="Answer a few questions about your project and see which Fenza facade systems to look at first: curtain wall, glazing, windows, doors, cladding and more."
        path="/system-selector"
        image="/og/systems-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Systems", path: "/systems" },
            { name: "System selector", path: "/system-selector" },
          ]),
        ]}
      />

      <PageHero
        image="systems-hero"
        eyebrow="Tool"
        title={
          <>
            Which system should you{" "}
            <span className="italic text-gold-soft">look at first?</span>
          </>
        }
        intro="Answer a few questions about the job and we will point to the system families worth a closer look. It is a starting point for a conversation, not a specification."
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Systems", to: "/systems" },
          { name: "System selector", to: "/system-selector" },
        ]}
      />

      <section className="bg-ink py-16 md:py-24">
        <div className="container-content">
          <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="space-y-12">
              {QUIZ.map((q, i) => (
                <fieldset key={q.id}>
                  <legend className="font-display text-2xl text-cream md:text-3xl">
                    <span className="mr-3 text-gold">{i + 1}.</span>
                    {q.question}
                    {!q.required && (
                      <span className="ml-3 align-middle text-[0.65rem] font-semibold uppercase tracking-wide2 text-cream/40">
                        Optional
                      </span>
                    )}
                  </legend>
                  {q.hint && <p className="mt-2 text-sm text-cream/55">{q.hint}</p>}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {q.options.map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        aria-pressed={answers[q.id] === o.id}
                        onClick={() => pick(q.id, o.id)}
                        className={clsx(
                          "tap-safe rounded-full border px-5 py-3 text-left text-sm transition-colors",
                          answers[q.id] === o.id
                            ? "border-gold bg-gold text-ink"
                            : "border-cream/20 text-cream/75 hover:border-gold hover:text-gold"
                        )}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>

            <aside aria-live="polite" className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-gold/25 bg-ink-soft p-6 md:p-8">
                <p className="eyebrow">Your shortlist</p>
                {results.length === 0 ? (
                  <p className="mt-4 text-pretty leading-relaxed text-cream/60">
                    {answered === 0
                      ? "Start with question 1. Your shortlist appears here and sharpens with each answer."
                      : "Answer question 1 (what you are covering) to see your shortlist."}
                  </p>
                ) : (
                  <>
                    <ol className="mt-5 space-y-6">
                      {results.map((r, i) => (
                        <li key={r.system.slug} className="border-t border-cream/10 pt-5 first:border-t-0 first:pt-0">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-sand">
                            {i === 0 ? "Best match" : `Also look at · ${i + 1}`}
                          </p>
                          <Link
                            to={`/systems/${r.system.slug}`}
                            className="mt-1 inline-block font-display text-2xl text-cream transition-colors hover:text-gold"
                          >
                            {r.system.name} →
                          </Link>
                          <p className="mt-2 text-sm leading-relaxed text-cream/60">
                            Matches: {[...new Set(r.because)].join(" · ")}
                          </p>
                        </li>
                      ))}
                    </ol>
                    {results.length > 1 && (
                      <Link
                        to={`/compare-systems?a=${results[0].system.slug}&b=${results[1].system.slug}`}
                        className="mt-7 inline-block text-xs font-semibold uppercase tracking-wide2 text-gold hover:text-gold-soft"
                      >
                        Compare the top two →
                      </Link>
                    )}
                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-cream/10 pt-6">
                      <Link to="/contact" className="btn-gold">
                        Discuss your project
                      </Link>
                      <button
                        type="button"
                        onClick={() => setAnswers({})}
                        className="text-xs font-semibold uppercase tracking-wide2 text-cream/50 hover:text-cream"
                      >
                        Start again
                      </button>
                    </div>
                  </>
                )}
              </div>
            </aside>
          </div>

          <Reveal>
            <p className="mx-auto mt-16 max-w-5xl text-xs leading-relaxed text-cream/45">
              A pointer for orientation, not a specification. The right system also depends on the
              structure, climate, glass, budget and approvals, and is confirmed per project with
              the facade consultant. {INDICATIVE_NOTE}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content max-w-3xl">
          <h2 className="font-display text-3xl text-cream md:text-4xl">Prefer to browse?</h2>
          <p className="mt-5 text-pretty leading-relaxed text-cream/70">
            See all thirteen families, or put any two next to each other.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/systems" className="btn-gold">
              All systems
            </Link>
            <Link to="/compare-systems" className="btn-outline">
              Compare two systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
