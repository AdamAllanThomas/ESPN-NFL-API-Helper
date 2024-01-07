export interface GameRecapData {
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
  ctaAction: string;
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
  playerHash: Targeting;
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
  isOOM: boolean;
  airingsAll: any[];
  airingsTVE: any[];
  airingsDTC: any[];
  networkHashTVE: Targeting;
  networkHashDTC: Targeting;
  userIsEntitledTVE: boolean;
  userIsEntitledDTC: boolean;
}

export interface AwayTeam {
  uid: string;
  homeAway: string;
  record: Record[];
  possession: boolean;
  id: string;
  team: AwayTeamTeam;
  order: number;
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
  links: TeamLink[];
  id: string;
  abbreviation: string;
  logos: Logo[];
}

export interface TeamLink {
  rel: string[];
  href: string;
  text: string;
}

export interface Logo {
  lastUpdated: string;
  width: number;
  alt: string;
  rel: SiteType[];
  href: string;
  height: number;
}

export enum SiteType {
  Dark = "dark",
  Default = "default",
  Full = "full",
  Scoreboard = "scoreboard",
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
  convrSport: string;
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
  ticketsInfo: TicketsInfo;
  shop: Shop;
  zipcodes: Targeting;
  winprobability: any[];
  header: Header;
  broadcasts: any[];
  standings: GamepackageJSONStandings;
  article: GamepackageJSONArticle;
}

export interface GamepackageJSONArticle {
  gameId: string;
  images: VideoImage[];
  dataSourceIdentifier: string;
  keywords: any[];
  description: string;
  linkText: string;
  source: string;
  video: Video[];
  published: Date;
  type: string;
  nowId: string;
  premium: boolean;
  related: any[];
  allowSearch: boolean;
  links: PurpleLinks;
  id: number;
  categories: Category[];
  lastModified: Date;
  metrics: Metric[];
  inlines: any[];
  headline: string;
  story: string;
}

export interface Category {
  uid?: string;
  sportId?: number;
  leagueId?: number;
  league?: CategoryLeague;
  description?: string;
  id?: number;
  type: CategoryType;
  teamId?: number;
  team?: CategoryTeam;
  athleteId?: number;
  athlete?: Athlete;
  createDate?: Date;
  topicId?: number;
  guid?: string;
}

export interface Athlete {
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
  athletes: WebClass;
}

export interface WebClass {
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
  leagues: WebClass;
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
  teams: WebClass;
}

export enum CategoryType {
  Athlete = "athlete",
  GUID = "guid",
  League = "league",
  Team = "team",
  Topic = "topic",
}

export interface VideoImage {
  name: string;
  width: number;
  alt: string;
  caption: string;
  url: string;
  height: number;
  credit?: string;
}

export interface PurpleLinks {
  app: App;
  web: WebClass;
  mobile: WebClass;
  api: StickyAPI;
}

export interface StickyAPI {
  news: WebClass;
  events: WebClass;
}

export interface App {
  sportscenter: WebClass;
}

export interface Metric {
  count: number;
  type: string;
}

export interface Video {
  cerebroId: string;
  images: VideoImage[];
  thumbnail: string;
  ad: Ad;
  dataSourceIdentifier: string;
  keywords: string[];
  timeRestrictions: TimeRestrictions;
  caption: string;
  description: string;
  syndicatable: boolean;
  source: string;
  title: string;
  tracking: Tracking;
  duration: number;
  deviceRestrictions: DeviceRestrictions;
  premium: boolean;
  originalPublishDate: Date;
  links: VideoLinks;
  id: number;
  lastModified: Date;
  categories: Category[];
  posterImages: PosterImages;
  headline: string;
}

export interface Ad {
  sport: string;
  bundle: string;
}

export interface DeviceRestrictions {
  devices: string[];
  type: string;
}

export interface VideoLinks {
  web: Web;
  mobile: PurpleMobile;
  api: IndigoAPI;
  source: Source;
}

export interface IndigoAPI {
  self: WebClass;
  artwork: WebClass;
}

export interface PurpleMobile {
  streaming: WebClass;
  alert: WebClass;
  progressiveDownload: WebClass;
  source: WebClass;
  href: string;
}

