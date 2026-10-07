import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROJECTS, RECORD_DISCLAIMER, RECORD_LEAD } from "@/lib/projects";

/**
 * Auto-scrolling strip of the project record (names, not logos: no logo
 * files with publishing rights exist yet). These are Akhilesh Kumar Singh's
 * career projects, NOT Fenza's clients, so the heading names him and the
 * disclaimer sits right under the strip. Never retitle it "Trusted by".
 *
 * Pure CSS animation: nothing reads `window` during render, so the
 * prerendered HTML and the first client render match.
 */
function RecordList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 ${duplicate ? "marquee-dup" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {PROJECTS.map((p) => (
        // Spacing is padding on each item (not flex gap) so both copies are
        // exactly the same width and the -50% loop lands seamlessly.
        <li key={p.slug} className="shrink-0 pr-4 md:pr-5">
          <div className="flex h-28 w-56 flex-col items-center justify-center rounded-lg bg-cream px-5 text-center shadow-tile transition-transform duration-300 hover:-translate-y-1 md:w-60">
            <span className="font-display text-xl font-semibold leading-tight text-ink">
              {p.name}
            </span>
            <span className="mt-2 text-[0.62rem] font-semibold uppercase tracking-wide2 text-muted">
              {p.city}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectRecordStrip() {
  return (
    <section className="overflow-hidden bg-ink py-20 md:py-28">
      <div className="container-content">
        <SectionHeading
          align="center"
          eyebrow="Project Record"
          title={
            <>
              Projects led by{" "}
              <span className="italic text-gold-soft">our facade director.</span>
            </>
          }
          intro={RECORD_LEAD}
        />
      </div>

      <div className="marquee-viewport mt-12 py-4 md:mt-14">
        <div className="marquee-track flex w-max animate-marquee">
          <RecordList />
          <RecordList duplicate />
        </div>
      </div>

      <div className="container-content">
        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-cream/50">
            {RECORD_DISCLAIMER}
          </p>
          <p className="mt-6 text-center">
            <Link to="/projects" className="link-underline text-sm font-semibold">
              See the full project record →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
