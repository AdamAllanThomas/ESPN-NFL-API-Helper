export interface Qbr {
  $ref: string;
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  athlete: Athlete;
  team: Athlete;
  event: Athlete;
  season: Athlete;
  splits: Splits;
}

export interface Athlete {
  $ref: string;
}

export interface Splits {
  id: string;
  name: SplitsName;
  abbreviation: SplitsAbbreviation;
  categories: Category[];
}

export enum SplitsAbbreviation {
  QBRWeek = "QBRWeek",
}

export interface Category {
  name: CategoryName;
  displayName: CategoryDisplayName;
  shortDisplayName: CategoryDisplayName;
  abbreviation: CategoryAbbreviation;
  stats: Stat[];
}

export enum CategoryAbbreviation {
  Gen = "GEN",
}

export enum CategoryDisplayName {
  General = "General",
}

export enum CategoryName {
  General = "general",
}

export interface Stat {
  name: StatName;
  displayName: StatDisplayName;
  shortDisplayName: StatDisplayName;
  description: string;
  abbreviation: StatAbbreviation;
  value: number;
  displayValue: string;
}

export enum StatAbbreviation {
  Cwa = "CWA",
  Def = "DEF",
  Epe = "EPE",
  Exp = "EXP",
  Fum = "FUM",
  Int = "INT",
  Pa = "PA",
  Pas = "PAS",
  Pen = "PEN",
  Qbp = "QBP",
  Qbr = "QBR",
  Rep = "REP",
  Run = "RUN",
  Sac = "SAC",
  Scr = "SCR",
  Tot = "TOT",
  Tqbr = "TQBR",
  Unqrk = "UNQRK",
  Yac = "YAC",
}

export enum StatDisplayName {
  CwAvg = "CW AVG",
  DefFaced = "DEF FACED",
  ExpPassEpa = "EXP PASS EPA",
  ExpSack = "EXP SACK",
  FumEpa = "FUM EPA",
  IntEpa = "INT EPA",
  PTSAdded = "PTS Added",
  Pass = "Pass",
  Penalty = "PENALTY",
  PointsAdded = "Points Added",
  QbPlays = "QB PLAYS",
  RawQbr = "RAW QBR",
  Run = "RUN",
  RushEpa = "RUSH EPA",
  Sack = "SACK",
  ScramEpa = "SCRAM EPA",
  TotalEpa = "TOTAL EPA",
  TotalQbr = "TOTAL QBR",
  UnqualifiedRank = "Unqualified Rank",
  YacEpa = "YAC EPA",
}

export enum StatName {
  ActionPlays = "actionPlays",
  AvgOppDQBR = "avgOppDQBR",
  CwAverage = "cwAverage",
  CwepaFumbles = "cwepaFumbles",
  CwepaInterceptions = "cwepaInterceptions",
  CwepaPasses = "cwepaPasses",
  CwepaPassesCondensed = "cwepaPassesCondensed",
  CwepaPenalties = "cwepaPenalties",
  CwepaRuns = "cwepaRuns",
  CwepaRushes = "cwepaRushes",
  CwepaSacked = "cwepaSacked",
  CwepaSackedCondensed = "cwepaSackedCondensed",
  CwepaScrambles = "cwepaScrambles",
  CwepaTotal = "cwepaTotal",
  CwepaYardsAfterCarry = "cwepaYardsAfterCarry",
  Qbpaa = "qbpaa",
  Qbr = "qbr",
  SchedAdjQBR = "schedAdjQBR",
  UnqualifiedRank = "unqualifiedRank",
}

export enum SplitsName {
  QBRWeeklyGameStats = "QBR Weekly/Game stats",
}
