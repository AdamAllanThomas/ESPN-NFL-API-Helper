export interface Roster {
  timestamp: Date;
  status: string;
  season: Season;
  athletes: Athlete[];
  coach: Coach[];
  team: RosterTeam;
}

export interface Athlete {
  position: string;
  items: Item[];
}

export interface Item {
  id: string;
  uid: string;
  guid: string;
  alternateIds: AlternateIDS;
  firstName: string;
  lastName: string;
  fullName: string;
  displayName: string;
  shortName: string;
  weight: number;
  displayWeight: string;
  height: number;
  displayHeight: string;
  age: number;
  dateOfBirth: string;
  debutYear?: number;
  links: Link[];
  birthPlace: BirthPlace;
  college?: College;
  slug: string;
  headshot?: Headshot;
  jersey?: string;
  position: Position;
  injuries: Injury[];
  teams?: TeamElement[];
  contracts: any[];
  experience: Experience;
  status: Status;
  hand?: Hand;
}

export interface AlternateIDS {
  sdr: string;
}

export interface BirthPlace {
  city?: string;
  state?: string;
  country: string;
}

export interface College {
  id: string;
  mascot: string;
  name: string;
  shortName: string;
  abbrev: string;
}

export interface Experience {
  years: number;
}

export interface Hand {
  type: string;
  abbreviation: string;
  displayValue: string;
}

export interface Headshot {
  href: string;
  alt: string;
}

export interface Injury {
  status: string;
  date: string;
}

export interface Link {
  language: Language;
  rel: Rel[];
  href: string;
  text: Text;
  shortText: Text;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  EnUS = "en-US",
}

export enum Rel {
  Athlete = "athlete",
  Bio = "bio",
  Desktop = "desktop",
  Gamelog = "gamelog",
  News = "news",
  Overview = "overview",
  Playercard = "playercard",
  Splits = "splits",
  Stats = "stats",
}

export enum Text {
  Bio = "Bio",
  GameLog = "Game Log",
  News = "News",
  Overview = "Overview",
  PlayerCard = "Player Card",
  Splits = "Splits",
  Stats = "Stats",
}

export interface Position {
  id: string;
  name: string;
  displayName: string;
  abbreviation: string;
  leaf: boolean;
  parent?: Position;
}

export interface Status {
  id: string;
  name: Abbreviation;
  type: Type;
  abbreviation: Abbreviation;
}

export enum Abbreviation {
  Active = "Active",
  DayToDay = "Day-To-Day",
  PracticeSquad = "Practice Squad",
}

export enum Type {
  Active = "active",
  DayToDay = "day-to-day",
  PracticeSquad = "practice-squad",
}

export interface TeamElement {
  $ref: string;
}

export interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  experience: number;
}

export interface Season {
  year: number;
  displayName: string;
  type: number;
  name: string;
}

export interface RosterTeam {
  id: string;
  abbreviation: string;
  location: string;
  name: string;
  displayName: string;
  clubhouse: string;
  color: string;
  logo: string;
  recordSummary: string;
  seasonSummary: string;
  standingSummary: string;
}
