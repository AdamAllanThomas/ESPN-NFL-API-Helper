export interface Header {
  sports: Sport[];
}

export interface Sport {
  id: string;
  uid: string;
  guid: string;
  name: string;
  slug: string;
  logos: SportLogo[];
  leagues: LeagueElement[];
}

export interface LeagueElement {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  shortName: string;
  slug: string;
  tag: string;
  isTournament: boolean;
  smartdates: Smartdate[];
  events: Event[];
}

export interface Event {
  id: string;
  uid: string;
  date: Date;
  timeValid: boolean;
  recent: boolean;
  name: string;
  shortName: string;
  links: AppLinkElement[];
  gamecastAvailable: boolean;
  playByPlayAvailable: boolean;
  commentaryAvailable: boolean;
  onWatch: boolean;
  competitionId: string;
  location: string;
  season: number;
  seasonStartDate: Date;
  seasonEndDate: Date;
  seasonType: string;
  seasonTypeHasGroups: boolean;
  group: Group;
  week: number;
  weekText: string;
  link: string;
  status: string;
  summary: string;
  period: number;
  clock: string;
  downDistanceText?: string;
  possessionText?: string;
  possessionTeamId?: string;
  broadcasts: Broadcast[];
  broadcast: string;
  odds: Odds;
  situation?: Situation;
  fullStatus: FullStatus;
  competitors: Competitor[];
  leaders?: EventLeader[];
  appLinks: AppLinkElement[];
  video?: Video;
}

export interface AppLinkElement {
  rel: string[];
  href: string;
  text: string;
  shortText?: string;
}

export interface Broadcast {
  typeId: number;
  priority: number;
  type: string;
  isNational: boolean;
  broadcasterId: number;
  broadcastId: number;
  name: string;
  shortName: string;
  callLetters: string;
  station: string;
  lang: string;
  region: string;
  slug: string;
}

export interface Competitor {
  id: string;
  uid: string;
  type: string;
  order: number;
  homeAway: string;
  winner: boolean;
  displayName: string;
  name: string;
  abbreviation: string;
  location: string;
  color: string;
  alternateColor: string;
  score: string;
  group: string;
  record: string;
  logo: string;
  logoDark: string;
}

export interface FullStatus {
  clock: number;
  displayClock: string;
  period: number;
  type: FullStatusType;
}

export interface FullStatusType {
  id: string;
  name: string;
  state: string;
  completed: boolean;
  description: string;
  detail: string;
  shortDetail: string;
}

export interface Group {
  groupId: string;
  name: string;
  abbreviation: string;
  shortName: string;
}

export interface EventLeader {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  leaders: LeaderLeader[];
}

export interface LeaderLeader {
  displayValue: string;
  value: number;
  athlete: LeaderAthlete;
  team: AthleteTeam;
}

export interface LeaderAthlete {
  id: string;
  displayName: string;
  shortName: string;
  fullName: string;
  jersey: string;
  active: boolean;
  team: AthleteTeam;
  headshot: string;
  links: AthleteLink[];
  position: Position;
}

export interface AthleteLink {
  rel: string[];
  href: string;
  isHidden: boolean;
}

export interface Position {
  abbreviation: string;
}

export interface AthleteTeam {
  id: string;
}

export interface Odds {
  details: string;
  overUnder: number;
  spread: number;
  overOdds: number;
  underOdds: number;
  provider: Provider;
  home: OddsAway;
  away: OddsAway;
  awayTeamOdds: TeamOdds;
  homeTeamOdds: TeamOdds;
  links: OddsLink[];
  pointSpread: PointSpread;
  moneyline: Moneyline;
  total: Total;
}

export interface OddsAway {
  moneyLine: number;
}

export interface TeamOdds {
  favorite: boolean;
  underdog: boolean;
  moneyLine: number;
  spreadOdds: number;
  team: AwayTeamOddsTeam;
}

export interface AwayTeamOddsTeam {
  id: string;
  abbreviation: string;
}

