import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import Logo from "./Logo";
import ResourcesMenu from "./ResourcesMenu";
import { RESOURCE_ENTRIES, RESOURCES_HEADING } from "@/lib/resources";
import { NAV, NAV_PRIMARY } from "@/lib/site";

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
  // Desktop Resources panel open: the bar turns solid so the two read as one.
  const [menuOpen, setMenuOpen] = useState(false);
  // Phone menu: showing the Resources screen instead of the main list.
  const [sub, setSub] = useState(false);
  const { pathname, hash } = useLocation();
  const inResources =
    pathname === "/resources" ||
    RESOURCE_ENTRIES.some((e) => e.to.split("#")[0] === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Reopening the menu always starts on the main list (after the close
  // animation, so the screen does not visibly jump back while fading out).
  useEffect(() => {
    if (open) return;
    const t = window.setTimeout(() => setSub(false), 320);
    return () => window.clearTimeout(t);
  }, [open]);

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
        scrolled || open || menuOpen
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

        {/* Desktop bar carries NAV_PRIMARY — the full NAV does not fit the
            1180px content width. Contact lives in the Enquire button. */}
        <ul className="hidden h-full items-center gap-6 xl:flex">
          {NAV_PRIMARY.map((item) =>
            item.to === "/resources" ? (
              // Desktop: a panel with the Resources family. Phones get a
              // second full-page screen in the overlay below instead.
              <ResourcesMenu
                key={item.to}
                label={item.short ?? item.label}
                onOpenChange={setMenuOpen}
              />
            ) : (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    "text-[0.75rem] font-medium uppercase tracking-[0.14em] transition-colors",
                    isActive ? "text-gold" : "text-cream/75 hover:text-cream"
                  )
                }
              >
                {item.short ?? item.label}
              </NavLink>
            </li>
            )
          )}
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
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-cream xl:hidden"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile overlay: two full-page screens that slide. The menu, and —
          from its "Resources" row — a page listing every Resources page (from
          lib/resources.ts, so new pages show up here by themselves). */}
      <div
        className={clsx(
          "fixed inset-0 top-[74px] z-40 origin-top overflow-hidden bg-ink transition-all duration-300 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        {/* Screen 1: the menu */}
        <div
          className={clsx(
            "absolute inset-0 overflow-y-auto transition-[transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
            sub ? "invisible -translate-x-full" : "visible translate-x-0"
          )}
        >
          <ul className="container-content flex flex-col gap-1 py-8">
            {NAV.map((item) => (
              <li key={item.to}>
                {item.to === "/resources" ? (
                  <button
                    type="button"
                    onClick={() => setSub(true)}
                    aria-haspopup="true"
                    className={clsx(
                      "flex min-h-[56px] w-full items-center justify-between border-b border-cream/10 py-4 text-left font-display text-2xl",
                      inResources ? "text-gold" : "text-cream"
                    )}
                  >
                    {item.label}
                    <span aria-hidden className="pr-1 text-gold">
                      ›
                    </span>
                  </button>
                ) : (
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
                )}
              </li>
            ))}
            <li className="pt-6">
              <Link to="/contact" className="btn-gold w-full">
                Enquire
              </Link>
            </li>
          </ul>
        </div>

        {/* Screen 2: Resources */}
        <div
          className={clsx(
            "absolute inset-0 overflow-y-auto transition-[transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
            sub ? "visible translate-x-0" : "invisible translate-x-full"
          )}
        >
          <div className="container-content py-6">
            <button
              type="button"
              onClick={() => setSub(false)}
              className="-ml-2 inline-flex min-h-[44px] items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wide2 text-gold"
            >
              <span aria-hidden className="text-lg leading-none">
                ‹
              </span>
              Menu
            </button>

            <span className="eyebrow mt-6 block">{RESOURCES_HEADING.eyebrow}</span>
            <p className="mt-3 font-display text-4xl leading-[1.05] text-cream">
              {RESOURCES_HEADING.lead}{" "}
              <span className="italic text-gold-soft">
                {RESOURCES_HEADING.accent}
              </span>
            </p>

            <ul className="mt-8">
              {RESOURCE_ENTRIES.map((e) => (
                <li key={e.to}>
                  <Link
                    to={e.to}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[72px] items-center justify-between gap-4 border-b border-cream/10 py-4"
                  >
                    <span>
                      <span
                        className={clsx(
                          "block font-display text-2xl",
                          e.to.split("#")[0] === pathname ? "text-gold" : "text-cream"
                        )}
                      >
                        {e.title}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-cream/55">
                        {e.blurb}
                      </span>
                    </span>
                    <span aria-hidden className="text-gold">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/resources"
              onClick={() => setOpen(false)}
              className="btn-outline mt-8 w-full"
            >
              All resources
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
