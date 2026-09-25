import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../data/products.service';
import { filterProducts } from '../../core/utils/search.util';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Filters } from '../../components/filters/filters';
import { ProductCard } from '../../components/product-card/product-card';
import { Pagination } from '../../components/pagination/pagination';
import { ScrollRevealDirective } from '../../core/animations/scroll-reveal.directive';
import { SeoService } from '../../core/services/seo.service';
import { COMPANY_CONFIG } from '../../core/config/company.config';

const PAGE_SIZE = 12;

@Component({
  selector: 'whm-products',
  standalone: true,
  imports: [SearchBar, Filters, ProductCard, Pagination, ScrollRevealDirective],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  private readonly productsService = inject(ProductsService);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  readonly query = signal('');
  readonly categorySlug = signal<string | null>(null);
  readonly brandSlug = signal<string | null>(null);
  readonly currentPage = signal(1);

  private readonly categoryNameOf = (slug: string) =>
    this.productsService.categories().find((c) => c.slug === slug)?.name ?? '';
  private readonly brandNameOf = (slug: string) =>
    this.productsService.brands().find((b) => b.slug === slug)?.name ?? '';

  /** Full filtered set — search + category + brand applied, before pagination. */
  readonly results = computed(() =>
    filterProducts(
      this.productsService.all(),
      { query: this.query(), categorySlug: this.categorySlug(), brandSlug: this.brandSlug() },
      this.brandNameOf,
      this.categoryNameOf
    )
  );

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.results().length / PAGE_SIZE)));

  /** What the grid actually renders — 12 products max, sliced from the already-filtered results. */
  readonly paginatedResults = computed(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.results().slice(start, start + PAGE_SIZE);
  });

  readonly rangeStart = computed(() => (this.results().length === 0 ? 0 : (this.currentPage() - 1) * PAGE_SIZE + 1));
  readonly rangeEnd = computed(() => Math.min(this.currentPage() * PAGE_SIZE, this.results().length));

  readonly activeCategoryName = computed(() => {
    const slug = this.categorySlug();
    return slug ? this.categoryNameOf(slug) : null;
  });

  readonly activeBrandName = computed(() => {
    const slug = this.brandSlug();
    return slug ? this.brandNameOf(slug) : null;
  });

  constructor() {
    this.seo.update({
      title: `Products — ${COMPANY_CONFIG.name}`,
      description: `Browse the full ${COMPANY_CONFIG.name} product catalogue — hydraulic valves, pumps, couplings, tube fittings and instrumentation from Asian Hydraulic, Delta, Hydroline, Yuken and Polyhydron.`,
      path: '/products',
    });

    // Supports homepage category/brand cards linking in with a pre-set filter,
    // e.g. /products?category=ball-valves
    const params = this.route.snapshot.queryParamMap;
    const category = params.get('category');
    const brand = params.get('brand');
    const q = params.get('q');
    if (category) this.categorySlug.set(category);
    if (brand) this.brandSlug.set(brand);
    if (q) this.query.set(q);

    // Reset to page 1 whenever search or filters change — a stale page
    // number from before the change would otherwise show either the
    // wrong slice of the new results or, if the new result set is
    // shorter, an empty page for no visible reason.
    effect(() => {
      this.query();
      this.categorySlug();
      this.brandSlug();
      this.currentPage.set(1);
    }, { allowSignalWrites: true });
  }

  goToPage(page: number, anchor?: HTMLElement): void {
    this.currentPage.set(page);
    anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  clearAll(): void {
    this.query.set('');
    this.categorySlug.set(null);
    this.brandSlug.set(null);
  }
}
