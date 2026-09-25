import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  link?: string;
  queryParams?: Record<string, string>;
}

@Component({
  selector: 'whm-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumbs {
  items = input.required<BreadcrumbItem[]>();
}
