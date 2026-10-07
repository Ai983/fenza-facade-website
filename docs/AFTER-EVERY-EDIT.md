# After every edit: the quality runbook

**Read this before you change anything, and follow it after every change.** It is written for a
person or an AI session that has never seen this project. Nothing here needs prior context.

Site: Fenza Facade Engineering, a server-prerendered React site (Vite + React 18 + TypeScript +
Tailwind), deployed on Vercel from GitHub. Search engines and AI answer engines read the
prerendered HTML, so a change is not "done" until the *built* site is verified, not just the dev server.

---

## 1. The 60-second version

```bash
npm run check        # typecheck -> build (+ prerender) -> link/SEO audit -> browser crawl (desktop + phone)
```

- It must finish with **`PROBLEMS: none`** and **`CRAWL OK`**. Exit code 0.
- **Warnings** from the audit are not blocking, but do not add new ones (see section 8 for the
  current known baseline).
- Then do the **manual checks** (section 4) that match what you changed. Scripts cannot judge how
  something *looks*, whether copy is *true*, or whether an animation *feels* right.
- Then commit (section 9). Never commit with a failing check.

**Definition of done for any edit:** `npm run check` passes, you looked at the change at 1440px and
390px wide (and 1280px if the header changed), and the copy obeys the guardrails in section 3.

## 2. Which checks for which change

| You changed | Minimum to run |
|---|---|
| Wording only | `npm run check` + reread against the guardrails (section 3) |
| A component, layout or style | `npm run check` + look at 1440 / 390 (and 1280 for the header) |
| Anything interactive (menu, scroll story, hover, form) | all of the above + the interaction checks in 4.2 |
| An image | `npm run check` + section 4.4 |
| A new page or route | section 6 (full procedure) |
| SEO fields, schema, sitemap, `index.html`, `vercel.json` | `npm run check` + section 4.5 + after deploy section 7 |
| Dependencies, `vite.config.ts`, build scripts | `npm run check` + confirm `dist/` still has all pages + the JS size (8) |

## 3. Content guardrails (non-negotiable; these protect the company)

These are encoded in the code (see comments in `src/lib/site.ts`, `projects.ts`, `seo.ts`). Do not
weaken them.

- **Scope:** Fenza makes the building **envelope only** (curtain wall, glazing, windows and doors,
  cladding, louvers, railings, skylights, pergolas). No interiors, fit-out, MEP, PEB or civil work.
- **Projects** shown on the site are **Akhilesh Kumar Singh's own career record, not Fenza's**.
  Fenza is newly established. Any page rendering `PROJECTS` must also render `RECORD_DISCLAIMER`,
  and the JSON-LD must attach to the **Person**, never the Organization. The homepage scrolling
  strip (`ProjectRecordStrip`) is this record: never retitle it "Trusted by" or "Our clients", and
  do not add client logos (no logo files with publishing rights exist; the Hagerstone profile's
  logo wall is Hagerstone's clients, not Fenza's).
