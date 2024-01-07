export interface Futures {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  $ref: string;
  id: number;
  name: string;
  futures: Future[];
  type?: Type;
  displayName: string;
}

export interface Future {
  provider: Provider;
  books: Book[];
}

export interface Book {
  team: Team;
  value: string;
}

export interface Team {
  $ref: string;
}

export interface Provider {
  id: string;
  name: string;
  active: number;
  priority: number;
}

export enum Type {
  WinConference = "winConference",
  WinDivision = "winDivision",
  WinLeague = "winLeague",
}
