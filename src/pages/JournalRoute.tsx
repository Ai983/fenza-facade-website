import { useEffect, useState } from "react";

type JournalModule = typeof import("./JournalPages");

/**
 * The Journal holds about 20,000 words of article text. Shipping that inside the main script would
 * make every page on the site heavier, so the Journal loads on demand instead:
 *
 *  - Server / prerender: entry-server.tsx registers the module up front (setJournalModule), so the
 *    prerendered HTML contains the full pages, exactly as for every other route.
 *  - Browser, landing on a Journal URL: main.tsx awaits preloadJournal() BEFORE hydrating, so the
 *    first client render equals the server HTML (no hydration mismatch).
 *  - Browser, arriving from another page: the chunk is fetched on first visit; until it arrives the
 *    page area is an empty placeholder of the right height (so the footer does not jump).
 */
let loaded: JournalModule | undefined;
let loading: Promise<JournalModule> | undefined;

export const setJournalModule = (m: JournalModule) => {
  loaded = m;
};

export const preloadJournal = (): Promise<JournalModule> =>
  (loading ??= import("./JournalPages").then((m) => (loaded = m)));

export default function JournalRoute({ page }: { page: "index" | "article" }) {
  const [mod, setMod] = useState<JournalModule | undefined>(loaded);

  useEffect(() => {
    if (mod) return;
    let live = true;
    preloadJournal().then((m) => live && setMod(m));
    return () => {
      live = false;
    };
  }, [mod]);

  if (!mod) return <div aria-hidden className="min-h-[70vh] bg-ink" />;
  const Page = page === "index" ? mod.Journal : mod.JournalArticle;
  return <Page />;
}