- **No borrowed certifications** (Hagerstone group certificates are not Fenza's). Registrations
  and certifications are "being established".
- **No capacity, output or facility figures** (no "X tonnes/month", no "N projects delivered").
- **Specs are indicative** and confirmed per project with the facade consultant. Keep the
  `INDICATIVE_NOTE` wherever specs appear.
- **Tests and standards:** describe what a test *measures*. Never say or imply Fenza has *passed*
  one until a report in Fenza's name exists.
- **The Hagerstone relationship** is stated only as backing / a separate legal entity within the group.
- **Contact details are unconfirmed** (`src/lib/site.ts`: `*Confirmed` flags). While a flag is
  `false` the site shows "being confirmed" and must **not** render a `tel:`, `mailto:` or
  `wa.me` link. The audit fails the build if a placeholder contact link goes live.
- **No invented facts.** If you do not know a number, date, standard or claim, leave it out and
  ask. Engineering should review technical copy before launch.
- **Images are final.** No new photography is coming. Edit existing images (crop, grade, cut out);
  do not propose a photo shoot as the fix. The machine photos carry a third-party brand
  (ALLUMATIK); removing it is a company decision, not yours.

## 4. Manual checks (what the scripts cannot see)

### 4.1 Look at it
- [ ] **Desktop 1440x900:** open the page, scroll top to bottom. Nothing cut off, overlapping,
      unreadable, or visibly low quality.
- [ ] **Narrow desktop 1280 (`xl`):** matters for the header; the nav is tight here.
- [ ] **Phone 390x844:** no sideways scroll (the crawl checks the number; you check the feel),
      tap targets comfortable (44px), text readable, form inputs 16px (stops iOS zoom).
- [ ] Contrast on the dark theme: gold/cream text on ink stays readable.
- [ ] Nothing "jumpy": no layout shift as images load (images need `width`/`height`).
- Screenshot method that works here: headless Edge/Chrome over the DevTools protocol (see
  `scripts/crawl-pages.mjs` for the connection code) or DevTools' device toolbar.

### 4.2 Interactions (if you touched any)
- [ ] **Scroll stories** (`AnatomyStory`, `ManufacturingLine`): scroll **down and back up**; the
      section pins, steps change, releases, and the page continues normally after it.
- [ ] **Header "Resources" panel** (desktop): opens on hover and on keyboard focus; stays open while
      the pointer crosses the gap; closes on leaving and on **Esc** (focus returns to the chevron);
      choosing a link closes it. **Phone:** Resources opens its own full-page screen with a Back
      button; choosing a row closes the menu.
- [ ] **Keyboard only:** Tab reaches everything in a sensible order, focus is visible, no keyboard trap.
- [ ] **Reduced motion:** with the OS "reduce motion" setting on, content is still fully visible
      and usable (the code branches on `prefers-reduced-motion`).
- [ ] **Forms:** a test submit behaves (see section 8: the endpoint is not set yet).

### 4.3 Text and content
- [ ] Spelling and consistency: **British spellings** as used on the site (aluminium, colour,
      metre). Same term everywhere (e.g. "curtain wall", "structural glazing").
- [ ] Numbers agree across pages (13 system families; the glossary count is derived from data,
      do not hard-code it).
- [ ] No placeholder text (the audit catches `lorem`, `TODO`, `TBD`, `undefined`, `00000`).
- [ ] Headings read as an outline: one `h1` per page, then `h2`/`h3` in order.
- [ ] Guardrails in section 3 still hold for every sentence you added.

### 4.4 Images
- [ ] **Format and weight:** WebP; keep new images small (heroes ~150-200 KB max, cards/thumbs far
      less, spotlight/menu images ~35 KB). Resize before adding; never ship a raw camera file.
- [ ] `width`/`height` set (no layout shift); `loading="lazy"` below the fold; **never** preload
      or eager-load an image the page does not show above the fold.
- [ ] **Alt text:** meaningful images describe what is shown; decorative images use `alt=""`
      (the audit fails an `<img>` with no `alt` attribute at all).
- [ ] Cut-out images (machines) must sit cleanly on the dark page: no white halo, no leftover
      shadow slab, no jagged edge. View them on the real background, zoomed in.
- [ ] Any image referenced in `og:image`, JSON-LD or the sitemap exists (the audit checks).
- [ ] Every image you add is actually used (delete leftovers; the build ships everything in `public/`).

### 4.5 SEO and Google (technical foundation)
The audit enforces most of this; you confirm the judgement calls.
- [ ] **Title** unique, about 50-60 characters, page topic first, then the brand suffix.
- [ ] **Meta description** unique, about 120-160 characters, says what the page offers
      (Google truncates around 155-160).
- [ ] **Canonical** = the page's own clean URL (`https://fenzafacade.com/path`, no trailing slash).
- [ ] **One `h1`**; the primary topic appears in title, h1 and first paragraph naturally
      (no keyword stuffing).
- [ ] **Internal links:** every page is linked from at least one other page (the audit reports
      **ORPHAN** pages) and link text describes the target ("Facade glossary", not "click here").
- [ ] **Structured data** (JSON-LD via the `Seo` component's `schema` prop) only for things that
      are true and visible on the page: Organization, WebSite, BreadcrumbList, FAQPage (only real
      Q&A shown on the page), Product (systems), DefinedTermSet (glossary), Person (Akhilesh).
      Never mark up a claim the guardrails forbid.
- [ ] **Sitemap, `robots.txt`, `llms.txt`:** the sitemap is generated from `STATIC_ROUTES`; a new
      page must also be described in `public/llms.txt` (AI answer engines read it).
- [ ] **Social preview:** `og:image` is set and exists (pages use `public/og/*.jpg`).
- [ ] After deploy: section 7.

### 4.6 Performance (mobile first)
- [ ] The JS bundle did not balloon: compare with the baseline in section 8 (`index.js`). A jump of
      more than about 20 KB gzipped needs a reason.
- [ ] Nothing global was added to the shared `index.html` template that only one page needs
      (it once preloaded the Home hero on every page; see section 10).
- [ ] Animations use `transform`/`opacity` only (no layout-thrashing properties).
- [ ] After deploy, run **PageSpeed Insights** (mobile and desktop) on the changed pages. Targets
      to aim for: LCP <= 2.5 s, CLS <= 0.1, INP <= 200 ms; Lighthouse SEO 100, Accessibility >= 95,
      Best Practices >= 95, Performance >= 90 on mobile. **These have not been measured yet**; the
      first run sets the real baseline.

### 4.7 Accessibility
- [ ] Interactive things are real `button`/`a` elements with visible focus.
- [ ] Icon-only buttons have an `aria-label`; expandable controls use `aria-expanded`/`aria-controls`.
- [ ] Hidden UI is hidden from assistive tech and from the tab order (`visibility:hidden`, not just
      transparent).
- [ ] Decorative elements have `aria-hidden`.
- [ ] Motion respects `prefers-reduced-motion`.

### 4.8 Code
- [ ] `npm run typecheck` clean (no `any` shortcuts to silence errors).
- [ ] New code matches surrounding style (naming, comment density, Tailwind idioms).
- [ ] Data lives in `src/lib/*.ts` (systems, glossary, resources, anatomy, content), not
      hard-coded in components. Derived counts come from the data.
- [ ] No secrets, tokens or personal paths in the repo. `.env*` is git-ignored.
- [ ] Nothing depends on the machine it was written on (no absolute paths).
- [ ] Comments explain *why* for anything non-obvious (the gotchas in section 10 exist because
      someone once lost time to each one).

### 4.9 Security and privacy
- [ ] External links that open a new tab have `rel="noopener noreferrer"` (audit-checked).
- [ ] Security headers in `vercel.json` stay in place.
- [ ] Forms keep their honeypot field; do not log personal data to the console.
- [ ] The Google Maps embed on `/contact` is third-party; its "tracking prevention" console
      notices are expected and ignored by the crawl.

## 5. What the two scripts check (so you know what is covered)

`npm run audit` (`scripts/audit-links.mjs`, reads `dist/`):
every link and same-page/cross-page **#anchor** resolves the way Vercel will (`cleanUrls`);
every `src`/`srcset`/`<link>`/`url()` asset exists; every `<img>` has `alt`; canonical and `og:url`
equal the page's own URL; `og:image`/`twitter:image` exist; title, description and exactly one `h1`
present; titles and descriptions unique; JSON-LD parses and its URLs resolve; sitemap lists every
page and every image exists; `llms.txt` URLs resolve; `robots.txt` sane; no `noindex`; no duplicate
ids; `<html lang>` and viewport present; no placeholder text or placeholder contact links; no
**orphan** pages; router coverage (`STATIC_ROUTES` vs `<Route>`).

`npm run crawl` (`scripts/crawl-pages.mjs`, real headless browser, desktop 1440 **and** phone 390):
every page in the sitemap (+ the 404) loads with no JS exception, no console error/warning
(**React hydration mismatches show up here**), no HTTP >= 400, no failed request, no broken image
after scrolling the whole page, no sideways scroll, and an `h1`; then every header/footer link is
clicked (client-side navigation) and must land on the right page.

Options: `CRAWL_URL=https://fenzafacade.com npm run crawl` (a deployed site),
`CRAWL_MODES=phone npm run crawl`, `BROWSER_PATH=... npm run crawl` if Edge/Chrome are not found.

## 6. Adding a new page (full procedure)

1. **Create the page** `src/pages/Name.tsx`. Copy the structure of `Glossary.tsx` or
   `Resources.tsx`: `<Seo title description path image schema={[...]}/>` then `<PageHero .../>`
   (it renders the page's single `h1`) then sections.
2. **Register the route in both places** (nothing else enforces the pair; the audit does):
   `STATIC_ROUTES` in `src/lib/routes.ts` **and** a `<Route>` in `src/AppRoutes.tsx`.
3. **Link to it** so it is not an orphan: header/footer, related pages, or, if it is a
   knowledge/resource page (Testing, Journal, Downloads...), add **one entry** to
   `RESOURCE_ENTRIES` in `src/lib/resources.ts`. That single entry adds it to the desktop
   Resources panel, the phone Resources screen, the footer and the Resources page. If the page
   explains glossary terms, add `learnMore: { to, label }` to those terms in `src/lib/glossary.ts`
   so the glossary links back to it (the Testing page does this for the ASTM terms).
4. **`public/llms.txt`:** add a line describing it.
5. **Social image:** `image="/og/<existing>.jpg"` must exist in `public/og/`.
6. **Structured data:** at least a BreadcrumbList; add other types only where honest.
7. **Content:** obey section 3. Unique title and description (section 4.5).
8. `npm run check`, then look at it at 1440 / 390.
9. After deploy: section 7.

## 6b. Adding a Journal article

1. Copy any file in `src/lib/journal-articles/` (the file name is the URL slug) and edit it: title, a
   120-160 character `description`, `excerpt`, `teaser` (under 85 chars), `topic`, and the body blocks.
   Aim for **1,300-1,800 words** (a 6-8 minute read); the audit fails anything that reads under 6 minutes.
2. Add its photos to `src/lib/journal-images.json` (slots `<short>-hero`, `-card`, `-1`, `-2`) with real
   size, alt text, credit, source and licence (see the photo rules in section 8).
3. Import it in `src/lib/journal.ts` and add it to `JOURNAL` (order = display order; the first is featured).
   If it is the newest, update `FEATURED` in `src/lib/resources.ts` to match (the audit tells you).
4. Add 3-5 `faq` items (real buyer questions; answers restate only what the article says). Add a line to `public/llms.txt`. Routes and the sitemap pick it up automatically.
5. Link inside the text with `{{glossary-slug|label}}` or `{{/path|label}}`; the audit checks every link.
6. `npm run check`, then read it on a phone-width screen.

## 7. After deploying (Vercel builds from the GitHub `main` branch)

- [ ] Vercel build finished green; open the deployment and click through.
- [ ] `CRAWL_URL=https://fenzafacade.com npm run crawl` is clean.
- [ ] `https://fenzafacade.com/sitemap.xml`, `/robots.txt`, `/llms.txt` load.
- [ ] `www.` redirects to the bare domain; an unknown URL returns the friendly 404 **with status 404**.
- [ ] **Google Search Console:** the property is verified, the sitemap is submitted, and new
      pages are inspected with "Request indexing". **Bing Webmaster Tools** likewise.
- [ ] **Rich Results Test** on pages with structured data (FAQ, Product, DefinedTermSet).
- [ ] **PageSpeed Insights**, mobile and desktop, for Home and the changed pages (targets in 4.6).
- [ ] Share links (WhatsApp/LinkedIn) show the right title, description and image.
- [ ] Real contact details, a working form endpoint and confirmed registrations are in
      (section 8) before any public promotion.

**About ranking:** a checklist can guarantee the *technical foundation*, not a position. Ranking
also depends on useful content (glossary, testing page, journal), real links from other sites,
a verified Google Business Profile (then fill `sameAs` in `organizationSchema` in
`src/lib/seo.ts`, and only with profiles that are actually live), and time. Do not keyword-stuff,
buy links, or publish claims the company cannot back.

## 8. Known state and baselines (update this when it changes)

**Baselines (2026-10-06):** 41 pages + 404 (42 prerendered): 13 systems, 65 glossary terms, the Testing
page, and a Journal of 15 articles (6-8 min reads, about 20,000 words). Scripts: the main
`dist/assets/index.js` **156 KB gzip** (2026-10-07, after the homepage project strip; the audit
fails above 175 KB gzip), plus `JournalPages.js` 57 KB gzip that ONLY Journal pages download;
CSS 46 KB / 8 KB gzip.
Heaviest image 384 KB (j-e331-hero). Audit: 0 problems; the warnings are the meta-description lengths below.
Earlier baselines: 25 pages / 154 KB gzip (before the Journal), 24 pages /
151 KB gzip (2026-09-30).

**Open warnings (SEO copy, not broken):** 23 of the 24 pages have meta descriptions of about
195-312 characters (aim for 120-160; Google truncates around 155-160) and 6 titles run 72-79
characters (aim for about 60): Leadership, Projects, and the Cladding, Louvers, Rain-Screen and
Spider Glazing system pages. System pages reuse a long `summary` as the description. Trim when
the copy is next reviewed; do not add new long ones.

**Open items before launch:**
- Contact email/phone/WhatsApp are placeholders (`src/lib/site.ts`, `*Confirmed` flags).
- **Enquiry forms have no destination.** Without `VITE_ENQUIRY_ENDPOINT` (a Supabase Edge
  Function or n8n webhook) a submit opens the visitor's mail app addressed to an *unconfirmed*
  address. Do not launch until it is set in Vercel's environment variables.
- Company registrations (CIN, GSTIN, PAN) show "to be added".
- Engineering review of technical copy (glossary definitions, anatomy captions, machine captions,
  and the **Testing page** at `/testing`: test descriptions, order and the `STANDARDS_TABLE`).
- **Journal photos are real Unsplash photos** (44 photos + 15 card crops, all in `public/images/j-*.webp`,
  mapped to their Unsplash pages in `docs/journal-photos.md`). No credit is required. To host one elsewhere
  (e.g. Supabase storage) set `"url"` on its slot in `src/lib/journal-images.json`; the local `file` stays as
  the fallback and the audit still checks it. Cards are 720x480 crops of each hero. Social-share (`og:`)
  images for the articles still reuse /og/*.jpg; make one per article from its banner.
- **Journal copy needs engineering review** (about 20,000 words under Fenza's name, credited to the
  company, not to a person). Do not credit Akhilesh or anyone else without their approval.
- Machine photos show the ALLUMATIK logo (decision pending); `01-cut` has a thin dark cut-out edge.
- `cw-1.webp` is only 900 px; `cw-1-hd.webp` is a resized, lightly sharpened copy used for the
  zoomed sections. Do not zoom that photo further.
- PageSpeed/Lighthouse has never been run against the live site.
- `dist/server` (about 18 MB of server-render output) is published with the site; harmless but
  unnecessary. Could be deleted at the end of `prerender.js`.

## 9. Git hygiene

- Commit small, meaningful changes with a clear message (what and why). Run
  `git status` first; commit only what you intended.
- Never commit `node_modules/`, `dist/`, `.env*`, secrets, large source PDFs. (`.gitignore` covers these.)
- Do **not** force-push. If a push is rejected, `git fetch`, look at `git log origin/main`,
  and integrate; never overwrite the remote.
- Do not skip hooks or checks. If `npm run check` fails, fix the cause.

## 10. Gotchas that already cost time (read once)

- **Framer Motion `useTransform` on `opacity` driven by scroll** hands the value to a native scroll
  timeline that mis-resolves inside a pinned (`position: sticky`) layout; the element ended up
  stuck at opacity 0. Drive opacity from state/classes; scroll-linked **transforms** are fine.
- **Overlays on a transformed image leave a 1 px seam** during transitions. Fade image edges with
  a CSS `mask-image` on the image itself, not with gradient divs on top.
- **`display:none` images still download on phones**, even with `loading="lazy"`. Gate rendering
  in JS (see how `ResourcesMenu` checks `min-width: 1280px` before arming its image).
- **`index.html` is the template for every page.** Never put a page-specific `<link>`, preload or
  meta there; use `react-helmet-async` inside that page.
- **A route needs two registrations** (`routes.ts` + `AppRoutes.tsx`), else it prerenders the 404
  content to that URL and still reports success. The audit catches it.
- **Hydration:** the first client render must equal the server render. Do not read `window`,
  `matchMedia` or `innerWidth` during render; do it in an effect after mount. That is why scroll
  stories start on step 0 and reduced-motion is read into a ref after mount.
- **Tailwind cannot see class names built at runtime** (`` `lg:${x}` ``). Write whole class strings.
- **Fixed header is 74 px:** sticky elements use `top-[74px]`; jump targets use `scroll-mt-*`.
- **`#hash` navigation:** `ScrollToTop` scrolls to the target after render and after `load`
  (Lenis clamps to 0 on first paint); do not bypass it.
- **Vercel uses `cleanUrls`:** link to `/glossary`, not `/glossary.html`.
- **The image files `mc_crimp.webp` / `mc_mill.webp` have each other's names on disk**; the site
  uses the correct `machine-*.webp` cut-outs. The `mc_*` files are the untouched originals.
- **The Journal must stay OUT of the main script.** `lib/journal.ts`, `journal-articles/*` and
  `journal-images.json` hold ~20,000 words; the pages load on demand through `pages/JournalRoute.tsx`
  (the prerender registers them eagerly, `main.tsx` preloads them before hydrating a /journal URL).
  Never import them from anything the main bundle uses (Navbar, Footer, resources.ts, App...), or every
  page gets 50 KB gzip heavier. That is why `FEATURED` in resources.ts is written out by hand; the audit
  verifies it matches the first article and enforces the 175 KB gzip budget on the main script.
- **Windows Application Control blocked SWC's native binary** on the dev machine, so the build uses
  `@vitejs/plugin-react` (Babel). Do not switch back to `@vitejs/plugin-react-swc` without testing.

## 11. Environment

- Node **22+** (the crawl uses the global `WebSocket`); developed on Node 24 / npm 11.
- `npm install`, then `npm run dev` (http://localhost:8080). `npm run preview` serves the build.
- The crawl needs Edge or Chrome installed (found automatically, or set `BROWSER_PATH`).
- Vercel builds with `npm run build` and serves `dist/`.
