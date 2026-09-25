import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

/**
 * Presentation-only — owns no state itself. The parent holds
 * currentPage/totalPages and reacts to (pageChange) to update its own
 * signal, same pattern as the rest of this app's components.
 *
 * pageTokens condenses long page ranges to something like
 * "1 … 4 5 6 … 12" instead of rendering every page number, so this
 * never overflows on mobile regardless of how many pages exist.
 */
@Component({
  selector: 'whm-pagination',
  standalone: true,
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  currentPage = input.required<number>();
  totalPages = input.required<number>();
  pageChange = output<number>();

  pageTokens = computed<(number | '…')[]>(() => {
    const total = this.totalPages();
    const current = this.currentPage();

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const tokens: (number | '…')[] = [1];
    if (current > 3) tokens.push('…');

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) tokens.push(i);

    if (current < total - 2) tokens.push('…');
    tokens.push(total);

    return tokens;
  });

  go(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) return;
    this.pageChange.emit(page);
  }
}
