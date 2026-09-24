import clsx from "clsx";

interface LogoProps {
  className?: string;
  withTagline?: boolean;
  /** font size utility for the wordmark, e.g. "text-2xl" */
  size?: string;
}

/** FENZA wordmark. The Z is always gold (brand rule, PRD §4). */
export default function Logo({
  className,
  withTagline = false,
  size = "text-[1.55rem]",
}: LogoProps) {
  return (
    <span className={clsx("inline-flex flex-col leading-none", className)}>
      <span
        className={clsx(
          "font-display font-semibold tracking-[0.16em]",
          size
        )}
      >
        FEN<span className="accent-z">Z</span>A
      </span>
      {withTagline && (
        <span className="mt-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-sand">
          Facade Engineering
        </span>
      )}
    </span>
  );
}
