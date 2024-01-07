export interface ScheduleData {
  analytics: Analytics;
  ads: Ads;
  DTCpackages: DTCpackages;
  meta: Meta;
  nowFeedSupported: boolean;
  type: TypeElement;
  sport: string[];
  tier2Nav: Tier2Nav;
  content: Content;
}

export interface DTCpackages {
  packages: Package[];
}

export interface Package {
  priceIncrease?: Nfl[];
  subscriptions?: Nfl[];
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

export interface Nfl {}

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
  nfl: Nfl;
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
  device: Device;
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
  authors: TypeElement;
  path: string;
  title: string;
  zone: string;
  loadPubJS: boolean;
  loadVidJS: boolean;
}

export enum TypeElement {
  Clubhouse = "clubhouse",
  Desktop = "desktop",
  Roster = "roster",
  Schedule = "schedule",
  strings = "sports",
  Stats = "stats",
  Team = "team",
}

export enum Device {
  Athlete = "athlete",
  Dark = "dark",
  Desktop = "desktop",
  Light = "light",
  Playercard = "playercard",
}

export interface Metrics {
  nav_method: string;
  page_url: string;
  premium: boolean;
  content_type: TypeElement;
  page_infrastructure: string;
  page_type: TypeElement;
  league: string;
  page_name: string;
  section: string;
  sport: string;
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
  espn3ContentType: string;
  league: string;
  countrystring: string;
  navMethod: string;
  hier1: string;
  section: string;
  pageName: string;
  sections: string;
  site: string;
  premium: string;
  appearance: Device;
  convrstring: string;
  pageURL: string;
  lang: string;
  prop46: string;
  contentType: TypeElement;
  sport: string;
  account: string;
  siteType: string;
  prop58: string;
}

export interface Content {
  schedule: { [key: string]: ScheduleValue };
  sortedstrings: any[];
  league: string;
  activeDate: string;
  title: string;
  description: string;
  root: string;
  edition: string;
  pageTitle: PageTitle;
  daysToShow: number;
  canonical: string;
  sport: string;
  parameters: ParametersClass;
  defaults: ParametersClass;
  calendar: Calendar[];
  weekMap: Week;
  og_type: string;
}

export interface Calendar {
  entries: Entry[];
  endDate: string;
  label: string;
  value: string;
  startDate: string;
}

export interface Entry {
  endDate: string;
  alternateLabel: string;
  label: string;
  detail: string;
  value: string;
  startDate: string;
}

export interface ParametersClass {
  week: number;
  year: number;
  seasontype: number;
}

export enum PageTitle {
  Clubhouse = "Clubhouse",
  Nfl = "NFL",
  Roster = "Roster",
  Schedule = "Schedule",
  Statistics = "Statistics",
}

export interface ScheduleValue {
  games: Game[];
}

export interface Game {
  date: string;
  uid: string;
  week: Week;
  name: string;
  competitions: Competition[];
  season: Season;
  links: OddLink[];
  id: string;
  shortName: string;
  status: Status;
  weather?: Weather;
}

