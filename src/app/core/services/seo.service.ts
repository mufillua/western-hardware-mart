import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { COMPANY_CONFIG } from '../config/company.config';

export interface SeoTags {
  /** Full <title> text — pass the complete string, e.g. 'KHB2 Ball Valve — Western Hardware Mart'. */
  title: string;
  description: string;
  /** Path only, starting with '/' — e.g. '/products/khb2'. Root '/' for the homepage. */
  path: string;
  /** Absolute image URL for Open Graph/Twitter previews (falls back to the logo if omitted). */
  image?: string;
  /** 'website' for listing/info pages, 'product' for a single product's detail page. */
  type?: 'website' | 'product';
}

/**
 * Single entry point for per-page SEO tags — title, meta description,
 * canonical link, and Open Graph/Twitter Card tags (which is what
 * WhatsApp, LinkedIn, and other link-preview bots read, so this
 * matters a lot for a business that runs enquiries over WhatsApp
 * links). Every page component calls update() with its own real
 * content — nothing here invents copy, it only wires up what each
 * page already computes (product name, category, description, etc).
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(tags: SeoTags): void {
    const url = `${COMPANY_CONFIG.siteUrl}${tags.path}`;
    const image = tags.image ?? `${COMPANY_CONFIG.siteUrl}/logo.png`;
    const type = tags.type ?? 'website';

    this.title.setTitle(tags.title);
    this.setTag('description', tags.description);

    this.setTag('og:title', tags.title, true);
    this.setTag('og:description', tags.description, true);
    this.setTag('og:url', url, true);
    this.setTag('og:image', image, true);
    this.setTag('og:type', type, true);
    this.setTag('og:site_name', COMPANY_CONFIG.name, true);

    this.setTag('twitter:card', 'summary_large_image');
    this.setTag('twitter:title', tags.title);
    this.setTag('twitter:description', tags.description);
    this.setTag('twitter:image', image);

    this.setCanonical(url);
  }

  private setTag(name: string, content: string, property = false): void {
    const selector = property ? `property="${name}"` : `name="${name}"`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [property ? 'property' : 'name']: name, content });
    } else {
      this.meta.addTag({ [property ? 'property' : 'name']: name, content });
    }
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Injects (or replaces) a single JSON-LD structured-data block. Only
   * one at a time per page — each call fully replaces the previous
   * script tag rather than appending another, so a page that calls
   * this more than once (e.g. product-detail on slug change) doesn't
   * accumulate stale blocks. Callers must only pass fields backed by
   * real data — see each call site for what's deliberately omitted
   * (price/availability/ratings) because we don't have that data.
   */
  setJsonLd(data: Record<string, unknown>): void {
    const id = 'whm-structured-data';
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
