import { Injectable, computed, signal } from '@angular/core';

import { PRODUCTS } from './products.data';
import { CATEGORIES } from './categories.data';
import { BRANDS } from './brands.data';
import { Product } from '../models/product.model';

/**
 * Plain, signal-based read access over the product/category/brand data.
 * No search or filtering UI logic here — that's built on top of this in
 * Phase 3. This just gives components a single, consistent way to query
 * the catalogue.
 */
@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly products = signal<Product[]>(PRODUCTS);

  readonly all = this.products.asReadonly();
  readonly categories = signal(CATEGORIES).asReadonly();
  readonly brands = signal(BRANDS).asReadonly();

  readonly countByCategory = computed(() => {
    const counts = new Map<string, number>();
    for (const p of this.products()) {
      counts.set(p.categorySlug, (counts.get(p.categorySlug) ?? 0) + 1);
    }
    return counts;
  });

  readonly countByBrand = computed(() => {
    const counts = new Map<string, number>();
    for (const p of this.products()) {
      counts.set(p.brandSlug, (counts.get(p.brandSlug) ?? 0) + 1);
    }
    return counts;
  });

  byCategory(categorySlug: string): Product[] {
    return this.products().filter((p) => p.categorySlug === categorySlug);
  }

  byBrand(brandSlug: string): Product[] {
    return this.products().filter((p) => p.brandSlug === brandSlug);
  }

  bySlug(slug: string): Product | undefined {
    return this.products().find((p) => p.slug === slug);
  }
}
