import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProductsService } from '../../data/products.service';
import { parseCatalogueSource } from '../../core/utils/catalogue.util';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { EmailService } from '../../core/services/email.service';
import { SeoService } from '../../core/services/seo.service';
import { COMPANY_CONFIG } from '../../core/config/company.config';
import { Breadcrumbs, BreadcrumbItem } from '../../components/breadcrumbs/breadcrumbs';
import { ProductGallery } from '../../components/product-gallery/product-gallery';
import { SpecTable } from '../../components/spec-table/spec-table';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';
import { EmailButton } from '../../components/email-button/email-button';
import { ProductCard } from '../../components/product-card/product-card';
import { ScrollRevealDirective } from '../../core/animations/scroll-reveal.directive';

@Component({
  selector: 'whm-product-detail',
  standalone: true,
  imports: [RouterLink, Breadcrumbs, ProductGallery, SpecTable, WhatsappButton, EmailButton, ProductCard, ScrollRevealDirective],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly email = inject(EmailService);
  private readonly seo = inject(SeoService);

  /** Reactive to route param changes — a plain snapshot read here would
      go stale when navigating between two /products/:slug routes,
      since Angular reuses this same component instance rather than
      recreating it. That was the actual cause of Related Products'
      links appearing to do nothing: the URL changed but this.slug
      never did, so `product` kept returning the previous product. */
  private readonly paramMap = toSignal(this.route.paramMap, { requireSync: true });
  private readonly slug = computed(() => this.paramMap().get('slug') ?? '');
  product = computed(() => this.productsService.bySlug(this.slug()));

  brand = computed(() =>
    this.productsService.brands().find((b) => b.slug === this.product()?.brandSlug)
  );

  category = computed(() =>
    this.productsService.categories().find((c) => c.slug === this.product()?.categorySlug)
  );

  brandName = computed(() => this.brand()?.name ?? this.product()?.brandSlug ?? '');
  categoryName = computed(() => this.category()?.name ?? this.product()?.categorySlug ?? '');

  catalogue = computed(() => {
    const p = this.product();
    return p ? parseCatalogueSource(p.catalogueSource) : null;
  });

  whatsappMessage = computed(() => {
    const p = this.product();
    return p ? this.whatsapp.productMessage(p, this.brandName(), this.categoryName()) : '';
  });

  emailSubject = computed(() => {
    const p = this.product();
    return p ? this.email.productSubject(p) : '';
  });

  emailBody = computed(() => {
    const p = this.product();
    return p ? this.email.productBody(p, this.brandName(), this.categoryName()) : '';
  });

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const p = this.product();
    if (!p) return [{ label: 'Home', link: '/' }, { label: 'Products', link: '/products' }];
    return [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      {
        label: this.categoryName(),
        link: '/products',
        queryParams: { category: p.categorySlug },
      },
      { label: p.name },
    ];
  });

  /** Other real products in the same category — not a recommendation engine, just the rest of the shelf. */
  relatedProducts = computed(() => {
    const p = this.product();
    if (!p) return [];
    return this.productsService
      .byCategory(p.categorySlug)
      .filter((other) => other.slug !== p.slug)
      .slice(0, 3);
  });

  constructor() {
    effect(() => {
      const p = this.product();
      if (!p) return;
      const brand = this.brandName();
      const category = this.categoryName();
      const image = p.images[0]
        ? p.images[0].startsWith('http')
          ? p.images[0]
          : `${COMPANY_CONFIG.siteUrl}/${p.images[0]}`
        : undefined;
      this.seo.update({
        title:
          brand === COMPANY_CONFIG.name
            ? `${p.name} | ${COMPANY_CONFIG.name}`
            : `${p.name} — ${brand} | ${COMPANY_CONFIG.name}`,
        description: p.shortDescription
          ? `${p.shortDescription.slice(0, 155)}${p.shortDescription.length > 155 ? '…' : ''}`
          : brand === COMPANY_CONFIG.name
            ? `${p.name} — ${category}, supplied directly by ${COMPANY_CONFIG.name}, ${COMPANY_CONFIG.city}. Enquire on WhatsApp for availability and a quotation.`
            : `${p.name} (${p.modelCode}) — ${category} from ${brand}, supplied by ${COMPANY_CONFIG.name}, ${COMPANY_CONFIG.city}. Enquire on WhatsApp for availability and a quotation.`,
        path: `/products/${p.slug}`,
        image,
        type: 'product',
      });

      // Deliberately no `offers` (price/availability) and no
      // `aggregateRating` — this is an enquiry-based catalogue with
      // no published pricing or reviews, and inventing either would
      // violate the no-fabrication rule this whole catalogue is built
      // on. What's here is only what's actually known to be true.
      this.seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.name,
        description: p.shortDescription || undefined,
        image: image ?? undefined,
        sku: p.modelCode || undefined,
        category,
        brand: { '@type': 'Brand', name: brand },
        url: `${COMPANY_CONFIG.siteUrl}/products/${p.slug}`,
      });
    });
  }
}
