import { ChangeDetectionStrategy, Component, computed, inject, model } from '@angular/core';

import { ProductsService } from '../../data/products.service';

/**
 * Category + brand dropdown filters. Plain native <select> elements —
 * reliable on mobile, no custom dropdown widget to maintain, and matches
 * the "keep filters easy to use on mobile" requirement directly.
 */
@Component({
  selector: 'whm-filters',
  standalone: true,
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filters {
  private readonly productsService = inject(ProductsService);

  categorySlug = model<string | null>(null);
  brandSlug = model<string | null>(null);

  categories = this.productsService.categories;
  brands = this.productsService.brands;

  categoryCount = (slug: string) => this.productsService.countByCategory().get(slug) ?? 0;
  brandCount = (slug: string) => this.productsService.countByBrand().get(slug) ?? 0;

  hasActiveFilters = computed(() => !!this.categorySlug() || !!this.brandSlug());

  onCategoryChange(value: string): void {
    this.categorySlug.set(value || null);
  }

  onBrandChange(value: string): void {
    this.brandSlug.set(value || null);
  }

  clear(): void {
    this.categorySlug.set(null);
    this.brandSlug.set(null);
  }
}
