import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SystemCard from "@/components/SystemCard";
import EnquiryForm from "@/components/EnquiryForm";
import NotFound from "./NotFound";
import { SYSTEMS, getSystem, imgUrl, ogUrl, INDICATIVE_NOTE } from "@/lib/systems";
import {
  buildBreadcrumb,
  buildSystemSchema,
  buildFaqSchema,
} from "@/lib/seo";

export default function SystemFamily() {
  const { slug } = useParams<{ slug: string }>();
  const system = slug ? getSystem(slug) : undefined;

  if (!system) return <NotFound />;

  const related = SYSTEMS.filter(
    (s) => s.category === system.category && s.slug !== system.slug
  ).slice(0, 3);
  const fallbackRelated = SYSTEMS.filter((s) => s.slug !== system.slug).slice(
    0,
    3
  );
  const relatedItems = related.length ? related : fallbackRelated;

  return (
    <>
      <Seo
        title={`${system.name} — Facade System`}
        description={system.summary}
        path={`/systems/${system.slug}`}
        image={ogUrl(system.slug)}
        schema={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Systems", path: "/systems" },
            { name: system.name, path: `/systems/${system.slug}` },
          ]),
          buildSystemSchema({
            name: system.name,
            description: system.summary,
            path: `/systems/${system.slug}`,
            image: imgUrl(system.hero),
          }),
          buildFaqSchema(
            system.faqs.map((f) => ({ question: f.q, answer: f.a }))
          ),
        ]}
      />

      <PageHero
        image={system.hero}
        eyebrow={`${system.code} · ${system.category}`}
        title={system.name}
        intro={system.summary}
        breadcrumb={[
          { name: "Home", to: "/" },
          { name: "Systems", to: "/systems" },
          { name: system.name, to: `/systems/${system.slug}` },
        ]}
      >
        <a href="#enquire" className="btn-gold">
          Enquire about this system
        </a>
      </PageHero>

      {/* Lead + variants */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-pretty text-xl leading-relaxed text-cream/85 md:text-2xl">
                {system.lead}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <h2 className="eyebrow">Variants</h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {system.variants.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-gold/30 px-4 py-2 text-sm text-cream/80"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spec table + gallery */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="eyebrow">Technical Data</h2>
              <table className="mt-6 w-full border-collapse text-sm">
                <tbody>
                  {system.specs.map((row) => (
                    <tr key={row.label} className="border-b border-cream/10">
                      <td className="w-[42%] py-3.5 pr-6 align-top text-sand">
                        {row.label}
                      </td>
                      <td className="py-3.5 align-top text-cream">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 max-w-md text-xs leading-relaxed text-cream/45">
                {INDICATIVE_NOTE}
              </p>
            </div>
          </Reveal>

          <Reveal variant="scale">
            <div className="grid grid-cols-2 gap-3">
              {system.gallery.map((g) => (
                <figure
                  key={g.img}
                  className="group relative aspect-square overflow-hidden rounded-md border border-cream/10 bg-ink"
                >
                  <img
                    src={imgUrl(g.img)}
                    alt={`${system.name} — ${g.caption}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 py-2 text-[0.62rem] uppercase tracking-wide2 text-cream/80">
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-cream/10 bg-ink py-20 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Common questions</span>
            <h2 className="mt-4 font-display text-3xl text-cream">
              About {system.name.toLowerCase()}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-cream/10">
              {system.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <div className="py-6 first:pt-0">
                    <dt className="font-display text-xl text-cream">{f.q}</dt>
                    <dd className="mt-3 text-pretty leading-relaxed text-cream/65">
                      {f.a}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Related systems */}
      <section className="border-t border-cream/10 bg-ink-soft py-20 md:py-24">
        <div className="container-content">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl text-cream md:text-3xl">
              Related systems
            </h2>
            <Link to="/systems" className="link-underline text-sm font-semibold">
              All systems →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <SystemCard system={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Per-system enquiry */}
      <section id="enquire" className="scroll-mt-24 bg-ink py-24 md:py-28">
        <div className="container-content grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Request specifications</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] text-cream">
              Enquire about{" "}
              <span className="italic text-gold-soft">{system.name}.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-cream/70">
              Share your elevation areas and system intent — we come back with a
              measured scope, indicative specifications and an itemised offer.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Reveal variant="scale">
              <div className="rounded-xl border border-cream/10 bg-cream/[0.03] p-6 md:p-8">
                <EnquiryForm defaultSystem={system.name} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
