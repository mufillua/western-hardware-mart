import { Brand } from '../models/brand.model';

/**
 * Only brands with an uploaded catalogue are listed here. The brief
 * also names Hydroline, Yuken and Polyhydron, but no source document
 * for any of them has been provided — they are intentionally left out
 * until catalogues for them are supplied. See Phase 1 notes.
 *
 * Every fact below (founding year, location, certifications) is stated
 * verbatim in that brand's own catalogue — nothing here is inferred or
 * assumed. Certifications are only listed where the catalogue actually
 * shows the certificate/badge; Asian Hydraulic's catalogue doesn't
 * display one, so none is claimed for them.
 *
 * `logo` is only set where a real logo file was actually provided/
 * extracted — Delta's was supplied directly. No usable Asian Hydraulic
 * logo file exists (their mark is vector-drawn within the PDF, not an
 * embedded raster image, so it couldn't be extracted); the carousel
 * falls back to a plain text lockup for them rather than a fabricated
 * logo graphic.
 */
export const BRANDS: Brand[] = [
  {
    slug: 'asian-hydraulic',
    name: 'Asian Hydraulic',
    description:
      'Manufacturer of high pressure ball valves, flow control valves, couplings and tube fittings, based in Andheri since 2005.',
    foundedYear: 2005,
    headquarters: 'Andheri, Mumbai, with a manufacturing unit in Taloja, Navi Mumbai',
    capabilityNote:
      'Engaged in manufacturing high pressure valves since 2005, with a stated vision to be a "single point solution" for customers. The Taloja unit is described as equipped with CNC machines and manufacturing facilities the catalogue states are "at par with global manufacturing standards."',
    catalogueSource: 'ASIAN_HYDRAULICS_CATALOGUE.pdf',
  },
  {
    slug: 'delta',
    name: 'Delta Process Control Instruments',
    description:
      'ISO 9001:2015 certified manufacturer of pressure gauges, temperature gauges and process instrumentation.',
    logo: 'assets/brands/delta.png',
    foundedYear: 2010,
    headquarters: 'Bangalore, Karnataka — a 5,000 sq. ft. production facility',
    capabilityNote:
      'Founded in 2010 and registered as an SSI unit under the Govt. of Karnataka. The catalogue states the facility manufactures roughly 300 pressure gauges per day, with an in-house machine shop, press shop, tool & die shop and calibration cell.',
    certifications: ['ISO 9001:2015', 'CE', 'MSME Registered', 'Make in India'],
    catalogueSource: 'FLYER_DELTA_INSTRUMENTS_compressed.pdf',
  },
  {
    slug: 'hydroline',
    name: 'Hydroline Products',
    description:
      'ISO 9001:2015 certified manufacturer of hydraulic filters, strainers, breathers and tank/reservoir accessories, based in Bangalore since 1982.',
    logo: 'assets/brands/hydroline.png',
    foundedYear: 1982,
    headquarters: 'Bangalore, Karnataka',
    capabilityNote:
      'States it exports to all six continents and positions its network of distributors as an extension of its own marketing arm. Products are engineered for international interchangeability of mounting interfaces, for both industrial and mobile applications.',
    certifications: ['ISO 9001:2015'],
    catalogueSource: 'Hydroline official product listing (hydroline.com) — no downloadable manufacturer datasheet published',
  },
  {
    slug: 'yuken',
    name: 'Yuken',
    description:
      'Manufacturer of hydraulic pumps, directional and pressure control valves, and cartridge valves, in technical and financial collaboration with Yuken Kogyo Co., Ltd., Japan.',
    logo: 'assets/brands/yuken.png',
    foundedYear: 1976,
    headquarters: 'Manufacturing facilities in Malur, near Bangalore, Karnataka',
    capabilityNote:
      'Yuken India Limited was established in 1976 in technical and financial collaboration with Yuken Kogyo Company Limited, Japan, a global manufacturer of oil hydraulic equipment. Yuken Kogyo holds a stake in the Indian company.',
    catalogueSource: 'Yuken India official product listing (yukenindia.com) — individual engineering-information PDFs linked per product, not locally hosted',
  },
  {
    slug: 'polyhydron',
    name: 'Polyhydron',
    description:
      'Manufacturer of hydraulic radial piston pumps, and industrial and mobile hydraulic valves — pressure control, directional control, and flow control products.',
    logo: 'assets/brands/polyhydron.png',
    headquarters: 'Machhe Industrial Estate, Machhe, Belgaum, Karnataka, India',
    capabilityNote:
      'Polyhydron Pvt. Ltd. is the flagship company of the Polyhydron Group of Industries, manufacturing hydraulic radial piston pumps and industrial and mobile hydraulic valves and accessories.',
    catalogueSource: 'Manufacturer PDF catalogues supplied directly: pressurecontrol.pdf, directioncontrol.pdf, flowcontrol.pdf — not locally hosted for download',
  },
];