export interface Competition {
  date: string;
  venue: CompetitionVenue;
  conferenceCompetition: boolean;
  notes: any[];
  timeValid: boolean;
  geoBroadcasts: GeoBroadcast[];
  format: Format;
  broadcasts: Broadcast[];
  playByPlayAvailable: boolean;
  leaders: CompetitionLeader[];
  type: CompetitionType;
  uid: string;
  competitors: Competitor[];
  headlines?: Headline[];
  id: string;
  neutralSite: boolean;
  recent: boolean;
  attendance: number;
  startDate: string;
  status: Status;
  airings?: Airing[];
  situation?: Nfl;
  tickets?: Ticket[];
  odds?: Odd[];
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
  policy: Policy;
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
  properties: AiringProperties;
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

export interface Policy {
  viewingPolicies: ViewingPolicy[];
  createdBy: string;
  lastModifiedBy: string;
  id: string;
  createdOn: Date;
  lastModifiedOn: Date;
}

export interface ViewingPolicy {
  audience: Audience;
  name: string;
  externalId: string;
  id: string;
  actions: string[];
}

export interface Audience {
  name: string;
  match: string;
  externalId: string;
  id: string;
  properties: AudienceProperties;
}

export interface AudienceProperties {
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

export interface AiringProperties {
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

export interface Broadcast {
  market: string;
  names: string[];
}

export interface Competitor {
  uid: string;
  homeAway: string;
  score: string;
  winner?: boolean;
  records: Record[];
  id: string;
  team: CompetitorTeam;
  type: TypeElement;
  linescores?: Linescore[];
  order: number;
  statistics: any[];
  leaders?: CompetitorLeader[];
}

export interface CompetitorLeader {
  shortstring: Leaderstring;
  displayName: Leaderstring;
  name: PurpleName;
  leaders: PurpleLeader[];
  abbreviation: LeaderAbbreviation;
}

export enum LeaderAbbreviation {
  Pyds = "PYDS",
  Recyds = "RECYDS",
  Ryds = "RYDS",
}

export enum Leaderstring {
  PassingLeader = "Passing Leader",
  ReceivingLeader = "Receiving Leader",
  RushingLeader = "Rushing Leader",
}

export interface PurpleLeader {
  displayValue: string;
  athlete: Athlete;
  team: LeaderTeam;
  value: number;
}

export interface Athlete {
  displayName?: string;
  headshot?: string;
  jersey?: string;
  fullName?: string;
  active?: boolean;
  links?: Logo[];
  id?: string;
  position?: Position;
  team?: TeamClass;
  shortName?: string;
  $ref?: string;
}

export interface Logo {
  rel: Device[];
  href: string;
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

export interface TeamClass {
  id: string;
}

export interface LeaderTeam {
  id?: string;
  $ref?: string;
}

export enum PurpleName {
  PassingLeader = "passingLeader",
  ReceivingLeader = "receivingLeader",
  RushingLeader = "rushingLeader",
}

export enum Leaderstring {
  Pass = "PASS",
  Rec = "REC",
  Rush = "RUSH",
}

export interface Linescore {
  value: number;
}

export interface Record {
  summary: string;
  name: RecordName;
  abbreviation?: string;
  type: RecordType;
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

export interface CompetitorTeam {
  alternateColor: string;
  venue: TeamClass;
  color: string;
  displayName: string;
  abbreviation: string;
  isActive: boolean;
  shortstring: string;
  uid: string;
  name: string;
  logo: string;
  location: string;
  links: TeamLink[];
  id: string;
}

export interface TeamLink {
  isExternal: boolean;
  rel: TypeElement[];
  href: string;
  text: PageTitle;
  isPremium: boolean;
  shortText?: PageTitle;
}

export interface Format {
  regulation: Regulation;
}

export interface Regulation {
  periods: number;
}

export interface GeoBroadcast {
  market: MarketClass;
  media: Media;
  type: GeoBroadcastType;
  lang: string;
  region: string;
}

export interface MarketClass {
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
  video: Video[];
  type: string;
  shortLinkText: string;
}

export interface Video {
  duration: number;
  deviceRestrictions: DeviceRestrictions;
  thumbnail: string;
  geoRestrictions: GeoRestrictions;
  links: Links;
  id: number;
  source: string;
  headline: string;
  tracking: VideoTracking;
}

export interface DeviceRestrictions {
  devices: string[];
  type: string;
}

export interface GeoRestrictions {
  countries: string[];
  type: string;
}

export interface Links {
  web: Web;
  mobile: Mobile;
  api: API;
  source: Source;
}

export interface API {
  self: ArtworkElement;
  artwork: ArtworkElement;
}

export interface ArtworkElement {
  href: string;
}

export interface Mobile {
  streaming: ArtworkElement;
  alert: ArtworkElement;
  progressiveDownload: ArtworkElement;
  source: ArtworkElement;
  href: string;
}

export interface Source {
  mezzanine: ArtworkElement;
  hds: ArtworkElement;
  href: string;
  HD: ArtworkElement;
  HLS: HLS;
  flash: ArtworkElement;
  full: ArtworkElement;
}

export interface HLS {
  href: string;
  HD: ArtworkElement;
}

export interface Web {
  short: ArtworkElement;
  self: ArtworkElement;
  href: string;
}

export interface VideoTracking {
  leagueName: PageTitle;
  trackingName: string;
  coverageType: string;
  sportName: string;
  trackingId: string;
}

export interface CompetitionLeader {
  shortstring: Leaderstring;
  displayName: Leaderstring;
  name: FluffyName;
  leaders: FluffyLeader[];
  abbreviation: LeaderAbbreviation;
}

export interface FluffyLeader {
  displayValue: string;
  athlete: Athlete;
  team: TeamClass;
  value: number;
}

export enum FluffyName {
  PassingYards = "passingYards",
  ReceivingYards = "receivingYards",
  RushingYards = "rushingYards",
}

export interface Odd {
  overUnder: number;
  awayTeamOdds: TeamOdds;
  current: Current;
  total: OddTotal;
  provider: Provider;
  link: OddLink;
  details: string;
  moneyline: Moneyline;
  homeTeamOdds: TeamOdds;
  open: Current;
  pointSpread: PointSpread;
  spread: number;
}

export interface TeamOdds {
  underdog: boolean;
  favorite: boolean;
}

export interface Current {
  over: Over;
  total: CurrentTotal;
  under: Over;
}

export interface Over {
  displayValue: string;
  alternatestring: string;
  value: number;
}

export interface CurrentTotal {
  alternatestring: string;
}

export interface OddLink {
  isExternal: boolean;
  shortText: string;
  rel: string[];
  language?: string;
  href: string;
  text: string;
  isPremium: boolean;
  tracking?: LinkTracking;
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

export interface LinkTracking {
  campaign: string;
  tags: Tags;
}

export interface Tags {
  gameId: number;
  league: string;
  sport: string;
  betType: string;
  betSide: string;
  betstrings?: string;
}

export interface Moneyline {
  shortstring: string;
  away: MoneylineAway;
  displayName: string;
  home: MoneylineAway;
}

export interface MoneylineAway {
  close: PurpleClose;
  open: PurpleOpen;
}

export interface PurpleClose {
  odds: string;
  link: OddLink;
}

export interface PurpleOpen {
  odds: string;
}

export interface PointSpread {
  shortstring: string;
  away: OverClass;
  displayName: string;
  home: OverClass;
}

export interface OverClass {
  close: OverClose;
  open: OverOpen;
}

export interface OverClose {
  line: string;
  odds: string;
  link: OddLink;
}

export interface OverOpen {
  line: string;
  odds: string;
}

export interface Provider {
  name: string;
  id: string;
  priority: number;
  logos: Logo[];
}

export interface OddTotal {
  shortstring: string;
  over: OverClass;
  displayName: string;
  under: OverClass;
}

export interface Status {
  period: number;
  displayClock: string;
  clock: number;
  type: StatusType;
}

export interface StatusType {
  name: TypeName;
  description: Description;
  id: string;
  state: State;
  completed: boolean;
  detail: string;
  shortstring: string;
}

export enum Description {
  Final = "Final",
  InProgress = "In Progress",
  Scheduled = "Scheduled",
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
  summary: string;
  numberAvailable: number;
  links: ArtworkElement[];
}

export interface CompetitionType {
  id: string;
  abbreviation: string;
}

export interface CompetitionVenue {
  address: Address;
  fullName: string;
  indoor: boolean;
  id: string;
  capacity: number;
}

export interface Address {
  city: string;
  state: string;
}

export interface Season {
  year: number;
  type: number;
  slug: string;
}

export interface Weather {
  displayValue: string;
  conditionId: string;
  highTemperature: number;
  temperature: number;
  link: OddLink;
}

export interface Week {
  number: number;
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
  label: PageTitle;
  canonical: string;
  type: TypeElement;
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
  links: TeamLink[];
  attributes: NavigationAttributes;
  id: number;
  text: PageTitle;
  title: string;
  $ref: string;
  items: NavigationItem[];
}

export interface NavigationAttributes {
  sport_id: string;
  root: string;
}

export interface NavigationItem {
  links: OddLink[];
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
  Label = "label",
  Team = "team",
}