export interface Source {
  mezzanine: WebClass;
  hds: WebClass;
  href: string;
  HD: WebClass;
  HLS: HLS;
  flash: WebClass;
  full: WebClass;
}

export interface HLS {
  href: string;
  HD: WebClass;
}

export interface Web {
  self: WebClass;
  href: string;
}

export interface PosterImages {
  square: WebClass;
  default: Default;
  wide: WebClass;
  full: WebClass;
}

export interface Default {
  width: number;
  href: string;
  height: number;
}

export interface TimeRestrictions {
  embargoDate: Date;
  expirationDate: Date;
}

export interface Tracking {
  leagueName: string;
  trackingName: string;
  coverageType: string;
  sportName: string;
  trackingId: string;
}

export interface Header {
  uid: string;
  week: number;
  timeValid: boolean;
  league: HeaderLeague;
  competitions: Competition[];
  season: Season;
  links: HeaderLink[];
  id: string;
}

export interface Competition {
  date: string;
  commentaryAvailable: boolean;
  conferenceCompetition: boolean;
  liveAvailable: boolean;
  broadcasts: Broadcast[];
  playByPlaySource: string;
  uid: string;
  competitors: AwayTeam[];
  onWatchESPN: boolean;
  boxscoreAvailable: boolean;
  id: string;
  neutralSite: boolean;
  recent: boolean;
  boxscoreSource: string;
  status: Status;
}

export interface Broadcast {
  market: Market;
  media: Media;
  type: BroadcastType;
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

export interface Status {
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
  links: TeamLink[];
  id: string;
  abbreviation: string;
  slug: string;
  isTournament: boolean;
}

export interface HeaderLink {
  isExternal: boolean;
  shortText: string;
  rel: string[];
  href: string;
  text: string;
  isPremium: boolean;
  language?: string;
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

export interface Season {
  year: number;
  type: number;
}

export interface News {
  link: HeaderLink;
  header: string;
  articles: ArticleElement[];
}

export interface ArticleElement {
  images: PurpleImage[];
  premium: boolean;
  dataSourceIdentifier: string;
  description: string;
  links: FluffyLinks;
  categories: Category[];
  published: Date;
  lastModified: Date;
  type: string;
  headline: string;
  byline?: string;
}

export interface PurpleImage {
  dataSourceIdentifier?: string;
  name: string;
  width?: number;
  id?: number;
  credit?: string;
  type: string;
  url: string;
  height?: number;
  caption?: string;
  _id?: number;
  ratio?: string;
}

export interface FluffyLinks {
  web: WebClass;
  mobile: WebClass;
  api: IndecentAPI;
}

export interface IndecentAPI {
  news: WebClass;
  self: WebClass;
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
  images: FluffyImage[];
  displayPrice: string;
  hasFreeShipping: boolean;
  price: number;
  name: string;
  links: Collection[];
  isNew: boolean;
}

export interface FluffyImage {
  rel: SiteType[];
  href: string;
}

export interface GamepackageJSONStandings {
  fullViewLink: FullViewLink;
  groups: Group[];
}

export interface FullViewLink {
  text: string;
  href: string;
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
  logo: Logo[];
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

export interface TicketsInfo {
  tickets: Ticket[];
  seatSituation: SeatSituation;
}

export interface SeatSituation {
  venueName: string;
  summary: string;
  date: Date;
  venueLink: string;
  teamLink: string;
  homeAway: string;
  dateShort: string;
  genericLink: string;
  dateDay: string;
  currentTeamName: string;
  opponentTeamName: string;
  eventLink: string;
}

export interface Ticket {
  type: string;
  ticketLink: string;
  ticketName: string;
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
  ampCanonical: string;
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
  links: HeaderLink[];
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
  links: HeaderLink[];
  id: number;
  title: string;
  $ref: string;
  text?: string;
  items?: ItemItem[];
  images?: TentacledImage[];
}

export interface TentacledImage {
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
  rel?: string[];
  lang?: string;
  logoUrl?: string;
}

export interface FluffyAttributes {
  mobile?: string;
  teamAbbrev?: string;
  teamId?: number;
}
