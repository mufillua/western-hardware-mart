import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { COMPANY_CONFIG } from '../../core/config/company.config';
import { ProductsService } from '../../data/products.service';
import { COMPANY_VALUES } from '../../data/company-values.data';
import { TEAM } from '../../data/team.data';
import { WhatsappButton } from '../../components/whatsapp-button/whatsapp-button';
import { EmailButton } from '../../components/email-button/email-button';
import { ScrollRevealDirective } from '../../core/animations/scroll-reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'whm-about',
  standalone: true,
  imports: [RouterLink, WhatsappButton, EmailButton, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  private readonly productsService = inject(ProductsService);
  private readonly seo = inject(SeoService);

  readonly company = COMPANY_CONFIG;
  readonly values = COMPANY_VALUES;
  readonly team = TEAM;

  constructor() {
    this.seo.update({
      title: `About Us — ${COMPANY_CONFIG.name}`,
      description: `${COMPANY_CONFIG.name} is a ${COMPANY_CONFIG.city}-based B2B supplier of hydraulic, filtration and instrumentation products. Learn about our product range and how to reach us.`,
      path: '/about',
    });
  }
  readonly brands = this.productsService.brands;

  /** Real, live count — not a stated figure, so nothing here can drift out of sync with the catalogue. */
  readonly productCount = this.productsService.all().length;

  /** "Asian Hydraulic and Delta Process Control Instruments" — grammatically joined, works for any number of brands. */
  readonly brandNamesJoined = computed(() => {
    const names = this.brands().map((b) => b.name);
    if (names.length === 0) return '';
    if (names.length === 1) return names[0];
    return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
  });
}
