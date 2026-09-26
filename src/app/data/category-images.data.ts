/**
 * Representative real photos from the source catalogues, mapped to the
 * category they genuinely depict — NOT one per category. Only four
 * categories have a confirmed real photo (the DV valve, the AHF04/AH
 * Series couplings, and a Delta gauge, all extracted directly from the
 * uploaded PDFs). The remaining categories keep the icon/initial
 * placeholder treatment rather than being paired with an unrelated
 * stock photo.
 */
/**
 * Representative real photos from the source catalogues/manufacturer
 * sites, mapped to a category they genuinely depict. Every category
 * with real products now has one — all sourced directly from the
 * uploaded catalogue PDFs or, for Hydroline, the manufacturer's own
 * site (same as that brand's individual product images). Tube
 * Fittings has no real product data behind it (zero products), so it
 * deliberately has no image here rather than an unrelated stand-in.
 */
export const CATEGORY_IMAGES: Record<string, string> = {
  'ball-valves': 'assets/products/khb2sf.jpg',
  'flow-control-needle-valves': 'assets/products/dv.jpg',
  'check-valves': 'assets/products/cv.jpg',
  couplings: 'assets/products/ahf04-coupling.jpg',
  'tube-fittings':'assets/products/Hy-Lok-Tube-Fittings-1.jpg',
  'manifold-valves-accessories': 'assets/products/delta-acc-ct.jpg',
  'diaphragm-seals': 'assets/products/delta-seal-src.png',
  instrumentation: 'assets/products/delta-gauge-mg-test.png',
  'filtration-tank-accessories': 'https://hydroline.com/images/IFR2.jpg',
  'hydraulic-pumps': 'assets/products/PVR-Series-Double-Vane-Pumps.jpg',
  'directional-control-valves': 'https://www.yukenindia.com/wp-content/uploads/2021/09/DSG01_thmbpng.png',
  'pressure-control-valves': 'assets/products/yuken-yc-cartridge-generic.jpg',
  'marine-containers': 'assets/products/marine-container.png',
};
