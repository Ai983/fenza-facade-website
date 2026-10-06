# Fenza Facade Engineering — Website

Cinematic-scroll, SEO/AEO/GEO-ready marketing site for Fenza Facade Engineering
(PRD v1, Phase 1 MVP). Built as a server-prerendered React app so every page
ships crawlable HTML for search engines and AI answer engines.

## Stack

- **Vite + React 18 + TypeScript** — fast build, SSR/prerender pipeline
  (`@vitejs/plugin-react`; the SWC plugin was dropped because Windows Application
  Control blocked its native binary on the dev machine).
- **Tailwind CSS** — brand system (ink `#100E0A`, cream `#F3EEE3`, gold `#C6A15B`;
  Cormorant Garamond display + Manrope body).
- **Framer Motion + Lenis** — hero parallax, eased smooth scroll, and the pinned
  scroll stories (Home "Inside a curtain wall", Manufacturing "From bar to frame").
- **react-helmet-async** — per-page metadata + JSON-LD, emitted into static HTML.

Motion is an enhancement layer over server-rendered HTML: content ships visible,
reveals degrade gracefully, and everything respects `prefers-reduced-motion`.

## Scripts

```bash
npm install
npm run dev        # local dev at http://localhost:8080
npm run build      # client build + SSR build + prerender all routes -> dist/
npm run preview    # serve the built dist/
npm run check      # typecheck + build + link/SEO audit + browser crawl (run after every edit)
```

`npm run build` produces static HTML for every route (home, /systems, the 13
system family pages, sectors, projects, manufacturing, quality-safety, leadership,
about, resources, glossary, testing, journal + 15 articles, contact, 404), plus `sitemap.xml`.

## Quality checks (read before changing anything)

After **every** edit, run `npm run check` and follow
[`docs/AFTER-EVERY-EDIT.md`](docs/AFTER-EVERY-EDIT.md): the full runbook (manual checks,
SEO, performance, accessibility, adding a page, post-deploy steps, known baselines and
gotchas). `CLAUDE.md` gives the same summary to AI coding sessions.

## Content & data

- `src/lib/systems.ts` — the 13 facade system families (from the product
  catalogue): specs, variants, imagery keys, SEO summaries and FAQs.
- `src/lib/content.ts` — shared factual copy (process, machines, standards, finishes).
- `src/lib/glossary.ts` — the facade glossary (`/glossary`): terms, plain definitions,
  cross-links to systems and to other terms.
- `src/lib/resources.ts` — **one list** for the Resources family (catalogue, glossary, and
  future Testing / Journal pages) that feeds the header panel, the phone menu screen, the
  footer and the Resources page. Adding a page = one entry.
- `src/lib/journal.ts` + `journal-articles/` + `journal-images.json` — the Journal (one file per
  article; photos and credits in the JSON). Loads on demand; see the runbook (6b).
- `src/lib/anatomy.ts` — parts, positions and captions for the curtain-wall anatomy sections.
- `src/lib/site.ts` — brand + **contact placeholders** (see below).
- `public/images/*` — facade imagery. **These are the final images**; no new photography is
  planned, so images are edited in place (the four `machine-*.webp` are transparent cut-outs;
  `cw-1-hd.webp` is a resized copy of `cw-1.webp` for the zoomed anatomy sections).

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
