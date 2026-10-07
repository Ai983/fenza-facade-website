import { useEffect, useState } from "react";

type LocationModule = typeof import("./Location");

/**
 * The city pages hold several thousand words of text (lib/locations.ts). Like the Journal (see
 * JournalRoute.tsx), they load on demand so the main script stays small:
 *
 *  - Server / prerender: entry-server.tsx registers the module up front (setLocationModule).
 *  - Browser, landing on /locations/<city>: main.tsx awaits preloadLocation() before hydrating, so
 *    the first client render equals the prerendered HTML.
 *  - Browser, arriving from another page: the chunk is fetched on first visit, with an empty
 *    placeholder of the right height meanwhile.
 *
 * The /locations index page is NOT behind this: it only needs lib/location-index.ts.
 */
let loaded: LocationModule | undefined;
let loading: Promise<LocationModule> | undefined;

export const setLocationModule = (m: LocationModule) => {
  loaded = m;
};

export const preloadLocation = (): Promise<LocationModule> =>
  (loading ??= import("./Location").then((m) => (loaded = m)));

export default function LocationRoute() {
  const [mod, setMod] = useState<LocationModule | undefined>(loaded);

  useEffect(() => {
    if (mod) return;
    let live = true;
    preloadLocation().then((m) => live && setMod(m));
    return () => {
      live = false;
    };
  }, [mod]);

  if (!mod) return <div aria-hidden className="min-h-[70vh] bg-ink" />;
  const Page = mod.default;
  return <Page />;
}