export interface OddsLink {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface Moneyline {
  displayName: string;
  shortDisplayName: string;
  home: MoneylineAway;
  away: MoneylineAway;
  link: string;
}

export interface MoneylineAway {
  current: PurpleCurrent;
}

export interface PurpleCurrent {
  odds: string;
}

export interface PointSpread {
  displayName: string;
  shortDisplayName: string;
  home: OverClass;
  away: OverClass;
  link: string;
}

export interface OverClass {
  current: OverCurrent;
}

export interface OverCurrent {
  line: string;
  odds: string;
}

export interface Provider {
  id: string;
  name: string;
  priority: number;
  logos: ProviderLogo[];
}

export interface ProviderLogo {
  href: string;
  rel: string[];
}

export interface Total {
  displayName: string;
  shortDisplayName: string;
  over: OverClass;
  under: OverClass;
  link: string;
}

export interface Situation {
  lastPlay: LastPlay;
  awayTimeouts: number;
  homeTimeouts: number;
  distance: number;
  yardLine: number;
  down: number;
  isRedZone: boolean;
  downDistanceText: string;
  shortDownDistanceText: string;
  possession: string;
  possessionText: string;
}

export interface LastPlay {
  id: string;
  type: LastPlayType;
  text: string;
  shortText: string;
  period: Period;
  clock: Clock;
  team: AthleteTeam;
  scoreValue: number;
  athletesInvolved: AthletesInvolved[];
  probability: Probability;
  drive: Drive;
  start: End;
  end: End;
  statYardage: number;
}

export interface AthletesInvolved {
  id: string;
  displayName: string;
  shortName: string;
  fullName: string;
  jersey: string;
  team: AthleteTeam;
  headshot: string;
  links: AthleteLink[];
  position: string;
}

export interface Clock {
  value: number;
  displayValue: string;
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
  team: AthleteTeam;
  yardLine: number;
}

export interface Period {
  number: number;
}

export interface Probability {
  awayWinPercentage: number;
  homeWinPercentage: number;
  tiePercentage: number;
  secondsLeft: number;
}

export interface LastPlayType {
  id: string;
  abbreviation: string;
  text: string;
}

export interface Video {
  source: string;
  id: number;
  headline: string;
  caption: string;
  description: string;
  premium: boolean;
  ad: Ad;
  tracking: Tracking;
  cerebroId: string;
  pccId: string;
  lastModified: Date;
  originalPublishDate: Date;
  timeRestrictions: TimeRestrictions;
  deviceRestrictions: DeviceRestrictions;
  syndicatable: boolean;
  duration: number;
  categories: Category[];
  gameId: number;
  plays: Play[];
  keywords: string[];
  posterImages: PosterImages;
  images: Image[];
  thumbnail: string;
  links: VideoLinks;
}

export interface Ad {
  sport: string;
  bundle: string;
}

export interface Category {
  id: number;
  description: string;
  type: string;
  sportId: number;
  topicId?: number;
  leagueId?: number;
  league?: CategoryLeague;
  uid?: string;
  teamId?: number;
  team?: CategoryTeam;
  athleteId?: number;
  athlete?: CategoryAthlete;
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
  athletes: Full;
}

export interface Full {
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
  leagues: Full;
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
  teams: Full;
}

export interface DeviceRestrictions {
  type: string;
  devices: string[];
}

export interface Image {
  name: string;
  url: string;
  alt: string;
  caption: string;
  credit: string;
  width: number;
  height: number;
}

export interface VideoLinks {
  api: StickyAPI;
  web: Web;
  source: Source;
  mobile: Mobile;
}

export interface StickyAPI {
  self: Full;
  artwork: Full;
}

export interface Mobile {
  alert: Full;
  source: Full;
  href: string;
  streaming: Full;
  progressiveDownload: Full;
}

export interface Source {
  mezzanine: Full;
  flash: Full;
  hds: Full;
  HLS: HLS;
  HD: Full;
  full: Full;
  href: string;
}

export interface HLS {
  href: string;
  HD: Full;
}

export interface Web {
  href: string;
  short: Full;
  self: Full;
}

export interface Play {
  id: number;
}

export interface PosterImages {
  default: Default;
  full: Full;
  wide: Full;
  square: Full;
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

export interface Smartdate {
  label: string;
  season: number;
  seasontype: number;
  week: number;
}

export interface SportLogo {
  href: string;
  alt: string;
  rel: string[];
  width: number;
  height: number;
}
