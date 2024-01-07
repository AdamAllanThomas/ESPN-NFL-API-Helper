export interface stringupData {
  gameId: number;
  DTCpackages: DTCpackages;
  gamepackageJSON: GamepackageJSON;
  customStyleSheet: string;
  type: string;
  content: Content;
  __gamepackage__: Gamepackage;
  analytics: Analytics;
  ads: Ads;
  targeting: Targeting;
  meta: Meta;
  nowFeedSupported: boolean;
  customNav: string;
  sport: string[];
  tier2Nav: Tier2Nav;
}

export interface DTCpackages {
  packages: Package[];
}

export interface Package {
  priceIncrease?: Targeting[];
  subscriptions?: Targeting[];
  entitlement: string;
  subscription: Subscription;
  tuneIn: TuneIn;
  concurrencyLimit: number;
  trial?: PackageTrial;
  isPPV: boolean;
  trialActive?: boolean;
  paywall: PackagePaywall;
  countryCodes: string[];
  isIap: boolean;
  accountsHold?: AccountsHold[];
  name: string;
  postPurchaseScreen?: PostPurchaseScreen;
  id: number;
  embeddedPaywall: EmbeddedPaywall;
  billingDisclaimer?: string;
  showPregame: boolean;
  voucherCode?: string;
  campaignCode?: string;
  isOOM?: boolean;
}

export interface AccountsHold {
  ctaUrl: string;
  refreshEntitlementErrorMessage: string;
  ctaText: string;
  networkErrorMessage: string;
  ctastring: string;
  errorMessage: string;
  header: string;
  type: string;
  enabled: boolean;
  subHeader: string;
}

export interface EmbeddedPaywall {
  ctaButtonTitle: string;
  title: string;
}

export interface PackagePaywall {
  legalText1: string;
  termsOfUseText?: string;
  subscriberAgreementText?: string;
  ctaButtonTitle: string;
  backgroundColors: string[];
  backgroundVideoUrl: string;
  notPurchaseableText?: string;
  toggle?: Toggle;
  privacyPolicyText?: string;
  purchaseSuccessText: string;
  title: string;
  legalText4?: string;
  legalText3?: string;
  sponsorImageUrl?: string;
  legalText2?: string;
}

export interface Toggle {
  enabled: boolean;
  sections: Section[];
}

export interface Section {
  disclaimerText2: string;
  isDefault: boolean;
  disclaimerText1: string;
  notes: Note[];
  buttons: Button[];
  analyticsName: string;
  text: string;
  flagText?: string;
  key: string;
}

export interface Button {
  trialActive: boolean;
  analyticsName: string;
  sku: string;
  title: string;
  billingDisclaimer: string;
  textColor: string;
  disclaimer: string;
  trial: ButtonTrial;
  billing?: Billing;
}

export interface Billing {
  showCheckBox: boolean;
  billingDisclosureError: string;
  ctaButtonTitle: string;
  billingDisclosure: string;
}

export interface ButtonTrial {
  paywall: PurplePaywall;
  length: string;
  categoryCode: string;
  billingDisclaimer: string;
  voucherCode: string;
  campaignCode: string;
}

export interface PurplePaywall {
  disclaimer: string;
}

export interface Note {
  image: string;
  subtitle?: string;
  title?: string;
}

export interface PostPurchaseScreen {
  promo: Promo;
  buttonText: string;
  message: string;
  enabled: boolean;
  logoUrl: string;
  backgroundImageUrl: string;
}

export interface Promo {
  linkUrl: string;
  linkText: string;
  message: string;
  enabled: boolean;
  logoUrl: string;
}

export interface Targeting {}

export interface Subscription {
  bundled?: Bundled;
  subscribeText: string;
  subscribedText: string;
  name: string;
  backgroundColors: string[];
  subscriptionExpiredText: string;
  description: string;
  heroImageUrl: string;
}

export interface Bundled {
  manageExpiredText: string;
  manageActiveText: string;
  name: string;
  description: string;
  logoUrl: string;
}

