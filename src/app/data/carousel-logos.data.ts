export interface CarouselLogo {
  name: string;
  /** Path under public/ to a real, provided logo asset — omitted (never faked) when none exists. */
  logo?: string;
}

export const CAROUSEL_LOGOS: CarouselLogo[] = [
  { name: 'Asian Hydraulic', logo: 'assets/brands/asian.jpg' }, 
  { name: 'Delta Process Control Instruments', logo: 'assets/brands/delta.png' },
  { name: 'Hydroline Products', logo: 'assets/brands/hydroline.png' },
  { name: 'Yuken', logo: 'assets/brands/yuken.png' },
  { name: 'Polyhydron', logo: 'assets/brands/polyhydron.png' },
];
