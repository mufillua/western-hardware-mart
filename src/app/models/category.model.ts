export interface Category {
  slug: string;
  name: string;
  description: string;
  /** Which brand catalogues this category is sourced from. */
  sourceBrands: string[];
}