export interface PackageTrial {
  paywall: FluffyPaywall;
  length: string;
  categoryCode: string;
  billingDisclaimer: string;
  voucherCode: string;
  campaignCode: string;
}

export interface FluffyPaywall {
  ctaButtonTitle: string;
  disclaimer: string;
}

export interface TuneIn {
  buttonText: string;
  upsellHref: string;
  upsellTextKey: string;
  overlayImgUrl: string;
  backgroundImgUrl: string;
}

export interface Gamepackage {
  playerHash: { [key: string]: PlayerHash };
  awayTeam: AwayTeam;
  homeTeam: AwayTeam;
  awayTeamLogo: string;
  homeTeamLogo: string;
  highlightPlayers: boolean;
  airingsHash: AiringsHash;
}

export interface AiringsHash {
  onWatch: boolean;
  onDTC: boolean;
  gameOnEPlus: boolean;
  eplusAiring: EplusAiring;
  isOOM: boolean;
  airingsAll: Airing[];
  airingsTVE: AiringsTVE[];
  airingsDTC: EplusAiring[];
  networkHashTVE: NetworkHashTVE;
  networkHashDTC: NetworkHashDTC;
  userEntitledAiringsTVE: any[];
  userEntitledAiringsDTC: any[];
  userIsEntitledTVE: boolean;
  userIsEntitledDTC: boolean;
  airingArtworkUrl: string;
  airingVideoHref: string;
}

export interface Airing {
  withinPlayWindow: boolean;
  program_eventId: string;
  program_categories: ProgramCategory[];
  program_firstPresented: string;
  program: string;
  createdOn: string;
  network: string;
  appGameLink: string;
  policyUrl: string;
  network_displayName: string;
  end: string;
  networkId: string;
  id: string;
  program_language: string;
  webAiringLink: string;
  webGameLink: string;
  policy: AiringsAllPolicy;
  productLinks?: ProductLinks;
  images: PeerElement[];
  artworkUrl: string;
  lastModifiedBy: string;
  start: string;
  externalId: string;
  lastModifiedOn: string;
  appAiringLink: string;
  createdBy: string;
  program_originalAirDate: string;
  program_shortTitle: string;
  program_eventUrl: string;
  network_shortName: string;
  properties: AiringsAllProperties;
  playableUrl: string;
  channel?: Channel;
  network_resourceId?: string;
}

export interface Channel {
  artworkUrl: string;
  href: string;
  id: string;
}

export interface PeerElement {
  width: number;
  name: string;
  peers?: PeerElement[];
  url: string;
  height: number;
}

export interface AiringsAllPolicy {
  viewingPolicies: PurpleViewingPolicy[];
  createdBy: string;
  lastModifiedBy: string;
  id: string;
  createdOn: Date;
  lastModifiedOn: Date;
}

export interface PurpleViewingPolicy {
  audience: PurpleAudience;
  name: string;
  externalId: string;
  id: string;
  actions: string[];
}

export interface PurpleAudience {
  name: string;
  match: string;
  externalId: string;
  id: string;
  properties: PurpleProperties;
}

export interface PurpleProperties {
  iso3166?: string[];
  subscription?: string[];
}

export interface ProductLinks {
  web: string;
  mobile: string;
}

export interface ProgramCategory {
  sportId: string;
  artworkUrl: string;
  name: string;
  id: string;
  type: string;
}

export interface AiringsAllProperties {
  hasEspnId3Heartbeats: string;
  language: string;
  shortTitle: string;
  trueOriginal: string;
  title: string;
  simulcastAiringId: string;
  contentCleared?: string;
  hasPassThroughAds: string;
  dtcPackages?: string[];
  airingConcurrency?: string;
  isLive: string;
  hasNielsenWatermarks: string;
  artworkLastModified: string;
  allowStartOver: string;
  trackingId: string;
  commercialReplacement: string;
  allowedAccess: string;
  reAir: string;
  sponsored: string;
  liveReplay: string;
  broadcastStartOffset?: string;
  feedType: string;
  ratingsId: string;
  name: string;
  shortName: string;
  canIpAuthenticate: string;
  advertisingId?: string;
  killDateTimestamp?: Date;
  nbStartTimestamp?: Date;
  origination?: string;
}

