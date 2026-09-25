import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CAROUSEL_LOGOS } from '../../data/carousel-logos.data';

/**
 * Logos only — no names as running text, no descriptions, no links, no
 * "Learn more" buttons. Deliberately minimal: each logo's name is used
 * solely as the <img> alt text (and as the visible text fallback for a
 * brand with no logo file), never rendered as a heading or caption.
 *
 * Reads from CAROUSEL_LOGOS, not BRANDS (data/brands.data.ts) — see
 * that file's data source for why the two are kept separate.
 *
 * The track below renders the list twice back-to-back and animates a
 * continuous -50% translateX — since the two halves are identical, the
 * loop point is invisible, giving the seamless infinite-scroll effect
 * without any JS-driven position resets or jumps.
 */
@Component({
  selector: 'whm-brand-logo-carousel',
  standalone: true,
  templateUrl: './brand-logo-carousel.html',
  styleUrl: './brand-logo-carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandLogoCarousel {
  readonly brands = CAROUSEL_LOGOS;
}
