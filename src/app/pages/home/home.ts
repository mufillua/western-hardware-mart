import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { COMPANY_CONFIG } from '../../core/config/company.config';
import { ProductsService } from '../../data/products.service';
import { COMPANY_VALUES } from '../../data/company-values.data';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';
import { EmailButton } from '../../components/email-button/email-button';
import { ProductCard } from '../../components/product-card/product-card';
import { BrandLogoCarousel } from '../../components/brand-logo-carousel/brand-logo-carousel';
import { Product } from '../../models/product.model';
import { ScrollRevealDirective } from '../../core/animations/scroll-reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'whm-home',
  standalone: true,
  imports: [WhatsappButton, EmailButton, ProductCard, BrandLogoCarousel, RouterLink, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly productsService = inject(ProductsService);
  private readonly seo = inject(SeoService);

  readonly company = COMPANY_CONFIG;

  constructor() {
    this.seo.update({
      title: `${COMPANY_CONFIG.name} — ${COMPANY_CONFIG.tagline}`,
      description: `${COMPANY_CONFIG.name} supplies hydraulic valves, pumps, couplings, tube fittings and process instrumentation in ${COMPANY_CONFIG.city}. Browse the catalogue and enquire on WhatsApp.`,
      path: '/',
    });

    // Only fields backed by real data in company.config.ts — no
    // rating, review, or founding-date claims, since none exist.
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY_CONFIG.name,
      description: COMPANY_CONFIG.supportingLine,
      image: `${COMPANY_CONFIG.siteUrl}/logo.png`,
      telephone: COMPANY_CONFIG.whatsappDisplay,
      email: COMPANY_CONFIG.companyEmail,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_CONFIG.address,
        addressLocality: COMPANY_CONFIG.city,
        addressCountry: 'IN',
      },
      url: COMPANY_CONFIG.siteUrl,
    });
  }
  readonly categories = this.productsService.categories;
  readonly categoryCount = (slug: string) => this.productsService.countByCategory().get(slug) ?? 0;

  /** Real, live counts for the hero trust chips — never a stated/invented figure. */
  readonly totalProducts = this.productsService.all().length;
  readonly totalBrands = this.productsService.brands().length;

  /** Live counts for the "What we supply" showcase cards. */
  readonly handToolsCount = this.productsService.countByBrand().get('taparia') ?? 0;
  private readonly liftingCategorySlugs = [
    'manual-hoists-pulley-blocks',
    'electric-chain-hoists-trolleys',
    'slings-chains-lashing',
    'rigging-hardware-shackles-hooks-links',
    'plate-pipe-lifting-clamps',
    'material-handling-trucks-trolleys',
    'specialty-lifting-equipment',
  ];
  readonly liftingCount = this.liftingCategorySlugs.reduce((sum, slug) => sum + this.categoryCount(slug), 0);

  readonly usps = COMPANY_VALUES;

  /**
   * A curated spread across categories/brands for the homepage carousel —
   * all real catalogue products (the three with confirmed photos first),
   * not a "most popular" claim we have no data to back.
   */
  private readonly featuredSlugs = ['marine-container-40ft', 'yuken-dsg01', 'pulling-lifting-machine-heavy-duty' ,'ah-series', 'khb2sf', 'hydroline-cut', 'gauge-ip', 'polyhydron-tcm10', '3vm'];
  readonly featuredProducts = this.featuredSlugs
    .map((slug) => this.productsService.bySlug(slug))
    .filter((p): p is Product => !!p);

  scrollCarousel(track: HTMLElement, direction: 1 | -1): void {
    track.scrollBy({ left: direction * 320, behavior: 'smooth' });
  }
}
