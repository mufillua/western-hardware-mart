import { Category } from '../models/category.model';

/**
 * Categories reflect only what the uploaded catalogues actually contain.
 * Full per-product data architecture arrives in Phase 2 — this is a
 * lightweight summary list to drive the homepage category grid.
 */
export const CATEGORIES: Category[] = [
  {
    slug: 'ball-valves',
    name: 'High Pressure Ball Valves',
    description: '2-way, 3-way and 4-way carbon steel ball valves, PN up to 500 bar.',
    sourceBrands: ['asian-hydraulic'],
  },
  {
    slug: 'flow-control-needle-valves',
    name: 'Flow Control & Needle Valves',
    description: 'Flow control valves with and without check valves, plus inline needle valves.',
    sourceBrands: ['asian-hydraulic', 'delta', 'yuken', 'polyhydron'],
  },
  {
    slug: 'check-valves',
    name: 'Check Valves',
    description: 'Inline high pressure check valves for one-directional flow control.',
    sourceBrands: ['asian-hydraulic', 'hydroline'],
  },
  {
    slug: 'couplings',
    name: 'Hydraulic Couplings',
    description: 'ISO 7241 and ISO 16028 quick disconnect and flat face couplings.',
    sourceBrands: ['asian-hydraulic'],
  },
  {
    slug: 'tube-fittings',
    name: 'Tube Fittings',
    description: 'Tube-to-tube, male stud, swivel, banjo and related fitting components.',
    sourceBrands: ['asian-hydraulic'],
  },
  {
    slug: 'instrumentation',
    name: 'Pressure & Temperature Instrumentation',
    description: 'Pressure gauges, temperature gauges, thermocouples, RTDs and thermowells.',
    sourceBrands: ['delta'],
  },
  {
    slug: 'diaphragm-seals',
    name: 'Diaphragm Seals',
    description: 'Diaphragm seal assemblies for gauge and transmitter protection.',
    sourceBrands: ['delta'],
  },
  {
    slug: 'manifold-valves-accessories',
    name: 'Manifold Valves & Accessories',
    description: 'Two, three and five valve manifolds, gauge cocks and related accessories.',
    sourceBrands: ['delta', 'yuken'],
  },
  {
    slug: 'filtration-tank-accessories',
    name: 'Hydraulic Filtration & Tank Accessories',
    description: 'Filters, strainers, breathers, level gauges and tank/reservoir accessories.',
    sourceBrands: ['hydroline'],
  },
  {
    slug: 'hydraulic-pumps',
    name: 'Hydraulic Pumps',
    description: 'Vane and gear pumps — fixed and variable displacement.',
    sourceBrands: ['yuken'],
  },
  {
    slug: 'directional-control-valves',
    name: 'Directional Control Valves',
    description: 'Solenoid, pilot, manual and cam-operated directional valves, plus in-line and pilot-controlled check valves.',
    sourceBrands: ['yuken', 'polyhydron'],
  },
  {
    slug: 'pressure-control-valves',
    name: 'Pressure Control Valves',
    description: 'Relief, reducing and unloading valves, pressure switches, and load-holding cartridge valves.',
    sourceBrands: ['yuken', 'polyhydron'],
  },
];
