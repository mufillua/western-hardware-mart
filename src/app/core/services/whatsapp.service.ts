import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';
import {
  buildWhatsAppLink,
  generalWhatsAppMessage,
  productWhatsAppMessage,
} from '../utils/enquiry.util';

/**
 * Single reusable entry point for every WhatsApp enquiry on the site —
 * product cards, the product detail page, and the homepage/general CTA
 * all go through this instead of building links inline. Wraps the pure
 * message-building functions in core/utils/enquiry.util.ts (kept as
 * plain functions so they stay easy to unit test) behind Angular DI so
 * any component can `inject(WhatsappService)` and get a ready-to-use link.
 */
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  /** Builds a wa.me link for an arbitrary, already-composed message. */
  linkFor(message: string): string {
    return buildWhatsAppLink(message);
  }

  /** The generic "I don't know exactly what I need" enquiry message + link. */
  generalMessage(): string {
    return generalWhatsAppMessage();
  }

  generalLink(): string {
    return buildWhatsAppLink(generalWhatsAppMessage());
  }

  /** Product name, brand, model code and category filled in automatically. */
  productMessage(product: Product, brandName: string, categoryName: string): string {
    return productWhatsAppMessage(product, brandName, categoryName);
  }

  productLink(product: Product, brandName: string, categoryName: string): string {
    return buildWhatsAppLink(productWhatsAppMessage(product, brandName, categoryName));
  }
}
