export interface SeasonLeaders {
  $ref: string;
  id: string;
  name: string;
  abbreviation: string;
  type: string;
  categories: Category[];
}

export interface Category {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  leaders: Leader[];
}

export interface Leader {
  displayValue: string;
  value: number;
  rel: Rel[];
  athlete: Athlete;
  team: Athlete;
  statistics: Athlete;
}

export interface Athlete {
  $ref: string;
}

export enum Rel {
  Athlete = "athlete",
}
