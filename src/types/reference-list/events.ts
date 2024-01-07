export interface Events {
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
  market: MarketEnum;
  names: NameElement[];
}

export enum MarketEnum {
  National = "national",
}

export enum NameElement {
  Abc = "ABC",
  Cbs = "CBS",
  Espn = "ESPN",
  Espn2 = "ESPN2",
  Fox = "FOX",
  NameESPN = "ESPN+",
  Nbc = "NBC",
  NflNet = "NFL NET",
  Peacock = "Peacock",
  PrimeVideo = "PRIME VIDEO",
}

export interface Competitor {
  id: string;
  uid: string;
  type: TypeElement;
  order: number;
  homeAway: HomeAway;
  winner: boolean;
  team: Team;
  score: string;
  linescores?: Linescore[];
  statistics: any[];
  records?: Record[];
}

export enum HomeAway {
  Away = "away",
  Home = "home",
}

export interface Linescore {
  value: number;
}

export interface Record {
  name: RecordName;
  abbreviation?: RecordAbbreviation;
  type: RecordType;
  summary: string;
}

export enum RecordAbbreviation {
  Any = "Any",
  Game = "Game",
}

export enum RecordName {
  Home = "Home",
  Overall = "overall",
  Road = "Road",
}

export enum RecordType {
  Home = "home",
  Road = "road",
  Total = "total",
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
  alternateColor?: AlternateColor;
  isActive: boolean;
  venue?: TeamClass;
  links: TeamLink[];
  logo: string;
}

export enum AlternateColor {
  A5Acaf = "a5acaf",
  B0B7Bc = "b0b7bc",
  B3995D = "b3995d",
  Bbbbbb = "bbbbbb",
  C41230 = "c41230",
  C60C30 = "c60c30",
  C9243F = "c9243f",
  D50A0A = "d50a0a",
  D7A22A = "d7a22a",
  E64100 = "e64100",
  Fc4C02 = "fc4c02",
  Ff3C00 = "ff3c00",
  Ffb612 = "ffb612",
  Ffc20E = "ffc20e",
  Ffc62F = "ffc62f",
  Ffd100 = "ffd100",
  Ffffff = "ffffff",
  The000000 = "000000",
  The002A5C = "002a5c",
  The3E3A35 = "3e3a35",
  The69Be28 = "69be28",
}

export interface TeamLink {
  rel: TypeElement[];
  href: string;
  text: Text;
  isExternal: boolean;
  isPremium: boolean;
}

export enum TypeElement {
  Clubhouse = "clubhouse",
  Desktop = "desktop",
  Roster = "roster",
  Schedule = "schedule",
  Stats = "stats",
  Team = "team",
}

export enum Text {
  Clubhouse = "Clubhouse",
  Roster = "Roster",
  Schedule = "Schedule",
  Statistics = "Statistics",
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
  market: MarketClass;
  media: Media;
  lang: Lang;
  region: Region;
}

export enum Lang {
  En = "en",
}

export interface MarketClass {
  id: string;
  type: MarketType;
}

export enum MarketType {
  National = "National",
}

export interface Media {
  shortName: NameElement;
}

export enum Region {
  Us = "us",
}

export interface GeoBroadcastType {
  id: string;
  shortName: ShortName;
}

export enum ShortName {
  Tv = "TV",
  Web = "Web",
}

export interface Headline {
  description: string;
  type: ShortText;
  shortLinkText: string;
  video?: Video[];
}

export enum ShortText {
  BoxScore = "Box Score",
  Gamecast = "Gamecast",
  Highlights = "Highlights",
  PlayByPlay = "Play-by-Play",
  Recap = "Recap",
}

export interface Video {
  id: number;
  source: string;
  headline: string;
  thumbnail: string;
  duration: number;
  tracking: Tracking;
  deviceRestrictions: DeviceRestrictions;
  links: Links;
}

export interface DeviceRestrictions {
  type: string;
  devices: string[];
}

export interface Links {
  api: API;
  web: Web;
  source: Source;
  mobile: Mobile;
}

export interface API {
  self: Artwork;
  artwork: Artwork;
}

export interface Artwork {
  href: string;
}

export interface Mobile {
  alert: Artwork;
  source: Artwork;
  href: string;
  streaming: Artwork;
  progressiveDownload: Artwork;
}

export interface Source {
  mezzanine: Artwork;
  flash: Artwork;
  hds: Artwork;
  HLS: HLS;
  HD: Artwork;
  full: Artwork;
  href: string;
}

export interface HLS {
  href: string;
  HD: Artwork;
}

export interface Web {
  href: string;
  short: Artwork;
  self: Artwork;
}

export interface Tracking {
  sportName: string;
  leagueName: string;
  coverageType: string;
  trackingName: string;
  trackingId: string;
}

export interface CompetitionLeader {
  name: LeaderName;
  displayName: DisplayName;
  shortDisplayName: ShortDisplayName;
  abbreviation: LeaderAbbreviation;
  leaders: LeaderLeader[];
}

export enum LeaderAbbreviation {
  Pyds = "PYDS",
  Recyds = "RECYDS",
  Ryds = "RYDS",
}

export enum DisplayName {
  PassingLeader = "Passing Leader",
  ReceivingLeader = "Receiving Leader",
  RushingLeader = "Rushing Leader",
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
  rel: PurpleRel[];
  href: string;
}

export enum PurpleRel {
  Athlete = "athlete",
  Desktop = "desktop",
  Playercard = "playercard",
}

export interface Position {
  abbreviation: PositionAbbreviation;
}

export enum PositionAbbreviation {
  Qb = "QB",
  Rb = "RB",
  Te = "TE",
  Wr = "WR",
}

export enum LeaderName {
  PassingYards = "passingYards",
  ReceivingYards = "receivingYards",
  RushingYards = "rushingYards",
}

export enum ShortDisplayName {
  Pass = "PASS",
  Rec = "REC",
  Rush = "RUSH",
}

export interface Note {
  type: TypeEnum;
  headline: string;
}

export enum TypeEnum {
  Boxscore = "boxscore",
  Desktop = "desktop",
  Event = "event",
  Highlights = "highlights",
  Pbp = "pbp",
  Recap = "recap",
  Summary = "summary",
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
  description: Description;
  detail: Description;
  shortDetail: Description;
  altDetail?: AltDetail;
}

export enum AltDetail {
  Ot = "OT",
}

export enum Description {
  Final = "Final",
  FinalOT = "Final/OT",
}

export enum TypeName {
  StatusFinal = "STATUS_FINAL",
  StatusInProgress = "STATUS_IN_PROGRESS",
  StatusScheduled = "STATUS_SCHEDULED",
}

export enum State {
  Post = "post",
}

export interface CompetitionType {
  id: string;
  abbreviation: TypeAbbreviation;
}

export enum TypeAbbreviation {
  Allstar = "ALLSTAR",
  Std = "STD",
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
  state?: string;
}

export interface EventLink {
  language: Language;
  rel: TypeEnum[];
  href: string;
  text: ShortText;
  shortText: ShortText;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  EnUS = "en-US",
}

export interface EventSeason {
  year: number;
  type: number;
  slug: Slug;
}

export enum Slug {
  PostSeason = "post-season",
  Preseason = "preseason",
  RegularSeason = "regular-season",
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
