export interface Athletes {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  id: string;
  uid: string;
  guid: string;
  lastName: string;
  fullName: string;
  displayName: string;
  shortName: string;
  jersey?: string;
  active: boolean;
  firstName?: string;
  weight?: number;
  displayWeight?: string;
  height?: number;
  displayHeight?: string;
  age?: number;
  dateOfBirth?: string;
  experience?: Experience;
  birthPlace?: BirthPlace;
  dateOfDeath?: string;
  hand?: Hand;
  middleName?: string;
}

export interface BirthPlace {
  city?: string;
  state?: string;
  country?: Country;
}

export enum Country {
  Barbados = "Barbados",
  Canada = "Canada",
  Denmark = "Denmark",
  England = "England",
  France = "France",
  Germany = "Germany",
  Italy = "Italy",
  Jamaica = "Jamaica",
  Kenya = "Kenya",
  Mexico = "Mexico",
  Netherlands = "Netherlands",
  Nigeria = "Nigeria",
  Philippines = "Philippines",
  SouthAfrica = "South Africa",
  Tonga = "Tonga",
  Usa = "USA",
  VirginIslands = "Virgin Islands",
}

export interface Experience {
  years: number;
}

export interface Hand {
  type: Type;
  abbreviation: Abbreviation;
  displayValue: DisplayValue;
}

export enum Abbreviation {
  B = "B",
  L = "L",
  R = "R",
}

export enum DisplayValue {
  Both = "Both",
  Left = "Left",
  Right = "Right",
}

export enum Type {
  Both = "BOTH",
  Left = "LEFT",
  Right = "RIGHT",
}
