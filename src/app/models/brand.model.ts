export interface Brand {
  slug: string;
  name: string;
  description: string;
  /** Path under public/ to a real, sourced logo asset — omitted (not faked) when none exists. */
  logo?: string;
  /** As stated in the brand's own catalogue text — never inferred. */
  foundedYear?: number;
  headquarters?: string;
  /** A short paraphrase of the brand's own "about/mission" text in their catalogue. */
  capabilityNote?: string;
  /** Only certifications actually shown/named in the source catalogue — never assumed. */
  certifications?: string[];
  /** Source PDF, for traceability. */
  catalogueSource: string;
}
