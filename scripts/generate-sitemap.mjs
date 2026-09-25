#!/usr/bin/env node
/**
 * Regenerates public/sitemap.xml from the live product/category data.
 * Run this after adding or removing products/categories:
 *   npm run generate:sitemap
 *
 * Deliberately a plain script (regex-extracts slugs from the .ts data
 * files) rather than a TS import, so it has no build step of its own
 * and can't drift from what's actually in the data files.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = (() => {
  const src = readFileSync(join(root, 'src/app/core/config/company.config.ts'), 'utf8');
  const m = src.match(/siteUrl:\s*'([^']+)'/);
  if (!m) throw new Error('siteUrl not found in company.config.ts');
  return m[1];
})();

const productsSrc = readFileSync(join(root, 'src/app/data/products.data.ts'), 'utf8');
const productSlugs = [...productsSrc.matchAll(/slug:\s*'([^']+)',/g)].map((m) => m[1]);

const today = new Date().toISOString().slice(0, 10);

const staticUrls = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/categories', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.5', changefreq: 'monthly' },
  { path: '/contact', priority: '0.5', changefreq: 'monthly' },
];

const urlEntries = [
  ...staticUrls.map(
    (u) =>
      `  <url>\n    <loc>${SITE_URL}${u.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ),
  ...productSlugs.map(
    (slug) =>
      `  <url>\n    <loc>${SITE_URL}/products/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml written: ${staticUrls.length} static pages + ${productSlugs.length} product pages = ${staticUrls.length + productSlugs.length} URLs`);
