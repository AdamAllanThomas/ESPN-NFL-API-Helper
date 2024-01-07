export interface WeeklyTalentPicks {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  pick: Pick;
  weekRecord: WeekRecord;
}

export interface Pick {
  person: Person;
  competition: Competition;
  competitor: Competition;
  correct: boolean;
}

export interface Competition {
  $ref: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  headshot: Headshot;
}

export interface Headshot {
  href: string;
  alt: string;
}

export interface WeekRecord {
  displayValue: DisplayValue;
  stats: Stat[];
  season: Competition;
}

export enum DisplayValue {
  The12487 = "124-87",
  The146110 = "146-110",
  The150106 = "150-106",
  The16096 = "160-96",
  The16294 = "162-94",
  The16393 = "163-93",
}

export interface Stat {
  name: Name;
  displayName: Description;
  shortDisplayName: Abbreviation;
  description: Description;
  abbreviation: Abbreviation;
  type: Name;
  value: number;
  displayValue: string;
}

export enum Abbreviation {
  L = "L",
  W = "W",
}

export enum Description {
  Losses = "Losses",
  WINS = "Wins",
}

export enum Name {
  Loss = "loss",
  Win = "win",
}
