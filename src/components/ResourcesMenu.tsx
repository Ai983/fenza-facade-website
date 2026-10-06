import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { imgUrl } from "@/lib/systems";
import {
  RESOURCE_ENTRIES,
  RESOURCE_SPOTLIGHT,
  RESOURCES_HEADING,
} from "@/lib/resources";

interface ResourcesMenuProps {
  /** Label of the header item (from NAV). */
  label: string;
  /** Lets the header treat an open menu like a scrolled header (solid bar). */
  onOpenChange?: (open: boolean) => void;
}

const navLink =
  "text-[0.75rem] font-medium uppercase tracking-[0.14em] transition-colors";

/**
 * Desktop "Resources" item: a full-width panel that drops from under the
 * header — list of entries on the left, an optional image card on the right.
 * Desktop only (xl+): phones keep the plain full-page menu, where Resources
 * is an ordinary link.
 *
 * The panel lives inside the <li>, so it sits in tab order right after its
 * trigger, and hover/focus on the panel counts as hover/focus on the item.
 * It is always in the prerendered HTML (hidden with `visibility`, not
 * removed), so crawlers see the links; only the spotlight image waits.
 */
export default function ResourcesMenu({ label, onOpenChange }: ResourcesMenuProps) {
  const [open, setOpen] = useState(false);
  const [armed, setArmed] = useState(false); // spotlight image may load
  const timer = useRef<number>();
  const trigger = useRef<HTMLButtonElement>(null);
  // Set while Esc hands focus back to the chevron, so that focus move does not
  // count as "the user focused the menu" and reopen it straight away.
  const skipFocusOpen = useRef(false);
  const { pathname, hash } = useLocation();

  const set = (v: boolean) => {
    setOpen(v);
    onOpenChange?.(v);
  };
  const show = () => {
    window.clearTimeout(timer.current);
    setArmed(true);
    set(true);
  };
  // A short grace period, so the pointer can cross gaps without the panel
  // flickering shut.
  const hide = (delay = 180) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => set(false), delay);
  };

  // Any navigation (route or #hash) closes it.
  useEffect(() => {
    set(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  // Warm the spotlight image a moment AFTER the page has finished loading, so
  // it is ready by the first hover without ever competing with the page's own
  // images. Only where the desktop panel can be shown at all (Tailwind's xl,
  // 1280px): browsers still fetch images inside display:none on phones, so we
  // do not rely on that. (Hovering later still loads it, via show().)
  useEffect(() => {
    if (!RESOURCE_SPOTLIGHT) return;
    if (!window.matchMedia("(min-width: 1280px)").matches) return;
    let cancelled = false;
    let t: number | undefined;
    const arm = () => {
      t = window.setTimeout(() => !cancelled && setArmed(true), 1500);
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      window.removeEventListener("load", arm);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const here = (to: string) => to.split("#")[0] === pathname;
  const spot = RESOURCE_SPOTLIGHT;

  return (
    <li
      className="flex h-full items-center"
      // Mouse only: on touch, the chevron button toggles the panel instead.
      onPointerEnter={(e) => e.pointerType === "mouse" && show()}
      onPointerLeave={(e) => e.pointerType === "mouse" && hide()}
      onFocus={() => {
        if (!skipFocusOpen.current) show();
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hide(0);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          window.clearTimeout(timer.current);
          skipFocusOpen.current = true;
          set(false);
          trigger.current?.focus();
          window.setTimeout(() => (skipFocusOpen.current = false), 0);
        }
      }}
    >
      <div className="flex items-center gap-0.5">
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            clsx(
              navLink,
              isActive || open ? "text-gold" : "text-cream/75 hover:text-cream"
            )
          }
        >
          {label}
        </NavLink>
        <button
          ref={trigger}
          type="button"
          aria-label={`${label} menu`}
          aria-expanded={open}
          aria-controls="resources-menu"
          onClick={() => (open ? set(false) : show())}
          className="flex h-8 w-6 items-center justify-center text-cream/55 transition-colors hover:text-gold"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
            className={clsx("transition-transform duration-300", open && "rotate-180")}
          >
            <path d="M1.5 3.5 5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Softly dims the page under the panel. */}
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-x-0 top-full h-screen bg-ink/50 transition-opacity duration-300 motion-reduce:transition-none",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        id="resources-menu"
        role="group"
        aria-label={`${label} menu`}
        // Choosing a link closes the panel (hash links on the same page do
        // not change the route, so the location effect alone is not enough).
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) set(false);
        }}
        className={clsx(
          "absolute inset-x-0 top-full border-b border-cream/10 bg-ink/[0.98] shadow-[0_50px_90px_-50px_rgba(0,0,0,0.9)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <div className="container-content grid grid-cols-12 gap-x-10 gap-y-8 py-10">
          {/* Heading + overview link */}
          <div className="col-span-3">
            <span className="eyebrow">{RESOURCES_HEADING.eyebrow}</span>
            <p className="mt-4 font-display text-3xl leading-[1.1] text-cream">
              {RESOURCES_HEADING.lead}{" "}
              <span className="italic text-gold-soft">{RESOURCES_HEADING.accent}</span>
            </p>
            <Link
              to="/resources"
              className="link-underline mt-6 text-xs font-semibold uppercase tracking-wide2"
            >
              All resources →
            </Link>
          </div>

          {/* Entries: as many as exist; the grid takes the room the spotlight
              leaves. */}
          <ul
            className={clsx(
              "grid content-start gap-x-10",
              spot ? "col-span-5 grid-cols-2" : "col-span-9 grid-cols-3"
            )}
          >
            {RESOURCE_ENTRIES.map((e) => (
              <li key={e.to}>
                <Link
                  to={e.to}
                  className="group block border-t border-cream/10 py-5 pr-2"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span
                      className={clsx(
                        "font-display text-2xl transition-colors group-hover:text-gold-soft",
                        here(e.to) ? "text-gold" : "text-cream"
                      )}
                    >
                      {e.title}
                    </span>
                    <span
                      aria-hidden
                      className="text-gold transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-cream/55">
                    {e.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Spotlight: the image card (glossary today, latest article later). */}
          {spot && (
            <Link
              to={spot.to}
              // The photo fills the card whatever its height: the card stretches
              // to the entries beside it, so it grows as pages are added.
              className="group relative col-span-4 block min-h-[15.5rem] overflow-hidden rounded-lg border border-cream/10 bg-ink-soft"
            >
              <div className="absolute inset-0">
                {armed && (
                  <img
                    src={imgUrl(spot.image)}
                    alt={spot.alt}
                    width={720}
                    height={480}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide2 text-gold">
                  {spot.eyebrow}
                </span>
                <span className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-display text-2xl text-cream">{spot.title}</span>
                  <span
                    aria-hidden
                    className="text-gold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-cream/65">
                  {spot.blurb}
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
