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
  'adjustable-wrenches': 'assets/products/adjustable-wrenches.png', 
  'pliers-group': 'assets/products/pliers-group.png', 
  'vde-pliers': 'assets/products/vde-pliers.png', 
  'nippers-auto-wire-strippers': 'assets/products/nippers-auto-wire-strippers.png', 
  'crimping-tool': 'assets/products/crimping-tool.png', //new
  'pvc-insulation-tape': 'assets/products/pvc-insulation-tape.png', 
  'screw-drivers-group': 'assets/products/screw-drivers-group.png', //new
  'screw-driver-bits': 'assets/products/screw-driver-bits.png', 
  'sockets-accessories-sets': 'assets/products/sockets-accessories-sets.png', 
  't-socket-wrench': 'assets/products/t-socket-wrench.png', //new
  'double-side-socket-wrench': 'assets/products/double-side-socket-wrench.png', //new
  'torque-wrench-group': 'assets/products/torque-wrench-group.png', 
  'pipe-wrench-group': 'assets/products/pipe-wrench-group.png', 
  'aluminium-chain-pipe-wrench': 'assets/products/aluminium-chain-pipe-wrench.png', 
  'hammer-group': 'assets/products/hammer-group.png', 
  'fiberglass-hammer-handle': 'assets/products/fiberglass-hammer-handle.png', //new
  'c-f-clamps': 'assets/products/c-f-clamps.png', 
  'pipe-vices': 'assets/products/pipe-vices.png', 
  'l-spanner-box-spanner': 'assets/products/l-spanner-box-spanner.png', 
  'tubular-spanner-half-moon-spanner': 'assets/products/tubular-spanner-half-moon-spanner.png', 
  'spanners-group': 'assets/products/spanners-group.png', //new
  'slogging-spanners': 'assets/products/slogging-spanners.png', 
  'chisels-group': 'assets/products/chisels-group.png', //new
  'punches-sets': 'assets/products/punches-sets.png', 
  'bolt-cable-tin-cutter': 'assets/products/bolt-cable-tin-cutter.png', 
  'pruning-shear-fiberglass-steel-axe': 'assets/products/pruning-shear-fiberglass-steel-axe.png', 
  'pvc-pipe-cutter-snap-off-cutter': 'assets/products/pvc-pipe-cutter-snap-off-cutter.png', 
  'hacksaw-frames-blades': 'assets/products/hacksaw-frames-blades.png',
  'bearing-puller': 'assets/products/bearing-puller.png', 
  'allen-keys-sets': 'assets/products/allen-keys-sets.png', 
  'tool-bags': 'assets/products/tool-bags.png', 
  'two-wheeler-plumber-mini-tool-kits': 'assets/products/two-wheeler-plumber-mini-tool-kits.png', 
  'professional-universal-tool-kits': 'assets/products/professional-universal-tool-kits.png', 
  'cantilever-tool-box': 'assets/products/cantilever-tool-box.png', 
  'plastic-tool-box': 'assets/products/plastic-tool-box.png', 
  'tools-trolley': 'assets/products/tools-trolley.png', 
  'strap-filter-wrench-oil-can-grease-gun': 'assets/products/strap-filter-wrench-oil-can-grease-gun.png', 
  'bucket-grease-pump-rotary-barrel-pump': 'assets/products/bucket-grease-pump-rotary-barrel-pump.png', //new
  'hydraulic-bottle-jack-spare-kit': 'assets/products/hydraulic-bottle-jack-spare-kit.png', //new
  'hydraulic-trolley-jack-jack-stand-spare-kit': 'assets/products/hydraulic-trolley-jack-jack-stand-spare-kit.png', //new
  'carpenter-tools': 'assets/products/carpenter-tools.png', //new
  'calipers-spring-dividers': 'assets/products/calipers-spring-dividers.png', //new
  'hand-riveter': 'assets/products/hand-riveter.png', //new
  'spirit-levels': 'assets/products/spirit-levels.png', 
  'bench-vice': 'assets/products/bench-vice.png', //new
  'diamond-tile-wood-cutting-blades-cup-wheels': 'assets/products/diamond-tile-wood-cutting-blades-cup-wheels.png',
  'cut-off-wheels-gold-silver-series': 'assets/products/cut-off-wheels-gold-silver-series.png', //new
  'abrasive-paper-velcro-disc-gold-series': 'assets/products/abrasive-paper-velcro-disc-gold-series.png', //new
  'bimetal-hole-saw-deep-hole-saw': 'assets/products/bimetal-hole-saw-deep-hole-saw.png', //new
  'carbide-tip-hole-saw': 'assets/products/carbide-tip-hole-saw.png', //new
  'chalk-line-reel-set': 'assets/products/chalk-line-reel-set.png', //new
  'masonry-drill-bits-hss-drills-jobbers-series': 'assets/products/masonry-drill-bits-hss-drills-jobbers-series.png', //new
  'plus-hammer-drills': 'assets/products/plus-hammer-drills.png', 
  'steel-files-needle-files': 'assets/products/steel-files-needle-files.png', 
  'non-sparking-tools': 'assets/products/non-sparking-tools.png', 
};
