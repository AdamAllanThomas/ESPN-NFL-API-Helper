export interface LineScore {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  $ref: string;
  value: number;
  displayValue: string;
  source: Source;
  period: number;
}

export interface Source {
  id: string;
  description: string;
}
