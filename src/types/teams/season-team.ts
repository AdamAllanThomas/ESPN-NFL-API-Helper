export interface SeasonTeam {
  $ref: string;
  id: string;
  guid: string;
  uid: string;
  alternateIds: AlternateIDS;
  slug: string;
  location: string;
  name: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  isActive: boolean;
  isAllStar: boolean;
  logos: Logo[];
  record: AgainstTheSpreadRecords;
  venue: Venue;
  groups: AgainstTheSpreadRecords;
  ranks: AgainstTheSpreadRecords;
  statistics: AgainstTheSpreadRecords;
  leaders: AgainstTheSpreadRecords;
  links: Link[];
  injuries: AgainstTheSpreadRecords;
  notes: AgainstTheSpreadRecords;
  againstTheSpreadRecords: AgainstTheSpreadRecords;
  franchise: AgainstTheSpreadRecords;
  events: AgainstTheSpreadRecords;
  transactions: AgainstTheSpreadRecords;
  coaches: AgainstTheSpreadRecords;
  attendance: AgainstTheSpreadRecords;
}

export interface AgainstTheSpreadRecords {
  $ref: string;
}

export interface AlternateIDS {
  sdr: string;
}

export interface Link {
  language: Language;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  EnUS = "en-US",
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: string;
}

export interface Venue {
  $ref: string;
  id: string;
  fullName: string;
  address: Address;
  capacity: number;
  grass: boolean;
  indoor: boolean;
  images: any[];
}

export interface Address {
  city: string;
  state: string;
  zipCode: string;
}
