import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ANATOMY_IMAGE,
  ANATOMY_PARTS,
  STORY_STEPS,
  type AnatomyPart,
} from "@/lib/anatomy";
import { imgUrl } from "@/lib/systems";

const ZOOM = 1.7;
// Where a zoomed part is brought to, in % of the stage — left of centre, so
// it sits clear of the right-hand bleed and near the text.
const FOCUS = { x: 46, y: 50 };
// Scroll distance per step, in viewport heights (desktop only).
const STEP_VH = 70;

const PARTS = STORY_STEPS.map((s) => ({
  ...(ANATOMY_PARTS.find((p) => p.id === s.id) as AnatomyPart),
  line: s.line,
}));
// Step 0 is the whole specimen, 1..n are the parts, last is the close.
const STEP_COUNT = PARTS.length + 2;
// Extra pinned scroll after the last step, for the exit move: the photo
// slides left and grows, then the section releases.
const EXIT_VH = 110;
const STEPS_VH = STEP_COUNT * STEP_VH;
// Section height: one viewport (the pinned frame) + the pinned scroll.
const SECTION_VH = 100 + STEPS_VH + EXIT_VH;

// Milestones on one scroll range (0 = section top enters the bottom of the
// viewport, 1 = section bottom reaches the bottom of the viewport). That
// range is one viewport of entrance plus the pinned scroll — SECTION_VH.
const ENTER_END = 100 / SECTION_VH; // section has pinned
const STEPS_END = (100 + STEPS_VH) / SECTION_VH; // last step done, exit begins
const EXIT_END = STEPS_END + (1 - STEPS_END) * 0.85; // hold briefly before release

// Exit move: where the photo's centre lands (share of viewport width — so it
// ends on the left on every screen size), and how much it grows.
const EXIT_CENTER_VW = 0.28;
const EXIT_SCALE = 1.3;
// During the exit the photo also closes in on the transom's cut profile.
const EXIT_ZOOM = 1.4;
const EXIT_FOCUS = { x: 52, y: 46 };
// The closing headline fades in once the move is this far along.
const HEADLINE_AT = 0.55;

const seg = (v: number, a: number, b: number) =>
  Math.min(Math.max((v - a) / (b - a), 0), 1);
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// The stage fades out at its edges through a mask on the image itself, not
// overlays painted on top: overlays and a transformed image land on
// different sub-pixels mid-transition and let a 1px seam of photo through.
// `--fade-l` is where the left fade reaches full strength, `--fade-r` where
// the right fade begins. At rest (photo on the right) the left side fades
// into the page: 48% / 86%. During the exit they swap sides — the photo sits
// against the left edge and fades out to the right, under the headline:
// 0% / 56%.
const MASK_X =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) calc(var(--fade-l, 48%) * 0.45), #000 var(--fade-l, 48%), #000 var(--fade-r, 86%), transparent 100%)";
const MASK_Y =
  "linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)";
const mask = (g: string): CSSProperties => ({
  WebkitMaskImage: g,
  maskImage: g,
});

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(Math.max(v, lo), hi);

/**
 * Translate + scale that brings a part to FOCUS without ever exposing the
 * stage edge (the image must keep covering its box at every zoom).
 */
function frame(part: AnatomyPart | null, zoom = ZOOM, focus = FOCUS) {
  if (!part) return { s: 1, tx: 0, ty: 0 };
  const min = 100 - 100 * zoom;
  return {
    s: zoom,
    tx: clamp(focus.x - zoom * part.x, min, 0),
    ty: clamp(focus.y - zoom * part.y, min, 0),
  };
}

const transformOf = (f: ReturnType<typeof frame>): CSSProperties => ({
  transform: `translate(${f.tx}%, ${f.ty}%) scale(${f.s})`,
  transformOrigin: "0 0",
});

/** Static crop of the specimen, used for the stacked phone layout. */
function Crop({ part, alt }: { part: AnatomyPart | null; alt: string }) {
  return (
    <div className="relative mb-7 aspect-square overflow-hidden rounded-lg border border-cream/10 bg-ink-soft lg:hidden">
      <img
        src={imgUrl(ANATOMY_IMAGE.key)}
        alt={alt}
        width={ANATOMY_IMAGE.width}
        height={ANATOMY_IMAGE.height}
        loading="lazy"
        className="h-full w-full object-cover"
        style={transformOf(frame(part))}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
    </div>
  );
}

/**
 * Home page signature: a pinned, scroll-driven tour of the curtain-wall
 * specimen. Desktop (lg+) pins the section; the photo slides in and sits
 * large on the right, faded into the page, gliding from part to part while
 * the caption cross-fades. After the last step it slides left and grows
 * (reversing on the way back up) before the section releases. Phones get a plain stacked
 * layout of crops and captions — no pinning, nothing to fight the thumb.
 *
 * All copy is real markup in the prerendered HTML (one copy, restyled per
 * breakpoint), and the first render is the SSR state (step 0), so hydration
 * matches.
 */
