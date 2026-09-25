import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'whm-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBar {
  /** Two-way bound — parent owns the query signal via [(query)]. */
  query = model('');

  clear(): void {
    this.query.set('');
  }
}
