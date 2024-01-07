export interface AgainstTheSpread {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  wins: number;
  losses: number;
  pushes: number;
  type: Type;
}

export interface Type {
  id: string;
  name: string;
  description: string;
}
