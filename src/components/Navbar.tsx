import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import Logo from "./Logo";
import { NAV } from "@/lib/site";

// Inline SVG icons (no icon-library dependency).
function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-cream/10"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      )}
    >
      <nav className="container-content flex h-[74px] items-center justify-between">
        <Link
          to="/"
          aria-label="Fenza — home"
          className="inline-flex min-h-[44px] items-center text-cream"
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    "text-[0.8rem] font-medium uppercase tracking-wide2 transition-colors",
                    isActive ? "text-gold" : "text-cream/75 hover:text-cream"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-gold hidden sm:inline-flex !px-5 !py-2.5 !text-[0.72rem]">
            Enquire
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-cream lg:hidden"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile overlay */}
      <div
        className={clsx(
          "fixed inset-0 top-[74px] z-40 origin-top overflow-y-auto bg-ink transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className="container-content flex flex-col gap-1 py-8">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    "flex min-h-[56px] items-center border-b border-cream/10 py-4 font-display text-2xl",
                    isActive ? "text-gold" : "text-cream"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-6">
            <Link to="/contact" className="btn-gold w-full">
              Enquire
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
