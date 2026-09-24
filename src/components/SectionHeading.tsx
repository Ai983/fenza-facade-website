import clsx from "clsx";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Title = as;
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Title
          className={clsx(
            "mt-4 text-[clamp(2rem,4.4vw,3.4rem)]",
            tone === "light" ? "text-ink" : "text-cream"
          )}
        >
          {title}
        </Title>
      </Reveal>
      {intro && (
        <Reveal delay={140}>
          <p
            className={clsx(
              "mt-5 text-pretty text-base leading-relaxed md:text-lg",
              tone === "light" ? "text-muted" : "text-cream/70"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
