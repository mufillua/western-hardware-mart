import { Category } from '../models/category.model';

/**
 * Categories reflect only what the uploaded catalogues actually contain.
 *
 * Consolidated from an earlier, more granular structure (132 categories,
 * one per catalogue sub-section) into a maximum of 25 customer-facing
 * categories, grouped by actual product function and application rather
 * than by catalogue section headings. See
 * backups/pre-category-consolidation-* for the original 132-category
 * structure and docs/category-consolidation-mapping.md for the full
 * old-slug -> new-slug mapping.
 */
export const CATEGORIES: Category[] = [
  {
    slug: 'process-flow-control-valves',
    name: 'Process & Flow Control Valves',
    description: '2-way, 3-way and 4-way ball valves, flow control valves with and without check valves, inline needle valves, and high-pressure check valves for one-directional flow control.',
    sourceBrands: ['asian-hydraulic', 'delta', 'yuken', 'polyhydron', 'hydroline'],
  },
  {
    slug: 'hydraulic-directional-pressure-valves',
    name: 'Hydraulic Directional & Pressure Control Valves',
    description: 'Solenoid, pilot, manual and cam-operated directional valves, in-line and pilot-controlled check valves, relief, reducing and unloading valves, pressure switches and load-holding cartridge valves.',
    sourceBrands: ['yuken', 'polyhydron'],
  },
  {
    slug: 'hydraulic-pumps',
    name: 'Hydraulic Pumps',
    description: 'Vane and gear pumps — fixed and variable displacement.',
    sourceBrands: ['yuken'],
  },
  {
    slug: 'couplings-tube-fittings',
    name: 'Hydraulic Couplings & Tube Fittings',
    description: 'ISO 7241 and ISO 16028 quick disconnect and flat face couplings, plus tube-to-tube, male stud, swivel and banjo fitting components.',
    sourceBrands: ['asian-hydraulic'],
  },
  {
    slug: 'instrumentation-gauges-accessories',
    name: 'Instrumentation, Gauges & Manifold Accessories',
    description: 'Pressure gauges, temperature gauges, thermocouples, RTDs and thermowells; diaphragm seal assemblies for gauge and transmitter protection; and two, three and five valve manifolds with gauge cocks and related accessories.',
    sourceBrands: ['delta', 'yuken'],
  },
  {
    slug: 'filtration-tank-accessories',
    name: 'Hydraulic Filtration & Tank Accessories',
    description: 'Filters, strainers, breathers, level gauges and tank/reservoir accessories.',
    sourceBrands: ['hydroline'],
  },
  {
    slug: 'marine-containers',
    name: 'Marine & Shipping Containers',
    description: 'Second-hand shipping containers, supplied directly by Western Hardware Mart.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'wrenches-spanners-allen-keys',
    name: 'Wrenches, Spanners & Allen Keys',
    description: 'Adjustable wrenches, pipe and chain pipe wrenches, L-spanners and box spanners, tubular and half-moon spanners, double-ended open jaw and ring spanners, slogging spanners, torque wrenches and Allen key sets.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'pliers-cutters-crimping-tools',
    name: 'Pliers, Cutters, Crimping & Riveting Tools',
    description: 'Combination, side cutting, long nose and VDE insulated pliers, nippers, auto wire strippers, crimping tools, PVC insulation tape, bolt/cable/tin cutters, hacksaw frames and blades, pruning shears, fiberglass-handle axes, PVC pipe cutters, snap-off cutters and hand riveters.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'screwdrivers-bits',
    name: 'Screwdrivers & Bits',
    description: 'Flat, Phillips and insulated screwdrivers, plus screwdriver bits in Phillips, hexagonal, Torx and flat-head profiles.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'sockets-socket-sets',
    name: 'Sockets & Socket Wrench Sets',
    description: 'Square drive sockets, bit sockets, deep sockets and socket sets with accessories, plus T-socket wrenches and double-side socket wrenches.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'hammers-punches-chisels',
    name: 'Hammers, Punches & Chisels',
    description: 'Ball pein, claw, club and machinist hammers with fiberglass handles, center and drift punches, leather punches, and octagonal, flat, rubber-grip and pneumatic chisels.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'workshop-equipment-jacks-vices',
    name: 'Workshop Equipment — Jacks, Pullers, Vices & Lubrication Tools',
    description: 'C-clamps and F-clamps, pipe vices, bench vices, bearing pullers, strap filter wrenches, hand oil pumps, lever-type grease guns, bucket grease pumps, rotary barrel pumps, and hydraulic bottle and trolley jacks with jack stands and spare kits.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'tool-storage-kits',
    name: 'Tool Storage, Bags & Kits',
    description: 'Tool bags and backpack tool bags, two-wheeler, plumber and mini tool kits, professional and universal tool kits, cantilever and plastic tool boxes, and tools trolleys.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'measuring-marking-carpentry-tools',
    name: 'Measuring, Marking & Carpentry Tools',
    description: 'Inside and outside calipers, spring dividers, spirit levels, chalk line reel sets, and carpenter tools such as jack planes and block planes with spare blades.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'abrasives-drill-bits-hole-saws',
    name: 'Abrasives, Drill Bits & Hole Saws',
    description: 'Diamond, tile, wood and granite cutting blades, cup wheels, Gold and Silver series cut-off wheels, abrasive paper and Velcro discs, bimetal and carbide-tip hole saws, masonry drill bits and sets, HSS Jobbers series drills, and SDS hammer drills with bits.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'files-finishing-tools',
    name: 'Files & Finishing Tools',
    description: 'Steel files and needle files — flat, hand, round and half round profiles — for finishing and deburring work.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'non-sparking-safety-tools',
    name: 'Non-Sparking Safety Tools',
    description: 'Spark-proof wrenches, pliers, snap ring pliers and hammers for use in hazardous and flammable environments.',
    sourceBrands: ['taparia'],
  },
  {
    slug: 'manual-hoists-pulley-blocks',
    name: 'Manual Chain Hoists & Pulley Blocks',
    description: 'Heavy duty, 360° rotating head and compact series hand chain pulley blocks, ratchet lever hoists, gear trolleys, heavy duty pulling & lifting machines, and wire rope and manila rope pulley blocks.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'electric-chain-hoists-trolleys',
    name: 'Electric Chain Hoists & Trolleys',
    description: 'Heavy duty electric chain hoists in single-speed and dual-speed configurations, and electric trolleys.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'slings-chains-lashing',
    name: 'Slings, Chains & Lashing Equipment',
    description: 'Polyester duplex webbing slings, polyester round slings, cargo lashing ratchet straps and G80 alloy steel lifting chain.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'rigging-hardware-shackles-hooks-links',
    name: 'Rigging Hardware — Shackles, Hooks, Links & Wire Rope Fittings',
    description: 'Screw pin and nut-bolt dee and bow shackles; G80/G100 sling, clevis, self-locking, swivel, grab, foundry, container-lifting and weld-on hooks; G80 master links, master link assemblies, connecting links and chain shorteners; and wire rope clamps, edge protectors, DIN 580 eye bolts, rotating lifting eye bolts and turnbuckles.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'plate-pipe-lifting-clamps',
    name: 'Plate & Pipe Lifting Clamps',
    description: 'Horizontal (PDB type), lateral, vertical and universal plate lifting clamps, pipe lifting clamps (TPH type) and beam clamps.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'material-handling-trucks-trolleys',
    name: 'Material Handling Trucks & Trolleys',
    description: 'Scissor lift pallet trucks, hand pallet trucks, rough terrain trucks, hydraulic lifting tables, drum trolleys, drum lifters, drum lifter-cum-tilters, and hand and electric stackers.',
    sourceBrands: ['western-hardware-mart'],
  },
  {
    slug: 'specialty-lifting-equipment',
    name: 'Specialty Lifting Equipment',
    description: 'Cable pullers, permanent magnet lifters, industrial skates, spring balancers, ratchet load binders and wire mesh containers.',
    sourceBrands: ['western-hardware-mart'],
  },
];
