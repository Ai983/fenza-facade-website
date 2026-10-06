import { Link } from "react-router-dom";
import clsx from "clsx";
import { readingMinutes, type Article } from "@/lib/journal";
import { journalImage, journalSrc } from "@/lib/journal-images";

interface JournalCardProps {
  article: Article;
  /** Large horizontal card (the featured article). */
  featured?: boolean;
  /** Mark the thumbnail as above the fold (skips lazy loading). */
  eager?: boolean;
}

/** One Journal article as a card: image, topic, title, excerpt, reading time. */
export default function JournalCard({ article: a, featured, eager }: JournalCardProps) {
  const img = journalImage(a.card);
  return (
    <Link
      to={`/journal/${a.slug}`}
      className={clsx(
        "group flex h-full overflow-hidden rounded-lg border border-cream/10 bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40",
        featured ? "flex-col md:flex-row" : "flex-col"
      )}
    >
      <div
        className={clsx(
          "relative shrink-0 overflow-hidden bg-ink",
          featured ? "aspect-[3/2] md:aspect-auto md:w-[55%]" : "aspect-[3/2]"
        )}
      >
        <img
          src={journalSrc(img)}
          alt={img.alt}
          width={img.w}
          height={img.h}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      <div className={clsx("flex flex-1 flex-col justify-between p-6", featured && "md:p-10")}>
        <div>
          <span className="text-[0.62rem] font-semibold uppercase tracking-wide2 text-gold">
            {a.topic}
          </span>
          <h3
            className={clsx(
              "mt-3 font-display text-cream",
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            )}
          >
            {a.title}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-cream/60">
            {a.excerpt}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-wide2 text-sand">
          <span>{readingMinutes(a)} min read</span>
          <span
            aria-hidden
            className="text-base text-gold transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
