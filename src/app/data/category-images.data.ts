/**
 * Representative real photos for each of the 25 consolidated categories,
 * mapped from the source catalogue PDFs or (for Hydroline/Yuken) the
 * manufacturer's own site — never an unrelated stock photo as a stand-in.
 * Consolidated from the previous 132-category image map; see
 * docs/category-consolidation-mapping.md for how each new category's
 * image was chosen from its merged categories.
 *
 * Categories with no verifiably real photo available are left as an
 * empty string placeholder — the categories page falls back to a
 * letter-icon tile rather than showing a broken or fabricated image.
 * The 11 Taparia tool categories are still pending their own real
 * photos (to be filled in once available); Marine & Shipping
 * Containers has no product photo on file.
 */
export const CATEGORY_IMAGES: Record<string, string> = {
  // Asian Hydraulic / Delta / Hydroline / Yuken / Western Hardware Mart
  'process-flow-control-valves': 'assets/products/khb2sf.jpg', // Process & Flow Control Valves
  'hydraulic-directional-pressure-valves': 'https://www.yukenindia.com/wp-content/uploads/2021/09/DSG01_thmbpng.png', // Hydraulic Directional & Pressure Control Valves
  'hydraulic-pumps': 'assets/products/HPV-Series-Single-Vane-Pumps.jpg', // Hydraulic Pumps
  'couplings-tube-fittings': 'assets/products/ahf04-coupling.jpg', // Hydraulic Couplings & Tube Fittings
  'instrumentation-gauges-accessories': 'assets/products/delta-seal-src.png', // Instrumentation, Gauges & Manifold Accessories
  'filtration-tank-accessories': 'https://hydroline.com/images/IFR2.jpg', // Hydraulic Filtration & Tank Accessories
  'marine-containers': 'assets/products/marine-container.png', // Marine & Shipping Containers

  // Taparia hand tools (11) — images pending, to be filled in
  'wrenches-spanners-allen-keys': 'assets/products/adjustable-wrenches.png', // Wrenches, Spanners & Allen Keys
  'pliers-cutters-crimping-tools': 'assets/products/pliers-group.png', // Pliers, Cutters, Crimping & Riveting Tools
  'screwdrivers-bits': 'assets/products/screw-driver-bits.png', // Screwdrivers & Bits
  'sockets-socket-sets': 'assets/products/sockets-accessories-sets.png', // Sockets & Socket Wrench Sets
  'hammers-punches-chisels': 'assets/products/hammer-group.png', // Hammers, Punches & Chisels
  'workshop-equipment-jacks-vices': 'assets/products/hydraulic-trolley-jack-jack-stand-spare-kit.png', // Workshop Equipment — Jacks, Pullers, Vices & Lubrication Tools
  'tool-storage-kits': 'assets/products/plastic-tool-box.png', // Tool Storage, Bags & Kits
  'measuring-marking-carpentry-tools': 'assets/products/carpenter-tools.png', // Measuring, Marking & Carpentry Tools
  'abrasives-drill-bits-hole-saws': 'assets/products/abrasive-paper-velcro-disc-gold-series.png', // Abrasives, Drill Bits & Hole Saws
  'files-finishing-tools': 'assets/products/steel-files-needle-files.png', // Files & Finishing Tools
  'non-sparking-safety-tools': 'assets/products/non-sparking-tools.png', // Non-Sparking Safety Tools

  // Lifting & Rigging Equipment (7)
  'manual-hoists-pulley-blocks': 'assets/products/lift-heavy-duty-chain-pulley-block.jpg', // Manual Chain Hoists & Pulley Blocks
  'electric-chain-hoists-trolleys': 'assets/products/lift-heavy-duty-electric-chain-hoist.jpg', // Electric Chain Hoists & Trolleys
  'slings-chains-lashing': 'assets/products/lift-polyester-duplex-webbing-sling.jpg', // Slings, Chains & Lashing Equipment
  'rigging-hardware-shackles-hooks-links': 'assets/products/lift-screw-pin-dee-shackle.jpg', // Rigging Hardware — Shackles, Hooks, Links & Wire Rope Fittings
  'plate-pipe-lifting-clamps': 'assets/products/lift-horizontal-plate-lifting-clamp.jpg', // Plate & Pipe Lifting Clamps
  'material-handling-trucks-trolleys': 'assets/products/lift-scissor-lift-pallet-truck.jpg', // Material Handling Trucks & Trolleys
  'specialty-lifting-equipment': 'assets/products/lift-cable-puller.jpg', // Specialty Lifting Equipment
};
