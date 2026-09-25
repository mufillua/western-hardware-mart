import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { COMPANY_CONFIG } from '../../core/config/company.config';
import { directionsUrl, mapsEmbedUrl } from '../../core/utils/maps.util';
import { EmailService } from '../../core/services/email.service';
import { ProductsService } from '../../data/products.service';
import { ScrollRevealDirective } from '../../core/animations/scroll-reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'whm-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly emailService = inject(EmailService);
  private readonly productsService = inject(ProductsService);
  private readonly seo = inject(SeoService);

  readonly company = COMPANY_CONFIG;
  readonly directionsUrl = directionsUrl(COMPANY_CONFIG.address);

  constructor() {
    this.seo.update({
      title: `Contact Us — ${COMPANY_CONFIG.name}`,
      description: `Contact ${COMPANY_CONFIG.name} in ${COMPANY_CONFIG.city} for hydraulic and industrial product enquiries. WhatsApp ${COMPANY_CONFIG.whatsappDisplay} or email for a quotation.`,
      path: '/contact',
    });
  }

  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    mapsEmbedUrl(COMPANY_CONFIG.address)
  );

  /** Product dropdown — every real product in the catalogue, sorted for scanability. */
  readonly productOptions = [...this.productsService.all()].sort((a, b) => a.name.localeCompare(b.name));

  // Quote form state — plain signals, no backend; submitting just opens
  // the visitor's own email app with everything pre-filled.
  readonly name = signal('');
  readonly companyName = signal('');
  readonly productSlug = signal('');
  readonly message = signal('');

  readonly canSubmit = computed(() => this.name().trim().length > 0 && this.message().trim().length > 0);

  /** Real company email — every mailto: link on the site is driven from this one place. */
  readonly hasRealEmail = !COMPANY_CONFIG.companyEmail.includes('YOUR_EMAIL');

  private selectedProductLabel(): string | undefined {
    const slug = this.productSlug();
    if (!slug) return undefined;
    const product = this.productOptions.find((p) => p.slug === slug);
    return product ? `${product.modelCode} — ${product.name}` : undefined;
  }

  submitQuoteForm(): void {
    if (!this.canSubmit()) return;
    const link = this.emailService.quoteFormLink({
      name: this.name().trim(),
      company: this.companyName().trim(),
      productLabel: this.selectedProductLabel(),
      message: this.message().trim(),
    });
    window.location.href = link;
  }
}
