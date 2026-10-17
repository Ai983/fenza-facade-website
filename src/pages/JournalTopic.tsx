import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import JournalCard from "@/components/JournalCard";
import NotFound from "./NotFound";
import { buildBreadcrumb, buildCollectionSchema } from "@/lib/seo";
import { JOURNAL, TOPICS, TOPIC_COPY, articlesByTopic, topicFromSlug, topicSlug } from "@/lib/journal";

/** /journal/topic/<slug>: every article on one topic. Static links to the other topics at the end. */
export default function JournalTopic() {
  const { topic: param } = useParams<{ topic: string }>();
  const topic = param ? topicFromSlug(param) : undefined;
  if (!topic) return <NotFound />;

  const copy = TOPIC_COPY[topic];
  const items = articlesByTopic(topic);
  const path = `/journal/topic/${topicSlug(topic)}`;
  const others = TOPICS.filter((t) => t !== topic && JOURNAL.some((a) => a.topic === t));

  return (
    <>
      <Seo
        title={copy.title}
        description={copy.description}
        path={path}
        image="/og/resources-hero.jpg"
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: copy.title, path },
          ]),
          buildCollectionSchema({
            name: copy.title,
            description: copy.description,
            path,
            items: items.map((a) => ({ name: a.title, path: `/journal/${a.slug}` })),
          }),
        ]}
      />

      <PageHero
        image="resources-hero"
        eyebrow={`Journal · ${topic}`}
        title={copy.title}
        intro={copy.intro}
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Journal", to: "/journal" },
          { name: copy.title, to: path },
        ]}
      />

      <section className="bg-ink py-16 md:py-24">
        <div className="container-content">
          <p className="mb-8 text-xs uppercase tracking-wide2 text-sand">
            {items.length} {items.length === 1 ? "article" : "articles"}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <JournalCard article={a} eager={i < 3} />
              </Reveal>
            ))}
          </div>
          <p className="mt-16 max-w-2xl text-xs leading-relaxed text-cream/45">
            General guidance for orientation, not a specification. Applicable standards, values and
            details are confirmed per project with the facade consultant.
          </p>
        </div>
      </section>

      <section className="border-t border-cream/10 bg-ink-soft py-16">
        <div className="container-content">
          <h2 className="eyebrow">Other topics</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li>
              <Link to="/journal" className="tap-safe inline-block rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide2 text-cream/70 transition-colors hover:border-gold hover:text-gold">
                All articles
              </Link>
            </li>
            {others.map((t) => (
              <li key={t}>
                <Link
                  to={`/journal/topic/${topicSlug(t)}`}
                  className="tap-safe inline-block rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide2 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
