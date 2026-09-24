import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import clsx from "clsx";
import { imgUrl } from "@/lib/systems";

interface PageHeroProps {
  /** image key (from /images) or a full path */
  image: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumb?: { name: string; to: string }[];
  children?: ReactNode;
  align?: "left" | "center";
}

export default function PageHero({
  image,
  eyebrow,
  title,
  intro,
  breadcrumb,
  children,
  align = "left",
}: PageHeroProps) {
  const src = image.startsWith("/") ? image : imgUrl(image);
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-[74px]">
      <div className="absolute inset-0">
        <img
          src={src}
          alt=""
          aria-hidden
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <div
        className={clsx(
          "container-content relative z-10 pb-16 pt-24",
          align === "center" && "text-center"
        )}
      >
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className={clsx(
              "mb-6 flex flex-wrap gap-2 text-xs text-cream/50",
              align === "center" && "justify-center"
            )}
          >
            {breadcrumb.map((b, i) => (
              <span key={b.to} className="flex items-center gap-2">
                {i > 0 && <span className="text-cream/30">/</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link
                    to={b.to}
                    className="tap-safe inline-block transition-colors hover:text-gold"
                  >
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-cream/80">{b.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="eyebrow animate-fade-up">{eyebrow}</span>
        )}
        <h1
          className={clsx(
            "mt-4 max-w-4xl text-balance font-display text-[clamp(2.4rem,6vw,4.6rem)] text-cream animate-fade-up",
            align === "center" && "mx-auto"
          )}
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className={clsx(
              "mt-6 max-w-2xl text-pretty text-base leading-relaxed text-cream/75 md:text-lg animate-fade-up",
              align === "center" && "mx-auto"
            )}
            style={{ animationDelay: "160ms" }}
          >
            {intro}
          </p>
        )}
        {children && (
          <div
            className={clsx(
              "mt-9 flex flex-wrap gap-4 animate-fade-up",
              align === "center" && "justify-center"
            )}
            style={{ animationDelay: "240ms" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
