import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

/**
 * Handles both states so nothing here needs rebuilding once Phase 6 wires
 * up real photography: with `images` empty (true for every product right
 * now) it shows a clear "no photo yet" placeholder instead of a broken
 * <img>; once images exist it becomes a main image + thumbnail strip.
 */
@Component({
  selector: 'whm-product-gallery',
  standalone: true,
  templateUrl: './product-gallery.html',
  styleUrl: './product-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGallery {
  images = input<string[]>([]);
  modelCode = input.required<string>();

  activeIndex = signal(0);

  activeImage = computed(() => this.images()[this.activeIndex()]);

  initials = computed(() => {
    const code = this.modelCode().replace(/[^A-Za-z0-9]/g, '');
    return code.slice(0, 4).toUpperCase() || '—';
  });

  select(index: number): void {
    this.activeIndex.set(index);
  }
}
