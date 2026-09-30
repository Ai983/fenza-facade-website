import { useRef, useState, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ANATOMY_IMAGE, ANATOMY_PARTS, type AnatomyPart } from "@/lib/anatomy";
import { imgUrl, INDICATIVE_NOTE } from "@/lib/systems";

const ZOOM = 1.9;
// Pointer distances, in % of the image. Entering needs a closer approach than
// leaving, so the zoom does not flicker at the edge of a hotspot.
const ENTER_RADIUS = 9;
const EXIT_RADIUS = 16;

interface AnatomyExplorerProps {
  /** Show the "explore the system" link (off on the curtain-wall page itself). */
  showSystemLink?: boolean;
}

function PartCard({ part, index }: { part: AnatomyPart; index: number }) {
  return (
    <>
      <span className="font-display text-sm italic text-gold">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-1 font-display text-2xl text-cream">{part.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/70">{part.body}</p>
    </>
  );
}

/**
 * A specimen photo with pinned parts. Moving the pointer near a part (or
 * tapping / focusing its marker) zooms the photo into that spot and explains
 * it in place. Transform-origin sits on the part, so the part stays under
 * the pointer while everything around it scales away.
 */
export default function AnatomyExplorer({
  showSystemLink = true,
}: AnatomyExplorerProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeIndex = ANATOMY_PARTS.findIndex((p) => p.id === activeId);
  const active = activeIndex >= 0 ? ANATOMY_PARTS[activeIndex] : null;

  function pointerPct(e: PointerEvent) {
    const rect = frameRef.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  }

  // Mouse only — touch uses taps on the markers instead.
  function handlePointerMove(e: PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const p = pointerPct(e);
    const dist = (part: AnatomyPart) => Math.hypot(part.x - p.x, part.y - p.y);

    // While zoomed, the active part is still at its base position (it is the
    // transform origin), so the exit test can use base coordinates too.
    if (active) {
      if (dist(active) > EXIT_RADIUS) setActiveId(null);
      return;
    }
    let nearest: AnatomyPart | null = null;
    for (const part of ANATOMY_PARTS) {
      if (dist(part) < ENTER_RADIUS && (!nearest || dist(part) < dist(nearest))) {
        nearest = part;
      }
    }
    if (nearest) setActiveId(nearest.id);
  }

  function step(delta: number) {
    const from = activeIndex < 0 ? (delta > 0 ? -1 : 0) : activeIndex;
    const next = (from + delta + ANATOMY_PARTS.length) % ANATOMY_PARTS.length;
    setActiveId(ANATOMY_PARTS[next].id);
  }

  // The card sits beside the part, on whichever side has more room.
  const cardOnLeft = active ? active.x > 55 : false;
  const cardTop = active ? Math.min(Math.max(active.y, 22), 78) : 50;

  return (
    <div
      className="grid items-start gap-10 lg:grid-cols-12"
      onKeyDown={(e) => e.key === "Escape" && setActiveId(null)}
    >
      <div className="lg:col-span-7">
        <div
          ref={frameRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={(e) => e.pointerType === "mouse" && setActiveId(null)}
          onClick={(e) => {
            // A tap on the photo itself (not a marker) zooms back out.
            if (e.target === e.currentTarget || (e.target as HTMLElement).dataset.backdrop)
              setActiveId(null);
          }}
          className="relative aspect-square overflow-hidden rounded-lg border border-cream/10 bg-ink-soft"
        >
          <img
            data-backdrop="true"
            src={imgUrl(ANATOMY_IMAGE.key)}
            alt={ANATOMY_IMAGE.alt}
            width={ANATOMY_IMAGE.width}
            height={ANATOMY_IMAGE.height}
            loading="lazy"
            draggable={false}
            className="h-full w-full select-none object-cover transition-[transform,transform-origin] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
            style={{
              transform: active ? `scale(${ZOOM})` : "scale(1)",
              transformOrigin: active ? `${active.x}% ${active.y}%` : "50% 50%",
            }}
          />

          {/* Vignette that tightens around the active part. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: active ? 1 : 0,
              background: active
                ? `radial-gradient(circle at ${active.x}% ${active.y}%, transparent 18%, rgba(16,14,10,0.55) 60%)`
                : undefined,
            }}
          />

          {ANATOMY_PARTS.map((part, i) => {
            const isActive = part.id === activeId;
            const hidden = !!active && !isActive;
            return (
              <button
                key={part.id}
                type="button"
                aria-label={`${part.name}: ${part.tagline}`}
                aria-pressed={isActive}
                tabIndex={hidden ? -1 : 0}
                onClick={() => setActiveId(part.id)}
                // Keyboard focus only — a mouse/touch focus is followed by the
                // click, which already handles it.
                onFocus={(e) =>
                  e.currentTarget.matches(":focus-visible") && setActiveId(part.id)
                }
                className={clsx(
                  "absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-300",
                  hidden ? "pointer-events-none opacity-0" : "opacity-100"
                )}
                style={{ left: `${part.x}%`, top: `${part.y}%` }}
              >
                {!isActive && (
                  <span className="absolute h-6 w-6 animate-ping rounded-full bg-gold/40 motion-reduce:animate-none" />
                )}
                <span
                  className={clsx(
                    "relative flex items-center justify-center rounded-full border font-sans text-[0.6rem] font-semibold transition-all duration-300",
                    isActive
                      ? "h-4 w-4 border-gold bg-gold text-transparent"
                      : "h-6 w-6 border-cream/70 bg-ink/70 text-cream backdrop-blur-sm"
                  )}
                >
                  {i + 1}
                </span>
              </button>
            );
          })}

          {/* In-place explanation, beside the part (tablet and up). */}
          {active && (
            <div
              key={active.id}
              role="status"
              className="pointer-events-none absolute hidden w-[17rem] -translate-y-1/2 animate-fade-in rounded-lg border border-gold/30 bg-ink/90 p-5 shadow-lift backdrop-blur-md md:block"
              style={{
                top: `${cardTop}%`,
                ...(cardOnLeft
                  ? { right: `calc(${100 - active.x}% + 30px)` }
                  : { left: `calc(${active.x}% + 30px)` }),
              }}
            >
              <PartCard part={active} index={activeIndex} />
            </div>
          )}

          <p
            aria-hidden
            className={clsx(
              "pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1.5 text-[0.62rem] uppercase tracking-wide2 text-cream/75 backdrop-blur-sm transition-opacity duration-300",
              active && "opacity-0"
            )}
          >
            <span className="hidden md:inline">Move over the specimen to explore</span>
            <span className="md:hidden">Tap a point to explore</span>
          </p>
        </div>

        {/* Phone: the explanation sits under the photo instead. */}
        <div className="mt-4 min-h-[9rem] rounded-lg border border-cream/10 bg-ink-soft p-5 md:hidden">
          {active ? (
            <PartCard part={active} index={activeIndex} />
          ) : (
            <p className="text-sm text-cream/55">
              Tap a numbered point on the photo, or step through the parts below.
            </p>
          )}
        </div>
      </div>

      <div className="lg:col-span-5">
        <ol className="divide-y divide-cream/10 border-y border-cream/10">
          {ANATOMY_PARTS.map((part, i) => {
            const isActive = part.id === activeId;
            return (
              <li key={part.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(part.id)}
                  onClick={() => setActiveId(part.id)}
                  aria-pressed={isActive}
                  className="group flex min-h-[56px] w-full items-baseline gap-4 py-3.5 text-left"
                >
                  <span
                    className={clsx(
                      "font-display text-lg italic transition-colors",
                      isActive ? "text-gold" : "text-cream/35"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={clsx(
                        "block font-display text-xl transition-colors",
                        isActive ? "text-gold-soft" : "text-cream group-hover:text-gold-soft"
                      )}
                    >
                      {part.name}
                    </span>
                    <span className="block text-xs uppercase tracking-wide2 text-sand">
                      {part.tagline}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => step(-1)} className="btn-outline !px-5 !py-2.5 !text-[0.7rem]">
            ← Prev
          </button>
          <button type="button" onClick={() => step(1)} className="btn-outline !px-5 !py-2.5 !text-[0.7rem]">
            Next →
          </button>
          {active && (
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="link-underline ml-2 text-xs font-semibold uppercase tracking-wide2"
            >
              Reset view
            </button>
          )}
        </div>

        {showSystemLink && (
          <Link to="/systems/curtain-wall" className="link-underline mt-8 text-sm font-semibold">
            Explore the curtain wall system →
          </Link>
        )}

        <p className="mt-6 text-xs leading-relaxed text-cream/45">{INDICATIVE_NOTE}</p>
      </div>

      {/* Full text in the markup for screen readers and crawlers; the visual
          version above only renders one part's body at a time. */}
      <dl className="sr-only">
        {ANATOMY_PARTS.map((part) => (
          <div key={part.id}>
            <dt>{part.name}</dt>
            <dd>{part.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
