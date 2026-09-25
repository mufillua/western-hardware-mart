import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { COMPANY_CONFIG } from '../../core/config/company.config';

@Component({
  selector: 'whm-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly company = COMPANY_CONFIG;
  readonly menuOpen = signal(false);

  /**
   * Drives the "scrolled" visual state — a slightly shorter bar with a
   * blurred background and a soft shadow, vs. a clean, taller, borderless
   * bar right at the top where the hero shows through underneath it.
   * Threshold matches the hero's approximate height so the switch feels
   * tied to "you've left the hero," not an arbitrary pixel count.
   */
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