export interface EplusAiring {
  withinPlayWindow: boolean;
  program_eventId: string;
  program_categories: ProgramCategory[];
  program_firstPresented: string;
  program: string;
  createdOn: string;
  network: string;
  appGameLink: string;
  policyUrl: string;
  network_displayName: string;
  end: string;
  networkId: string;
  id: string;
  program_language: string;
  webAiringLink: string;
  webGameLink: string;
  policy: AiringsAllPolicy;
  productLinks: ProductLinks;
  images: PeerElement[];
  artworkUrl: string;
  lastModifiedBy: string;
  start: string;
  externalId: string;
  lastModifiedOn: string;
  appAiringLink: string;
  createdBy: string;
  program_originalAirDate: string;
  program_shortTitle: string;
  program_eventUrl: string;
  network_shortName: string;
  properties: AiringsAllProperties;
  playableUrl: string;
}

export interface AiringsTVE {
  withinPlayWindow: boolean;
  program_eventId: string;
  program_categories: ProgramCategory[];
  channel: Channel;
  program_firstPresented: string;
  program: string;
  createdOn: string;
  network_resourceId: string;
  network: string;
  appGameLink: string;
  policyUrl: string;
  network_displayName: string;
  end: string;
  networkId: string;
  id: string;
  program_language: string;
  webAiringLink: string;
  webGameLink: string;
  policy: AiringsTVEPolicy;
  productLinks?: ProductLinks;
  images: PeerElement[];
  artworkUrl: string;
  lastModifiedBy: string;
  start: string;
  externalId: string;
  lastModifiedOn: string;
  appAiringLink: string;
  createdBy: string;
  program_originalAirDate: string;
  program_shortTitle: string;
  program_eventUrl: string;
  network_shortName: string;
  properties: AiringsAllProperties;
  playableUrl: string;
}

export interface AiringsTVEPolicy {
  viewingPolicies: FluffyViewingPolicy[];
  createdBy: string;
  lastModifiedBy: string;
  id: string;
  createdOn: Date;
  lastModifiedOn: Date;
}

export interface FluffyViewingPolicy {
  audience: FluffyAudience;
  name: string;
  externalId: string;
  id: string;
  actions: string[];
}

export interface FluffyAudience {
  name: string;
  match: string;
  externalId: string;
  id: string;
  properties: FluffyProperties;
}

export interface FluffyProperties {
  iso3166: string[];
}

export interface NetworkHashDTC {
  ESPN_BASE: boolean;
  ESPN_PLUS: boolean;
}

export interface NetworkHashTVE {
  espn1: boolean;
  espndeportes: boolean;
}

export interface AwayTeam {
  uid: string;
  homeAway: HomeAway;
  score: string;
  timeoutsUsed: number;
  record: Record[];
  possession: boolean;
  id: string;
  team: AwayTeamTeam;
  linescores: Linescore[];
  order: number;
}

export enum HomeAway {
  Away = "away",
  Home = "home",
}

export interface Linescore {
  displayValue: string;
}

export interface Record {
  summary: string;
  displayValue: string;
  type: string;
}

export interface AwayTeamTeam {
  uid: string;
  alternateColor: string;
  color: string;
  displayName: string;
  name: string;
  nickname: string;
  location: string;
  links: AthleteLink[];
  id: string;
  abbreviation: string;
  logos: TeamLogo[];
}

export interface AthleteLink {
  rel: string[];
  href: string;
  text: string;
}

export interface TeamLogo {
  lastUpdated?: string;
  width: number;
  alt: string;
  rel: SiteType[];
  href: string;
  height: number;
}

