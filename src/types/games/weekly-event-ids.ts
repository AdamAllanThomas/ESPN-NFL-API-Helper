export interface WeeklyEventIDs {
  $meta: Meta;
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Meta {
  parameters: Parameters;
}

export interface Parameters {
  week: string[];
  season: string[];
  seasontypes: string[];
}

export interface Item {
  $ref: string;
}
