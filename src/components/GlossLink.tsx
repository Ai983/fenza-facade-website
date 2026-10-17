import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import type { GlossaryTerm } from "@/lib/glossary";

const linkCls =
  "text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-soft hover:decoration-gold";

/**
 * A glossary link inside an article that shows the term's definition in a small card.
 *  - Mouse: hover or keyboard focus opens it; moving onto the card keeps it open.
 *  - Touch: the first tap opens the card (the link does not fire); the card's own link, or a second
 *    tap on the term, goes to the glossary entry.
 * The page HTML is just a normal link to /glossary#term: the card exists only after interaction, so
 * crawlers and no-JS readers are unaffected and the text is not repeated in the page.
 */
export default function GlossLink({ term, children }: { term: GlossaryTerm; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const timer = useRef<number>();
  const touch = useRef(false);
  const [pos, setPos] = useState<{ left: number; top: number; above: boolean } | null>(null);
  const id = `gloss-${term.slug}`;

  const show = useCallback(() => {
    window.clearTimeout(timer.current);
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const w = Math.min(320, window.innerWidth - 24);
    const left = Math.min(Math.max(12, r.left), window.innerWidth - w - 12);
    const above = r.top > 190;
    setPos({ left, top: above ? r.top - 8 : r.bottom + 8, above });
  }, []);
  // Hover / focus open it, except on touch, where the tap handler decides (see onClick).
  const open = useCallback(() => {
    if (!touch.current) show();
  }, [show]);
  const close = useCallback(() => {
    window.clearTimeout(timer.current);
    setPos(null);
  }, []);
  const closeSoon = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPos(null), 140);
  }, []);

  // Close on scroll, resize, Escape or a tap outside.
  useEffect(() => {
    if (!pos) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onOutside = (e: Event) => {
      const t = e.target as Node;
      if (!ref.current?.contains(t) && !document.getElementById(id)?.contains(t)) close();
    };
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [pos, close, id]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = (e: React.MouseEvent) => {
    // No hover on touch screens: the first tap shows the card instead of leaving the article.
    if (touch.current && !pos) {
      e.preventDefault();
      show();
    }
  };

  return (
    <>
      <Link
        ref={ref}
        to={`/glossary#${term.slug}`}
        className={linkCls}
        aria-describedby={pos ? id : undefined}
        onPointerDown={(e) => {
          touch.current = e.pointerType === "touch";
        }}
        onMouseEnter={open}
        onMouseLeave={closeSoon}
        onFocus={open}
        onBlur={closeSoon}
        onClick={onClick}
      >
        {children}
      </Link>
      {pos &&
        createPortal(
          <div
            id={id}
            role="tooltip"
            onMouseEnter={() => window.clearTimeout(timer.current)}
            onMouseLeave={closeSoon}
            style={{
              position: "fixed",
              left: pos.left,
              top: pos.top,
              width: Math.min(320, window.innerWidth - 24),
              transform: pos.above ? "translateY(-100%)" : undefined,
            }}
            className="z-[80] rounded-lg border border-gold/30 bg-ink-soft p-4 text-left shadow-2xl shadow-black/50"
          >
            <p className="font-display text-lg leading-tight text-cream">{term.term}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/75">{term.definition}</p>
            <Link
              to={`/glossary#${term.slug}`}
              onClick={close}
              className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide2 text-gold hover:text-gold-soft"
            >
              See in the glossary →
            </Link>
          </div>,
          document.body
        )}
    </>
  );
}
