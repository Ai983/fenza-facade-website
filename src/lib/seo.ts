/**
 * SEO / AEO / GEO helpers (PRD §8).
 *
 * Structured data is emitted via react-helmet-async so it prerenders into the
 * static HTML. We keep claims strictly accurate (PRD §12): no certifications,
 * no capacity figures, projects credited to Akhilesh Kumar Singh's career, and
 * the group relationship stated only as backing.
 */
import { SITE_URL, BRAND, CONTACT } from "./site";

export { SITE_URL };

export const TITLE_SUFFIX = `${BRAND.short} Facade Engineering`;

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

export const canonical = (path: string) =>
  `${SITE_URL}${path === "/" ? "" : path.replace(/\/$/, "")}`;

export const absoluteUrl = (p: string) =>
  p.startsWith("http") ? p : `${SITE_URL}${p}`;

/**
 * Organization schema. `sameAs` is intentionally empty until Fenza's own
 * off-site profiles (LinkedIn, Google Business Profile, IndiaMART) exist —
 * linking to profiles that are not live would mislead crawlers (PRD §8/§12).
 */
export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND.legalName,
  alternateName: BRAND.name,
  url: SITE_URL,
  logo: `${SITE_URL}/fenza-logo-sheet.png`,
  slogan: BRAND.tagline,
  description:
    "Dedicated building-envelope manufacturer in Gurugram, India — curtain wall, structural glazing, fenestration, cladding, louvers and architectural elements, engineered and fabricated on our own aluminium line.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  ...(CONTACT.emailConfirmed || CONTACT.phoneConfirmed
    ? {
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          ...(CONTACT.emailConfirmed ? { email: CONTACT.email } : {}),
          ...(CONTACT.phoneConfirmed ? { telephone: CONTACT.phone } : {}),
          areaServed: "IN",
        },
      }
    : {}),
  sameAs: [] as string[],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BRAND.name,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/** Named-author authority (E-E-A-T) — the biggest GEO lever for Fenza (PRD §8). */
export const AUTHOR_NAME = "Akhilesh Kumar Singh";
export const AUTHOR_ROLE = "Director — Facade Projects, Fenza Facade Engineering";
export const AUTHOR_PROFILE_PATH = "/leadership";

export const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#akhilesh-kumar-singh`,
  name: AUTHOR_NAME,
  jobTitle: "Director — Facade Projects",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  description:
    "Twenty-five years in facade engineering, exterior architecture and advanced building-envelope systems, spanning premium facades, structural glazing, cladding and high-rise exterior execution.",
};

export const buildSchemaGraph = (items: Array<Record<string, unknown>>) => ({
  "@context": "https://schema.org",
  "@graph": items,
});

export type FaqItem = { question: string; answer: string };

export const buildFaqSchema = (items: FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.question,
    acceptedAnswer: { "@type": "Answer", text: it.answer },
  })),
});

export const buildBreadcrumb = (trail: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: canonical(t.path),
  })),
});

export const buildSystemSchema = (opts: {
  name: string;
  description: string;
  path: string;
  image: string;
}) => ({
  "@type": "Product",
  name: `${opts.name} — Fenza`,
  category: "Facade system",
  description: opts.description,
  image: absoluteUrl(opts.image),
  url: canonical(opts.path),
  brand: { "@id": `${SITE_URL}/#organization` },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
});
