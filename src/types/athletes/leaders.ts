export interface CurrentLeaders {
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
  rel: string[];
  athlete: Athlete;
  statistics: Athlete;
  active: boolean;
}

export interface Athlete {
  $ref: string;
}
