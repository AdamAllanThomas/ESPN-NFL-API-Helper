export interface GameSummary {
  boxscore: Boxscore;
  format: Format;
  gameInfo: GameInfo;
  drives: Drives;
  leaders: GameSummaryLeader[];
  injuries: GameSummaryInjury[];
  broadcasts: GameSummaryBroadcast[];
  predictor: Predictor;
  pickcenter: any[];
  againstTheSpread: AgainstTheSpread[];
  odds: Odd[];
  winprobability: Winprobability[];
  scoringPlays: ScoringPlay[];
  videos: Video[];
  header: Header;
  news: News;
  standings: GameSummaryStandings;
}

export interface AgainstTheSpread {
  team: AgainstTheSpreadTeam;
  records: any[];
}

export interface AgainstTheSpreadTeam {
  id: string;
  uid: string;
  displayName: string;
  abbreviation: string;
  links: FullViewLinkElement[];
  logo: string;
  logos: LogoElement[];
}

export interface FullViewLinkElement {
  href: string;
  text: Text;
}

export enum Text {
  Clubhouse = "Clubhouse",
  FullStandings = "Full Standings",
  Schedule = "Schedule",
}

export interface LogoElement {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: BoxscoreSource[];
  lastUpdated?: LastUpdated;
}

export enum LastUpdated {
  The20180605T1211Z = "2018-06-05T12:11Z",
  The20230824T1926Z = "2023-08-24T19:26Z",
  The20230824T1927Z = "2023-08-24T19:27Z",
  The20230824T1928Z = "2023-08-24T19:28Z",
}

export enum BoxscoreSource {
  Dark = "dark",
  Day = "day",
  Default = "default",
  Full = "full",
  Interior = "interior",
  Scoreboard = "scoreboard",
}

export interface Boxscore {
  teams: TeamElement[];
  players: Player[];
}

export interface Player {
  team: PlayerTeam;
  statistics: PlayerStatistic[];
  displayOrder: number;
}

export interface PlayerStatistic {
  name: string;
  keys: string[];
  text: string;
  labels: string[];
  descriptions: string[];
  athletes: AthleteElement[];
  totals: string[];
}

export interface AthleteElement {
  athlete: AthleteAthlete;
  stats: string[];
}

export interface AthleteAthlete {
  id: string;
  uid: string;
  guid: string;
  firstName: string;
  lastName: string;
  displayName: string;
  links: AthleteLink[];
}

export interface AthleteLink {
  rel: string[];
  href: string;
  text: string;
}

export interface PlayerTeam {
  id: string;
  uid: string;
  slug: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  logo: string;
}

export interface TeamElement {
  team: PlayerTeam;
  statistics: TeamStatistic[];
  displayOrder: number;
}

export interface TeamStatistic {
  name: string;
  displayValue: string;
  label: string;
}

export interface GameSummaryBroadcast {
  type: PurpleType;
  station: string;
  market: Market;
  media: PurpleMedia;
  lang: string;
  region: string;
}

export interface Market {
  id: string;
  type: string;
}

export interface PurpleMedia {
  callLetters: string;
  name: string;
  shortName: string;
}

export interface PurpleType {
  id: string;
  shortName: string;
  longName: string;
  slug: string;
}

export interface Drives {
  current: Current;
  previous: Previous[];
}

export interface Current {
  id: string;
  description: string;
  team: CurrentTeam;
  start: CurrentEnd;
  end: CurrentEnd;
  timeElapsed: TimeElapsed;
  yards: number;
  isScore: boolean;
  offensivePlays: number;
  result: string;
  shortDisplayResult: string;
  displayResult: string;
  plays: CurrentPlay[];
}

export interface CurrentEnd {
  period: EndPeriod;
  clock: TimeElapsed;
  yardLine: number;
  text: string;
}

export interface TimeElapsed {
  displayValue: string;
}

export interface EndPeriod {
  type: PeriodType;
  number: number;
}

export enum PeriodType {
  Quarter = "quarter",
}

