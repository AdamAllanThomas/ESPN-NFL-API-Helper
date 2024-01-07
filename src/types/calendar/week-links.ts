export interface WeekLinks {
  $ref: string;
  number: number;
  startDate: string;
  endDate: string;
  text: string;
  rankings: Events;
  events: Events;
  talentpicks: Events;
  qbr: Events;
}

export interface Events {
  $ref: string;
}
