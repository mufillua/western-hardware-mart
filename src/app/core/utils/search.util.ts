import { Product } from '../../models/product.model';

export interface ProductFilters {
  query?: string;
  categorySlug?: string | null;
  brandSlug?: string | null;
}

function searchableText(
  product: Product,
  brandName: string,
  categoryName: string
): string {
  return [product.name, product.modelCode, brandName, categoryName, product.shortDescription]
    .join(' ')
    .toLowerCase();
}

/**
 * A product matches when every whitespace-separated token in the query
 * appears somewhere in its searchable text (name, model code, brand,
 * category, description). Token-based rather than a single substring
 * match so a query like "pressure gauge" — where "pressure" comes from
 * the category name and "gauge" from the product name — still matches.
 */
export function matchesQuery(
  product: Product,
  query: string,
  brandName: string,
  categoryName: string
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const tokens = q.split(/\s+/).filter(Boolean);
  const haystack = searchableText(product, brandName, categoryName);
  return tokens.every((token) => haystack.includes(token));
}

export function filterProducts(
  products: Product[],
  filters: ProductFilters,
  brandNameOf: (slug: string) => string,
  categoryNameOf: (slug: string) => string
): Product[] {
  return products.filter((p) => {
    if (filters.categorySlug && p.categorySlug !== filters.categorySlug) return false;
    if (filters.brandSlug && p.brandSlug !== filters.brandSlug) return false;
    if (
      filters.query &&
      !matchesQuery(p, filters.query, brandNameOf(p.brandSlug), categoryNameOf(p.categorySlug))
    ) {
      return false;
    }
    return true;
  });
}
