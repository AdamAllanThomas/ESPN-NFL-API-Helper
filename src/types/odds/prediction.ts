export interface Prediction {
  $ref: string;
  name: string;
  shortName: string;
  lastModified: string;
  homeTeam: Team;
  awayTeam: Team;
}

export interface Team {
  team: TeamClass;
  statistics: Statistic[];
}

export interface Statistic {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  value: number;
  displayValue: string;
}

export interface TeamClass {
  $ref: string;
}
