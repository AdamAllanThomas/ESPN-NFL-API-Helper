export interface PlayByPlays {
  $ref: string;
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  $ref: string;
  id: string;
  sequenceNumber: string;
  type: Type;
  text: string;
  shortText: string;
  alternativeText: string;
  shortAlternativeText: string;
  awayScore: number;
  homeScore: number;
  period: Period;
  clock: Clock;
  scoringPlay: boolean;
  priority: boolean;
  scoreValue: number;
  modified: string;
  probability: Drive;
  wallclock: Date;
  start: End;
  end: End;
  statYardage: number;
  team?: Drive;
  participants?: Participant[];
  drive?: Drive;
  scoringType?: ScoringType;
  pointAfterAttempt?: PointAfterAttempt;
}

export interface Clock {
  value: number;
  displayValue: string;
}

export interface Drive {
  $ref: string;
}

export interface End {
  down: number;
  distance: number;
  yardLine: number;
  yardsToEndzone: number;
  downDistanceText?: string;
  shortDownDistanceText?: string;
  possessionText?: string;
  team?: Drive;
}

export interface Participant {
  athlete: Drive;
  position: Drive;
  statistics?: Drive;
  stats?: Stat[];
  order: number;
  type: string;
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  value: number;
  displayValue: string;
}

export interface Period {
  number: number;
}

export interface PointAfterAttempt {
  id: number;
  text: string;
  abbreviation: string;
  value: number;
}

export interface ScoringType {
  name: string;
  displayName: string;
  abbreviation: string;
}

export interface Type {
  id: string;
  text: string;
  abbreviation?: string;
}
