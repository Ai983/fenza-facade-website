import { useRef, useState, type CSSProperties } from "react";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { MACHINES, MACHINE_STORY, type Machine } from "@/lib/content";
import { imgUrl } from "@/lib/systems";

// Scroll distance per machine, in viewport heights (desktop only).
const STEP_VH = 80;
const COUNT = MACHINES.length;

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

const MACHINE_IMG =
  "absolute inset-x-0 top-[2%] mx-auto h-[86%] w-[96%] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]";

/**
 * A dark stage for the machine cut-outs (machine-*.webp: transparent,
 * graded for this page): a warm spotlight behind, and a faint pool of light
 * on the "floor" to ground them, since the cut-outs carry no floor shadow.
 */
function Stage({
  machine,
  className,
  children,
}: {
  machine?: Machine;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={clsx("relative", className)}>
      {/* Spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_45%,rgba(216,188,134,0.16)_0%,rgba(216,188,134,0.05)_45%,transparent_72%)]"
      />
      {/* Floor pool */}
      <div
        aria-hidden
        className="absolute inset-x-[12%] bottom-[9%] h-[14%] rounded-[100%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(243,238,227,0.10)_0%,transparent_100%)]"
      />
      {machine && (
        <img
          src={imgUrl(machine.img)}
          alt={`${machine.title} machine`}
          loading="lazy"
          className={MACHINE_IMG}
        />
      )}
      {children}
    </div>
  );
}

/**
 * Manufacturing page: a pinned, scroll-driven walk down the line. Same
 * language as the Home anatomy story — heading fixed on the left, caption
 * cross-fading beneath it, one large image on the right — but here each step
 * swaps the machine rather than zooming one photo, and a four-part line along
 * the bottom fills as the profile moves from cut to mill.
 *
 * Phones get a stacked stage + caption per machine. Every transition is
 * class-driven off the step index (no scroll-linked opacity), and step 0 is
 * the SSR state, so hydration matches.
 */
export default function ManufacturingLine() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(Math.min(COUNT - 1, Math.max(0, Math.floor(v * COUNT))));
  });

  function goTo(i: number) {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const y = top + ((i + 0.5) * STEP_VH * window.innerHeight) / 100;
    if (window.__lenis) window.__lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <section
      ref={ref}
      aria-labelledby="line-title"
      className="relative border-t border-cream/10 bg-ink-soft lg:h-[var(--line-h)]"
      style={{ "--line-h": `${100 + COUNT * STEP_VH}vh` } as CSSProperties}
    >
      <div className="py-20 md:py-28 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden lg:py-0 lg:pt-[74px]">
        <div className="container-content grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---- Text column ---- */}
          <div className="lg:col-span-5">
            <span className="eyebrow">The Line</span>
            <h2
              id="line-title"
              className="mt-4 text-[clamp(2.2rem,3.8vw,3.4rem)] text-cream"
            >
              From bar to frame,{" "}
              <span className="italic text-gold-soft">on one line.</span>
            </h2>

            {/* Captions: stacked on phones (each with its own plate),
                cross-faded in one slot on desktop. */}
            <div className="relative mt-12 space-y-16 lg:mt-10 lg:h-[15rem] lg:space-y-0">
              {MACHINES.map((m, i) => {
                const story = MACHINE_STORY[m.n];
                const on = step === i;
                return (
                  <article
                    key={m.n}
                    className={clsx(
                      // Written out in full: Tailwind cannot see a class
                      // assembled from a variable with a variant prefix.
                      "lg:absolute lg:inset-x-0 lg:top-0 lg:transition-all lg:duration-700 lg:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:lg:transition-none",
                      on
                        ? "lg:translate-y-0 lg:opacity-100"
                        : clsx(
                            "lg:pointer-events-none lg:opacity-0",
                            i < step ? "lg:-translate-y-4" : "lg:translate-y-4"
                          )
                    )}
                  >
                    <Stage machine={m} className="mb-4 aspect-[4/3] lg:hidden" />
                    <span className="font-display text-lg italic text-gold">
                      {m.n}
                      <span className="text-cream/30">
                        {" "}/ {String(COUNT).padStart(2, "0")}
                      </span>
                    </span>
                    <h3 className="mt-2 text-[clamp(1.7rem,2.6vw,2.3rem)] text-cream">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-md text-pretty leading-relaxed text-cream/70">
                      {story.line}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {story.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs uppercase tracking-wide2 text-sand"
                        >
                          <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            {/* The line itself: four stations, filling as you scroll. */}
            <nav
              aria-label="Production line steps"
              className="mt-10 hidden grid-cols-4 gap-2 lg:grid"
            >
              {MACHINES.map((m, i) => (
                <button
                  key={m.n}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={m.title}
                  aria-current={step === i ? "step" : undefined}
                  className="group text-left"
                >
                  <span className="block h-[3px] overflow-hidden rounded-full bg-cream/15">
                    <span
                      className={clsx(
                        `block h-full bg-gold transition-[width] duration-700 ${EASE} motion-reduce:transition-none`,
                        i <= step ? "w-full" : "w-0"
                      )}
                    />
                  </span>
                  <span
                    className={clsx(
                      "mt-3 block text-[0.66rem] uppercase tracking-wide2 transition-colors",
                      i === step
                        ? "text-gold"
                        : "text-cream/40 group-hover:text-cream/70"
                    )}
                  >
                    {MACHINE_STORY[m.n].short}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* ---- Stage: one on desktop, machines cross-fading on it ---- */}
          <div aria-hidden className="hidden lg:col-span-7 lg:block">
            <Stage className="mx-auto aspect-[4/3] max-h-[74vh] w-full">
              {/* Station number, large and quiet, behind the machine. */}
              <span className="absolute left-[4%] top-[2%] font-display text-[9rem] italic leading-none text-cream/[0.05]">
                {MACHINES[step].n}
              </span>
              {MACHINES.map((m, i) => (
                <img
                  key={m.n}
                  src={imgUrl(m.img)}
                  alt=""
                  loading="lazy"
                  className={clsx(
                    MACHINE_IMG,
                    `transition-all duration-[900ms] ${EASE} motion-reduce:transition-none`,
                    step === i
                      ? "translate-x-0 opacity-100"
                      : clsx(
                          "opacity-0",
                          // Previous machine leaves left, next arrives from
                          // the right: the profile moving down the line.
                          i < step ? "-translate-x-[12%]" : "translate-x-[12%]"
                        )
                  )}
                />
              ))}
            </Stage>
          </div>
        </div>
      </div>
    </section>
  );
}