export enum SiteType {
  Dark = "dark",
  Day = "day",
  Default = "default",
  Full = "full",
  Interior = "interior",
  Scoreboard = "scoreboard",
}

export interface PlayerHash {
  json: JSON;
  homeAway: HomeAway;
  teamColor: string;
}

export interface JSON {
  athlete: JSONAthlete;
  stats: string[];
}

export interface JSONAthlete {
  uid: string;
  firstName: string;
  lastName: string;
  displayName: string;
  guid: string;
  links: AthleteLink[];
  id: string;
}

export interface Ads {
  page_url: string;
  prebidAdConfig: PrebidAdConfig;
  level: string;
  sizesEspnPlus: SizesEspnPlus;
  delayInPageAdSlots: boolean;
  incontentPositions: IncontentPositions;
  showEspnPlusAds: boolean;
  kvpsEspnPlus: Kvp[];
  network: string;
  refreshOnBreakpointChange: boolean;
  webviewOverride: WebviewOverride;
  sizes: Sizes;
  load: Load;
  bettingOnlySizes: BettingOnlySizes;
  supportDynamicPageLoad: boolean;
  selector: string;
  whitelistEspnPlus: string[];
  disabled: string;
  override: Override;
  breakpoints: Breakpoints;
  dynamicKeyValues: DynamicKeyValues;
  id: number;
  kvps: Kvp[];
  base: string;
}

export interface BettingOnlySizes {
  "incontent-betting": IncontentBetting;
  "native-betting": Native;
}

export interface IncontentBetting {
  mappings: IncontentBettingMapping[];
  defaultSize: number[];
}

export interface IncontentBettingMapping {
  viewport: number[];
  slot: Array<number[]>;
}

export interface Native {
  mappings: NativeBettingMapping[];
  defaultSize: string;
}

export interface NativeBettingMapping {
  viewport: number[];
  slot: string[];
}

export interface Breakpoints {
  s: number[];
  xl: number[];
  l: number[];
  m: number[];
}

export interface DynamicKeyValues {
  profile: Profile;
}

export interface Profile {
  key: string;
}

export interface IncontentPositions {
  defaults: IncontentPositionsDefaults;
  index: Index;
}

export interface IncontentPositionsDefaults {
  favorites: number;
  news: number;
  now: number;
}

export interface Index {
  top: Top;
  nfl: Targeting;
}

export interface Top {
  favorites: number;
}

export interface Kvp {
  name: string;
  value: string;
}

export interface Load {
  schedule: FrontpageClass;
  frontpage: FrontpageClass;
  defaults: FrontpageClass;
  index: FrontpageClass;
  scoreboard: FrontpageClass;
  standings: FrontpageClass;
  story: FrontpageClass;
}

export interface FrontpageClass {
  tablet: string;
  desktop: string;
  mobile: string;
}

export interface Override {
  banner: OverrideBanner;
}

export interface OverrideBanner {
  preview: string;
  game: string;
  fightcenter: string;
  match: string;
  index: string;
  scoreboard: string;
  conversation: string;
  lineups: string;
}

export interface PrebidAdConfig {
  usePrebidBids: boolean;
  timeout: number;
}

export interface Sizes {
  gamecast: IncontentBetting;
  overlay: IncontentBetting;
  wallpaper: IncontentBetting;
  "banner-scoreboard": Banner;
  incontent2: IncontentBetting;
  banner: SizesBanner;
  exclusions: IncontentBetting;
  "native-betting": Native;
  "banner-index": Banner;
  "banner-webview": Banner;
  presby: IncontentBetting;
  presentedbylogo: IncontentBetting;
  native: Native;
  incontentstrip: Incontentstrip;
  "incontent-betting": IncontentBetting;
  instream: IncontentBetting;
  incontentstrip2: IncontentBetting;
  incontent: IncontentBetting;
  midpage: IncontentBetting;
}

export interface SizesBanner {
  mappings: IncontentBettingMapping[];
  defaultSize: number[];
  pbjs: Pbjs;
}

