export interface AthleteOverview {
  statistics: Statistic;
  news: News[];
  nextGame: NextGame;
  gameLog: GameLog;
  rotowire: Rotowire;
  fantasy: Fantasy;
}

export interface Fantasy {
  draftRank: string;
  positionRank: string;
  percentOwned: string;
  last7Days: string;
  projection: string;
}

export interface GameLog {
  displayName: string;
  statistics: Statistic[];
  events: { [key: string]: EventValue };
}

export interface EventValue {
  id: string;
  links: Link[];
  week: number;
  atVs: string;
  gameDate: Date;
  score: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeamScore: string;
  awayTeamScore: string;
  gameResult: string;
  opponent: Opponent;
  leagueName: string;
  leagueAbbreviation: string;
  leagueShortName: string;
  team: Opponent;
}

export interface Link {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface Opponent {
  id: string;
  uid: string;
  displayName?: string;
  abbreviation: string;
  links: Link[];
  logo: string;
  isAllStar?: boolean;
}

export interface Statistic {
  displayName: string;
  labels: string[];
  names: string[];
  displayNames: string[];
  events?: StatisticsEvent[];
  splits?: StatisticSplit[];
}

export interface StatisticsEvent {
  eventId: string;
  stats: string[];
}

export interface StatisticSplit {
  displayName: string;
  stats: string[];
}

export interface News {
  headline: string;
  lastModified: Date;
  root: string;
  premium: boolean;
  links: NewsLinks;
  type: string;
  section?: string;
  id: number;
  metrics: Metric[];
  description: string;
  nowId: string;
  allowComments: boolean;
  images: PeerElement[];
  categories: Category[];
  published: Date;
  video?: Video[];
  dataSourceIdentifier: string;
  linkText?: string;
  categorized?: Date;
  byline?: string;
  source?: string;
}

export interface Category {
  id?: number;
  description?: string;
  type: string;
  sportId?: number;
  uid?: string;
  leagueId?: number;
  league?: CategoryLeague;
  team?: Team;
  athleteId?: number;
  athlete?: Athlete;
  fantasyPlayerId?: number;
}

export interface Athlete {
  id: number;
  links: AthleteLinks;
}

export interface AthleteLinks {
  web: PurpleAPI;
  mobile: PurpleAPI;
  api: PurpleAPI;
}

export interface PurpleAPI {
  athletes: WebClass;
}

export interface WebClass {
  href: string;
}

export interface CategoryLeague {
  id: number;
  links: LeagueLinks;
}

export interface LeagueLinks {
  web: FluffyAPI;
  mobile: FluffyAPI;
  api: FluffyAPI;
}

export interface FluffyAPI {}

export interface Team {
  id: number;
  links: TeamLinks;
}

export interface TeamLinks {
  web: TentacledAPI;
  mobile: TentacledAPI;
  api: TentacledAPI;
}

export interface TentacledAPI {
  teams: WebClass;
}

export interface PeerElement {
  width: number;
  height: number;
  url: string;
  name: string;
  caption?: string;
  peers?: PeerElement[];
  alt?: string;
}

export interface NewsLinks {
  api: StickyAPI;
  web: WebClass;
  mobile?: WebClass;
}

export interface StickyAPI {
  news: WebClass;
  self: WebClass;
}

export interface Metric {
  count: number;
  type: string;
}

export interface Video {
  source: string;
  id: number;
  headline: string;
  title: string;
  caption: string;
  description: string;
  premium: boolean;
  ad: Ad;
  tracking: Tracking;
  cerebroId: string;
  lastModified: Date;
  originalPublishDate: Date;
  timeRestrictions: TimeRestrictions;
  deviceRestrictions: DeviceRestrictions;
  geoRestrictions?: GeoRestrictions;
  syndicatable: boolean;
  duration: number;
  categories: Category[];
  posterImages: PosterImages;
  images: VideoImage[];
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

export interface VideoImage {
  width: number;
  height: number;
  url: string;
  name: string;
}

export interface VideoLinks {
  web: Web;
  mobile: PurpleMobile;
  api: IndigoAPI;
  source: Source;
}

export interface IndigoAPI {
  artwork: WebClass;
  self: WebClass;
}

export interface PurpleMobile {
  href: string;
  alert: WebClass;
  progressiveDownload: WebClass;
  source: WebClass;
  streaming: WebClass;
}

export interface Source {
  href: string;
  flash: WebClass;
  full: WebClass;
  hds: WebClass;
  mezzanine: WebClass;
  HD: WebClass;
  HLS: HLS;
}

export interface HLS {
  href: string;
  HD: WebClass;
}

export interface Web {
  href: string;
  self: WebClass;
}

export interface PosterImages {
  square: WebClass;
  default: Default;
  wide: WebClass;
  full: WebClass;
}

export interface Default {
  href: string;
  width: number;
  height: number;
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

export interface NextGame {
  displayName: string;
  league: NextGameLeague;
  summaryStatistics: SummaryStatistic[];
  statistics: Statistics;
}

export interface NextGameLeague {
  id: string;
  uid: string;
  name: string;
  shortName: string;
  abbreviation: string;
  slug: string;
  events: LeagueEvent[];
}

export interface LeagueEvent {
  id: string;
  competitionId: string;
  uid: string;
  date: Date;
  timeValid: boolean;
  name: string;
  shortName: string;
  location: string;
  season: number;
  seasonStartDate: Date;
  seasonEndDate: Date;
  seasonType: number;
  seasonTypeHasGroups: boolean;
  week: number;
  weekText: string;
  period: number;
  clock: string;
  links: Link[];
  status: string;
  fullStatus: FullStatus;
  broadcasts: Broadcast[];
  broadcast: string;
  competitors: Competitor[];
  onWatch: boolean;
  recent: boolean;
  appLinks: Link[];
}

export interface Broadcast {
  type: string;
  typeId: number;
  isNational: boolean;
  broadcasterId: number;
  broadcastId: number;
  priority: number;
  name: string;
  shortName: string;
  callLetters: string;
  station: string;
  region: string;
  language: string;
}

export interface Competitor {
  id: string;
  uid: string;
  type: string;
  order: number;
  color: string;
  alternateColor: string;
  group: string;
  homeAway: string;
  abbreviation: string;
  location: string;
  displayName: string;
  score: string;
  record: string;
  competitionIdPrevious: string;
  name: string;
  logo: string;
  logoDark: string;
}

export interface FullStatus {
  clock: string;
  displayClock: string;
  period: number;
  type: Type;
}

export interface Type {
  id: string;
  name: string;
  description: string;
  detail: string;
  shortDetail: string;
  state: string;
  completed: boolean;
}

export interface Statistics {
  labels: string[];
  names: string[];
  displayNames: string[];
  splits: PurpleSplit[];
}

export interface PurpleSplit {
  displayName: string;
  stats: string[];
  type?: string;
}

export interface SummaryStatistic {
  splitId: string;
  splitAbbreviation: string;
  splitName: string;
  shortDisplayName: string;
  displayValue: string;
  splitBy: string;
  name: string;
  displayName: string;
  abbreviation: string;
}

export interface Rotowire {
  headline: string;
  story: string;
  description: string;
  published: string;
}
