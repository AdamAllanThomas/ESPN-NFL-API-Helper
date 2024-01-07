export interface TeamRecord {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  $ref: string;
  id: string;
  name: string;
  abbreviation?: string;
  type: string;
  summary: string;
  displayValue: string;
  value: number;
  stats: Stat[];
  displayName?: string;
  shortDisplayName?: string;
  description?: string;
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  type: string;
  value: number;
  displayValue: string;
}
