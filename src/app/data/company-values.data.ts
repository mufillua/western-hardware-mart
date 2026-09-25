export interface CompanyValue {
  title: string;
  copy: string;
}

/**
 * Shared between the homepage USP section and the About page so the
 * same three, catalogue-supported claims aren't maintained in two places.
 * These three phrases — Complete Product Range, Original Products, Ready
 * Stock — are from the company's own promotional material; nothing
 * beyond them (years of experience, certifications, etc.) is claimed
 * without evidence.
 */
export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: 'Complete Product Range',
    copy: 'Hydraulic valves, couplings, tube fittings and process instrumentation under one supplier.',
  },
  {
    title: 'Original Products',
    copy: 'Genuine products sourced directly from the manufacturers whose catalogues we carry.',
  },
  {
    title: 'Ready Stock',
    copy: 'Commonly requested valves, fittings and gauges kept on hand for faster turnaround.',
  },
];
