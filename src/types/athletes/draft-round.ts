export interface DraftRound {
  sports: Sport[];
}

export interface Sport {
  id: string;
  uid: string;
  name: string;
  slug: string;
  leagues: League[];
  guid?: string;
  logos?: SportLogo[];
}

export interface League {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  shortName: string;
  slug: string;
  draft?: Draft;
  tag?: string;
  isTournament?: boolean;
  smartdates?: string[];
  events?: Event[];
}

export interface Draft {
  uid: string;
  year: number;
  numberOfRounds: number;
  displayName: string;
  shortDisplayName: string;
  status: Status;
  links: DraftLink[];
  currentRound: number;
  link: string;
  rounds: Round[];
}

export interface DraftLink {
  href: string;
  text: string;
}

export interface Round {
  number: number;
  displayName: string;
  shortDisplayName: string;
  picks: Pick[];
  status: string;
  currentPick: Pick;
}

export interface Pick {
  pick: number;
  overall: number;
  round: number;
  traded: boolean;
  team: string;
  displayName: string;
  shortName: string;
  position: string;
  college?: string;
  link: string;
  links: DraftLink[];
  logo: string;
  note: string;
  leagueAffiliation?: string;
}

export interface Status {
  round: number;
  type: StatusType;
}

export interface StatusType {
  id: number;
  name: string;
  state: string;
  description: string;
}

export interface Event {
  id: string;
  uid: string;
  date: Date;
  timeValid: boolean;
  recent: boolean;
  name: string;
  shortName: string;
  notes: Note[];
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
  link: string;
  status: string;
  summary: string;
  period: number;
  clock: string;
  addedClock: number;
  broadcasts: Broadcast[];
  broadcast: string;
  odds: EventOdds;
  fullStatus: FullStatus;
  competitors: Competitor[];
  priority: number;
  video: Video;
  appLinks: AppLinkElement[];
}

export interface AppLinkElement {
  rel: string[];
  href: string;
  text: string;
  shortText?: string;
}

export interface Broadcast {
  typeId: number;
  type: string;
  isNational: boolean;
  broadcasterId: number;
  broadcastId: number;
  name: string;
  shortName: string;
  callLetters: string;
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
  advance: boolean;
  form: string;
  displayName: string;
  name: string;
  abbreviation: string;
  location: string;
  color: string;
  alternateColor: string;
  score: string;
  isNational: boolean;
  record: string;
  logo: string;
  logoDark: string;
  goalieSummary: GoalieSummary[];
}

export interface GoalieSummary {
  displayValue: string;
  athlete: Athlete;
}

export interface Athlete {
  id: string;
  displayName: string;
  shortName: string;
  fullName: string;
  lastName: string;
  jersey: string;
  team: AthleteTeam;
  position: string;
}

export interface AthleteTeam {
  id: string;
}

export interface FullStatus {
  clock: number;
  addedClock: number;
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

export interface Note {
  source: string;
  date: string;
  text: string;
  headline: string;
  type: string;
}

export interface EventOdds {
  provider: Provider;
  awayTeamOdds: TeamOdds;
  homeTeamOdds: TeamOdds;
  drawOdds: DrawOddsClass;
  bettingOdds?: BettingOdds;
  links: OddsLink[];
  details?: string;
  overUnder?: number;
  spread?: number;
  overOdds?: number;
  underOdds?: number;
  home?: DrawClass;
  away?: DrawClass;
  draw?: DrawClass;
  pointSpread?: PointSpread;
  moneyline?: Moneyline;
  total?: Total;
}

export interface DrawClass {
  moneyLine: number;
}

export interface TeamOdds {
  odds?: DrawOddsClass;
  team: AwayTeamClass;
  favorite?: boolean;
  underdog?: boolean;
  moneyLine?: number;
  spreadOdds?: number;
}

export interface DrawOddsClass {
  summary?: string;
  value?: number;
  handicap?: number;
  moneyLine?: number;
}

export interface AwayTeamClass {
  id: string;
  abbreviation: string;
}

export interface BettingOdds {
  awayTeam: AwayTeamClass;
  homeTeam: AwayTeamClass;
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

export interface Video {
  source: string;
  id: number;
  headline: string;
  caption: string;
  description: string;
  shortDescription?: string;
  ad: Ad;
  tracking: Tracking;
  cerebroId: string;
  pccId: string;
  contributingPartner?: string;
  contributingSystem?: string;
  lastModified: Date;
  originalPublishDate: Date;
  timeRestrictions: TimeRestrictions;
  deviceRestrictions: DeviceRestrictions;
  geoRestrictions: GeoRestrictions;
  syndicatable: boolean;
  duration: number;
  gameId: number;
  keywords: any[];
  posterImages: PosterImages;
  images: Image[];
  thumbnail: string;
  links: Links;
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

export interface Image {
  name: string;
  url: string;
  alt: string;
  caption: string;
  credit: string;
  width: number;
  height: number;
}

export interface Links {
  api: API;
  web: Web;
  source: Source;
  mobile: Mobile;
}

export interface API {
  self: Full;
  artwork: Full;
}

export interface Full {
  href: string;
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
  self: Full;
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

export interface SportLogo {
  href: string;
  alt: string;
  rel: string[];
  width: number;
  height: number;
}
