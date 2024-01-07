export interface DetailedRosterData {
  team: DetailedRosterTeam;
}

export interface DetailedRosterTeam {
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
  athletes: Athlete[];
  groups: Groups;
  links: AthleteLink[];
  franchise: Franchise;
  nextEvent: NextEvent[];
  standingSummary: string;
}

export interface Athlete {
  id: string;
  uid: string;
  guid: string;
  type: string;
  alternateIds: AlternateIDS;
  firstName: string;
  lastName: string;
  fullName: string;
  displayName: string;
  shortName: string;
  weight: number;
  displayWeight: string;
  height: number;
  displayHeight: string;
  age: number;
  dateOfBirth: string;
  links: AthleteLink[];
  birthPlace: BirthPlace;
  college: College;
  slug: string;
  headshot: Headshot;
  jersey: string;
  position: Position;
  injuries: Injury[];
  linked: boolean;
  teams?: College[];
  projections?: College;
  experience: Experience;
  collegeAthlete: College;
  active: boolean;
  eventLog: College;
  status: SeasonTypeClass;
  draft?: Draft;
  debutYear?: number;
  hand?: Hand;
}

export interface AlternateIDS {
  sdr: string;
}

export interface BirthPlace {
  city?: string;
  state?: string;
  country: Country;
}

export enum Country {
  Canada = "Canada",
  Usa = "USA",
}

export interface College {}

export interface Draft {
  displayText: string;
  round: number;
  year: number;
  selection: number;
  pick?: College;
}

export interface Experience {
  years: number;
}

export interface Hand {
  type: string;
  abbreviation: string;
  displayValue: string;
}

export interface Headshot {
  href: string;
  alt: string;
}

export interface Injury {
  id: string;
  longComment: string;
  shortComment: string;
  status: string;
  date: string;
  athlete: College;
  source: Source;
  type: SeasonTypeClass;
  details: Details;
}

export interface Details {
  fantasyStatus: FantasyStatus;
  type: string;
  location: string;
  detail: string;
  side: string;
  returnDate: Date;
}

export interface FantasyStatus {
  description: string;
  abbreviation: string;
}

export interface Source {
  id: string;
  description: string;
  state: string;
}

export interface SeasonTypeClass {
  id: string;
  name: Name;
  description?: string;
  abbreviation: Abbreviation;
  type?: TypeTypeEnum | number;
}

export enum Abbreviation {
  Active = "Active",
  D = "D",
  DayToDay = "Day-To-Day",
  IR = "IR",
  O = "O",
  PracticeSquad = "Practice Squad",
  Q = "Q",
  Reg = "reg",
}

export enum Name {
  Active = "Active",
  DayToDay = "Day-To-Day",
  InjuryStatusDoubtful = "INJURY_STATUS_DOUBTFUL",
  InjuryStatusIR = "INJURY_STATUS_IR",
  InjuryStatusOut = "INJURY_STATUS_OUT",
  InjuryStatusQuestionable = "INJURY_STATUS_QUESTIONABLE",
  PracticeSquad = "Practice Squad",
  RegularSeason = "Regular Season",
}

export enum TypeTypeEnum {
  Active = "active",
  DayToDay = "day-to-day",
  PracticeSquad = "practice-squad",
}

export interface AthleteLink {
  language: string;
  rel: Rel[];
  href: string;
  text: Text;
  shortText: Text;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Rel {
  App = "app",
  Athlete = "athlete",
  Bio = "bio",
  Clubhouse = "clubhouse",
  Depthchart = "depthchart",
  Desktop = "desktop",
  Draftpicks = "draftpicks",
  Event = "event",
  Gamelog = "gamelog",
  Injuries = "injuries",
  News = "news",
  Now = "now",
  Overview = "overview",
  Photos = "photos",
  Playercard = "playercard",
  Preview = "preview",
  Roster = "roster",
  Schedule = "schedule",
  Splits = "splits",
  Sportscenter = "sportscenter",
  Stats = "stats",
  Summary = "summary",
  Team = "team",
  Tickets = "tickets",
  Transactions = "transactions",
  Venue = "venue",
}

export enum Text {
  Bio = "Bio",
  Clubhouse = "Clubhouse",
  DepthChart = "Depth Chart",
  DraftPicks = "Draft Picks",
  GameLog = "Game Log",
  Gamecast = "Gamecast",
  Injuries = "Injuries",
  News = "News",
  Now = "Now",
  Overview = "Overview",
  Photos = "photos",
  PlayerCard = "Player Card",
  Preview = "Preview",
  Roster = "Roster",
  Schedule = "Schedule",
  Splits = "Splits",
  Statistics = "Statistics",
  Stats = "Stats",
  Summary = "Summary",
  Tickets = "Tickets",
  Transactions = "Transactions",
}

export interface Position {
  id: string;
  name: string;
  displayName: string;
  abbreviation: string;
  leaf: boolean;
  parent?: College;
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

export interface NextEvent {
  id: string;
  date: string;
  name: string;
  shortName: string;
  season: Season;
  seasonType: SeasonTypeClass;
  week: Week;
  timeValid: boolean;
  competitions: Competition[];
  links: AthleteLink[];
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
  status: CompetitionStatus;
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
  type: Rel;
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
  rel: Rel[];
  href: string;
  text: Text;
}

export interface CompetitionStatus {
  clock: number;
  displayClock: string;
  period: number;
  type: StatusTypeClass;
}

export interface StatusTypeClass {
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
  rel: Rel[];
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
