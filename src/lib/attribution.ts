/**
 * Where a visitor came from, captured once per browser tab (first touch) and sent with every
 * lead so the CRM shows the campaign, the referring site and the landing page.
 *
 * Browser-only and best-effort: sessionStorage can be blocked (private mode, strict settings),
 * so every access is wrapped and a missing value never stops a form from sending.
 */

const KEY = "fenza-attribution";

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  landing_page?: string;
}

/** Call once on app start. Keeps the first landing in the tab; later pages do not overwrite it. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data: Attribution = {};
    for (const k of ["utm_source", "utm_medium", "utm_campaign"] as const) {
      const v = params.get(k)?.trim();
      if (v) data[k] = v.slice(0, 150);
    }
    // Only an outside referrer is useful; moving between our own pages is not a source.
    if (document.referrer) {
      const ref = new URL(document.referrer);
      if (ref.host !== window.location.host) data.referrer = ref.origin + ref.pathname;
    }
    data.landing_page = window.location.pathname;
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable: leads still send, just without a source */
  }
}

export function getAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}
