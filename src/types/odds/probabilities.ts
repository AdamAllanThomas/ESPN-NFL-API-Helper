export interface Probabilities {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  $ref: string;
  competition: AwayTeam;
  play: AwayTeam;
  homeTeam: AwayTeam;
  awayTeam: AwayTeam;
  tiePercentage: number;
  homeWinPercentage: number;
  awayWinPercentage: number;
  lastModified: string;
  sequenceNumber: string;
  source: Source;
  secondsLeft: number;
}

export interface AwayTeam {
  $ref: string;
}

export interface Source {
  id: string;
  description: string;
  state: string;
}
