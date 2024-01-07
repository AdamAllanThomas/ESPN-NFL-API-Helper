export interface YearScoreboard {
  leagues: League[];
  events: Event[];
}

export interface Event {
  id: string;
  uid: string;
  date: string;
  name: string;
  shortName: string;
  season: EventSeason;
  week: Week;
  competitions: Competition[];
  links: EventLink[];
  status: Status;
}

export interface Competition {
  id: string;
  uid: string;
  date: string;
  attendance: number;
  type: CompetitionType;
  timeValid: boolean;
  neutralSite: boolean;
  conferenceCompetition: boolean;
  playByPlayAvailable: boolean;
  recent: boolean;
  venue: CompetitionVenue;
  competitors: Competitor[];
  notes: Note[];
  status: Status;
  broadcasts: Broadcast[];
  leaders?: CompetitionLeader[];
  format: Format;
  startDate: string;
  geoBroadcasts: GeoBroadcast[];
  headlines?: Headline[];
}

export interface Broadcast {
  market: string;
  names: string[];
}

export interface Competitor {
  id: string;
  uid: string;
  type: string;
  order: number;
  homeAway: string;
  winner: boolean;
  team: Team;
  score: string;
  linescores?: Linescore[];
  statistics: any[];
  records?: Record[];
}

export interface Linescore {
  value: number;
}

export interface Record {
  name: string;
  abbreviation?: string;
  type: string;
  summary: string;
}

export interface Team {
  id: string;
  uid: string;
  location: string;
  name?: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color?: string;
  alternateColor?: string;
  isActive: boolean;
  venue?: TeamClass;
  links: TeamLink[];
  logo: string;
}

export interface TeamLink {
  rel: string[];
  href: string;
  text: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface TeamClass {
  id: string;
}

export interface Format {
  regulation: Regulation;
}

export interface Regulation {
  periods: number;
}

export interface GeoBroadcast {
  type: GeoBroadcastType;
  market: Market;
  media: Media;
  lang: string;
  region: string;
}

export interface Market {
  id: string;
  type: string;
}

export interface Media {
  shortName: string;
}

export interface GeoBroadcastType {
  id: string;
  shortName: string;
}

export interface Headline {
  description: string;
  type: string;
  shortLinkText: string;
}

export interface CompetitionLeader {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  leaders: LeaderLeader[];
}

export interface LeaderLeader {
  displayValue: string;
  value: number;
  athlete: Athlete;
  team: TeamClass;
}

export interface Athlete {
  id: string;
  fullName: string;
  displayName: string;
  shortName: string;
  links: AthleteLink[];
  headshot: string;
  jersey?: string;
  position: Position;
  team: TeamClass;
  active: boolean;
}

export interface AthleteLink {
  rel: string[];
  href: string;
}

export interface Position {
  abbreviation: string;
}

export interface Note {
  type: string;
  headline: string;
}

export interface Status {
  clock: number;
  displayClock: string;
  period: number;
  type: StatusType;
}

export interface StatusType {
  id: string;
  name: string;
  state: string;
  completed: boolean;
  description: string;
  detail: string;
  shortDetail: string;
  altDetail?: string;
}

export interface CompetitionType {
  id: string;
  abbreviation: string;
}

export interface CompetitionVenue {
  id: string;
  fullName: string;
  address: Address;
  capacity: number;
  indoor: boolean;
}

export interface Address {
  city: string;
  state: string;
}

export interface EventLink {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface EventSeason {
  year: number;
  type: number;
  slug: string;
}

export interface Week {
  number: number;
}

export interface League {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  slug: string;
  season: LeagueSeason;
  logos: Logo[];
  calendarType: string;
  calendarIsWhitelist: boolean;
  calendarStartDate: string;
  calendarEndDate: string;
  calendar: Calendar[];
}

export interface Calendar {
  label: string;
  value: string;
  startDate: string;
  endDate: string;
  entries: Entry[];
}

export interface Entry {
  label: string;
  alternateLabel: string;
  detail: string;
  value: string;
  startDate: string;
  endDate: string;
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: string;
}

export interface LeagueSeason {
  year: number;
  startDate: string;
  endDate: string;
  displayName: string;
  type: SeasonType;
}

export interface SeasonType {
  id: string;
  type: number;
  name: string;
  abbreviation: string;
}
