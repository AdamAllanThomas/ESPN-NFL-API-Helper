export interface Odds {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  $ref: string;
  provider: Provider;
  details?: string;
  overUnder?: number;
  spread?: number;
  overOdds?: number;
  underOdds?: number;
  awayTeamOdds?: AwayTeamOdds;
  homeTeamOdds?: HomeTeamOdds;
  links?: Link[];
  moneylineWinner: boolean;
  spreadWinner: boolean;
  open?: ItemClose;
  close?: ItemClose;
  current?: ItemClose;
  bettingOdds?: BettingOdds;
}

export interface AwayTeamOdds {
  favorite: boolean;
  underdog: boolean;
  moneyLine?: number;
  spreadOdds: number;
  open?: AwayTeamOddsClose;
  close?: AwayTeamOddsClose;
  current: AwayTeamOddsClose;
  team: Team;
}

export interface AwayTeamOddsClose {
  pointSpread: PointSpread;
  spread: Over;
  moneyLine?: Over;
}

export interface Over {
  value?: number;
  displayValue?: string;
  alternateDisplayValue: string;
}

export interface PointSpread {
  alternateDisplayValue: string;
}

export interface Team {
  $ref: string;
}

export interface BettingOdds {
  homeTeam: Team;
  awayTeam: Team;
  teamOdds: { [key: string]: TeamOdd };
}

export interface TeamOdd {
  oddId: string;
  value: string;
  betSlipUrl: string;
}

export interface ItemClose {
  over: Over;
  under: Over;
  total: Over;
}

export interface HomeTeamOdds {
  favorite: boolean;
  underdog: boolean;
  moneyLine?: number;
  spreadOdds: number;
  open?: HomeTeamOddsClose;
  close?: HomeTeamOddsClose;
  current: HomeTeamOddsClose;
  team: Team;
}

export interface HomeTeamOddsClose {
  pointSpread: Over;
  spread: Over;
  moneyLine?: Over;
}

export interface Link {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface Provider {
  $ref: string;
  id: string;
  name: string;
  priority: number;
}
