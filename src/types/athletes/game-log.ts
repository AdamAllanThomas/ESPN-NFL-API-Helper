export interface Gamelog {
  categories: GamelogCategory[];
  filters: Filter[];
  labels: string[];
  names: string[];
  displayNames: string[];
  events: { [key: string]: EventValue };
  seasonTypes: SeasonType[];
  glossary: Glossary[];
}

export interface GamelogCategory {
  name: string;
  displayName: string;
  count: number;
}

export interface EventValue {
  id: string;
  links: Link[];
  week: number;
  atVs: AtVs;
  gameDate: Date;
  score: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeamScore: string;
  awayTeamScore: string;
  gameResult: GameResult;
  opponent: Opponent;
  leagueName: LeagueName;
  leagueAbbreviation: League;
  leagueShortName: League;
  team: Opponent;
}

export enum AtVs {
  Empty = "@",
  Vs = "vs",
}

export enum GameResult {
  L = "L",
  W = "W",
}

export enum League {
  Nfl = "NFL",
}

export enum LeagueName {
  NationalFootballLeague = "National Football League",
}

export interface Link {
  language: Language;
  rel: Type[];
  href: string;
  text: Text;
  shortText: Text;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  En = "en",
}

export enum Type {
  App = "app",
  Boxscore = "boxscore",
  Clubhouse = "clubhouse",
  Depthchart = "depthchart",
  Desktop = "desktop",
  Draftpicks = "draftpicks",
  Event = "event",
  Gamecast = "gamecast",
  Injuries = "injuries",
  Mobile = "mobile",
  Now = "now",
  Pbp = "pbp",
  Photos = "photos",
  Recap = "recap",
  Roster = "roster",
  Schedule = "schedule",
  Sportscenter = "sportscenter",
  Stats = "stats",
  Summary = "summary",
  Team = "team",
  Teamstats = "teamstats",
  Tickets = "tickets",
  Transactions = "transactions",
  Videos = "videos",
}

export enum Text {
  BoxScore = "Box Score",
  Clubhouse = "Clubhouse",
  DepthChart = "Depth Chart",
  DraftPicks = "Draft Picks",
  Gamecast = "Gamecast",
  Injuries = "Injuries",
  Now = "Now",
  Photos = "photos",
  PlayByPlay = "Play-by-Play",
  Recap = "Recap",
  Roster = "Roster",
  Schedule = "Schedule",
  Statistics = "Statistics",
  Summary = "Summary",
  TeamStats = "Team Stats",
  Tickets = "Tickets",
  Transactions = "Transactions",
  Videos = "Videos",
}

export interface Opponent {
  id: string;
  uid: string;
  displayName?: string;
  abbreviation: string;
  links: Link[];
  logo: string;
  isAllStar?: boolean;
}

export interface Filter {
  displayName: string;
  name: string;
  value: string;
  options: Option[];
}

export interface Option {
  value: string;
  displayValue: string;
  shortDisplayName?: string;
}

export interface Glossary {
  abbreviation: string;
  displayName: string;
}

export interface SeasonType {
  displayName: string;
  categories: SeasonTypeCategory[];
  summary: Summary;
}

export interface SeasonTypeCategory {
  displayName: string;
  type: Type;
  splitType: string;
  events: EventElement[];
  totals: string[];
}

export interface EventElement {
  eventId: string;
  stats: string[];
}

export interface Summary {
  displayName: string;
  stats: Stat[];
}

export interface Stat {
  displayName: string;
  stats: string[];
  type: string;
}
