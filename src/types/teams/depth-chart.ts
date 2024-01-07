export interface DepthChart {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  positions: { [key: string]: PositionValue };
}

export interface PositionValue {
  position: PositionPosition;
  athletes: Athlete[];
}

export interface Athlete {
  slot: number;
  athlete: Parent;
  rank: number;
}

export interface Parent {
  $ref: string;
}

export interface PositionPosition {
  $ref: string;
  id: string;
  name: string;
  displayName: string;
  abbreviation: string;
  leaf: boolean;
  parent: Parent;
}
