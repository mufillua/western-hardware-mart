import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { COMPANY_CONFIG } from '../../core/config/company.config';
import { ProductsService } from '../../data/products.service';

const FOOTER_CATEGORY_COUNT = 8;

@Component({
  selector: 'whm-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly productsService = inject(ProductsService);

  readonly company = COMPANY_CONFIG;
  readonly year = new Date().getFullYear();

  readonly topCategories = (() => {
    const counts = this.productsService.countByCategory();
    return [...this.productsService.categories()]
      .sort((a, b) => (counts.get(b.slug) ?? 0) - (counts.get(a.slug) ?? 0))
      .slice(0, FOOTER_CATEGORY_COUNT);
  })();
}
