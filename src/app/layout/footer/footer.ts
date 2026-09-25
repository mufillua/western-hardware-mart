import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { COMPANY_CONFIG } from '../../core/config/company.config';
import { CATEGORIES } from '../../data/categories.data';

@Component({
  selector: 'whm-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly company = COMPANY_CONFIG;
  readonly categories = CATEGORIES;
  readonly year = new Date().getFullYear();
}
