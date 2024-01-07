export interface PowerIndex {
  $ref: string;
  team: Team;
  season: number;
  stats: Stat[];
}

export interface Stat {
  name: string;
  displayName: string;
  description: string;
  abbreviation: string;
  value?: number;
  displayValue: string;
}

export interface Team {
  $ref: string;
}
