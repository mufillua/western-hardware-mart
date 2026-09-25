import { RenderMode, ServerRoute } from '@angular/ssr';

import { PRODUCTS } from './data/products.data';

/**
 * Every route is prerendered to static HTML at build time — no Node
 * server needed at runtime, so the output can be deployed to any
 * static host (Netlify, Vercel, Firebase Hosting, GitHub Pages, S3 +
 * CloudFront, etc). The dynamic /products/:slug route needs an
 * explicit list of every slug to prerender; that list comes straight
 * from the same PRODUCTS data the app itself renders from, so it can
 * never drift out of sync — add a product to products.data.ts and its
 * page is automatically included next build, no separate list to
 * maintain.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PRODUCTS.map((p) => ({ slug: p.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
