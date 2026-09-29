export interface TeamMember {
  name: string;
  role: string;
}

/**
 * Only name + role are shown — no background/bio copy, since none was
 * provided and nothing here should be invented about real people.
 */
export const TEAM: TeamMember[] = [
  { name: 'M. Maimoon', role: 'Partner' },
  { name: 'N. Lokhandwala', role: 'Partner' },
];