export default function AnatomyStory() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);
  // Read inside the scroll transforms. Starts false so the first client
  // render matches the prerendered HTML; set after mount.
  const reduceRef = useRef(false);
  useEffect(() => {
    reduceRef.current =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  // One scroll range drives everything: entrance, steps and exit.
  const { scrollYProgress: travel } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [headlineOn, setHeadlineOn] = useState(false);
  useMotionValueEvent(travel, "change", (v) => {
    const p = (v - ENTER_END) / (STEPS_END - ENTER_END);
    setStep(Math.min(STEP_COUNT - 1, Math.max(0, Math.floor(p * STEP_COUNT))));
    setExiting(v > STEPS_END + 0.01);
    setHeadlineOn(seg(v, STEPS_END, EXIT_END) > HEADLINE_AT);
  });

  // Viewport size, for the exit distance (read inside the transforms).
  const viewRef = useRef({ w: 1440, h: 900 });
  useEffect(() => {
    const read = () =>
      (viewRef.current = { w: window.innerWidth, h: window.innerHeight });
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  // Enter: slide in from the right. Steps: hold still. Exit: slide left,
  // grow, and settle against the left edge. Scrolling back up reverses it.
  // (No scroll-linked opacity: Framer hands opacity to a native scroll
  // timeline, which mis-resolves against the pinned layout — it left the
  // photo at opacity 0. Transforms and the mask variables are safe.)
  const stageX = useTransform(travel, (v) => {
    if (reduceRef.current) return 0;
    const { w, h } = viewRef.current;
    // Mirrors the stage CSS: h-[min(92vh,60vw)], right edge at 106vw.
    const size = Math.min(0.92 * h, 0.6 * w);
    const restCentre = 1.06 * w - size / 2;
    const enter = 0.22 * size * (1 - easeInOut(seg(v, 0, ENTER_END)));
    const exit =
      (EXIT_CENTER_VW * w - restCentre) * easeInOut(seg(v, STEPS_END, EXIT_END));
    return enter + exit;
  });
  const stageScale = useTransform(travel, (v) =>
    reduceRef.current
      ? 1
      : 1 + (EXIT_SCALE - 1) * easeInOut(seg(v, STEPS_END, EXIT_END))
  );
  const fadeL = useTransform(
    travel,
    (v) => `${48 * (1 - easeInOut(seg(v, STEPS_END, EXIT_END)))}%`
  );
  const fadeR = useTransform(
    travel,
    (v) => `${86 - 30 * easeInOut(seg(v, STEPS_END, EXIT_END))}%`
  );

  const activePart = step >= 1 && step <= PARTS.length ? PARTS[step - 1] : null;
  const profilePart = PARTS.find((p) => p.id === "profile") ?? null;
  const f = exiting
    ? frame(profilePart, EXIT_ZOOM, EXIT_FOCUS)
    : frame(activePart);

  function goTo(i: number) {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const y = top + ((i + 0.5) * STEP_VH * window.innerHeight) / 100;
    if (window.__lenis) window.__lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: "smooth" });
  }

  const captionCls = (i: number) =>
    clsx(
      "lg:absolute lg:inset-x-0 lg:top-1/2 lg:transition-all lg:duration-700 lg:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:lg:transition-none",
      step === i && !exiting
        ? "lg:opacity-100 lg:translate-y-[-50%]"
        : clsx(
            "lg:pointer-events-none lg:opacity-0",
            i < step ? "lg:translate-y-[-62%]" : "lg:translate-y-[-38%]"
          )
    );

  return (
    <section
      ref={ref}
      id="anatomy"
      aria-labelledby="anatomy-title"
      className="relative scroll-mt-20 border-t border-cream/10 bg-ink lg:h-[var(--story-h)]"
      style={
        { "--story-h": `${SECTION_VH}vh` } as CSSProperties
      }
    >
      <div className="relative py-24 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:py-0">
        {/* ---- Stage: the big specimen, right-anchored (desktop) ---- */}
        <motion.div
          aria-hidden
          style={
            {
              x: stageX,
              scale: stageScale,
              "--fade-l": fadeL,
              "--fade-r": fadeR,
            } as never
          }
          className="pointer-events-none absolute inset-y-0 right-[-6vw] hidden items-center lg:flex"
        >
          {/* Two nested masks: left-edge fade outside, top/bottom inside. */}
          <div
            className="relative aspect-square h-[min(92vh,60vw)]"
            style={mask(MASK_X)}
          >
            <div
              className="relative h-full w-full overflow-hidden"
              style={mask(MASK_Y)}
            >
            <img
              src={imgUrl(ANATOMY_IMAGE.key)}
              alt=""
              width={ANATOMY_IMAGE.width}
              height={ANATOMY_IMAGE.height}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] [backface-visibility:hidden] will-change-transform motion-reduce:transition-none"
              style={transformOf(f)}
            />
            {/* Marker on the active part — same maths as the image. */}
            <span
              className={clsx(
                "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_6px_rgba(198,161,91,0.22)] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                activePart ? "opacity-100" : "opacity-0"
              )}
              style={
                activePart
                  ? {
                      left: `${f.tx + f.s * activePart.x}%`,
                      top: `${f.ty + f.s * activePart.y}%`,
                    }
                  : { left: "50%", top: "50%" }
              }
            />
            </div>
          </div>
        </motion.div>

        {/* Soft floor for the frame: once the enlarged photo releases and
            scrolls away, its cut edge fades into the page instead of ending
            in a hard line. Static (not on the moving photo), so no seam. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-ink to-transparent lg:block"
        />

        {/* ---- Closing headline (desktop, end of the exit move) ----
            Sits half over the photo's faded right edge, half on the page.
            Class-driven fade (not scroll-linked opacity — see above). The
            words repeat the section's h2, so they are a plain <p> hidden
            from assistive tech; the link stays reachable. */}
        <div
          className={clsx(
            "absolute left-[51vw] top-1/2 z-10 hidden w-[44vw] max-w-3xl -translate-y-1/2 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:block",
            headlineOn
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-10 opacity-0"
          )}
        >
          <span aria-hidden className="eyebrow">
            Facade Anatomy
          </span>
          <p
            aria-hidden
            className="mt-5 font-display text-[clamp(3.4rem,7vw,7.2rem)] font-medium leading-[0.95] text-cream [text-shadow:0_4px_40px_rgba(16,14,10,0.65)]"
          >
            Inside a
            <br />
            <span className="italic text-gold-soft">curtain wall.</span>
          </p>
          <Link
            to="/systems/curtain-wall"
            tabIndex={headlineOn ? undefined : -1}
            className="link-underline mt-8 text-sm font-semibold uppercase tracking-wide2"
          >
            Explore the curtain wall →
          </Link>
        </div>

        {/* ---- Captions: one copy of the text, stacked on phones, ---- */}
        {/* ---- cross-faded in place on desktop.                    ---- */}
        <div className="container-content relative z-10 lg:flex lg:h-full lg:items-center">
          <div className="relative space-y-20 lg:h-[26rem] lg:w-[40%] lg:space-y-0">
            {/* Intro */}
            <div className={captionCls(0)}>
              <span className="eyebrow">Facade Anatomy</span>
              <h2
                id="anatomy-title"
                className="mt-4 text-[clamp(2.4rem,4.6vw,3.8rem)] text-cream"
              >
                Inside a{" "}
                <span className="italic text-gold-soft">curtain wall.</span>
              </h2>
              <p className="mt-5 max-w-sm text-pretty leading-relaxed text-cream/65">
                Five parts decide whether a glass facade stays square, sealed
                and standing.
              </p>
              <p className="mt-8 hidden text-[0.66rem] uppercase tracking-wide2 text-sand lg:block">
                Scroll to explore ↓
              </p>
              <div className="mt-10">
                <Crop part={null} alt={ANATOMY_IMAGE.alt} />
              </div>
            </div>

            {/* Parts */}
            {PARTS.map((part, i) => (
              <article key={part.id} className={captionCls(i + 1)}>
                <Crop part={part} alt={`Close-up of the ${part.name.toLowerCase()} on a curtain wall specimen`} />
                <span className="font-display text-lg italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                  <span className="text-cream/30"> / {String(PARTS.length).padStart(2, "0")}</span>
                </span>
                <h3 className="mt-3 text-[clamp(2rem,3.6vw,3rem)] text-cream">
                  {part.name}
                </h3>
                <p className="mt-4 max-w-sm text-pretty text-lg leading-relaxed text-cream/70">
                  {part.line}
                </p>
              </article>
            ))}

            {/* Close */}
            <div className={captionCls(STEP_COUNT - 1)}>
              <h3 className="text-[clamp(2rem,3.6vw,3rem)] text-cream">
                Five parts.{" "}
                <span className="italic text-gold-soft">One envelope.</span>
              </h3>
              <p className="mt-4 max-w-sm text-pretty leading-relaxed text-cream/65">
                Engineered, fabricated on our own line and installed by our own
                teams.
              </p>
              <Link
                to="/systems/curtain-wall"
                // Desktop: tabbing onto the (still faded) link brings its step up.
                onFocus={() => {
                  if (
                    step !== STEP_COUNT - 1 &&
                    window.matchMedia("(min-width: 1024px)").matches
                  )
                    goTo(STEP_COUNT - 1);
                }}
                className="btn-outline mt-8"
              >
                Explore the curtain wall
              </Link>
            </div>
          </div>
        </div>

        {/* ---- Progress (desktop) ---- */}
        <nav
          aria-label="Anatomy steps"
          className={clsx(
            "absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-1 transition-opacity duration-500 lg:flex",
            exiting && "pointer-events-none opacity-0"
          )}
        >
          {Array.from({ length: STEP_COUNT }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={
                i === 0
                  ? "Overview"
                  : i === STEP_COUNT - 1
                    ? "Summary"
                    : PARTS[i - 1].name
              }
              aria-current={step === i ? "step" : undefined}
              className="group flex h-8 items-center px-1"
            >
              <span
                className={clsx(
                  "block h-[3px] rounded-full transition-all duration-500",
                  step === i
                    ? "w-8 bg-gold"
                    : "w-3 bg-cream/25 group-hover:bg-cream/50"
                )}
              />
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
