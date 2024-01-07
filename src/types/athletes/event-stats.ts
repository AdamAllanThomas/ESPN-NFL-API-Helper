export interface EventStats {
  $ref: string;
  competition: Athlete;
  splits: Splits;
  athlete: Athlete;
}

export interface Athlete {
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
