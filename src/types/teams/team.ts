export interface TeamData {
  team: Team;
}

export interface Team {
  id: string;
  uid: string;
  slug: string;
  location: string;
  name: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  isActive: boolean;
  logos: Logo[];
  record: Record;
  groups: Groups;
  links: NextEventLink[];
  franchise: Franchise;
  nextEvent: NextEvent[];
  standingSummary: string;
}

export interface Franchise {
  $ref: string;
  id: string;
  uid: string;
  slug: string;
  location: string;
  name: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  isActive: boolean;
  venue: FranchiseVenue;
  team: FranchiseTeam;
}

export interface FranchiseTeam {
  $ref: string;
}

export interface FranchiseVenue {
  $ref: string;
  id: string;
  fullName: string;
  address: Address;
  capacity: number;
  grass: boolean;
  indoor: boolean;
  images: Logo[];
}

export interface Address {
  city: string;
  state: string;
  zipCode: string;
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated?: string;
}

export interface Groups {
  id: string;
  parent: Parent;
  isConference: boolean;
}

export interface Parent {
  id: string;
}

export interface NextEventLink {
  language: Language;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  EnUS = "en-US",
}

export interface NextEvent {
  id: string;
  date: string;
  name: string;
  shortName: string;
  season: Season;
  seasonType: SeasonType;
  week: Week;
  timeValid: boolean;
  competitions: Competition[];
  links: NextEventLink[];
}

export interface Competition {
  id: string;
  date: string;
  attendance: number;
  type: CompetitionType;
  timeValid: boolean;
  neutralSite: boolean;
  boxscoreAvailable: boolean;
  ticketsAvailable: boolean;
  venue: CompetitionVenue;
  competitors: Competitor[];
  notes: any[];
  broadcasts: Broadcast[];
  tickets: Ticket[];
  status: Status;
}

export interface Broadcast {
  type: BroadcastType;
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

export interface BroadcastType {
  id: string;
  shortName: string;
}

export interface Competitor {
  id: string;
  type: string;
  order: number;
  homeAway: string;
  team: CompetitorTeam;
}

export interface CompetitorTeam {
  id: string;
  location: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  logos: Logo[];
  links: PurpleLink[];
}

export interface PurpleLink {
  rel: string[];
  href: string;
  text: string;
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
}

export interface Ticket {
  id: string;
  summary: string;
  description: string;
  maxPrice: number;
  startingPrice: number;
  numberAvailable: number;
  totalPostings: number;
  links: TicketLink[];
}

export interface TicketLink {
  rel: string[];
  href: string;
}

export interface CompetitionType {
  id: string;
  text: string;
  abbreviation: string;
  slug: string;
  type: string;
}

export interface CompetitionVenue {
  fullName: string;
  address: Address;
}

export interface Season {
  year: number;
  displayName: string;
}

export interface SeasonType {
  id: string;
  type: number;
  name: string;
  abbreviation: string;
}

export interface Week {
  number: number;
  text: string;
}

export interface Record {
  items: Item[];
}

export interface Item {
  type: string;
  summary: string;
  stats: Stat[];
  description?: string;
}

export interface Stat {
  name: string;
  value: number;
}
