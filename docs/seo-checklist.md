# SEO & Deployment Checklist

## When you get a real domain

1. Update `siteUrl` in `src/app/core/config/company.config.ts` (one line).
2. Update `Sitemap:` in `public/robots.txt` to match.
3. Run `npm run generate:sitemap` to rebuild `public/sitemap.xml` with the new domain.
4. Rebuild: `npm run build` — this reprerenders all 200+ pages with the new canonical URLs baked in.

## After every catalogue change (new/removed products)

Run `npm run generate:sitemap` before your next build/deploy. It reads
`products.data.ts` directly, so it can't drift out of sync — but it
only updates the file when you actually run it.

## After deploying to a live domain

- **Google Search Console**: add the property, verify ownership, submit `/sitemap.xml`.
- **Bing Webmaster Tools**: same — Bing/Yahoo/DuckDuckGo results come from this, not Google's index.
- Test rich-result eligibility: paste a product URL into Google's [Rich Results Test](https://search.google.com/test/rich-results) — should show the `Product` structured data with name, brand, category (no price — see note below).
- Test social preview: paste a product URL into [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) or just send it to yourself on WhatsApp — the title/description/image should show correctly since they're baked into the static HTML, not rendered client-side.
- Check `https://yourdomain.com/robots.txt` and `/sitemap.xml` both load correctly on the live domain.

## Why there's no price/availability/rating in the Product structured data

Google's Product rich-result guidelines expect `offers` (price + availability)
and often `aggregateRating`. This is an enquiry-based catalogue with no
published pricing and no reviews — adding either would mean inventing data,
which this whole catalogue has deliberately avoided from day one. The
structured data still helps Google understand what each page is (a real
product, with a real name/brand/category/image); it just won't qualify for
the full price-and-stars snippet in search results. If real pricing is ever
published, `offers` can be added to the `setJsonLd()` call in
`product-detail.ts`.

## Re-running things

| Task | Command |
|---|---|
| Local dev server | `npm start` |
| Production build (prerenders all pages) | `npm run build` |
| Regenerate sitemap only | `npm run generate:sitemap` |

## What NOT to touch

- `outputMode: "static"` in `angular.json` — this is what makes the
  build produce plain static HTML/CSS/JS with no Node server required.
  Don't change this back to `"server"` unless you specifically want to
  run a persistent Node process instead of static hosting.
- `src/app/app.routes.server.ts` — the `getPrerenderParams` there is
  what makes every product page (not just the static ones) get its own
  prerendered HTML file. If new *routes* are ever added (not just new
  products), they may need their own entry here.
