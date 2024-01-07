export interface TalentPicks {
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
  firstName: FirstName;
  lastName: LastName;
  displayName: DisplayName;
  headshot: Headshot;
}

export enum DisplayName {
  KimberleyMartin = "Kimberley Martin",
  SethWickersham = "Seth Wickersham",
}

export enum FirstName {
  Kimberley = "Kimberley",
  Seth = "Seth",
}

export interface Headshot {
  href: string;
  alt: DisplayName;
}

export enum LastName {
  Martin = "Martin",
  Wickersham = "Wickersham",
}

export interface WeekRecord {
  displayValue: string;
  stats: Stat[];
  season: Competition;
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