export interface CurrentPlay {
  id: string;
  sequenceNumber: string;
  type: PlayType;
  text: string;
  awayScore: number;
  homeScore: number;
  period: PlayPeriod;
  clock: TimeElapsed;
  scoringPlay: boolean;
  priority: boolean;
  modified: string;
  wallclock: Date;
  start: PlayEnd;
  end: PlayEnd;
  statYardage: number;
  scoreValue?: number;
}

export interface PlayEnd {
  down: number;
  distance: number;
  yardLine: number;
  yardsToEndzone: number;
  downDistanceText?: string;
  shortDownDistanceText?: string;
  possessionText?: string;
  team?: EndTeam;
}

export interface EndTeam {
  id: string;
}

export interface PlayPeriod {
  number: number;
}

export interface PlayType {
  id: string;
  text: string;
  abbreviation?: string;
}

export interface CurrentTeam {
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  logos: LogoElement[];
}

export interface Previous {
  id: string;
  description: string;
  team: CurrentTeam;
  start: CurrentEnd;
  end: CurrentEnd;
  timeElapsed: TimeElapsed;
  yards: number;
  isScore: boolean;
  offensivePlays: number;
  result: string;
  shortDisplayResult: string;
  displayResult: string;
  plays: PreviousPlay[];
}

export interface PreviousPlay {
  id: string;
  sequenceNumber: string;
  type: PlayType;
  text: string;
  awayScore: number;
  homeScore: number;
  period: PlayPeriod;
  clock: TimeElapsed;
  scoringPlay: boolean;
  priority: boolean;
  modified: string;
  wallclock: Date;
  start: PlayEnd;
  end: PlayEnd;
  statYardage: number;
  scoringType?: ScoringType;
  pointAfterAttempt?: PointAfterAttempt;
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

export interface Format {
  regulation: Overtime;
  overtime: Overtime;
}

export interface Overtime {
  periods: number;
  displayName: string;
  slug: string;
  clock: number;
}

export interface GameInfo {
  venue: Venue;
  weather: Weather;
}

export interface Venue {
  id: string;
  fullName: string;
  address: Address;
  capacity: number;
  grass: boolean;
  images: LogoElement[];
}

export interface Address {
  city: string;
  state: string;
  zipCode: string;
}

export interface Weather {
  temperature: number;
  highTemperature: number;
  lowTemperature: number;
  conditionId: string;
  gust: number;
  precipitation: number;
  link: WeatherLink;
}

export interface WeatherLink {
  language?: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface Header {
  id: string;
  uid: string;
  season: Season;
  timeValid: boolean;
  competitions: Competition[];
  links: WeatherLink[];
  week: number;
  league: HeaderLeague;
}

export interface Competition {
  id: string;
  uid: string;
  date: string;
  neutralSite: boolean;
  conferenceCompetition: boolean;
  boxscoreAvailable: boolean;
  commentaryAvailable: boolean;
  liveAvailable: boolean;
  onWatchESPN: boolean;
  recent: boolean;
  boxscoreSource: BoxscoreSource;
  playByPlaySource: BoxscoreSource;
  competitors: Competitor[];
  status: StatusClass;
  broadcasts: CompetitionBroadcast[];
}

export interface CompetitionBroadcast {
  type: FluffyType;
  market: Market;
  media: FluffyMedia;
  lang: string;
  region: string;
}

export interface FluffyMedia {
  shortName: string;
}

export interface FluffyType {
  id: string;
  shortName: string;
}

export interface Competitor {
  id: string;
  uid: string;
  order: number;
  homeAway: string;
  team: CompetitorTeam;
  score: string;
  linescores: TimeElapsed[];
  record: Record[];
  timeoutsUsed: number;
  possession: boolean;
}

export interface Record {
  type: string;
  summary: string;
  displayValue: string;
}

export interface CompetitorTeam {
  id: string;
  uid: string;
  location: string;
  name: string;
  nickname: string;
  abbreviation: string;
  displayName: string;
  color: string;
  alternateColor: string;
  logos: LogoElement[];
  links: AthleteLink[];
}

export interface StatusClass {
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

export interface HeaderLeague {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  slug: string;
  isTournament: boolean;
  links: AthleteLink[];
}

export interface Season {
  year: number;
  type: number;
}

export interface GameSummaryInjury {
  team: AgainstTheSpreadTeam;
  injuries: InjuryInjury[];
}

export interface InjuryInjury {
  status: StatusEnum;
  date: string;
  athlete: InjuryAthlete;
  type: InjuryType;
  details: Details;
}

export interface InjuryAthlete {
  id: string;
  uid: string;
  guid: string;
  lastName: string;
  fullName: string;
  displayName: string;
  shortName: string;
  links: AthleteLink[];
  headshot: Headshot;
  jersey: string;
  position: ScoringType;
  collegeAthlete: AwayTeam;
}

export interface AwayTeam {
  $ref: string;
}

export interface Headshot {
  href: string;
  alt: string;
}

export interface Details {
  fantasyStatus: FantasyStatus;
  type: DetailsType;
  location: Location;
  detail: Detail;
  side: Detail;
  returnDate: Date;
}

export enum Detail {
  NotSpecified = "Not Specified",
}

export interface FantasyStatus {
  description: Tion;
  abbreviation: Tion;
}

export enum Tion {
  Inactive = "INACTIVE",
}

export enum Location {
  Leg = "Leg",
  Other = "Other",
}

export enum DetailsType {
  Ankle = "Ankle",
  CoachSDecision = "Coach's Decision",
  Hip = "Hip",
}

export enum StatusEnum {
  Out = "Out",
}

export interface InjuryType {
  id: string;
  name: Name;
  description: Description;
  abbreviation: Abbreviation;
}

export enum Abbreviation {
  O = "O",
}

export enum Description {
  Out = "out",
}

export enum Name {
  InjuryStatusOut = "INJURY_STATUS_OUT",
}

export interface GameSummaryLeader {
  team: AgainstTheSpreadTeam;
  leaders: PurpleLeader[];
}

export interface PurpleLeader {
  name: string;
  displayName: string;
  leaders: FluffyLeader[];
}

export interface FluffyLeader {
  displayValue: string;
  athlete: LeaderAthlete;
}

export interface LeaderAthlete {
  id: string;
  uid: string;
  guid: string;
  lastName: string;
  fullName: string;
  displayName: string;
  shortName: string;
  links: AthleteLink[];
  headshot: Headshot;
  jersey: string;
  position: Position;
  team: AwayTeam;
}

export interface Position {
  abbreviation: string;
}

export interface News {
  header: string;
  link: WeatherLink;
  articles: Article[];
}

export interface Article {
  images: ArticleImage[];
  dataSourceIdentifier: string;
  description: string;
  published: Date;
  type: string;
  premium: boolean;
  links: ArticleLinks;
  lastModified: Date;
  categories: Category[];
  headline: string;
  byline?: string;
}

export interface Category {
  id?: number;
  description?: string;
  type: CategoryType;
  sportId?: number;
  topicId?: number;
  createDate: Date;
  leagueId?: number;
  league?: CategoryLeague;
  uid?: string;
  teamId?: number;
  team?: CategoryTeam;
  athleteId?: number;
  athlete?: CategoryAthlete;
  guid?: string;
}

export interface CategoryAthlete {
  id: number;
  description: string;
  links: AthleteLinks;
}

export interface AthleteLinks {
  api: PurpleAPI;
  web: PurpleAPI;
  mobile: PurpleAPI;
}

export interface PurpleAPI {
  athletes: WebClass;
}

export interface WebClass {
  href: string;
}

export interface CategoryLeague {
  id: number;
  description: string;
  links: LeagueLinks;
}

export interface LeagueLinks {
  api: FluffyAPI;
  web: FluffyAPI;
  mobile: FluffyAPI;
}

export interface FluffyAPI {
  leagues: WebClass;
}

export interface CategoryTeam {
  id: number;
  description: string;
  links: TeamLinks;
}

export interface TeamLinks {
  api: TentacledAPI;
  web: TentacledAPI;
  mobile: TentacledAPI;
}

export interface TentacledAPI {
  teams: WebClass;
}

export enum CategoryType {
  Athlete = "athlete",
  GUID = "guid",
  League = "league",
  Team = "team",
  Topic = "topic",
}

export interface ArticleImage {
  name: string;
  width?: number;
  alt?: string;
  caption?: string;
  url: string;
  height?: number;
  dataSourceIdentifier?: string;
  id?: number;
  credit?: string;
  type?: ImageType;
  _id?: number;
  ratio?: string;
}

export enum ImageType {
  Header = "header",
  Media = "Media",
  Stitcher = "stitcher",
}

export interface ArticleLinks {
  api: StickyAPI;
  web: WebClass;
  mobile?: WebClass;
}

export interface StickyAPI {
  news: WebClass;
  self: WebClass;
}

export interface Odd {
  provider: Provider;
  bettingOdds: BettingOdds;
}

export interface BettingOdds {
  homeTeam: AwayTeam;
  awayTeam: AwayTeam;
  teamOdds: { [key: string]: TeamOdd };
}

export interface TeamOdd {
  oddId: string;
  value: string;
  betSlipUrl: string;
}

export interface Provider {
  id: string;
  name: string;
  priority: number;
}

export interface Predictor {
  header: string;
  homeTeam: Team;
  awayTeam: Team;
}

export interface Team {
  id: string;
  gameProjection: string;
  teamChanceLoss: string;
  teamChanceTie: string;
}

export interface ScoringPlay {
  id: string;
  type: PlayType;
  text: string;
  awayScore: number;
  homeScore: number;
  period: PlayPeriod;
  clock: Clock;
  team: AgainstTheSpreadTeam;
  scoringType: ScoringType;
}

export interface Clock {
  value: number;
  displayValue: string;
}

export interface GameSummaryStandings {
  fullViewLink: FullViewLinkElement;
  groups: Group[];
}

export interface Group {
  standings: GroupStandings;
  header: string;
  href: string;
}

export interface GroupStandings {
  entries: Entry[];
}

export interface Entry {
  team: string;
  link: string;
  id: string;
  uid: string;
  stats: Stat[];
  logo: LogoElement[];
}

export interface Stat {
  name: string;
  displayName?: string;
  shortDisplayName?: string;
  description?: string;
  abbreviation: string;
  type: string;
  value?: number;
  displayValue: string;
  id?: string;
  summary?: string;
}

export interface Video {
  source: string;
  id: number;
  headline: string;
  description: string;
  ad: Ad;
  tracking: Tracking;
  cerebroId: string;
  lastModified: Date;
  originalPublishDate: Date;
  timeRestrictions: TimeRestrictions;
  deviceRestrictions: DeviceRestrictions;
  geoRestrictions: GeoRestrictions;
  duration: number;
  thumbnail: string;
  links: VideoLinks;
}

export interface Ad {
  sport: string;
  bundle: string;
}

export interface DeviceRestrictions {
  type: string;
  devices: string[];
}

export interface GeoRestrictions {
  type: string;
  countries: string[];
}

export interface VideoLinks {
  api: IndigoAPI;
  web: Web;
  source: Source;
  mobile: PurpleMobile;
}

export interface IndigoAPI {
  self: WebClass;
  artwork: WebClass;
}

export interface PurpleMobile {
  alert: WebClass;
  source: WebClass;
  href: string;
  streaming: WebClass;
  progressiveDownload: WebClass;
}

export interface Source {
  mezzanine: WebClass;
  flash: WebClass;
  hds: WebClass;
  HLS: HLS;
  HD: WebClass;
  full: WebClass;
  href: string;
}

export interface HLS {
  href: string;
  HD: WebClass;
}

export interface Web {
  href: string;
  short: WebClass;
  self: WebClass;
}

export interface TimeRestrictions {
  embargoDate: Date;
  expirationDate: Date;
}

export interface Tracking {
  sportName: string;
  leagueName: string;
  coverageType: string;
  trackingName: string;
  trackingId: string;
}

export interface Winprobability {
  tiePercentage: number;
  homeWinPercentage: number;
  secondsLeft: number;
  playId: string;
}
