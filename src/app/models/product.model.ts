export interface SpecEntry {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  /** Routable, unique — see the note at the top of data/products.data.ts on why this isn't always the bare model code. */
  slug: string;
  name: string;
  /** The code/model as printed in the catalogue, e.g. 'KHB2', 'DRV', 'UP'. */
  modelCode: string;
  brandSlug: string;
  categorySlug: string;
  /** Catalogue's own descriptive text — never paraphrased into an unstated claim. */
  shortDescription: string;
  specifications: SpecEntry[];
  /**
   * Extracted from the catalogue's own size/DN/thread column, e.g. "DN4 – DN50".
   * Full per-size dimensional tables (weights, lengths, hex sizes per variant)
   * are added on the product detail page in Phase 4, not duplicated here.
   */
  sizeRange?: string;
  /** Populated in Phase 6 (catalogue integration) once images are extracted. */
  images: string[];
  /** Source PDF and page, for traceability back to the uploaded catalogue. */
  catalogueSource: string;
}
