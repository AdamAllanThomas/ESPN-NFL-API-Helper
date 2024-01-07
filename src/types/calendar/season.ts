export interface Season {
  $ref: string;
  year: number;
  startDate: string;
  endDate: string;
  displayName: string;
  type: Type;
  types: Types;
  rankings: Athletes;
  coaches: Athletes;
  athletes: Athletes;
  futures: Athletes;
  leaders: Athletes;
}

export interface Athletes {
  $ref: string;
}

export interface Type {
  $ref: string;
  id: string;
  type: number;
  name: string;
  abbreviation: string;
  year: number;
  startDate: string;
  endDate: string;
  hasGroups: boolean;
  hasStandings: boolean;
  hasLegs: boolean;
  groups: Athletes;
  week?: Week;
  weeks: Athletes;
  corrections?: Athletes;
  leaders?: Athletes;
  slug: string;
}

export interface Week {
  $ref: string;
  number: number;
  startDate: string;
  endDate: string;
  text: string;
  rankings: Athletes;
  events: Athletes;
  talentpicks: Athletes;
  qbr: Athletes;
}

export interface Types {
  $ref: string;
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Type[];
}
