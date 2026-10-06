# Fenza Facade Engineering website: instructions for Claude (and any developer)

A server-prerendered React marketing site (Vite + React 18 + TypeScript + Tailwind), deployed on
Vercel from GitHub. Search engines and AI answer engines read the **prerendered HTML**, so the
*built* site is what must be correct, not just the dev server.

## The rule: verify after EVERY edit

1. Run **`npm run check`**. It runs typecheck, build (+ prerender), a link/SEO/asset audit, and a
   real-browser crawl of every page at desktop and phone size. It must end with
   `PROBLEMS: none` and `CRAWL OK`. Do not commit or report "done" until it does.
2. Look at the change at **1440px, 390px** (and **1280px** if the header changed).
3. Follow the **full runbook: [`docs/AFTER-EVERY-EDIT.md`](docs/AFTER-EVERY-EDIT.md)**. It has the
   manual checks (visual, interaction, text, images, SEO, performance, accessibility, security),
   the procedure for adding a page, post-deploy steps, known baselines and open items, and the
   gotchas that already cost time. **Read it before your first change in a session.**

## Non-negotiable content guardrails (details in the runbook, section 3)

- Facade/building-envelope only. No interiors, fit-out, MEP, PEB or civil work.
- The **project record is Akhilesh Kumar Singh's own career, not Fenza's** (Fenza is new); always
  show the disclaimer; JSON-LD attaches to the Person, never the Organization.
- **No borrowed certifications, no capacity/output figures, no invented facts.** Specs are
  indicative. Describe what a test *measures*; never claim Fenza passed one.
- Contact details are unconfirmed: **no live `tel:`/`mailto:`/`wa.me` links** until the `*Confirmed`
  flags in `src/lib/site.ts` are true.
- Images are final (no new photography is coming): edit existing ones, do not ask for a shoot.

## Where things live

- `src/lib/*.ts`: the data (systems, glossary, resources, anatomy, content, projects, site, seo).
  Change content here, not inside components.
- `src/lib/resources.ts`: **one list** feeding the header Resources panel (desktop), the phone
  Resources screen, the footer and the Resources page. Adding a resource page = one entry.
- `src/lib/routes.ts` + `src/AppRoutes.tsx`: a new page must be registered in **both**.
- Journal: one file per article in `src/lib/journal-articles/`, all photos in `src/lib/journal-images.json`
  (see runbook 6b). It loads on demand: keep it out of anything the main script imports. Journal photos
  are free Unsplash photos (no credit needed), listed in `docs/journal-photos.md`; to move one to Supabase
  set `"url"` on its slot. Never scrape or copy photos from other companies' sites.
- `src/pages`, `src/components`: pages and UI. `public/`: images, `llms.txt`, `robots.txt`, OG images.
- `index.html` is shared by every page: never put page-specific tags there.
- `scripts/`: `audit-links.mjs` and `crawl-pages.mjs` (the checks above).

## Working agreements

- Commit small and clearly; `git status` first; never force-push; never commit `node_modules`,
  `dist`, `.env*` or secrets.
- Do not install tools into the user's machine without asking (their Python holds a large ML stack).
- If a check fails, fix the cause; do not skip or weaken the check.
- Keep `docs/AFTER-EVERY-EDIT.md` (especially section 8, the baselines) current when things change.
