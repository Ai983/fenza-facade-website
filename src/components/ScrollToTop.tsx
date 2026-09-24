import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Reset scroll on client-side route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
