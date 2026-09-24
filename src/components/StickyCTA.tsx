import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { CONTACT, whatsappLink } from "@/lib/site";

/**
 * Persistent low-friction path to enquire (PRD §3, §10).
 * The WhatsApp float only appears once the business number is confirmed
 * (CONTACT.whatsappConfirmed) so we never publish a dead chat link.
 *
 * On phones the float is real estate the page cannot reclaim, so it stays out
 * of the way until it earns its place: hidden on /contact (the form IS the
 * CTA) and hidden over the first screenful, where the hero already shows an
 * Enquire button right next to it.
 */
export default function StickyCTA() {
  const { pathname } = useLocation();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      aria-hidden={!shown}
      className={clsx(
        "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300 print:hidden",
        shown
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-3 opacity-0"
      )}
    >
      {CONTACT.whatsappConfirmed && (
        <a
          href={whatsappLink("Hello Fenza — I have a facade enquiry.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          tabIndex={shown ? undefined : -1}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.45 1.34 4.95L2 22l5.2-1.36c1.44.79 3.07 1.2 4.82 1.2 5.52 0 10-4.48 10-10S17.54 2 12.02 2z" />
          </svg>
        </a>
      )}
      <Link
        to="/contact"
        tabIndex={shown ? undefined : -1}
        className="btn-gold !px-6 !py-3 shadow-lift"
        aria-label="Enquire"
      >
        Enquire
      </Link>
    </div>
  );
}
