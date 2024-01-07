export interface ScoringAndSplits {
  $ref: string;
  competition: Competition;
  team: Competition;
  splits: Splits;
}

export interface Competition {
  $ref: string;
}

export interface Splits {
  id: string;
  name: string;
  abbreviation: string;
  categories: Category[];
}

export interface Category {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  summary: string;
  stats: Stat[];
  athletes?: Athlete[];
}

export interface Athlete {
  athlete: Competition;
  statistics: Competition;
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  value: number;
  displayValue: string;
}