export interface Pbjs {
  s: Array<number[]>;
  xl: Array<number[]>;
  l: Array<number[]>;
  m: Array<number[]>;
}

export interface Banner {
  excludedSize: string[];
  mappings: IncontentBettingMapping[];
  defaultSize: number[];
  excludedProfile?: string[];
  includedCountries: string[];
  pbjs: Pbjs;
}

export interface Incontentstrip {
  mappings: IncontentstripMapping[];
  defaultSize: number[];
}

export interface IncontentstripMapping {
  viewport: number[];
  slot: number[];
}

export interface SizesEspnPlus {
  "banner-index": Banner;
  gamecast: IncontentBetting;
  "banner-scoreboard": Banner;
  banner: SizesBanner;
  "incontent-betting": IncontentBetting;
  "native-betting": Native;
  instream: IncontentBetting;
  incontent: IncontentBetting;
}

export interface WebviewOverride {
  banner: WebviewOverrideBanner;
}

export interface WebviewOverrideBanner {
  "mlb/stats": string;
  roster: string;
  "cfb/rankings": string;
  "team/stats": string;
  "nba/stats": string;
  "ncaaw/rankings": string;
  "nfl/stats": string;
  standings: string;
  "cfb/stats": string;
  "ncb/rankings": string;
}

export interface Analytics {
  metrics: Metrics;
  omniture: Omniture;
  chartbeat: Chartbeat;
  ABTest: ABTest;
  nielsen: Nielsen;
  device: string;
  isFeaturePhone: boolean;
  cto: boolean;
  qualtrics: boolean;
}

export interface ABTest {
  domain: string;
  environment: string;
  host: string;
  target: boolean;
  optimizely: boolean;
  tScript: string;
  oScript: string;
  isTargeted: boolean;
  targetURLs: TargetURL[];
  optimizelyURLs: any[];
  raw: string;
}

export interface TargetURL {
  regexp: string;
  site: string;
  flag: boolean;
}

export interface Chartbeat {
  domain: string;
  sections: string;
  authors: string;
  path: string;
  title: string;
  zone: string;
  loadPubJS: boolean;
  loadVidJS: boolean;
}

export interface Metrics {
  page_url: string;
  page_infrastructure: string;
  page_type: string;
  league: string;
  section: string;
  game_state: string;
  premium: boolean;
  content_type: string;
  game_detail: string;
  page_name: string;
  sport: string;
  game_id: number;
}

export interface Nielsen {
  espnuk: Cricinfo;
  espnau: Cricinfo;
  espn: Cricinfo;
  fantasy: Cricinfo;
  espndeportes: Cricinfo;
  espnfc: Cricinfo;
  espnww: Cricinfo;
  general: General;
  espnza: Cricinfo;
  espnin: Cricinfo;
  watchespn: Cricinfo;
  cricinfo: Cricinfo;
  espnbr: Cricinfo;
}

export interface Cricinfo {
  apid: string;
  vc: string;
}

export interface General {
  ci: string;
  assetid: string;
  segB: string;
  sfcode: string;
  segA: string;
  section: string;
  segC: string;
  apn: string;
}

export interface Omniture {
  gameInfo: string;
  league: string;
  countryRegion: string;
  hier1: string;
  section: string;
  pageName: string;
  sections: string;
  site: string;
  premium: string;
  appearance: string;
  convrstring: string;
  pageURL: string;
  lang: string;
  prop46: string;
  gameState: string;
  contentType: string;
  sport: string;
  account: string;
  siteType: SiteType;
  prop58: string;
}

export interface Content {
  title: string;
  description: string;
  og_type: string;
  sport: string;
  league: string;
  tab: Tab;
  statusState: string;
  canonical: string;
  tabType: string;
}

export interface Tab {
  layout: string;
  pageType: string;
  metaDescription: string;
  columnsModuleTypes: ColumnsModuleTypes;
  metaTitle: string;
}

