import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { WhatsappService } from '../../core/services/whatsapp.service';

/**
 * Reusable WhatsApp CTA — the single component every WhatsApp enquiry
 * point on the site (product cards, product detail, homepage/general
 * CTA, header, sticky mobile FAB) renders through.
 * - variant="sticky": fixed bottom-right button, mobile only, general enquiry.
 * - variant="inline": normal button used everywhere else — pass a
 *   `message` to pre-fill it with product details, or omit it for the
 *   general enquiry message.
 */
@Component({
  selector: 'whm-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  private readonly whatsapp = inject(WhatsappService);

  variant = input<'sticky' | 'inline'>('inline');
  message = input<string | undefined>(undefined);
  label = input('Chat on WhatsApp');
  /** Stretches the inline button to fill its container — used for prominent, full-width CTAs. */
  block = input(false);
  /** 'lg' for prominent placements like the hero; every existing usage keeps the default. */
  size = input<'md' | 'lg'>('md');

  href = computed(() => {
    const message = this.message();
    return message ? this.whatsapp.linkFor(message) : this.whatsapp.generalLink();
  });
}
