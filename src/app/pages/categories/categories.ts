import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductsService } from '../../data/products.service';
import { CATEGORY_IMAGES } from '../../data/category-images.data';
import { ScrollRevealDirective } from '../../core/animations/scroll-reveal.directive';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';
import { EmailButton } from '../../components/email-button/email-button';
import { SeoService } from '../../core/services/seo.service';
import { COMPANY_CONFIG } from '../../core/config/company.config';

@Component({
  selector: 'whm-categories',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, WhatsappButton, EmailButton],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Categories {
  private readonly productsService = inject(ProductsService);
  private readonly seo = inject(SeoService);

  readonly categories = this.productsService.categories();
  readonly categoryImages = CATEGORY_IMAGES;

  constructor() {
    this.seo.update({
      title: `Product Categories — ${COMPANY_CONFIG.name}`,
      description: `Browse the full ${COMPANY_CONFIG.name} catalogue by category — ball valves, directional and pressure control valves, pumps, couplings, tube fittings, filtration and instrumentation.`,
      path: '/categories',
    });
  }

  countFor(slug: string): number {
    return this.productsService.countByCategory().get(slug) ?? 0;
  }

  imageFor(slug: string): string | undefined {
    return this.categoryImages[slug];
  }

  initialFor(name: string): string {
    return name.charAt(0);
  }
}
