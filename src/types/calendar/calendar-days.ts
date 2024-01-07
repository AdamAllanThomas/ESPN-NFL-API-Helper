export interface CalendarDays {
  $ref: string;
  type: string;
  startDate: string;
  endDate: string;
  eventDate: EventDate;
  sections: Section[];
  season: Season;
}

export interface EventDate {
  type: string;
  dates: string[];
}

export interface Season {
  $ref: string;
}

export interface Section {
  label: string;
  value: string;
  startDate: string;
  endDate: string;
  entries: Entry[];
  seasonType: Season;
}

export interface Entry {
  label: string;
  alternateLabel: string;
  detail: string;
  value: string;
  startDate: string;
  endDate: string;
}
