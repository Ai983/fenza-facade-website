# Fenza Facade Engineering — Website

Cinematic-scroll, SEO/AEO/GEO-ready marketing site for Fenza Facade Engineering
(PRD v1, Phase 1 MVP). Built as a server-prerendered React app so every page
ships crawlable HTML for search engines and AI answer engines.

## Stack

- **Vite + React 18 + TypeScript** — fast build, SSR/prerender pipeline.
- **Tailwind CSS** — brand system (ink `#100E0A`, cream `#F3EEE3`, gold `#C6A15B`;
  Cormorant Garamond display + Manrope body).
- **Framer Motion + Lenis** — hero parallax and eased smooth scroll.
- **react-helmet-async** — per-page metadata + JSON-LD, emitted into static HTML.

Motion is an enhancement layer over server-rendered HTML: content ships visible,
reveals degrade gracefully, and everything respects `prefers-reduced-motion`.

## Scripts

```bash
npm install
npm run dev        # local dev at http://localhost:8080
npm run build      # client build + SSR build + prerender all routes -> dist/
npm run preview    # serve the built dist/
```

`npm run build` produces static HTML for every route (home, /systems, the 13
system family pages, manufacturing, leadership, about, resources, contact, 404),
plus `sitemap.xml`.

## Content & data

- `src/lib/systems.ts` — the 13 facade system families (from the product
  catalogue): specs, variants, imagery keys, SEO summaries and FAQs.
- `src/lib/content.ts` — shared factual copy (process, machines, standards, finishes).
- `src/lib/site.ts` — brand + **contact placeholders** (see below).
- `public/images/*` — facade imagery mapped from the catalogue (placeholder-grade
  for v1; real factory + project photography is the priority upgrade, PRD §11).

## Before launch (open items from the PRD)

Contact details are flagged unconfirmed in `src/lib/site.ts` and rendered as
"being confirmed" until set:

- `CONTACT.email` / `emailConfirmed`
- `CONTACT.phone` / `phoneConfirmed`
- `CONTACT.whatsapp` / `whatsappConfirmed` (the WhatsApp float only shows once true)

Flip the `*Confirmed` flags to `true` once the real values are in.

Set `VITE_ENQUIRY_ENDPOINT` to a Supabase Edge Function / n8n webhook to make the
enquiry + RFQ forms post live; until then they draft a prefilled email.

## Accuracy guardrails (PRD §12)

Encoded throughout: facade-only scope, no borrowed Hagerstone certifications, no
capacity/facility figures, specs marked indicative, projects credited to
Akhilesh Kumar Singh's career, and the group relationship stated only as backing.