export interface ColumnsModuleTypes {
  default: Array<string[]>;
  tablet: Array<string[]>;
  mobile: Array<string[]>;
}

export interface GamepackageJSON {
  news: News;
  pickcenter: Pickcenter[];
  shop: Shop;
  zipcodes: Targeting;
  winprobability: any[];
  gameInfo: GameInfo;
  boxscore: Boxscore;
  header: Header;
  broadcasts: GamepackageJSONBroadcast[];
  leaders: GamepackageJSONLeader[];
  standings: GamepackageJSONStandings;
}

export interface Boxscore {
  teams: TeamElement[];
  players: Player[];
}

export interface Player {
  displayOrder: number;
  team: PlayerTeam;
  statistics: PlayerStatistic[];
}

export interface PlayerStatistic {
  keys: string[];
  name: string;
  athletes: JSON[];
  text: string;
  totals: string[];
  descriptions: string[];
  labels: string[];
}

export interface PlayerTeam {
  shortDisplayName: string;
  uid: string;
  alternateColor: string;
  color: string;
  displayName: string;
  name: string;
  logo: string;
  location: string;
  id: string;
  abbreviation: string;
  slug: string;
}

export interface TeamElement {
  displayOrder: number;
  team: PlayerTeam;
  statistics: TeamStatistic[];
}

export interface TeamStatistic {
  displayValue: string;
  name: string;
  label: string;
}

export interface GamepackageJSONBroadcast {
  market: Market;
  station: string;
  media: PurpleMedia;
  type: PurpleType;
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
  slug: string;
  longName: string;
}

export interface GameInfo {
  venue: Venue;
  weather: Weather;
}

export interface Venue {
  images: TeamLogo[];
  address: Address;
  grass: boolean;
  fullName: string;
  id: string;
  capacity: number;
}

export interface Address {
  zipCode: string;
  city: string;
  state: string;
}

export interface Weather {
  precipitation: number;
  conditionId: string;
  highTemperature: number;
  temperature: number;
  link: WeatherLink;
  lowTemperature: number;
  gust: number;
}

export interface WeatherLink {
  isExternal: boolean;
  shortText: string;
  rel: string[];
  language?: string;
  href: string;
  text: string;
  isPremium: boolean;
  tracking?: Tracking;
  attributes?: PurpleAttributes;
}

export interface PurpleAttributes {
  breakpoints?: string;
  route?: string;
  "match-url"?: string;
  sportAbbrev?: string;
  icon?: string;
  mobile?: string;
  placeholder?: string;
}

export interface Tracking {
  campaign: string;
  tags: Tags;
}

export interface Tags {
  gameId: number;
  league: string;
  sport: string;
  betType: string;
  betSide: string;
  betDetails?: string;
}

export interface Header {
  uid: string;
  week: number;
  timeValid: boolean;
  league: HeaderLeague;
  competitions: Competition[];
  season: Season;
  links: WeatherLink[];
  id: string;
}

export interface Competition {
  date: string;
  commentaryAvailable: boolean;
  conferenceCompetition: boolean;
  liveAvailable: boolean;
  broadcasts: CompetitionBroadcast[];
  playByPlaySource: SiteType;
  uid: string;
  competitors: AwayTeam[];
  onWatchESPN: boolean;
  boxscoreAvailable: boolean;
  airings: Airing[];
  id: string;
  neutralSite: boolean;
  recent: boolean;
  boxscoreSource: SiteType;
  status: Status;
}

