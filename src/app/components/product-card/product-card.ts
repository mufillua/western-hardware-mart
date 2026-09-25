import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductsService } from '../../data/products.service';
import { WhatsappButton } from '../whatsapp-button/whatsapp-button';
import { WhatsappService } from '../../core/services/whatsapp.service';

@Component({
  selector: 'whm-product-card',
  standalone: true,
  imports: [RouterLink, WhatsappButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  private readonly productsService = inject(ProductsService);
  private readonly whatsapp = inject(WhatsappService);

  product = input.required<Product>();

  brandName = computed(
    () => this.productsService.brands().find((b) => b.slug === this.product().brandSlug)?.name ?? this.product().brandSlug
  );

  categoryName = computed(
    () => this.productsService.categories().find((c) => c.slug === this.product().categorySlug)?.name ?? this.product().categorySlug
  );

  /** Two-letter/number initials used on the placeholder photo tile until Phase 6 wires up real images. */
  initials = computed(() => {
    const code = this.product().modelCode.replace(/[^A-Za-z0-9]/g, '');
    return code.slice(0, 3).toUpperCase() || '—';
  });

  whatsappMessage = computed(() =>
    this.whatsapp.productMessage(this.product(), this.brandName(), this.categoryName())
  );
}
