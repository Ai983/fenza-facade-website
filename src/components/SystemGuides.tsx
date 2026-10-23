import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { SYSTEM_GUIDES } from "@/lib/system-guides";
import { topicSlug } from "@/lib/topic-slug";

/**
 * "Read more" on a system page: the Journal guides written about this system. The data is a small
 * generated copy (lib/system-guides.ts), so this page does not pull the Journal into the main script.
 */
export default function SystemGuides({ slug, name }: { slug: string; name: string }) {
  const g = SYSTEM_GUIDES[slug];
  if (!g || g.items.length === 0) return null;

  return (
    <section className="border-t border-cream/10 bg-ink py-20 md:py-24">
      <div className="container-content">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div>
            <span className="eyebrow">From the Journal</span>
            <h2 className="mt-3 font-display text-2xl text-cream md:text-3xl">
              Guides on {name.toLowerCase()}
            </h2>
          </div>
          <Link to="/journal" className="link-underline text-sm font-semibold">
            All guides →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {g.items.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <Link
                to={`/journal/${a.slug}`}
                className="group block h-full overflow-hidden rounded-lg border border-cream/10 bg-ink-soft transition-colors hover:border-gold/40"
              >
                <div className="aspect-[3/2] overflow-hidden bg-ink">
                  <img
                    src={a.image}
                    alt={a.alt}
                    width={a.w}
                    height={a.h}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide2 text-gold">
                    {a.topic}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-snug text-cream transition-colors group-hover:text-gold md:text-[1.4rem]">
                    {a.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-cream/45">
          More on a topic:{" "}
          {[...new Set(g.items.map((a) => a.topic))].map((t, i) => (
            <span key={t}>
              {i > 0 && " · "}
              <Link
                to={`/journal/topic/${topicSlug(t)}`}
                className="text-cream/65 underline decoration-cream/20 underline-offset-2 hover:text-gold"
              >
                {t}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
