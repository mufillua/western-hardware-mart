/**
 * No Google Maps API key involved — both of these are plain public URLs
 * that work without one. directionsUrl opens turn-by-turn directions
 * (Maps app on mobile, Google Maps web on desktop); embedUrl is for a
 * read-only inline map preview via an <iframe>.
 */
export function directionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export function mapsEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
