export interface Splits {
  filters: Filter[];
  displayName: string;
  categories: Category[];
  labels: string[];
  names: string[];
  displayNames: string[];
  descriptions: string[];
  splitCategories: SplitCategory[];
}

export interface Category {
  name: string;
  displayName: string;
  count: number;
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

export interface SplitCategory {
  name: string;
  displayName: string;
  splits?: Split[];
}

export interface Split {
  displayName: string;
  stats: string[];
  abbreviation: string;
}
