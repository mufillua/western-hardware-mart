import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { EmailService } from '../../core/services/email.service';

/**
 * Reusable "Request Quote by Email" / "Send an Email" CTA — mirrors
 * WhatsappButton. Pass subject + body together to pre-fill a specific
 * product's quote request; omit both for the general enquiry email.
 */
@Component({
  selector: 'whm-email-button',
  standalone: true,
  templateUrl: './email-button.html',
  styleUrl: './email-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailButton {
  private readonly email = inject(EmailService);

  subject = input<string | undefined>(undefined);
  body = input<string | undefined>(undefined);
  label = input('Send an Email');
  block = input(false);

  href = computed(() => {
    const subject = this.subject();
    const body = this.body();
    return subject && body ? this.email.linkFor(subject, body) : this.email.generalLink();
  });
}
