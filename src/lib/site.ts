/**
 * Single source of truth for brand, contact and navigation constants.
 *
 * Accuracy guardrails (Fenza master brief / PRD §12) encoded here:
 *  - Contact details are placeholders, clearly flagged, until confirmed.
 *  - No borrowed certifications, no capacity figures, no misattributed projects.
 *  - Group relationship is stated as backing only.
 */

export const SITE_URL = "https://fenzafacade.com";

export const BRAND = {
  name: "Fenza Facade Engineering",
  legalName: "Fenza Facade Engineering Pvt Ltd",
  short: "Fenza",
  tagline: "Facade engineering, manufactured.",
  descriptor: "Building envelopes designed, fabricated and delivered with precision.",
  group: "the Hagerstone group",
  location: "Gurugram, Haryana, India",
} as const;

/**
 * Contact details are still being set up (PRD §11 / open question 6).
 * `confirmed: false` lets the UI show an honest "being confirmed" state
 * instead of publishing an unverified number or address.
 */
export const CONTACT = {
  email: "hello@fenzafacade.com",
  emailConfirmed: false,
  phone: "+91 00000 00000",
  phoneConfirmed: false,
  // WhatsApp number in international format without symbols (for wa.me links).
  whatsapp: "910000000000",
  whatsappConfirmed: false,
  addressLine: "Manufacturing facility — Gurugram, Haryana",
  addressConfirmed: false,
  plusCode: "9XVP+C8F Gurugram, Haryana",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

/**
 * Company registrations (profile page 44). `value: null` renders the honest
 * "To be added" state, mirroring the CONTACT.*Confirmed pattern — flip each to
 * a string once the registration is issued.
 */
export const REGISTRATIONS: { label: string; value: string | null }[] = [
  { label: "Corporate Identity Number (CIN)", value: null },
  { label: "GSTIN — Haryana", value: null },
  { label: "PAN", value: null },
];

export const CERTIFICATIONS_NOTE =
  "Held in Fenza's own name; being established.";

export interface NavItem {
  label: string;
  to: string;
  /** Shorter label for the desktop bar, where horizontal room is tight. */
  short?: string;
}

/** Full navigation — drives the mobile overlay and the footer's Company column. */
export const NAV: NavItem[] = [
  { label: "Systems", to: "/systems" },
  { label: "Sectors", to: "/sectors" },
  { label: "Projects", to: "/projects" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Quality & Safety", to: "/quality-safety", short: "Quality" },
  { label: "Leadership", to: "/leadership" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

/**
 * Desktop header bar only. Nine labels do not fit the 1180px content width, so
 * two come out: Contact is already covered by the Enquire button, and Sectors
 * is reachable from Systems, Projects and the footer.
 */
export const NAV_PRIMARY: NavItem[] = NAV.filter(
  (n) => !["/contact", "/sectors"].includes(n.to)
);

export const ENQUIRY_SEGMENTS = [
  "Architect / PMC",
  "Developer / Builder",
  "Main contractor / Fabricator",
  "Other",
] as const;

export const PROJECT_TYPES = [
  "Commercial high-rise",
  "Corporate office",
  "Residential",
  "Retail / hospitality",
  "Institutional",
  "Other",
] as const;

/** Optional runtime endpoint for form submissions (Supabase / n8n webhook). */
export const ENQUIRY_ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT as
  | string
  | undefined;
