export interface WeekScoreboard {
  leagues: League[];
  season: WeekScoreboardSeason;
  week: Week;
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
  weather?: Weather;
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
  venue: Venue;
  competitors: Competitor[];
  notes: any[];
  situation?: Situation;
  status: Status;
  broadcasts: Broadcast[];
  leaders: CompetitionLeader[];
  format: Format;
  startDate: string;
  geoBroadcasts: GeoBroadcast[];
  headlines?: Headline[];
  tickets?: Ticket[];
  odds?: Odd[];
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
  team: CompetitorTeam;
  score: string;
  linescores?: Linescore[];
  statistics: any[];
  records: Record[];
  winner?: boolean;
  leaders?: CompetitorLeader[];
}

export interface CompetitorLeader {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  leaders: PurpleLeader[];
}

export interface PurpleLeader {
  displayValue: string;
  value: number;
  athlete: Athlete;
  team: PurpleTeam;
}

export interface Athlete {
  id?: string;
  fullName?: string;
  displayName?: string;
  shortName?: string;
  links?: AthleteLink[];
  headshot?: string;
  jersey?: string;
  position?: Position;
  team?: VenueClass;
  active?: boolean;
  $ref?: string;
}

export interface AthleteLink {
  rel: string[];
  href: string;
}

export interface Position {
  abbreviation: string;
}

export interface VenueClass {
  id: string;
}

export interface PurpleTeam {
  id?: string;
  $ref?: string;
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

export interface CompetitorTeam {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  isActive: boolean;
  venue: VenueClass;
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
  video: Video[];
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
  self: ArtworkElement;
  artwork: ArtworkElement;
}

export interface ArtworkElement {
  href: string;
}

export interface Mobile {
  alert: ArtworkElement;
  source: ArtworkElement;
  href: string;
  streaming: ArtworkElement;
  progressiveDownload: ArtworkElement;
}

export interface Source {
  mezzanine: ArtworkElement;
  flash: ArtworkElement;
  hds: ArtworkElement;
  HLS: HLS;
  HD: ArtworkElement;
  full: ArtworkElement;
  href: string;
}

export interface HLS {
  href: string;
  HD: ArtworkElement;
}

export interface Web {
  href: string;
  short: ArtworkElement;
  self: ArtworkElement;
}

export interface Tracking {
  sportName: string;
  leagueName: string;
  coverageType: string;
  trackingName: string;
  trackingId: string;
}

export interface CompetitionLeader {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  leaders: FluffyLeader[];
}

export interface FluffyLeader {
  displayValue: string;
  value: number;
  athlete: Athlete;
  team: VenueClass;
}

export interface Odd {
  provider: Provider;
  details: string;
  overUnder: number;
  spread: number;
  awayTeamOdds: TeamOdds;
  homeTeamOdds: TeamOdds;
  open: Current;
  current: Current;
}

export interface TeamOdds {
  favorite: boolean;
  underdog: boolean;
  team: AwayTeamOddsTeam;
}

export interface AwayTeamOddsTeam {
  id: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
}

export interface Current {
  over: Over;
  under: Over;
  total: Total;
}

export interface Over {
  value: number;
  displayValue: string;
  alternateDisplayValue: string;
}

export interface Total {
  alternateDisplayValue: string;
}

export interface Provider {
  id: string;
  name: string;
  priority: number;
}

export interface Situation {
  lastPlay: LastPlay;
  down: number;
  yardLine: number;
  distance: number;
  downDistanceText: string;
  shortDownDistanceText: string;
  possessionText: string;
  isRedZone: boolean;
  homeTimeouts: number;
  awayTimeouts: number;
  possession: string;
}

export interface LastPlay {
  id: string;
  type: LastPlayType;
  text: string;
  scoreValue: number;
  team: VenueClass;
  probability: Probability;
  drive: Drive;
  start: End;
  end: End;
  statYardage: number;
  athletesInvolved: AthletesInvolved[];
}

export interface AthletesInvolved {
  id: string;
  fullName: string;
  displayName: string;
  shortName: string;
  links: AthleteLink[];
  headshot: string;
  jersey: string;
  position: string;
  team: VenueClass;
}

export interface Drive {
  description: string;
  start: Start;
  timeElapsed: TimeElapsed;
}

export interface Start {
  yardLine: number;
  text: string;
}

export interface TimeElapsed {
  displayValue: string;
}

export interface End {
  yardLine: number;
  team: VenueClass;
}

export interface Probability {
  tiePercentage: number;
  homeWinPercentage: number;
  awayWinPercentage: number;
  secondsLeft: number;
}

export interface LastPlayType {
  id: string;
  text: string;
  abbreviation: string;
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
  summary: string;
  numberAvailable: number;
  links: ArtworkElement[];
}

export interface CompetitionType {
  id: string;
  abbreviation: string;
}

export interface Venue {
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

export interface Weather {
  displayValue: string;
  temperature: number;
  highTemperature: number;
  conditionId: string;
  link: EventLink;
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

export interface WeekScoreboardSeason {
  type: number;
  year: number;
}
