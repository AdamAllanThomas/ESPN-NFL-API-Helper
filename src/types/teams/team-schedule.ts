export interface TeamSchedule {
  timestamp: Date;
  status: string;
  season: RequestedSeasonClass;
  team: TeamScheduleTeam;
  events: Event[];
  requestedSeason: RequestedSeasonClass;
  byeWeek: number;
}

export interface Event {
  id: string;
  date: string;
  name: string;
  shortName: string;
  season: EventSeason;
  seasonType: SeasonType;
  week: Week;
  timeValid: boolean;
  competitions: Competition[];
  links: EventLink[];
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
  venue: Venue;
  competitors: Competitor[];
  notes: any[];
  broadcasts: Broadcast[];
  status: Status;
  tickets?: Ticket[];
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
  type: TypeElement;
  order: number;
  homeAway: HomeAway;
  winner?: boolean;
  team: CompetitorTeam;
  score?: Score;
  record?: Record[];
  leaders?: CompetitorLeader[];
}

export enum HomeAway {
  Away = "away",
  Home = "home",
}

export interface CompetitorLeader {
  name: LeaderName;
  displayName: LeaderDisplayName;
  abbreviation: LeaderAbbreviation;
  leaders: LeaderLeader[];
}

export enum LeaderAbbreviation {
  Pyds = "PYDS",
  Recyds = "RECYDS",
  Ryds = "RYDS",
}

export enum LeaderDisplayName {
  PassingLeader = "Passing Leader",
  ReceivingLeader = "Receiving Leader",
  RushingLeader = "Rushing Leader",
}

export interface LeaderLeader {
  displayValue: string;
  value: number;
  athlete: Athlete;
}

export interface Athlete {
  id: string;
  lastName: string;
  displayName: string;
  shortName: string;
  links: AthleteLink[];
}

export interface AthleteLink {
  rel: PurpleRel[];
  href: string;
}

export enum PurpleRel {
  Athlete = "athlete",
  Bio = "bio",
  Desktop = "desktop",
  Event = "event",
  Gamelog = "gamelog",
  News = "news",
  Overview = "overview",
  Playercard = "playercard",
  Splits = "splits",
  Stats = "stats",
  Tickets = "tickets",
  Venue = "venue",
}

export enum LeaderName {
  PassingLeader = "passingLeader",
  ReceivingLeader = "receivingLeader",
  RushingLeader = "rushingLeader",
}

export interface Record {
  id: string;
  abbreviation?: string;
  displayName: RecordDisplayName;
  shortDisplayName: ShortDisplayName;
  description: RecordDescription;
  type: RecordType;
  displayValue: string;
}

export enum RecordDescription {
  AwayRecord = "Away Record",
  HomeRecord = "Home Record",
  OverallRecord = "Overall Record",
}

export enum RecordDisplayName {
  Home = "Home",
  RecordYearToDate = "Record Year To Date",
  Road = "Road",
}

export enum ShortDisplayName {
  Away = "AWAY",
  Home = "HOME",
  Ytd = "YTD",
}

export enum RecordType {
  Home = "home",
  Road = "road",
  Total = "total",
}

export interface Score {
  value: number;
  displayValue: string;
}

export interface CompetitorTeam {
  id: string;
  location: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  logos: Logo[];
  links: TeamLink[];
}

export interface TeamLink {
  rel: TypeElement[];
  href: string;
  text: PurpleText;
}

export enum TypeElement {
  Clubhouse = "clubhouse",
  Depthchart = "depthchart",
  Desktop = "desktop",
  Draftpicks = "draftpicks",
  Injuries = "injuries",
  Photos = "photos",
  Roster = "roster",
  Schedule = "schedule",
  Stats = "stats",
  Team = "team",
  Tickets = "tickets",
  Transactions = "transactions",
}

export enum PurpleText {
  Clubhouse = "Clubhouse",
  DepthChart = "Depth Chart",
  DraftPicks = "Draft Picks",
  Injuries = "Injuries",
  Photos = "photos",
  Roster = "Roster",
  Schedule = "Schedule",
  Statistics = "Statistics",
  Tickets = "Tickets",
  Transactions = "Transactions",
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: LogoRel[];
  lastUpdated: string;
}

export enum LogoRel {
  Dark = "dark",
  Default = "default",
  Full = "full",
  Scoreboard = "scoreboard",
}

export interface Status {
  clock: number;
  displayClock: DisplayClock;
  period: number;
  type: StatusType;
}

export enum DisplayClock {
  The000 = "0:00",
}

export interface StatusType {
  id: string;
  name: TypeName;
  state: State;
  completed: boolean;
  description: string;
  detail: string;
  shortDetail: string;
  altDetail?: string;
}

export enum TypeName {
  StatusFinal = "STATUS_FINAL",
  StatusInProgress = "STATUS_IN_PROGRESS",
  StatusScheduled = "STATUS_SCHEDULED",
}

export enum State {
  In = "in",
  Post = "post",
  Pre = "pre",
}

export interface Ticket {
  id: string;
  summary: string;
  description: string;
  maxPrice: number;
  startingPrice: number;
  numberAvailable: number;
  totalPostings: number;
  links: AthleteLink[];
}

export interface CompetitionType {
  id: string;
  text: string;
  abbreviation: string;
  slug: string;
  type: string;
}

export interface Venue {
  fullName: string;
  address: Address;
}

export interface Address {
  city: string;
  state: string;
  zipCode: string;
}

export interface EventLink {
  language: string;
  rel: FluffyRel[];
  href: string;
  text: ShortTextEnum;
  shortText: ShortTextEnum;
  isExternal: boolean;
  isPremium: boolean;
}

export enum FluffyRel {
  App = "app",
  Boxscore = "boxscore",
  Desktop = "desktop",
  Event = "event",
  Gamecast = "gamecast",
  Mobile = "mobile",
  Now = "now",
  Pbp = "pbp",
  Preview = "preview",
  Recap = "recap",
  Sportscenter = "sportscenter",
  Summary = "summary",
  Teamstats = "teamstats",
  Videos = "videos",
  Watchespn = "watchespn",
}

export enum ShortTextEnum {
  BoxScore = "Box Score",
  Gamecast = "Gamecast",
  Now = "Now",
  PlayByPlay = "Play-by-Play",
  Preview = "Preview",
  Recap = "Recap",
  Summary = "Summary",
  TeamStats = "Team Stats",
  Videos = "Videos",
  WatchESPN = "WatchESPN",
}

export interface EventSeason {
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

export interface RequestedSeasonClass {
  year: number;
  type: number;
  name: string;
  displayName: string;
  half?: number;
}

export interface TeamScheduleTeam {
  id: string;
  abbreviation: string;
  location: string;
  name: string;
  displayName: string;
  clubhouse: string;
  color: string;
  logo: string;
  recordSummary: string;
  seasonSummary: string;
  standingSummary: string;
  groups: Groups;
}

export interface Groups {
  id: string;
  parent: Parent;
  isConference: boolean;
}

export interface Parent {
  id: string;
}
