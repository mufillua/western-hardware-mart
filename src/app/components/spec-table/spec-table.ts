import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SpecEntry } from '../../models/product.model';

@Component({
  selector: 'whm-spec-table',
  standalone: true,
  templateUrl: './spec-table.html',
  styleUrl: './spec-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecTable {
  specifications = input.required<SpecEntry[]>();
}
