export interface CurrentTeamLeaders {
  currentSeason: Season;
  requestedSeason: Season;
  teamLeaders: TeamLeadersClass;
}

export interface Season {
  year: number;
  displayName: string;
  startDate: Date;
  endDate: Date;
  type: Type;
}

export interface Type {
  id: string;
  type: number;
  name: string;
  startDate: Date;
  endDate: Date;
  week: Week;
}

export interface Week {
  number: number;
  startDate: Date;
  endDate: Date;
  text: string;
}

export interface TeamLeadersClass {
  id: string;
  name: string;
  abbreviation: string;
  categories: Category[];
}

export interface Category {
  name: string;
  displayName: string;
  abbreviation: string;
  description: string;
  split: string;
  leaders: Leader[];
}

export interface Leader {
  displayValue: string;
  value: number;
  ranks: string;
  team: Team;
}

export interface Team {
  id: string;
  uid: string;
  guid: string;
  name: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  logos: Logo[];
  links: Link[];
  slug: string;
  group: Group;
  ranks: Group;
}

export interface Group {}

export interface Link {
  language: Language;
  rel: LinkRel[];
  href: string;
  text: Text;
  shortText: Text;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  En = "en",
}

export enum LinkRel {
  Clubhouse = "clubhouse",
  Depthchart = "depthchart",
  Desktop = "desktop",
  Draftpicks = "draftpicks",
  Injuries = "injuries",
  Photos = "photos",
  Roster = "roster",
  Schedule = "schedule",
  Stats = "stats",
  Team = "team",
  Tickets = "tickets",
  Transactions = "transactions",
}

export enum Text {
  Clubhouse = "Clubhouse",
  DepthChart = "Depth Chart",
  DraftPicks = "Draft Picks",
  Injuries = "Injuries",
  Photos = "photos",
  Roster = "Roster",
  Schedule = "Schedule",
  Statistics = "Statistics",
  Tickets = "Tickets",
  Transactions = "Transactions",
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  rel: LogoRel[];
}

export enum LogoRel {
  Dark = "dark",
  Default = "default",
  Full = "full",
  Scoreboard = "scoreboard",
}
