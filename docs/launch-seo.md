# Launch SEO: Search Console and backlinks

These steps need the live domain and a Google account, so they cannot be done from the code.
The code side is already in place: `robots.txt` points to `https://fenzafacade.com/sitemap.xml`,
every page has a canonical URL, JSON-LD and (for Journal articles) FAQPage markup.

## Day of launch (about 20 minutes)

1. Open https://search.google.com/search-console and add the property **https://fenzafacade.com**
   (use "Domain" and the DNS TXT record; Vercel > Domains lets you add it).
2. Sitemaps > add `sitemap.xml` > Submit. It should say "Success" and about 41 pages.
3. URL Inspection: paste the home page, `/journal` and two or three articles, press
   "Request indexing" for each.
4. Do the same at https://www.bing.com/webmasters (it can import the Google property); this also
   feeds Bing-based answer engines.
5. Add Google Business Profile for the company address once it is confirmed (see site.ts flags).

## First 4 weeks

- Coverage > Pages: every page should become "Indexed". Fix anything "Crawled, not indexed" by
  adding internal links to it.
- Performance: note the queries that show impressions; add the matching question to that
  article's `faq` list or a new article.
- Rich results: test an article at https://search.google.com/test/rich-results (FAQ + Article).
  Note: Google now shows FAQ rich snippets for few sites, but the markup still helps answer engines.

## Backlinks (earned, never bought)

Realistic, honest sources for a new facade company:
- Listings with a real profile: IndiaMART / TradeIndia, LinkedIn company page, Google Business
  Profile, relevant architect/builder directories.
- Industry bodies and associations the company genuinely joins.
- Suppliers and partners that list their fabricators (only with their agreement).
- Share Journal articles on LinkedIn from the company page and in facade/architecture groups.
- Guest articles or quotes for trade magazines, linking to the matching Journal article.

Do not buy links or use link farms; they can get the whole site penalised.
