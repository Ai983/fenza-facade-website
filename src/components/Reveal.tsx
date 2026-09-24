import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";

type Variant = "up" | "left" | "scale";

interface RevealProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** entrance delay in ms (for staggering) */
  delay?: number;
  variant?: Variant;
}

/**
 * SSR-safe scroll reveal. Ships visible; on the client, elements below the
 * fold are hidden then transitioned in on intersect. Above-the-fold content
 * and reduced-motion users are never hidden. See index.css for the CSS model.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const Tag = as as unknown as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<"idle" | "pending" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setMode("in");
      return;
    }
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      setMode("in"); // at/above the fold: no entrance animation, stays visible
      return;
    }
    setMode("pending");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setMode("in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={clsx(
        "reveal",
        mode !== "idle" && "reveal-animate",
        mode === "pending" && "reveal-pending",
        variant === "left" && "reveal--left",
        variant === "scale" && "reveal--scale",
        className
      )}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
