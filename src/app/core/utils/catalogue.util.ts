/**
 * Product.catalogueSource looks like "ASIAN_HYDRAULICS_CATALOGUE.pdf p.4-5"
 * (or just "AH_Series.pdf" when no page was noted) for products sourced
 * from an uploaded PDF we host a copy of — or plain descriptive text
 * (e.g. "Hydroline official product listing — no manufacturer datasheet
 * published") for products sourced from a manufacturer's website instead.
 * Only the former has a real file to link to, so this returns null
 * whenever catalogueSource isn't a real, shipped .pdf — the product
 * detail page hides the "View Catalogue" button in that case rather
 * than rendering a link to a file that doesn't exist.
 */
export interface CatalogueRef {
  fileName: string;
  pageLabel: string | null;
  url: string;
}

export function parseCatalogueSource(source: string): CatalogueRef | null {
  const marker = ' p.';
  const idx = source.indexOf(marker);
  const fileName = (idx === -1 ? source : source.slice(0, idx)).trim();
  if (!fileName.toLowerCase().endsWith('.pdf')) return null;
  const pageLabel = idx === -1 ? null : source.slice(idx + marker.length).trim();
  return { fileName, pageLabel, url: `catalogues/${fileName}` };
}
