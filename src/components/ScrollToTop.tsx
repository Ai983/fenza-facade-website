import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reset scroll on client-side route change — unless the URL carries a hash
 * (e.g. /#anatomy), in which case scroll to that section instead.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      // Lenis has not measured the page on first paint and clamps to 0, so
      // wait a frame and use the native scroll, which Lenis then follows.
      // Re-run on load in case images above the section shift the layout.
      const go = () => target.scrollIntoView();
      const raf = requestAnimationFrame(() => setTimeout(go, 50));
      window.addEventListener("load", go, { once: true });
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("load", go);
      };
    }
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
