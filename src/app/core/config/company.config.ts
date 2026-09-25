/**
 * Central place for company identity values that show up across the
 * site. Keep this the single source of truth so header, footer, and
 * every enquiry button stay in sync when details change.
 */
export const COMPANY_CONFIG = {
  name: 'Western Hardware Mart',
  tagline: 'Your Trusted Hydraulic Solutions Partner',
  supportingLine: 'Hydraulic, Couplings, Tube Fittings & Process Instrumentation',
  city: 'Kolkata',

  address: 'Basundra Tower 22, Netaji Subhas Road, Kolkata - 700001',

  /** Digits only, country code included, no + or spaces — required by wa.me links. */
  whatsappNumberIntl: '919874636636',
  whatsappDisplay: '+91 98746 36636',

  companyEmail: 'whm027@gmail.com',
  siteUrl: 'https://westernhardwaremart.com',
} as const;
