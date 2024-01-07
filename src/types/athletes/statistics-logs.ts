export interface StatisticsLogs {
  $ref: string;
  entries: Entry[];
}

export interface Entry {
  season: Season;
  statistics: Statistic[];
}

export interface Season {
  $ref: string;
}

export interface Statistic {
  type: string;
  statistics: Season;
  team?: Season;
}
