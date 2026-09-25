import { COMPANY_CONFIG } from '../config/company.config';
import { Product } from '../../models/product.model';

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumberIntl}?text=${encoded}`;
}

export function buildMailtoLink(subject: string, body: string): string {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${COMPANY_CONFIG.companyEmail}?${params}`;
}

// ---------------------------------------------------------------------------
// WhatsApp
// ---------------------------------------------------------------------------

export function generalWhatsAppMessage(): string {
  return (
    `Hello ${COMPANY_CONFIG.name},\n\n` +
    `I am looking for a hydraulic / instrumentation product and would like some help finding the right one.\n\n` +
    `Thank you.`
  );
}

/**
 * Per-product WhatsApp enquiry message. Product name, brand, model/product
 * code and category are inserted automatically — the visitor never has to
 * type them in. The Model/Product Code line is only included when the
 * product actually has one; every product currently in the catalogue does.
 */
export function productWhatsAppMessage(
  product: Product,
  brandName: string,
  categoryName: string
): string {
  const modelLine = product.modelCode ? `Model/Product Code: ${product.modelCode}\n` : '';
  return (
    `Hello ${COMPANY_CONFIG.name},\n\n` +
    `I am interested in the following product:\n\n` +
    `Product: ${product.name}\n` +
    `Brand: ${brandName}\n` +
    modelLine +
    `Category: ${categoryName}\n\n` +
    `Please share the price, availability and further details.\n\n` +
    `Thank you.`
  );
}

// ---------------------------------------------------------------------------
// Email
// ---------------------------------------------------------------------------

export const GENERAL_EMAIL_SUBJECT = `General Product Enquiry - ${COMPANY_CONFIG.name}`;

export function generalEmailBody(): string {
  return (
    `Hello ${COMPANY_CONFIG.name},\n\n` +
    `I would like to enquire about your product range.\n\n` +
    `Please let me know what details you need from my side.\n\n` +
    `Thank you.\n\nRegards,`
  );
}

export function productEmailSubject(product: Product): string {
  return `Quote Request - ${product.name}`;
}

/**
 * For the Contact page's quote form — a general lead-capture email, not
 * tied to a specific product page. Still a pure client-side mailto:
 * composer (no backend, per the brief) — the form just assembles the
 * message the visitor's own email app then sends.
 */
export interface QuoteFormFields {
  name: string;
  company?: string;
  productLabel?: string;
  message: string;
}

export function quoteFormEmailSubject(fields: QuoteFormFields): string {
  return fields.productLabel
    ? `Quote Request - ${fields.productLabel}`
    : `Quote Request from ${fields.name}`;
}

export function quoteFormEmailBody(fields: QuoteFormFields): string {
  return (
    `Hello ${COMPANY_CONFIG.name},\n\n` +
    `Name: ${fields.name}\n` +
    `Company: ${fields.company?.trim() || '—'}\n` +
    `Product / range of interest: ${fields.productLabel || 'Not specified'}\n\n` +
    `Message:\n${fields.message}\n\n` +
    `Thank you.`
  );
}

/**
 * Per-product quote-request email body. Same auto-filled fields as the
 * WhatsApp message, plus the explicit list of what the visitor is asking
 * the team to provide — the visitor never types product details into
 * either channel.
 */
export function productEmailBody(
  product: Product,
  brandName: string,
  categoryName: string
): string {
  const modelLine = product.modelCode ? `Model/Product Code: ${product.modelCode}\n` : '';
  return (
    `Hello ${COMPANY_CONFIG.name},\n\n` +
    `I would like to request a quotation for the following product:\n\n` +
    `Product: ${product.name}\n` +
    `Brand: ${brandName}\n` +
    modelLine +
    `Category: ${categoryName}\n\n` +
    `Please provide:\n\n` +
    `- Price\n` +
    `- Availability\n` +
    `- Delivery time\n` +
    `- Applicable taxes\n` +
    `- Shipping/delivery details\n\n` +
    `Please let me know if you require any additional information from my side.\n\n` +
    `Thank you.\n\nRegards,`
  );
}