export interface CompetitionBroadcast {
  market: Market;
  media: FluffyMedia;
  type: FluffyType;
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

export interface Status {
  period: number;
  displayClock: string;
  type: StatusType;
}

export interface StatusType {
  name: string;
  description: string;
  id: string;
  state: string;
  completed: boolean;
  detail: string;
  shortDetail: string;
}

export interface HeaderLeague {
  uid: string;
  name: string;
  links: AthleteLink[];
  id: string;
  abbreviation: string;
  slug: string;
  isTournament: boolean;
}

export interface Season {
  year: number;
  type: number;
}

export interface GamepackageJSONLeader {
  leaders: PurpleLeader[];
  team: LeaderTeam;
}

export interface PurpleLeader {
  displayName: string;
  name: string;
  leaders: FluffyLeader[];
}

export interface FluffyLeader {
  displayValue: string;
  athlete: LeaderAthlete;
}

export interface LeaderAthlete {
  uid: string;
  lastName: string;
  displayName: string;
  headshot: Headshot;
  jersey: string;
  guid: string;
  fullName: string;
  links: AthleteLink[];
  id: string;
  position: Position;
  team: AthleteTeam;
  shortName: string;
}

export interface Headshot {
  alt: string;
  href: string;
}

export interface Position {
  abbreviation: string;
}

export interface AthleteTeam {
  $ref: string;
}

export interface LeaderTeam {
  uid: string;
  displayName: string;
  logo: string;
  links: FullViewLinkElement[];
  id: string;
  abbreviation: string;
  logos: TeamLogo[];
}

export interface FullViewLinkElement {
  href: string;
  text: string;
}

export interface News {
  link: WeatherLink;
  header: string;
  articles: Article[];
}

export interface Article {
  images: ArticleImage[];
  premium: boolean;
  dataSourceIdentifier: string;
  description: string;
  links: ArticleLinks;
  published: Date;
  lastModified: Date;
  categories: Category[];
  type: string;
  headline: string;
  byline?: string;
}

export interface Category {
  sportId?: number;
  topicId?: number;
  description?: string;
  id?: number;
  type: CategoryType;
  createDate?: Date;
  uid?: string;
  leagueId?: number;
  league?: CategoryLeague;
  teamId?: number;
  team?: CategoryTeam;
  athleteId?: number;
  athlete?: CategoryAthlete;
  guid?: string;
}

export interface CategoryAthlete {
  description: string;
  links: AthleteLinks;
  id: number;
}

export interface AthleteLinks {
  web: PurpleAPI;
  mobile: PurpleAPI;
  api: PurpleAPI;
}

export interface PurpleAPI {
  athletes: Mobile;
}

export interface Mobile {
  href: string;
}

export interface CategoryLeague {
  description: string;
  links: LeagueLinks;
  id: number;
}

export interface LeagueLinks {
  web: FluffyAPI;
  mobile: FluffyAPI;
  api: FluffyAPI;
}

export interface FluffyAPI {
  leagues: Mobile;
}

export interface CategoryTeam {
  description: string;
  links: TeamLinks;
  id: number;
}

export interface TeamLinks {
  web: TentacledAPI;
  mobile: TentacledAPI;
  api: TentacledAPI;
}

export interface TentacledAPI {
  teams: Mobile;
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
  web: Mobile;
  api: StickyAPI;
  mobile?: Mobile;
}

export interface StickyAPI {
  news: Mobile;
  self: Mobile;
}

export interface Pickcenter {
  underOdds: number;
  awayTeamOdds: TeamOdds;
  link: WeatherLink;
  pointSpread: PointSpread;
  spread: number;
  overUnder: number;
  current: PickcenterCurrent;
  total: PickcenterTotal;
  provider: Provider;
  details: string;
  links: WeatherLink[];
  moneyline: Moneyline;
  homeTeamOdds: TeamOdds;
  open: PickcenterCurrent;
  overOdds: number;
}

export interface TeamOdds {
  spreadOdds: number;
  current: AwayTeamOddsCurrent;
  underdog: boolean;
  teamId: string;
  favorite: boolean;
  moneyLine: number;
  open: AwayTeamOddsCurrent;
}

export interface AwayTeamOddsCurrent {
  moneyLine: Over;
  pointSpread: PointSpreadClass;
  spread: Over;
}

export interface Over {
  displayValue: string;
  alternateDisplayValue: string;
  value: number;
}

export interface PointSpreadClass {
  alternateDisplayValue: string;
}

export interface PickcenterCurrent {
  over: Over;
  total: PointSpreadClass;
  under: Over;
}

export interface Moneyline {
  shortDisplayName: string;
  away: MoneylineAway;
  displayName: string;
  home: MoneylineAway;
}

export interface MoneylineAway {
  close: PurpleClose;
  open: PurpleOpen;
  live: PurpleClose;
}

export interface PurpleClose {
  odds: string;
  link: WeatherLink;
}

export interface PurpleOpen {
  odds: string;
}

export interface PointSpread {
  shortDisplayName: string;
  away: OverClass;
  displayName: string;
  home: OverClass;
}

export interface OverClass {
  close: OverClose;
  open: OverOpen;
  live: OverClose;
}

export interface OverClose {
  line: string;
  odds: string;
  link: WeatherLink;
}

export interface OverOpen {
  line: string;
  odds: string;
}

export interface Provider {
  name: string;
  id: string;
  priority: number;
  logos: ProviderLogo[];
}

export interface ProviderLogo {
  rel: string[];
  href: string;
}

export interface PickcenterTotal {
  shortDisplayName: string;
  over: OverClass;
  displayName: string;
  under: OverClass;
}

export interface Shop {
  header: string;
  collection: Collection[];
  items: ShopItem[];
}

export interface Collection {
  isExternal: boolean;
  rel: string[];
  href: string;
}

export interface ShopItem {
  images: ProviderLogo[];
  displayPrice: string;
  hasFreeShipping: boolean;
  price: number;
  name: string;
  links: Collection[];
  isNew: boolean;
}

export interface GamepackageJSONStandings {
  fullViewLink: FullViewLinkElement;
  groups: Group[];
}

export interface Group {
  header: string;
  href: string;
  standings: GroupStandings;
}

export interface GroupStandings {
  entries: Entry[];
}

export interface Entry {
  uid: string;
  stats: Stat[];
  link: string;
  logo: TeamLogo[];
  team: string;
  id: string;
}

export interface Stat {
  shortDisplayName?: string;
  displayValue: string;
  displayName?: string;
  name: string;
  description?: string;
  abbreviation: string;
  type: string;
  value?: number;
  summary?: string;
  id?: string;
}

export interface Meta {
  imageWidth: number;
  image: string;
  twitter_card: string;
  og_site_name: string;
  twitter_app_id_iphone: string;
  description: string;
  og_type: string;
  twitter_app_name_googleplay: string;
  label: string;
  canonical: string;
  type: string;
  title: string;
  imageHeight: number;
  fb_app_id: string;
  twitter_site: string;
  root: string;
  twitter_app_id_googleplay: string;
  twitter_app_name_iphone: string;
}

export interface Tier2Nav {
  subNavMenu: SubNavMenu;
}

export interface SubNavMenu {
  navigation: Navigation;
  navId: number;
  fallback: boolean;
}

export interface Navigation {
  links: WeatherLink[];
  attributes: NavigationAttributes;
  id: number;
  text: string;
  title: string;
  $ref: string;
  items: NavigationItem[];
}

export interface NavigationAttributes {
  sport_id: string;
  root: string;
}

export interface NavigationItem {
  links: WeatherLink[];
  id: number;
  title: string;
  $ref: string;
  text?: string;
  items?: ItemItem[];
  images?: ItemImage[];
}

export interface ItemImage {
  src: string;
}

export interface ItemItem {
  links: PurpleLink[];
  id?: number;
  title?: string;
  $ref?: string;
  sort?: string;
}

export interface PurpleLink {
  isExternal: boolean;
  shortText: string;
  attributes?: FluffyAttributes;
  text: string;
  href: string;
  isPremium: boolean;
  rel?: Rel[];
  lang?: string;
  logoUrl?: string;
}

export interface FluffyAttributes {
  mobile?: string;
  teamAbbrev?: string;
  teamId?: number;
}

export enum Rel {
  Conference = "conference",
  Group = "group",
  string = "label",
  Team = "team",
}
