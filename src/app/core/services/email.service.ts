import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';
import {
  buildMailtoLink,
  GENERAL_EMAIL_SUBJECT,
  generalEmailBody,
  productEmailBody,
  productEmailSubject,
  quoteFormEmailBody,
  quoteFormEmailSubject,
  QuoteFormFields,
} from '../utils/enquiry.util';

/**
 * Mirrors WhatsappService for the Email Quotation channel. Every
 * "Request Quote by Email" / "Send an Email" button on the site goes
 * through this — companyEmail lives in COMPANY_CONFIG as the single
 * source of truth, so updating it in one place updates every mailto:
 * link site-wide.
 */
@Injectable({ providedIn: 'root' })
export class EmailService {
  linkFor(subject: string, body: string): string {
    return buildMailtoLink(subject, body);
  }

  generalSubject(): string {
    return GENERAL_EMAIL_SUBJECT;
  }

  generalBody(): string {
    return generalEmailBody();
  }

  generalLink(): string {
    return buildMailtoLink(GENERAL_EMAIL_SUBJECT, generalEmailBody());
  }

  productSubject(product: Product): string {
    return productEmailSubject(product);
  }

  productBody(product: Product, brandName: string, categoryName: string): string {
    return productEmailBody(product, brandName, categoryName);
  }

  productLink(product: Product, brandName: string, categoryName: string): string {
    return buildMailtoLink(
      productEmailSubject(product),
      productEmailBody(product, brandName, categoryName)
    );
  }

  /** Builds the mailto: link for the Contact page's quote form. */
  quoteFormLink(fields: QuoteFormFields): string {
    return buildMailtoLink(quoteFormEmailSubject(fields), quoteFormEmailBody(fields));
  }
}
