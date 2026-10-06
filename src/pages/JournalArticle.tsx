import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import JournalCard from "@/components/JournalCard";
import JournalText from "@/components/JournalText";
import NotFound from "./NotFound";
import { buildArticleSchema, buildBreadcrumb, buildFaqSchema } from "@/lib/seo";
import { articleCredits, getArticle, readingMinutes, relatedArticles, type Block } from "@/lib/journal";
import { journalImage, journalSrc } from "@/lib/journal-images";
import { GLOSSARY } from "@/lib/glossary";
import { getSystem, imgUrl } from "@/lib/systems";

const TERM = new Map(GLOSSARY.map((t) => [t.slug, t.term]));

function Compare({ b }: { b: Extract<Block, { t: "compare" }> }) {
  return (
    <>
      {/* Wide screens: a real table. */}
      <div className="my-10 hidden overflow-hidden rounded-lg border border-cream/10 md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-cream/15 bg-cream/[0.03] text-[0.66rem] uppercase tracking-wide2 text-sand">
              <th scope="col" className="w-[18%] px-5 py-3.5 font-semibold" />
              {b.cols.map((c) => (
                <th key={c} scope="col" className="px-5 py-3.5 font-semibold text-gold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r) => (
              <tr key={r.k} className="border-b border-cream/10 last:border-b-0 align-top">
                <th scope="row" className="px-5 py-4 font-display text-lg font-medium text-cream">
                  {r.k}
                </th>
                {r.v.map((cell, i) => (
                  <td key={i} className="px-5 py-4 leading-relaxed text-cream/70">
                    <JournalText>{cell}</JournalText>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phones: the same content as stacked cards, so nothing scrolls sideways. */}
      <div className="my-10 space-y-4 md:hidden">
        {b.rows.map((r) => (
          <div key={r.k} className="rounded-lg border border-cream/10 bg-ink-soft p-5">
            <h3 className="font-display text-xl text-cream">{r.k}</h3>
            <dl className="mt-3 space-y-3">
              {b.cols.map((c, i) => (
                <div key={c}>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-wide2 text-gold">
                    {c}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-cream/70">
                    <JournalText>{r.v[i]}</JournalText>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

function Body({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return (
        <p className="mt-6 text-pretty text-[1.075rem] leading-[1.8] text-cream/75">
          <JournalText>{b.x}</JournalText>
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-14 font-display text-3xl text-cream md:text-4xl">
          {b.x}
        </h2>
      );
    case "ul":
      return (
        <ul className="mt-6 space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4 text-[1.05rem] leading-[1.75] text-cream/75">
              <span aria-hidden className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-gold" />
              <span>
                <JournalText>{it}</JournalText>
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-6 space-y-4">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4 text-[1.05rem] leading-[1.75] text-cream/75">
              <span aria-hidden className="mt-0.5 w-6 shrink-0 font-display text-xl italic text-gold">
                {i + 1}
              </span>
              <span>
                <JournalText>{it}</JournalText>
              </span>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <aside className="mt-8 rounded-lg border border-gold/25 bg-cream/[0.03] p-6 text-[0.98rem] leading-relaxed text-cream/70">
          <JournalText>{b.x}</JournalText>
        </aside>
      );
    case "compare":
      return <Compare b={b} />;
    case "img": {
      const img = journalImage(b.id);
      return (
        <figure className="my-12 md:-mx-10 lg:-mx-16">
          <div className="overflow-hidden rounded-lg border border-cream/10 bg-ink-soft">
            <img
              src={journalSrc(img)}
              alt={img.alt}
              width={img.w}
              height={img.h}
              loading="lazy"
              className="max-h-[34rem] w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 px-1 text-xs leading-relaxed text-cream/50 md:px-0">
            {b.cap}
          </figcaption>
        </figure>
      );
    }
  }
}

/** /journal/:slug — one article. Content is plain markup in the prerendered HTML. */
export default function JournalArticle() {
  const { slug } = useParams<{ slug: string }>();
  const a = slug ? getArticle(slug) : undefined;
  if (!a) return <NotFound />;

  const path = `/journal/${a.slug}`;
  const related = relatedArticles(a.slug, 3);
  const systems = a.systems.map((s) => getSystem(s)).filter((s): s is NonNullable<typeof s> => !!s);
  const terms = a.terms.filter((t) => TERM.has(t));
  const credits = articleCredits(a);
  const hero = journalImage(a.hero);

  return (
    <>
      <Seo
        title={a.seoTitle}
        description={a.description}
        path={path}
        image={a.og}
        type="article"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: a.seoTitle, path },
          ]),
          buildArticleSchema({
            headline: a.title,
            description: a.description,
            path,
            image: hero.url ?? imgUrl(hero.file),
            datePublished: a.date,
            keywords: [a.topic, ...terms.map((t) => TERM.get(t)!)],
          }),
          buildFaqSchema(a.faq),
        ]}
      />

      <PageHero
        image={journalSrc(hero)}
        eyebrow={a.topic}
        title={a.title}
        intro={a.excerpt}
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Journal", to: "/journal" },
          { name: a.seoTitle, to: path },
        ]}
      >
        <p className="text-xs uppercase tracking-wide2 text-cream/60">
          Fenza Facade Engineering · {readingMinutes(a)} min read
        </p>
      </PageHero>

      <article className="bg-ink pb-8 pt-4">
        <div className="container-content">
          <div className="mx-auto max-w-[44rem]">
            {a.body.map((b, i) => (
              <Body key={i} b={b} />
            ))}

            <p className="mt-14 border-t border-cream/10 pt-6 text-xs leading-relaxed text-cream/45">
              General guidance for orientation, not a specification. Applicable
              standards, values and details are confirmed per project with the
              facade consultant.
            </p>
            {credits.length > 0 && (
              <p className="mt-3 text-xs leading-relaxed text-cream/40">
                Photography:{" "}
                {credits.map((c, i) => (
                  <span key={c.credit}>
                    {i > 0 && " · "}
                    {c.source ? (
                      <a
                        href={c.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-cream/20 underline-offset-2 hover:text-cream/70"
                      >
                        {c.credit}
                      </a>
                    ) : (
                      c.credit
                    )}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </article>

      {a.faq.length > 0 && (
        <section className="border-t border-cream/10 bg-ink py-14">
          <div className="container-content">
            <div className="mx-auto max-w-[44rem]">
              <h2 className="eyebrow">Frequently asked</h2>
              <dl className="mt-6 space-y-8">
                {a.faq.map((f) => (
                  <div key={f.question}>
                    <dt className="font-display text-2xl leading-snug text-cream">{f.question}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-cream/70">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {(systems.length > 0 || terms.length > 0) && (
        <section className="border-t border-cream/10 bg-ink py-14">
          <div className="container-content">
            <div className="mx-auto grid max-w-[44rem] gap-10 sm:grid-cols-2">
              {systems.length > 0 && (
                <div>
                  <h2 className="eyebrow">Related systems</h2>
                  <ul className="mt-4 space-y-2">
                    {systems.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/systems/${s.slug}`}
                          className="tap-safe inline-block font-display text-xl text-cream transition-colors hover:text-gold"
                        >
                          {s.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {terms.length > 0 && (
                <div>
                  <h2 className="eyebrow">In the glossary</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {terms.map((t) => (
                      <li key={t}>
                        <Link
                          to={`/glossary#${t}`}
                          className="tap-safe inline-block rounded-full border border-cream/20 px-3.5 py-1.5 text-xs text-cream/75 transition-colors hover:border-gold hover:text-gold"
                        >
                          {TERM.get(t)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Keep reading
            </h2>
            <Link to="/journal" className="link-underline text-sm font-semibold">
              All articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 80}>
                <JournalCard article={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink py-20 md:py-24">
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
