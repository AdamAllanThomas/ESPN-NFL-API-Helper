export interface StandingsData {
  analytics: Analytics;
  ads: StandingsAds;
  DTCpackages: DTCpackages;
  meta: StandingsMeta;
  nowFeedSupported: boolean;
  type: AuthorsEnum;
  sport: LeagueElement[];
  tier2Nav: Tier2Nav;
  content: Content;
}

export interface DTCpackages {
  packages: Package[];
}

export interface Package {
  priceIncrease?: PathParams[];
  subscriptions?: PathParams[];
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
  sections: SectionElement[];
}

export interface SectionElement {
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

export interface PathParams {}

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

export interface StandingsAds {
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
  nfl: PathParams;
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
  omniture: AnalyticsOmniture;
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
  sections: LeagueElement;
  authors: AuthorsEnum;
  path: string;
  title: string;
  zone: string;
  loadPubJS: boolean;
  loadVidJS: boolean;
}

export enum AuthorsEnum {
  Standings = "standings",
}

export enum LeagueElement {
  Nfl = "nfl",
  None = "none",
  Sports = "sports",
  Sub = "sub",
  Teams = "teams",
}

export interface Metrics {
  nav_method: string;
  page_url: string;
  premium: boolean;
  content_type: AuthorsEnum;
  page_infrastructure: string;
  page_type: AuthorsEnum;
  league: LeagueElement;
  page_name: string;
  section: LeagueElement;
  sport: LeagueElement;
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

export interface AnalyticsOmniture {
  espn3ContentType: string;
  league: LeagueElement;
  countryRegion: string;
  navMethod: string;
  hier1: string;
  section: LeagueElement;
  pageName: string;
  sections: string;
  site: TwitterSite;
  premium: string;
  appearance: string;
  convrSport: string;
  pageURL: string;
  lang: string;
  prop46: string;
  contentType: AuthorsEnum;
  sport: string;
  account: string;
  siteType: string;
  prop58: string;
}

export enum TwitterSite {
  Espn = "espn",
  Espncricinfo = "espncricinfo",
  Espnfc = "espnfc",
}

export interface Content {
  title: string;
  description: string;
  sport: string;
  league: LeagueElement;
  config: ContentConfig;
  standings: ContentStandings;
  canonical: string;
  og_type: string;
  params: Params;
}

export interface ContentConfig {
  views: ViewElement[];
  groups: ViewElement[];
  links: ConfigLink[];
  categories: Category[];
  seasons: Seasons;
  defaults: ParametersClass;
  parameters: ParametersClass;
  type: string;
  groupType: string;
  showPlayoffSeed: boolean;
  showPlayoffSeedSubscript: boolean;
  showSeasonDropdown: boolean;
  useDisplayName: boolean;
  headerDepth: number;
  baseUrl: string;
  subHeader: string;
  metaTitle: string;
  metaDescription: string;
  hasTeamCategory: boolean;
  league: LeagueElement;
  canonical: string;
  clinchers: Clinchers;
}

export interface Category {
  key: Sort;
  defaultAbbreviation: Abbreviation;
  colgroup: number;
  sortable: boolean;
  sortDirection?: string;
  mutable: boolean;
  abbreviation: Abbreviation;
  description: Description;
  sorted?: string;
  display?: Display;
}

export enum Abbreviation {
  Away = "AWAY",
  Conf = "CONF",
  Diff = "DIFF",
  Div = "DIV",
  Empty = "",
  Home = "HOME",
  L = "L",
  Pa = "PA",
  Pct = "PCT",
  Pf = "PF",
  Road = "ROAD",
  Strk = "STRK",
  T = "T",
  W = "W",
}

export enum Description {
  AwayRecord = "Away Record",
  ConferenceRecord = "Conference Record",
  CurrentStreak = "Current Streak",
  DivisionRecord = "Division Record",
  HomeRecord = "Home Record",
  Losses = "Losses",
  PointDifferential = "Point Differential",
  Ties = "Ties",
  TotalPointsAgainst = "Total Points Against",
  TotalPointsFor = "Total Points For",
  WINS = "Wins",
  WinningPercentage = "Winning Percentage",
}

export enum Display {
  Center = "center",
}

export enum Sort {
  Differential = "differential",
  Home = "home",
  Losses = "losses",
  Pointsagainst = "pointsagainst",
  Pointsfor = "pointsfor",
  Road = "road",
  Streak = "streak",
  Ties = "ties",
  Vsconf = "vsconf",
  Vsdiv = "vsdiv",
  WINS = "wins",
  Winpercent = "winpercent",
}

export interface Clinchers {
  e: Empty;
  x: Empty;
  y: Empty;
  "*": Empty;
  z: Empty;
}

export interface Empty {
  shortDisplayName: string;
  displayValue: string;
  displayName: string;
  name: string;
  description: string;
  type: string;
  abbreviation: string;
  value: string;
}

export interface ParametersClass {
  view: AuthorsEnum;
  group: string;
  sort: Sort;
  dir: string;
  season: number;
  seasontype: Seasontype;
}

export enum Seasontype {
  Pre = "pre",
  Reg = "reg",
}

export interface ViewElement {
  key: string;
  type: string;
  name: string;
  mutable: boolean;
  active?: boolean;
}

export interface ConfigLink {
  name: string;
  url: string;
}

export interface Seasons {
  season: number;
  seasonName: SeasonNameEnum;
  seasonType: Seasontype;
  seasonTypeId: string;
  maxYear: number;
  minYear: number;
  maxOffSeasonEndDate: number;
  seasonTypesByYear: { [key: string]: SeasonTypesByYear[] };
  splitSeason: boolean;
  shiftSeasonForward: boolean;
  availableYears: AvailableYear[];
  displayYear: number;
}

export interface AvailableYear {
  display: number;
  year: number;
}

export enum SeasonNameEnum {
  Preseason = "Preseason",
  RegularSeason = "Regular Season",
}

export interface SeasonTypesByYear {
  id: string;
  name: SeasonNameEnum;
  abbreviation: Seasontype;
}

export interface Params {
  sportRoot: LeagueElement;
  xhr: string;
  pathParams: PathParams;
  root: LeagueElement;
  lang: Lang;
  type: AuthorsEnum;
  uri: string;
  req: Req;
}

export enum Lang {
  En = "en",
  Es = "es",
  Nl = "nl",
  Pt = "pt",
}

export interface Req {
  entitlements: Entitlements;
  template: AuthorsEnum;
  country: string;
  edition: Edition;
  personalized: Personalized;
  xroute: string;
  prefetchedContent: PrefetchedContent;
  translations: { [key: string]: string };
  ie8: boolean;
  siteType: string;
  original: boolean;
  varnish: boolean;
  dtcAuth: string;
  uri: string;
  environment: string;
  isCorePath: boolean;
  hasInsiderAccess: boolean;
  device: string;
  parameters: Parameters;
}

export interface Edition {
  country: string;
  language: Lang;
  domain: string;
  site: TwitterSite;
  config: LocalEditionConfigClass;
  localEditionConfig: LocalEditionConfigClass;
  siteId: string;
  editionKey: string;
  localEditionKey: string;
  host: string;
  rewrites: Rewrites;
  https: boolean;
  configs: Configs;
  userCountry: string;
}

export interface LocalEditionConfigClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: ConfigDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: Shop;
  sportReplacements: ConfigSportReplacements;
  uriRewrites: ConfigURIRewrites;
  betting: ConfigBetting;
  scoreboardFixed: boolean;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  skipObscuredAds: boolean;
  ppvEnabled: boolean;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  override: PathParams;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: ConfigTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
  taboolaReco: TaboolaReco;
  exitConfigId: number;
}

export interface ConfigAds {
  disabled: boolean;
  partnerAd?: boolean;
  "dev-config": number;
  "qa-config": number;
  "prod-config": number;
  outputType: AdsOutputType;
  disableAdRequestOnBackgroundedVideo?: boolean;
  featurePhone: AdsFeaturePhone;
  parnterAd?: boolean;
  network?: number;
}

export interface AdsFeaturePhone {
  outputType: FeaturePhoneOutputType;
}

export enum FeaturePhoneOutputType {
  NoJS = "no-js",
}

export enum AdsOutputType {
  JS = "js",
}

export interface App {
  espn: ChartBeat;
}

export interface ChartBeat {
  enabled: boolean;
}

export interface AppDetails {
  ios: Android;
  android: Android;
}

export interface Android {
  id: string;
  name: TwitterAppNameGoogleplay;
  deepLinkUrl: DeepLinkURL;
  deepLinkUrlScheme: DeepLinkURLScheme;
}

export enum DeepLinkURL {
  AndroidAppCOMEspnScoreCenterSportscenter = "android-app://com.espn.score_center/sportscenter",
  AndroidAppCOMJulyCricinfoEspncricinfo = "android-app://com.july.cricinfo/espncricinfo",
  IosApp317469184Sportscenter = "ios-app://317469184/sportscenter",
  IosApp417408017Espncricinfo = "ios-app://417408017/espncricinfo",
}

export enum DeepLinkURLScheme {
  Espncricinfo = "espncricinfo",
  Sportscenter = "sportscenter",
}

export enum TwitterAppNameGoogleplay {
  ESPNcricinfo = "ESPNcricinfo",
  Espn = "ESPN",
  EspnFc = "ESPN FC",
}

export interface ConfigBetting {
  enabled: boolean;
  game: ChartBeat;
  affiliateCodes: PurpleAffiliateCodes;
  incontentstrip: boolean;
  incontent: boolean;
  bettingOdds: boolean;
  provider: string;
  providerId: string;
  providerPriority: number;
  disableOnSchedule: boolean;
  scoreboardSponsorLogo: string;
  oddsAttributionLogo: string;
  darkOddsAttributionLogo: string;
}

export interface PurpleAffiliateCodes {
  odds_findMore: string;
  odds_details: string;
}

export interface CategorySettings {
  leagues: boolean;
  athletes: boolean;
  teams: boolean;
  tags: boolean;
  medals?: boolean;
  featurePhone?: CategorySettingsFeaturePhone;
}

export interface CategorySettingsFeaturePhone {
  showCategory: boolean;
  hideCategoryLinks: number[];
  categoryLinksBySport: CategoryLinksBySport;
}

export interface CategoryLinksBySport {
  soccer: Soccer;
}

export interface Soccer {
  leagues: boolean;
  teams: boolean;
  limit: number;
}

export interface Country {
  name: string;
  "country-code": string;
  showHreflang: boolean;
}

export interface ConfigDateTime {
  long: DateTimeLong;
  medium: Medium;
  short: MDEnum;
  timeFormat: TimeFormat;
  firstDayOfWeek: FirstDayOfWeek;
  timeZone: string;
  timeZoneBucket: TimeZoneBucket;
  defaultFormat: string;
  timeZoneString: string;
  displayTimeZone?: boolean;
  "ddd, M/D"?: string;
  age: Age;
}

export interface Age {
  seconds: Seconds;
  minutes: Minutes;
  hours: Hours;
  days: Days;
}

export enum Days {
  D = "d",
}

export enum Hours {
  H = "h",
  U = "u",
}

export enum Minutes {
  M = "m",
}

export enum Seconds {
  S = "s",
}

export enum FirstDayOfWeek {
  Monday = "Monday",
  Sunday = "Sunday",
}

export enum DateTimeLong {
  DdddDMMMMYyyy = "dddd, d MMMM yyyy",
  DdddMMMMDYyyy = "dddd MMMM d, yyyy",
}

export enum Medium {
  DMMMMYyyy = "d MMMM yyyy",
  MMMMDYyyy = "MMMM d, yyyy",
}

export enum MDEnum {
  DM = "d/M",
  MD = "M/d",
}

export enum TimeFormat {
  HMm = "h:mm",
}

export enum TimeZoneBucket {
  AmericaNewYork = "America/New_York",
  EuropeAmsterdam = "Europe/Amsterdam",
}

export interface DisneyID {
  css: CSS;
  langPref: string;
  editionSource: string;
  clientId: ClientID;
  loginMethod?: string;
  stuff?: string;
}

export enum ClientID {
  EspnOnesiteWeb = "ESPN-ONESITE.WEB",
}

export enum CSS {
  DisneyidCorev4CSS = "disneyid/corev4.css",
  DisneyidCorev4CSSDisneyidDeportesCSS = "disneyid/corev4.css,disneyid/deportes.css",
}

export interface EditionAlert {
  enabled: boolean;
  text: string;
}

export interface ConfigEditionSettings {
  key: string;
  site: TwitterSite;
  language: Lang;
  country: string;
  domain: string;
  editionSiteId: string;
  https: boolean;
  supportsOneSite: boolean;
  showPremVideoAds?: boolean;
  name?: string;
  localePrependedPath?: boolean;
  countryName?: string;
  section?: SectionEnum;
  isStarPartner?: boolean;
  isSonyPartner?: boolean;
}

export enum SectionEnum {
  Cricinfo = "cricinfo",
}

export interface ConfigFeeds {
  googlenews: PurpleGooglenews;
}

export interface PurpleGooglenews {
  allowedContentTypes: string[];
  excludedStoryTypes: SportElement[];
}

export enum SportElement {
  Cricket = "cricket",
  InCricket = "in/cricket",
}

export interface ConfigGameSettings {
  topEventsId: number;
  topSoccerId: number;
  promotedSoccerLeaguesCeId: number;
  showBroadcast: boolean;
}

export interface JavaLocale {
  language: Lang;
  region: string;
}

export interface ConfigMeta {
  titleBranding: TitleBranding;
  titleBrandingWithDomain?: string;
  schema: Schema;
  defaultMetaImage?: DefaultMetaImage;
  social: PurpleSocial;
  description?: string;
}

export enum DefaultMetaImage {
  EspnRedPNG = "espn_red.png",
  EspncricinfoPNG = "espncricinfo.png",
  EspndeportesWhitePNG = "espndeportes_white.png",
}

export interface Schema {
  name: TwitterAppNameGoogleplay;
}

export interface PurpleSocial {
  twitter: PurpleTwitter;
  facebook: Facebook;
}

export interface Facebook {
  id: FbAppID;
  qa_id: QAID;
  og_site_name: string;
  locale: string;
}

export enum FbAppID {
  Empty = "",
  The116656161708917 = "116656161708917",
  The260890547115 = "260890547115",
}

export enum QAID {
  Empty = "",
  The280725051968835 = "280725051968835",
}

export interface PurpleTwitter {
  twitterId: string;
  card: Card;
  site: Site;
  language: Lang;
}

export enum Card {
  Summary = "summary",
}

export enum Site {
  Espn = "espn",
  Espncricinfo = "@espncricinfo",
  Espnfc = "espnfc",
  SiteESPN = "ESPN",
}

export enum TitleBranding {
  ESPNDeportes = "- ESPNDeportes",
  ESPNcricinfoCOM = "ESPNcricinfo.com",
  Espn = "- ESPN",
  EspnFc = "-  ESPN FC",
}

export interface NumberFormat {
  long: NumberFormatLong;
  short: NumberFormatShort;
  currency: Currency;
  percent: Percent;
}

export enum Currency {
  Currency00 = "#.###,00",
  The00 = "#,###.00",
}

export enum NumberFormatLong {
  Empty = "#,###",
  Long = "#.###",
}

export enum Percent {
  Percent00 = "#,00%",
  The00 = "#.00%",
}

export enum NumberFormatShort {
  Empty = "###",
}

export interface PartnerModules {
  global: boolean;
  nba: boolean;
  womenbb: boolean;
  golf: boolean;
  endurance: boolean;
  horse: boolean;
  nascar: boolean;
}

export interface ConfigPremiumSettings {
  espnPlusEnabled: boolean;
  showPremiumContent: boolean;
}

export interface Shop {
  customAd: boolean;
  enabled: boolean;
  name: string;
}

export interface ConfigSiteLogo {
  class: Class;
  featurePhone: PurpleFeaturePhone;
}

export enum Class {
  Deportes = "deportes",
  Empty = "",
  Espn = "espn",
  Espncricinfo = "espncricinfo",
}

export interface PurpleFeaturePhone {
  name: FeaturePhoneName;
  width: number;
  height: number;
  class?: SectionEnum;
}

export enum FeaturePhoneName {
  EspnLogo = "espn-logo",
  EspndeportesLogo = "espndeportes-logo",
  LogoCricinfo1261X = "logo-cricinfo-126@1x",
}

export interface ConfigSportBranding {
  sport: BolaDePrataEnum;
  image: ImageEnum;
  url?: string;
}

export enum ImageEnum {
  ESPNcomPowerbyEspnw = "ESPNcom-powerby-espnw",
  EspncomApresentadoporEspnw = "espncom-apresentadopor-espnw",
  EspncomPresentadoporEspnw = "espncom-presentadopor-espnw",
  EspnsslaPresentadoporPolo = "espnssla-presentadopor-polo",
  EspnsslaPresentadoporTenis = "espnssla-presentadopor-tenis",
  LogoDeportesScrum = "logo-deportes-scrum",
  LogoUkCricinfo = "logo-uk-cricinfo",
  LogoUkFc = "logo-uk-fc",
  LogoUkScrum = "logo-uk-scrum",
}

export enum BolaDePrataEnum {
  Cricket = "cricket",
  Espnw = "espnw",
  Ncaaw = "ncaaw",
  Ncw = "ncw",
  Polo = "polo",
  Rugby = "rugby",
  Soccer = "soccer",
  Tennis = "tennis",
  Wnba = "wnba",
  Womenbb = "womenbb",
}

export interface ConfigSportReplacements {
  f1: string;
}

export interface Taboola {
  enabled: boolean;
  publisher: Publisher;
  index: GamepackageClass;
  scoreboard: GamepackageClass;
  standings: GamepackageClass;
  schedule: GamepackageClass;
  rankings: GamepackageClass;
  clubhouse: GamepackageClass;
  "right-rail": GamepackageClass;
  gamepackage: GamepackageClass;
  story: GamepackageClass;
  other: GamepackageClass;
}

export interface GamepackageClass {
  type: ClubhouseType;
  mode: Mode;
  placement: Placement;
  target_type?: TargetType;
  mode_webview?: ModeWebview;
  targetType?: TargetType;
}

export enum Mode {
  RecReel2N5AHP = "rec-reel-2n5-a-hp",
  Thumbnails1X3 = "thumbnails-1x3",
  Thumbnails3X1A = "thumbnails-3x1-a",
  Thumbnails3X1B = "thumbnails-3x1-b",
  Thumbnails3X2A = "thumbnails-3x2-a",
}

export enum ModeWebview {
  Thumbnails2X1 = "thumbnails-2x1",
  Thumbnails2X2 = "thumbnails-2x2",
}

export enum Placement {
  BelowArticleThumbnails = "Below Article Thumbnails",
  BelowContentThumbnails = "Below Content Thumbnails",
  BelowSectionFrontThumbnails3X1B = "Below Section Front Thumbnails 3x1b",
  RecoReelSportsIndex = "Reco Reel Sports Index",
  RightRailThumbnails = "Right Rail Thumbnails",
}

export enum TargetType {
  Mix = "mix",
}

export enum ClubhouseType {
  Article = "article",
  Category = "category",
  Homepage = "homepage",
  Other = "other",
  RightRail = "right-rail",
}

export enum Publisher {
  EspnNetwork = "espn-network",
}

export interface TaboolaReco {
  taboolaRecoExcludedSports: TaboolaRecoExcludedSports;
  taboolaRootToSportLabel: TaboolaRootToSportLabel;
}

export interface TaboolaRecoExcludedSports {
  tennis: boolean;
  oly: boolean;
  golf: boolean;
  rugby: boolean;
  nascar: boolean;
}

export interface TaboolaRootToSportLabel {
  nba: string;
  nfl: string;
  nhl: string;
  soccer: string;
  golf: string;
  ncf: string;
  ncb: string;
  ncw: string;
  nascar: string;
  tennis: string;
  wnba: string;
  oly: string;
  mma: string;
  f1: string;
  rugby: string;
  boxing: string;
  ncaa: string;
  mlb: string;
  "sports-betting": string;
  wwe: string;
  "professional-wrestling": string;
  aew: string;
  xfl: string;
  rpm: string;
  "little-league-world-series": string;
  "nba-development": string;
  basketball: string;
  horse: string;
  recruitingbb: string;
  recruitingfb: string;
}

export interface Temperature {
  scale: Scale;
  symbol: Symbol;
}

export enum Scale {
  Celsius = "celsius",
  Fahrenheit = "fahrenheit",
}

export enum Symbol {
  DegC = "&deg; C",
  DegF = "&deg; F",
}

export interface Tickets {
  enabled: boolean;
  provider: TicketsProvider;
  baseUrl: string;
  callToAction: CallToAction;
  trackSection: TrackSection;
}

export enum CallToAction {
  BoletosEnVividSeats = "Boletos en Vivid Seats",
  BuyOnVividSeats = "Buy on Vivid Seats",
  Empty = "",
}

export enum TicketsProvider {
  Empty = "",
  VividSeats = "VividSeats",
}

export enum TrackSection {
  Vivid = "vivid",
}

export interface ConfigTier2NavIDS {
  "oly/summer/diving": number;
  "mlb/mlb-draft"?: number;
  "nba/trade-deadline": number;
  "oly/summer/modern-pentathlon": number;
  shooting: number;
  "oly/summer/badminton": number;
  "oly/summer/handball": number;
  cycling: number;
  "oly/summer/wrestling": number;
  "womens-golf": number;
  espnw?: number;
  "nfl/super-bowl": number;
  caribbean: number;
  "oly/summer/rugby": number;
  "espn/citizenship"?: number;
  motogp: number;
  "ncb/ncaa-tournament": number;
  chicago: number;
  "mens-golf": number;
  "oly/summer/baseball": number;
  "oly/winter/figure-skating": number;
  "oly/winter/skeleton": number;
  womenbb: number;
  "oly/summer/rowing": number;
  whatsonsg: number;
  fba: number;
  "ncf/playoff": number;
  "oly/summer/tennis": number;
  league: PurpleLeague;
  nrl: number;
  nba: number;
  "rugby-league": number;
  "sports-betting": number;
  horse: number;
  "oly/summer/shooting": number;
  "oly/winter/bobsled": number;
  nbl: number;
  "oly/winter/ski-jumping": number;
  "nba-development": number;
  "oly/winter/alpine-skiing": number;
  oly: number;
  "oly/summer/weightlifting": number;
  xfl: number;
  boston: number;
  "ncf/weekday-walkthrough": number;
  southafrica: string;
  "live-event": number;
  "oly/summer/equestrian": number;
  espnradio: number;
  "nba/world-of-woj"?: number;
  "oly/summer/sailing": number;
  "oly/summer/softball": number;
  "soccer/espninn": number;
  "ncf/rose-bowl": number;
  "field-hockey": number;
  "oly/summer/fencing": number;
  ncb: number;
  ncf: number;
  golf: number;
  "oly/winter/nordic-combined": number;
  "oly/summer/soccer": number;
  esports: number;
  "all-stars": number;
  "oly/winter/snowboarding": number;
  flb: number;
  "mlb/beisbolexperience": number;
  "mens-tennis": number;
  cleveland: number;
  insider: number;
  recruitingbb: number;
  wnba: number;
  sportsnation: number;
  ncw: number;
  nigeria: string;
  "espn-caponecup": number;
  "oly/summer/triathlon": number;
  "ncf/peach-bowl": number;
  "oly/summer/volleyball": number;
  badminton: number;
  "oly/summer/cycling": number;
  "little-league-world-series"?: number;
  "oly/summer/2016": number;
  "ncf/orange-bowl": number;
  "oly/summer/boxing": number;
  fiba?: number;
  "live-game": number;
  tennis: number;
  "espnw/culture"?: number;
  "oly/winter/ice-hockey": number;
  watch: number;
  cricket: number;
  "nba/stephen-curry": number;
  "oly/summer/field-hockey": number;
  "ncf/fiesta-bowl": number;
  "womens-tennis": number;
  "aussies-in-action": number;
  wfba: number;
  darts: number;
  "world-baseball-classic": number;
  "monday-night-football"?: number;
  "los-angeles": number;
  dallas: number;
  "oly/winter/freestyle-skiing": number;
  wwe: number;
  "ncf/cotton-bowl": number;
  "new-york": number;
  f1: number;
  snooker: number;
  "oly/summer/swimming": number;
  "v8-supercars": number;
  ghana: string;
  analytics: number;
  "ncf/sugar-bowl": number;
  basketball: number;
  doubletruck: number;
  "oly/summer/judo": number;
  "espnw/life-style"?: number;
  "oly/winter/luge": number;
  "mma/pfl": number;
  mlb: number;
  "oly/winter/short-track-speedskating": number;
  chess: number;
  fantasy: number;
  "nba/summerleague": number;
  ncaa: number;
  "oly/summer/canoe": number;
  rugby: number;
  "oly/summer/water-polo": number;
  "oly/winter/cross-country-skiing": number;
  "espnw/sports"?: number;
  ffl: number;
  "indy-car": number;
  "oly/winter/biathlon": number;
  "espnw/voices"?: number;
  nfl: number;
  "oly/summer/athletics": number;
  "body-issue"?: number;
  boxing: number;
  "espn/caponecup"?: number;
  "oly/summer/gymnastics": number;
  "mma/bellator": number;
  mma: number;
  "nba/nba-free-agency"?: number;
  "commonwealth-games": number;
  netball: number;
  endurance: number;
  "oly/winter/speedskating": number;
  "oly/summer/basketball": number;
  "mma/ufc": number;
  aew: number;
  espys: number;
  "oly/summer/table-tennis": number;
  "oly/summer/golf": number;
  recruitingfb: number;
  jayski: number;
  live: number;
  "oly/summer/surfing": number;
  soccer: number;
  "oly/summer/taekwondo": number;
  "professional-wrestling": number;
  "nfl/nfl-free-agency"?: number;
  "oly/summer/skateboarding": number;
  afl: number;
  kabaddi: number;
  fhl: number;
  freekick: number;
  milwaukee: number;
  rpm: number;
  "oly/summer/sport-climbing": number;
  pll?: number;
  nhl: number;
  nascar: number;
  "oly/summer/archery": number;
  "oly/winter/curling": number;
  athletics: number;
  specialolympics: number;
  wrestling: number;
  "oly/summer/karate": number;
  btsport: number;
  betting?: number;
  "asian-games"?: number;
  scoreboard?: ScoreboardClass;
  "kaleidoscope-fifa-videos"?: number;
  "espn-shorts-videos"?: number;
  officesportsquiz?: number;
  "top-performer"?: number;
  "protector-of-the-team"?: number;
  standings?: LeagueClass;
  "fifa-wc-2018-team-profile"?: number;
  "social-dugout"?: number;
  awards?: number;
  videos?: number;
  volleyball?: number;
  "basketball/gilas-pilipinas"?: number;
  "nfl/nfl-undiscovered"?: number;
  kwesetv?: number;
}

export interface PurpleLeague {
  soccer: number;
  ncf: number;
  "college-football": number;
  cricket?: number;
}

export interface ScoreboardClass {
  cricket: number;
  "nba-development": number;
}

export interface LeagueClass {
  cricket: number;
}

export interface ConfigTier3NavIDS {
  clubhouse: { [key: string]: number };
  doubletruck: number;
  draftcast: number;
}

export interface ConfigURIRewrites {
  urls: RewritesUrls;
  roots: RewritesRoots;
  pathSegments: PathParams;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface RewritesRoots {
  toEdition: PurpleToEdition;
  toEnglish: PurpleToEnglish;
}

export interface PurpleToEdition {
  "/horse/": string;
  "/nascar/": string;
  "/ncaa/": string;
  "/ncb/": string;
  "/ncw/": string;
  "/ncf/": string;
  "/oly/": string;
  "/rpm/": string;
  "/womenbb/": string;
  "/flb/": string;
  "/fba/": string;
  "/wfba/": string;
  "/ffl/": string;
  "/fhl/": string;
  "/recruitingfb/": string;
  "/recruitingbb/": string;
  "/espys/": string;
  "/nba/summerleague/": string;
  "/nba-development/": string;
}

export interface PurpleToEnglish {
  "/oly/summer/gymnastics/": string;
  "/oly/summer/cycling/": string;
  "/racing/nascar/": string;
  "/racing/": string;
  "/college-football/": string;
  "/college-football/rumors": string;
  "/mens-college-basketball/": string;
  "/womens-college-basketball/": string;
  "/mens-college-basketball/rumors": string;
  "/womens-basketball/": string;
  "/olympics/": string;
  "/cycling/": string;
  "/figure-skating/": string;
  "/college-sports/": string;
  "/gymnastics/": string;
  "/skiing/": string;
  "/horse-racing/": string;
  "/sports/womenbb/": string;
  "/sports/horse/": string;
  "/sports/endurance/": string;
  "/losangeles/": string;
  "/newyork/": string;
  "/espn/onenacion/": string;
  "/fantasy/baseball/": string;
  "/fantasy/mens-basketball/": string;
  "/fantasy/womens-basketball/": string;
  "/fantasy/football/": string;
  "/fantasy/hockey/": string;
  "/college-sports/football/recruiting/": string;
  "/college-sports/basketball/recruiting/": string;
  "/nba-summer-league/": string;
  "/nba-development/": string;
}

export interface RewritesUrls {
  toEdition: FluffyToEdition;
  toEnglish: PathParams;
}

export interface FluffyToEdition {
  "/football/club": string;
}

export interface VideoAutoStart {
  index: boolean;
  scoreboard: boolean;
  scoreboardRHS?: boolean;
  indexRHS: boolean;
}

export interface Configs {
  "espn-en": LocalEditionConfigClass;
  "espnuk-en": EspnukEn;
  "espnau-en": EspnauEn;
  "espnin-en": EspninEn;
  "espnza-en": EspnzaEn;
  "espnww-en": EspnwwEn;
  "espnph-en": EspnphEn;
  "espnsg-en": EspnsgEn;
  "espnid-en": EspnidEn;
  "espn-es-ar": EspnEsArClass;
  "espn-es-cl": EspnEsCl;
  "espn-es-co": EspnEsCo;
  "espn-es-do": EspnEsDoClass;
  "espn-es-ec": EspnEsEc;
  "espn-es-es": EspnEsEs;
  "espn-es-gt": EspnEsDoClass;
  "espn-es-mx": EspnEsMX;
  "espn-es-pa": EspnEsDoClass;
  "espn-es-pe": EspnEsDoClass;
  "espn-es-us": EspnEsUs;
  "espn-es-uy": EspnEsCRClass;
  "espn-es-ve": EspnEsArClass;
  "espn-es-cr": EspnEsCRClass;
  "espn-pt-br": EspnPtBr;
  "espnfc-en-us": EspnfcEn;
  "espnfc-en-uk": EspnfcEnUk;
  "espnfc-en-au": EspnfcEnAuClass;
  "espnfc-en-sg": EspnfcEnAuClass;
  "espnfc-en-ng": EspnfcEnNg;
  "espnfc-en": EspnfcEn;
  "espncricinfo-en-ww": EspncricinfoEnAuClass;
  "espncricinfo-en-in": EspncricinfoEnAuClass;
  "espncricinfo-en-uk": EspncricinfoEnNzClass;
  "espncricinfo-en-pk": EspncricinfoEnAuClass;
  "espncricinfo-en-lk": EspncricinfoEnAuClass;
  "espncricinfo-en-za": EspncricinfoEnAuClass;
  "espncricinfo-en-au": EspncricinfoEnAuClass;
  "espncricinfo-en-bd": EspncricinfoEnAuClass;
  "espncricinfo-en-nz": EspncricinfoEnNzClass;
  "espncricinfo-en-us": EspncricinfoEnUs;
  "espn-nl-nl": EspnNlNl;
}

export interface EspnEsArClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  tickets: ChartBeat;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  betting: EspnEsArBetting;
  scoreboardFixed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsArBetting {
  enabled: boolean;
  incontentstrip: boolean;
}

export interface EspnEsArDateTime {
  "h:mm a z": HMmAZ;
  "M/d": MDEnum;
  "ddd, M/D": DddMD;
  "M/D": MD;
  "M/D, LT"?: MDLt;
  "h:mm a": HMmA;
  "MMMM d, yyyy": MMMMDYyyy;
  "MMM d, yyyy": MMMDYyyyEnum;
  "MMM D, YYYY": MmmDYyyy;
  "MMM D": MmmD;
  "MMMM D": MmmmD;
  "M/d/yyyy": MDYyyyEnum;
  "M/D/YYYY": MDYyyy;
  "M/d/yy": MDYy;
  "MM/DD/YYYY": MmDDYyyy;
  "MMMM D, YYYY": MmmdYyyy;
  "MMM DD YYYY": MmmdYyyy;
  "MMMM DO YYYY": MmmmDoYyyy;
  "MMM DD": MmmD;
  "MMMM d": MMMMD;
  "dddd, MMMM Do": DdddMMMMDo;
  "DDDD, M/D": DdddMD;
  "dddd, M/D": DdddMDEnum;
  E: E;
  "EEE, d MMM yyyy HH:mm:ss"?: EEEDMMMYyyyHHMmSs;
  "EEEE, MMMM d": EEEEMMMMD;
  "EEEE, MMMM d, yyyy": EEEEMMMMDYyyy;
  "EEEE, MMM d": EEEEMMMD;
  "MMM d, yyyy, hh:mm a": MMMDYyyyHhMmA;
  "M-d-yyyy h:mm:ss": MDYyyyHMmSs;
  firstDayOfWeek: FirstDayOfWeek;
  timeZone: string;
  timeZoneBucket: TimeZoneBucket;
  displayTimeZone: boolean;
  defaultFormat: MMMDYyyyEnum;
  timeZoneString: string;
  age: Age;
  "h:mm A"?: HMmA;
}

export enum DdddMD {
  DdddDM = "DDDD, D/M",
  DdddMDDdddDM = "DDDD D/M",
}

export enum E {
  E = "E",
}

export enum EEEDMMMYyyyHHMmSs {
  EEEDMMMYyyyHHMmSs = "EEE, d MMM yyyy HH:mm:ss",
}

export enum EEEEMMMD {
  EEEEDDeMMM = "EEEE, d ' de ' MMM",
  EEEEDMMM = "EEEE d  MMM",
}

export enum EEEEMMMMD {
  EEEEDDeMMMM = "EEEE, d ' de ' MMMM",
  EEEEDMMMM = "EEEE d MMMM",
}

export enum EEEEMMMMDYyyy {
  EEEEDDeMMMMYyyy = "EEEE, d 'de' MMMM, yyyy",
  EEEEDMMMMYyyy = "EEEE d MMMM, yyyy",
}

export enum MDYyyyHMmSs {
  DMYyyyHMmSs = "d-M-yyyy h:mm:ss",
}

export enum MD {
  DM = "D/M",
}

export enum MDLt {
  DMHHMm = "D/M, HH:mm",
  DMLt = "D/M, LT",
}

export enum MDYyyy {
  DMYyyy = "D/M/YYYY",
}

export enum MDYy {
  DMYy = "d/M/yy",
}

export enum MDYyyyEnum {
  DMYyyy = "d/M/yyyy",
}

export enum MmDDYyyy {
  DDMmYyyy = "DD/MM/YYYY",
}

export enum MmmD {
  DDeMMM = "D [de] MMM",
  DMmm = "D MMM",
}

export enum MmmDYyyy {
  DMmmYyyy = "D MMM, YYYY",
  MmmDYyyyDMmmYyyy = "D MMM YYYY",
}

export enum MmmdYyyy {
  DDeMMMMYYYY = "D [de] MMMM, YYYY",
  DMmmmYyyy = "D MMMM, YYYY",
}

export enum MMMDYyyyEnum {
  DMMMYyyy = "d MMM, yyyy",
  MmmDYyyyDMMMYyyy = "d MMM yyyy",
}

export enum MMMDYyyyHhMmA {
  DDeMMMYyyyHHMm = "d ' de ' MMM, yyyy, HH:mm",
  DMMMYyyyHHMm = "d MMM yyyy, HH:mm",
}

export enum MmmmD {
  DMmmm = "D MMMM",
}

export enum MmmmDoYyyy {
  DoMmmmYyyy = "DO MMMM YYYY",
}

export enum MMMMD {
  DMMMM = "d MMMM",
}

export enum MMMMDYyyy {
  DMMMMYyyy = "d MMMM, yyyy",
  MMMMDYyyyDMMMMYyyy = "d MMMM yyyy",
}

export enum DddMD {
  DddDM = "ddd, D/M",
}

export enum DdddMDEnum {
  DdddDM = "dddd, D/M",
  DdddMDDdddDM = "dddd D/M",
}

export enum DdddMMMMDo {
  DdddDoDeMMMM = "dddd, Do [de] MMMM",
  DdddDoMMMM = "dddd Do MMMM",
}

export enum HMmA {
  HHMm = "HH:mm",
  HMmA = "h:mm a",
  KkMm = "kk:mm",
}

export enum HMmAZ {
  HHMm = "HH:mm",
  HMmAZ = "h:mm a z",
  KkMm = "kk:mm",
}

export interface EspnEsArFeeds {
  googlenews: FluffyGooglenews;
}

export interface FluffyGooglenews {
  allowedContentTypes: string[];
}

export interface EspnEsArOmniture {
  site: string;
  enabled: boolean;
}

export interface EspnEsArPremiumSettings {
  espnPlusEnabled: boolean;
  starPlusEnabled: boolean;
  showPremiumContent: boolean;
}

export interface ShowRHSAllNewsLinks {
  ncaam: boolean;
}

export interface EspnEsArTier2NavIDS {
  "oly/summer/diving": number;
  "oly/summer/modern-pentathlon": number;
  "oly/summer/badminton": number;
  "oly/summer/handball": number;
  "oly/summer/wrestling": number;
  "other-sports"?: number;
  "womens-golf": number;
  espnw: number;
  "oly/summer/rugby": number;
  "mens-golf": number;
  "oly/summer/baseball": number;
  "oly/winter/figure-skating": number;
  "oly/winter/skeleton": number;
  "oly/summer/rowing": number;
  "espn-fc-show"?: number;
  "oly/summer/tennis": number;
  league?: FluffyLeague;
  nba: number;
  "oly/summer/shooting": number;
  "oly/winter/bobsled": number;
  "womens-college-basketball": number;
  baseball: number;
  "oly/winter/ski-jumping": number;
  "nba-development": number;
  "oly/winter/alpine-skiing": number;
  "oly/summer/weightlifting": number;
  oly: number;
  xfl: number;
  "oly/summer/equestrian": number;
  espnradio?: number;
  "oly/summer/sailing": number;
  "oly/summer/softball": number;
  "field-hockey"?: number;
  "oly/summer/fencing": number;
  golf: number;
  "oly/winter/nordic-combined": number;
  "oly/summer/soccer": number;
  "esports/desafio-espn"?: number;
  esports: number;
  "oly/winter/snowboarding": number;
  "mlb/beisbolexperience"?: number;
  "mens-tennis": number;
  wnba: number;
  "oly/summer/triathlon": number;
  television?: number;
  "oly/summer/volleyball": number;
  "oly/summer/cycling": number;
  "oly/summer/2016": number;
  "oly/summer/boxing": number;
  fiba: number;
  tennis: number;
  "oly/winter/ice-hockey": number;
  watch: number;
  "oly/summer/field-hockey": number;
  "womens-tennis": number;
  "world-baseball-classic"?: number;
  "los-angeles"?: string;
  "oly/winter/freestyle-skiing": number;
  wwe?: number;
  f1: number;
  "serie-del-caribe"?: number;
  ciclismo?: number;
  "oly/summer/swimming": number;
  basketball?: number;
  "oly/summer/judo": number;
  "caribbean-series"?: number;
  "oly/winter/luge": number;
  "mma/pfl": number;
  mlb: number;
  "oly/winter/short-track-speedskating": number;
  "x-games": number;
  "nba/summerleague"?: number;
  "oly/summer/canoe": number;
  rugby: number;
  poker: number;
  "oly/summer/water-polo": number;
  "oly/winter/cross-country-skiing"?: number;
  "indy-car": number;
  "oly/winter/biathlon": number;
  nexoespn?: number;
  nfl: number;
  "oly/summer/athletics": number;
  boxing: number;
  "oly/summer/gymnastics": number;
  "mma/bellator": number;
  mma: number;
  sportscenter: number;
  panamerican?: number;
  "oly/winter/speedskating": number;
  "oly/summer/basketball": number;
  "mma/ufc": number;
  espys?: number;
  "oly/summer/table-tennis": number;
  "oly/summer/golf": number;
  hotpicks?: number;
  "oly/summer/surfing": number;
  soccer: number;
  "oly/summer/taekwondo": number;
  "oly/summer/skateboarding": number;
  football?: number;
  "espn-run"?: number;
  motociclismo?: number;
  rpm: number;
  "oly/summer/sport-climbing": number;
  "la-ultima-experiencia"?: number;
  nascar: number;
  "oly/summer/archery": number;
  polo?: number;
  "oly/winter/curling": number;
  "nacion-espn"?: number;
  "oly/summer/karate": number;
  "liga-mx"?: number;
  cycling?: number;
  "selecao-brasileira"?: number;
  motogp?: number;
  "bola-da-vez"?: number;
  "college-sports"?: number;
  judo?: number;
  volleyball?: number;
  swimming?: number;
  surfing?: number;
  futsal?: number;
  "bola-de-prata"?: number;
  "ranking-dos-treinadores"?: number;
  "jogo-limpo"?: number;
  "oly/winter/cross-country"?: number;
  "resenha-espn"?: number;
  "brazilian-basketball"?: number;
  nhl?: number;
  athletics?: number;
  "data-espn"?: number;
}

export interface FluffyLeague {
  soccer: number;
  "historias-da-bola"?: number;
  "futebol/varalespn"?: number;
}

export interface EspnEsArTier3NavIDS {
  clubhouse: PurpleClubhouse;
}

export interface PurpleClubhouse {
  nfl: number;
  mlb: number;
  nba: number;
  soccer: number;
}

export interface EspnEsArURIRewrites {
  urls: PurpleUrls;
  roots: PurpleRoots;
  pathSegments: PurplePathSegments;
  paramKeys: PurpleParamKeys;
  paramValues: PurpleParamValues;
}

export interface PurpleParamKeys {
  juegoId: ID;
  fecha: Fecha;
  nombre: Nombre;
  partido: Partid;
  liga: Liga;
  tipodetemporada: Tipodetemporada;
  ano: Ano;
  semana: Semana;
  deportes: Deportes;
  evento: Evento;
  torneo: Torneo;
  deportista: Deportista;
  vista: Vista;
  pais: Pais;
  paisId: PaisID;
  pagina: Pagina;
  continuo: Continuo;
  ronda?: RondeEnum;
  posicion?: PositieEnum;
}

export enum Ano {
  Year = "year",
}

export enum Continuo {
  Continuous = "continuous",
}

export enum Deportes {
  Discipline = "discipline",
}

export enum Deportista {
  Athlete = "athlete",
}

export enum Evento {
  Event = "event",
}

export enum Fecha {
  Date = "date",
}

export enum ID {
  GameID = "gameId",
}

export enum Liga {
  League = "league",
}

export enum Nombre {
  Name = "name",
}

export enum Pagina {
  Page = "page",
}

export enum Pais {
  Country = "country",
}

export enum PaisID {
  CountryID = "countryId",
}

export enum Partid {
  GameID = "gameID",
}

export enum PositieEnum {
  Position = "position",
}

export enum RondeEnum {
  Round = "round",
}

export enum Semana {
  Week = "week",
}

export enum Tipodetemporada {
  Seasontype = "seasontype",
}

export enum Torneo {
  TournamentID = "tournamentId",
}

export enum Vista {
  View = "view",
}

export interface PurpleParamValues {
  liga: Liga;
  todo: Todo;
  deportistas: Deportistas;
  paises: Paises;
}

export enum Deportistas {
  Athletes = "athletes",
}

export enum Paises {
  Countries = "countries",
}

export enum Todo {
  All = "all",
}

export interface PurplePathSegments {
  reporte: Reporte;
  juego: Juego;
  equipo: Equipo;
  plantel: Plantel;
  estadisticas: Estadisticas;
  calendario: Calendario;
  estadio: Estadio;
  profundidad: Profundidad;
  conversacion: Conversacion;
  ficha: Ficha;
  previa: Previa;
  partido: Partido;
  jugadas: Jugadas;
  cronica: Cronica;
  fotos: Fotos;
  duelo: Duelo;
  jugador: Jugador;
  posiciones: AuthorsEnum;
  lesiones: Lesiones;
  bateo: Bateo;
  grilla: Grilla;
  piloto: Piloto;
  resultados: Resultados;
  liga: Liga;
  ligas: Ligas;
  nota: Nota;
  comentario: Comentario;
  alineacion: Alineacion;
  numeritos: Numeritos;
  medallas: Meda;
  deportes: LeagueElement;
  deportistas: Deportistas;
  lideres: Lideres;
  envivo: Envivo;
  ronda: RondesEnum;
  equipos: LeagueElement;
  posicion: PositiesEnum;
  mejordisponible: Mejordisponible;
  proyeccion: Pro;
  noticias: Noticias;
  noticiasdelequipo: Noticiasdelequipo;
  busqueda: Busqueda;
}

export enum Alineacion {
  Lineups = "lineups",
}

export enum Bateo {
  Batting = "batting",
}

export enum Busqueda {
  Search = "search",
}

export enum Calendario {
  Schedule = "schedule",
}

export enum Comentario {
  Commentary = "commentary",
}

export enum Conversacion {
  Conversation = "conversation",
}

export enum Cronica {
  Recap = "recap",
}

export enum Duelo {
  Matchup = "matchup",
}

export enum Envivo {
  Live = "live",
}

export enum Equipo {
  Conference = "conference",
  Group = "group",
  Label = "label",
  Team = "team",
}

export enum Estadio {
  Stadium = "stadium",
}

export enum Estadisticas {
  Stats = "stats",
}

export enum Ficha {
  Boxscore = "boxscore",
}

export enum Fotos {
  Photos = "photos",
}

export enum Grilla {
  Grid = "grid",
}

export enum Juego {
  Game = "game",
}

export enum Jugadas {
  Playbyplay = "playbyplay",
}

export enum Jugador {
  Player = "player",
}

export enum Lesiones {
  Injuries = "injuries",
}

export enum Lideres {
  Leaderboard = "leaderboard",
}

export enum Ligas {
  Leagues = "leagues",
}

export enum Meda {
  Medals = "medals",
}

export enum Mejordisponible {
  Bestavailable = "bestavailable",
}

export enum Nota {
  Story = "story",
}

export enum Noticias {
  News = "news",
}

export enum Noticiasdelequipo {
  Teamnews = "teamnews",
}

export enum Numeritos {
  Matchstats = "matchstats",
}

export enum Partido {
  Match = "match",
}

export enum Piloto {
  Driver = "driver",
}

export enum Plantel {
  Roster = "roster",
}

export enum PositiesEnum {
  Positions = "positions",
}

export enum Previa {
  Preview = "preview",
}

export enum Profundidad {
  Depth = "depth",
}

export enum Pro {
  Projections = "projections",
}

export enum Reporte {
  Report = "report",
}

export enum Resultados {
  Scoreboard = "scoreboard",
}

export enum RondesEnum {
  Rounds = "rounds",
}

export interface PurpleRoots {
  toEdition: { [key: string]: string };
  toEnglish: { [key: string]: string };
}

export interface PurpleUrls {
  toEdition: TentacledToEdition;
  toEnglish: PathParams;
}

export interface TentacledToEdition {
  "/futbol-americano/nfl/": FutbolAmericanoNfl;
  "/beisbol/mlb/": Beisbol;
  "/basquetbol/nba/": Basquetbol;
  "/basquetbol/fiba/": Basquetbol;
  "/football/club"?: FootballClub;
  "/basquetbol/wnba/"?: string;
  "/beisbol/serie-del-caribe/": Beisbol;
  "/beisbol/clasico-mundial-beisbol/": Beisbol;
}

export enum Basquetbol {
  Basquetbol = "/basquetbol/",
}

export enum Beisbol {
  Beisbol = "/beisbol/",
}

export enum FootballClub {
  FutbolEquipo = "/futbol/equipo",
}

export enum FutbolAmericanoNfl {
  FutbolAmericano = "/futbol-americano/",
}

export interface EspnEsCl {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  betting: EspnEsArBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsCo {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  partnerModules: PartnerModules;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsCoBetting {
  enabled: boolean;
  provider: string;
  providerId?: string;
  incontentstrip?: boolean;
  game?: Game;
}

export interface Game {
  enabled: boolean;
  provider: GameProvider;
}

export enum GameProvider {
  Bet365 = "Bet 365",
  Tab = "tab",
}

export interface EspnEsCRClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: EspnEsCRAds;
  sportBranding: ConfigSportBranding[];
  partnerModules: PartnerModules;
  siteLogo: EspnEsCRSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: string[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: EspnEsCRGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsCRTier2NavIDS;
  tier3NavIds: EspnEsCRTier3NavIDS;
  latestVideoCollectionId: string;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsCRAds {
  disabled: boolean;
  partnerAd: boolean;
  "dev-config": string;
  "qa-config": string;
  "prod-config": string;
  outputType: AdsOutputType;
  featurePhone: AdsFeaturePhone;
  disableAdRequestOnBackgroundedVideo?: boolean;
}

export interface EspnEsCRGameSettings {
  topEventsId: string;
  topSoccerId: string;
  promotedSoccerLeaguesCeId: string;
  showBroadcast: boolean;
}

export interface EspnEsCRSiteLogo {
  class: string;
  featurePhone: FluffyFeaturePhone;
}

export interface FluffyFeaturePhone {
  name: FeaturePhoneName;
  width: string;
  height: string;
}

export interface EspnEsCRTier2NavIDS {
  futbol: string;
  "field-hockey": string;
}

export interface EspnEsCRTier3NavIDS {
  clubhouse: FluffyClubhouse;
}

export interface FluffyClubhouse {
  nfl: string;
  mlb: string;
  nba: string;
  soccer: string;
}

export interface EspnEsDoClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: EspnEsCRAds;
  sportBranding: ConfigSportBranding[];
  partnerModules: PartnerModules;
  siteLogo: EspnEsCRSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: string[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: EspnEsCRGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsCRTier3NavIDS;
  latestVideoCollectionId: string;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsEc {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  partnerModules: PartnerModules;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: EspnEsCRAds;
  sportBranding: ConfigSportBranding[];
  siteLogo: EspnEsCRSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: string[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: EspnEsCRGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsCRTier2NavIDS;
  tier3NavIds: EspnEsCRTier3NavIDS;
  latestVideoCollectionId: string;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsEs {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  sportBranding: ConfigSportBranding[];
  partnerModules: PartnerModules;
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  betting: ChartBeat;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnEsMX {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  sportBranding: ConfigSportBranding[];
  partnerModules: PartnerModules;
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnEsUs {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnEsArURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  espnPlusEnabled: boolean;
  ppvEnabled: boolean;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  betting: ChartBeat;
  scoreboardFixed: boolean;
  tickets: Tickets;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnNlNl {
  editionSettings: EspnNlNlEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  sportBranding: any[];
  partnerModules: PartnerModules;
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnNlNlURIRewrites;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: EspnNlNlTier2NavIDS;
  tier3NavIds: EspnNlNlTier3NavIDS;
  watch: Watch;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnNlNlEditionSettings {
  key: string;
  site: TwitterSite;
  language: Lang;
  country: Lang;
  domain: string;
  editionSiteId: number;
  https: boolean;
  supportsOneSite: boolean;
}

export interface EspnNlNlTier2NavIDS {
  "oly/summer/diving": number;
  "oly/winter/freestyle-skiing": number;
  "oly/summer/modern-pentathlon": number;
  "oly/summer/badminton": number;
  "oly/summer/handball": number;
  "oly/summer/wrestling": number;
  "oly/summer/swimming": number;
  "oly/summer/2020": number;
  "oly/summer/rugby": number;
  "oly/summer/judo": number;
  "oly/winter/luge": number;
  "oly/summer/baseball": number;
  "oly/winter/figure-skating": number;
  "oly/winter/skeleton": number;
  "oly/winter/short-track-speedskating": number;
  "oly/summer/rowing": number;
  "oly/summer/canoe": number;
  league: ClubhouseClass;
  "oly/summer/tennis": number;
  "oly/summer": number;
  "oly/summer/water-polo": number;
  "oly/winter/cross-country-skiing": number;
  "oly/winter/biathlon": number;
  "oly/summer/shooting": number;
  "oly/winter/bobsled": number;
  "oly/summer/athletics": number;
  "oly/winter/ski-jumping": number;
  "oly/summer/gymnastics": number;
  "oly/winter/alpine-skiing": number;
  oly: number;
  "oly/summer/weightlifting": number;
  "oly/summer/equestrian": number;
  "oly/summer/sailing": number;
  "oly/summer/softball": number;
  "oly/summer/fencing": number;
  "oly/winter/speedskating": number;
  "oly/summer/basketball": number;
  "oly/winter/nordic-combined": number;
  "oly/summer/soccer": number;
  "oly/summer/table-tennis": number;
  "oly/winter/snowboarding": number;
  "oly/summer/golf": number;
  "oly/summer/surfing": number;
  "oly/summer/taekwondo": number;
  "oly/summer/skateboarding": number;
  "oly/summer/triathlon": number;
  "oly/summer/volleyball": number;
  "oly/summer/cycling": number;
  "oly/summer/2016": number;
  "oly/summer/boxing": number;
  fiba: number;
  "oly/summer/sport-climbing": number;
  "oly/winter/ice-hockey": number;
  nhl: number;
  "oly/summer/archery": number;
  "oly/summer/field-hockey": number;
  "oly/winter/curling": number;
  "oly/summer/karate": number;
}

export interface ClubhouseClass {
  soccer: number;
}

export interface EspnNlNlTier3NavIDS {
  clubhouse: TentacledClubhouse;
}

export interface TentacledClubhouse {
  "college-football": number;
  "mens-college-basketball": number;
  mlb: number;
  nba: number;
  nfl: number;
  soccer: number;
  "womens-college-basketball": number;
  draftcast?: number;
}

export interface EspnNlNlURIRewrites {
  urls: ParamKeys;
  roots: PurpleRoots;
  pathSegments: FluffyPathSegments;
  paramKeys: FluffyParamKeys;
  paramValues: FluffyParamValues;
}

export interface FluffyParamKeys {
  wedstrijdId: ID;
  competitie: Liga;
  datum: Fecha;
  naam: Nombre;
  toernooiId: Torneo;
  atleet: Deportista;
  ronde: RondeEnum;
  positie: PositieEnum;
}

export interface FluffyParamValues {
  competitie: Liga;
  atleten: Deportistas;
}

export interface FluffyPathSegments {
  stand: AuthorsEnum;
  verslag: Reporte;
  selectie: Plantel;
  statistieken: Estadisticas;
  speelkalender: Calendario;
  voorbeschouwing: Previa;
  wedstrijd: Partido;
  speler: Jugador;
  blessures: Lesiones;
  scorebord: Resultados;
  competitie: Liga;
  competities: Ligas;
  artikel: Nota;
  minuutperminuut: Comentario;
  wedstrijdstatistieken: Numeritos;
  atleten: Deportistas;
  medailles: Meda;
  sporten: LeagueElement;
  nieuws: Noticias;
  rondes: RondesEnum;
  posities: PositiesEnum;
  draftcast: string;
  bestbeschikbaar: Mejordisponible;
  projecties: Pro;
  zoeken: Busqueda;
}

export interface ParamKeys {
  toEnglish: PathParams;
  toEdition: PathParams;
}

export interface Watch {
  bindProviderToOneID: boolean;
  useWatchAuthLogin: boolean;
  MVPDAuthenticator: string;
  meta: WatchMeta;
}

export interface WatchMeta {
  titleBranding: string;
}

export interface EspnPtBr {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnEsArDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: EspnPtBrMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnPtBrSportReplacements;
  uriRewrites: EspnPtBrURIRewrites;
  showFavorites: boolean;
  shimFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  syndicatedVodPlayer: boolean;
  hideCategoryLinks: number[];
  showCategory: boolean;
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  betting: EspnEsCoBetting;
  hasTickets: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnEsArTier2NavIDS;
  tier3NavIds: EspnEsArTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  showRHSAllNewsLinks: ShowRHSAllNewsLinks;
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: EspnEsArPremiumSettings;
}

export interface EspnPtBrMeta {
  titleBranding: TitleBranding;
  defaultMetaImage: DefaultMetaImage;
  social: FluffySocial;
  titleBrandingWithDomain?: string;
}

export interface FluffySocial {
  twitter: FluffyTwitter;
  facebook: Facebook;
}

export interface FluffyTwitter {
  twitterId: string;
  card: Card;
  app_id_iphone: string;
  site: TwitterSite;
  app_name_googleplay: TwitterAppNameGoogleplay;
  app_id_googleplay: string;
  app_name_iphone: TwitterAppNameGoogleplay;
  language: Lang;
}

export interface EspnPtBrSportReplacements {
  athletics: string;
  f1: string;
  cycling: string;
  "bola-de-prata": BolaDePrataEnum;
  "data-espn": BolaDePrataEnum;
  "ranking-dos-treinadores": BolaDePrataEnum;
  motogp: string;
  "selecao-brasileira": BolaDePrataEnum;
  swimming: string;
  volleyball: string;
}

export interface EspnPtBrURIRewrites {
  urls: FluffyUrls;
  roots: PurpleRoots;
  pathSegments: TentacledPathSegments;
  paramKeys: TentacledParamKeys;
  paramValues: TentacledParamValues;
}

export interface TentacledParamKeys {
  jogoId: ID;
  data: Fecha;
  nome: Nombre;
  partida: Partid;
  tipodetemporada: Tipodetemporada;
  ano: Ano;
  semana: Semana;
  modalidade: Deportes;
  evento: Evento;
  tournamentId: Torneo;
  atleta: Deportista;
  "vs-division": Vista;
  pais: Pais;
  paisId: PaisID;
  pagina: Pagina;
  continuo: Continuo;
  rodada: RondeEnum;
  posicao: PositieEnum;
  time: Equipo;
  ligas: Ligas;
  liga: Liga;
}

export interface TentacledParamValues {
  liga: Liga;
  ligas: Ligas;
  todos: Todo;
  atletas: Deportistas;
  paises: Paises;
}

export interface TentacledPathSegments {
  artigo: Nota;
  atletas: Deportistas;
  "bate-papo": Conversacion;
  calendario: Calendario;
  classificacao: AuthorsEnum;
  clipe: string;
  comentario: Comentario;
  confronto: Duelo;
  cronica: Cronica;
  deportes: LeagueElement;
  fotos: Fotos;
  elenco: Plantel;
  escalacao: string;
  escalacoes: Alineacion;
  estadio: Estadio;
  estatisticas: Estadisticas;
  jogador: Jugador;
  jogo: Juego;
  lesoes: Lesiones;
  liga: Liga;
  ligas: Ligas;
  medalhas: Meda;
  melhordisponivel: Mejordisponible;
  projecao: Pro;
  "minuto-a-minuto": Jugadas;
  olimpiada: string;
  partida: Partido;
  "partida-estatisticas": Numeritos;
  piloto: Piloto;
  placar: Ficha;
  posicao: PositiesEnum;
  previa: Previa;
  profundidad: Profundidad;
  noticias: Noticias;
  ranking: Lideres;
  rebatendo: Bateo;
  reporte: Reporte;
  resultados: Resultados;
  rodada: RondesEnum;
  temporeal: Envivo;
  time: Equipo;
  times: LeagueElement;
  verao: string;
  busqueda: Busqueda;
}

export interface FluffyUrls {
  toEdition: StickyToEdition;
  toEnglish: PathParams;
}

export interface StickyToEdition {
  "/beisebol/mlb/": string;
}

export interface EspnauEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnauEnOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: ConfigSportReplacements;
  uriRewrites: EspnauEnURIRewrites;
  betting: EspnauEnBetting;
  scoreboardFixed: boolean;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  shimFavorites: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnauEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnauEnBetting {
  enabled: boolean;
  provider: GameProvider;
  providerId: string;
  game: Game;
  incontentstrip: boolean;
  tabWhitelist: string[];
  bettingLinks: BettingLinks;
}

export interface BettingLinks {
  mlb: string;
  nba: string;
  nfl: string;
  nhl: string;
  rugby: string;
  nbl: string;
}

export interface EspnauEnDateTime {
  long: DateTimeLong;
  medium: Medium;
  short: MDEnum;
  timeFormat: TimeFormat;
  firstDayOfWeek: FirstDayOfWeek;
  timeZone: string;
  defaultFormat: MMMDYyyyEnum;
  displayTimeZone?: boolean;
  timeZoneString: TimeZoneString;
  timeZoneBucket: string;
  "MMM D, YYYY": MmmDYyyy;
  "M/D/YYYY": MDYyyy;
  "MM/DD/YYYY": MmDDYyyy;
  MMDDYYYY: Mmddyyyy;
  "MMMM Do YYYY": MMMMDoYYYY;
  "dddd, MMMM Do YYYY": DdddMMMMDoYYYY;
  "EEEE, MMMM d"?: string;
  "dddd, MMMM Do"?: string;
  "ddd, MMM D YYYY": DddMMMDYYYY;
  "ddd, M/D"?: DddMD;
  "M/D": MD;
  "M/D, LT"?: MDLt;
  "MMMM D, YYYY": MmmmDYyyy;
  "dddd, M/D": DdddMDEnum;
  "MMM D"?: MmmD;
  "MMMM D"?: MmmmD;
  age: Age;
  timeZoneDstOffset?: number;
  timeZoneDstString?: string;
  "M/D LT"?: string;
}

export enum Mmddyyyy {
  Ddmmyyyy = "DDMMYYYY",
}

export enum MmmmDYyyy {
  DMmmmYyyy = "D MMMM YYYY",
}

export enum MMMMDoYYYY {
  DoMMMMYYYY = "Do MMMM YYYY",
}

export enum DddMMMDYYYY {
  DddDMMMYYYY = "ddd, D MMM YYYY",
}

export enum DdddMMMMDoYYYY {
  DdddDoMMMMYYYY = "dddd, Do MMMM YYYY",
}

export enum TimeZoneString {
  Gmt = "GMT",
  Ist = "IST",
  Pht = "PHT",
}

export interface EspnauEnOmniture {
  site: string;
  account: string;
  enabled: boolean;
}

export interface EspnauEnTier3NavIDS {
  clubhouse: { [key: string]: number };
}

export interface EspnauEnURIRewrites {
  urls: ParamKeys;
  roots: FluffyRoots;
  pathSegments: PathParams;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface FluffyRoots {
  toEdition: IndigoToEdition;
  toEnglish: ToEnglishClass;
}

export interface IndigoToEdition {
  "/horse/": string;
  "/nascar/": string;
  "/ncaa/": string;
  "/ncb/": string;
  "/ncw/": string;
  "/ncf/": string;
  "/oly/": string;
  "/rpm/": string;
  "/womenbb/": string;
  "/nba/summerleague/": string;
  "/nba-development/": string;
  "/soccer/"?: string;
  "/olympics/summer/soccer"?: string;
  "/soccer/team"?: string;
}

export interface ToEnglishClass {
  "/olympics/summer/football"?: string;
  "/college-football/": string;
  "/football/"?: string;
  "/racing/nascar/": string;
  "/racing/": string;
  "/mens-college-basketball/": string;
  "/womens-college-basketball/": string;
  "/womens-basketball/": string;
  "/olympics/": string;
  "/cycling/": string;
  "/fixtures/"?: string;
  "/figure-skating/": string;
  "/college-sports/": string;
  "/gymnastics/": string;
  "/skiing/": string;
  "/horse-racing/": string;
  "/sports/womenbb/": string;
  "/sports/horse/": string;
  "/supercars/"?: string;
  "/nba-summer-league/"?: string;
  "/espn/rss/football/"?: string;
  "/nba-development/"?: string;
  "/american-football/"?: string;
  "/american-fb/"?: string;
  "/football/club"?: string;
  "/sports/endurance/"?: string;
  "/losangeles/"?: string;
  "/newyork/"?: string;
  "/espn/onenacion/"?: string;
  "/football/team"?: string;
}

export interface EspncricinfoEnAuClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspncricinfoEnAuURIRewrites;
  betting: EspncricinfoEnAuBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: EspncricinfoEnAuGameSettings;
  fallback: EspncricinfoEnAuFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspncricinfoEnAuTier2NavIDS;
  tier3NavIds: EspncricinfoEnAuTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
  isSingleSport: boolean;
  defaultSearchParams: DefaultSearchParams;
  featurePhoneLeaguesListId: number;
  cseSearchKey: string;
}

export interface EspncricinfoEnAuBetting {
  enabled: boolean;
  provider: string;
  game: ChartBeat;
}

export interface DefaultSearchParams {
  sport: SportElement;
}

export interface EspncricinfoEnAuFallback {
  "cricket-world-cup-timeline": CricketWorldCupTimeline;
  "cricket-world-cup-timeline-1975": CricketWorldCupTimeline1975;
  "fantasy-pick": FantasyPick;
  "cricket-world-cup-timeline-1987": CricketWorldCupTimeline1987;
  "cricket-world-cup-timeline-1999": CricketWorldCupTimeline1999;
  "cricket-world-cup-timeline-2015": CricketWorldCupTimeline2015;
  "cricket-world-cup-timeline-1983": CricketWorldCupTimeline1983;
  "cricket-world-cup-timeline-1996": CricketWorldCupTimeline1996;
  "cricket-world-cup-timeline-2007": CricketWorldCupTimeline2007;
  "cricket-world-cup-timeline-2011": CricketWorldCupTimeline2011;
  "cricket-world-cup-timeline-1992": CricketWorldCupTimeline1992;
  "cricket-world-cup-timeline-2003": CricketWorldCupTimeline2003;
  "cricket-world-cup-timeline-1979": CricketWorldCupTimeline1979;
}

export enum CricketWorldCupTimeline {
  EspncricinfoEnUsCricketWorldCupTimelineIndex = "espncricinfo-en-us-cricket-world-cup-timeline-index",
}

export enum CricketWorldCupTimeline1975 {
  EspncricinfoEnUsCricketWorldCupTimeline1975Index = "espncricinfo-en-us-cricket-world-cup-timeline-1975-index",
}

export enum CricketWorldCupTimeline1979 {
  EspncricinfoEnUsCricketWorldCupTimeline1979Index = "espncricinfo-en-us-cricket-world-cup-timeline-1979-index",
}

export enum CricketWorldCupTimeline1983 {
  EspncricinfoEnUsCricketWorldCupTimeline1983Index = "espncricinfo-en-us-cricket-world-cup-timeline-1983-index",
}

export enum CricketWorldCupTimeline1987 {
  EspncricinfoEnUsCricketWorldCupTimeline1987Index = "espncricinfo-en-us-cricket-world-cup-timeline-1987-index",
}

export enum CricketWorldCupTimeline1992 {
  EspncricinfoEnUsCricketWorldCupTimeline1992Index = "espncricinfo-en-us-cricket-world-cup-timeline-1992-index",
}

export enum CricketWorldCupTimeline1996 {
  EspncricinfoEnUsCricketWorldCupTimeline1996Index = "espncricinfo-en-us-cricket-world-cup-timeline-1996-index",
}

export enum CricketWorldCupTimeline1999 {
  EspncricinfoEnUsCricketWorldCupTimeline1999Index = "espncricinfo-en-us-cricket-world-cup-timeline-1999-index",
}

export enum CricketWorldCupTimeline2003 {
  EspncricinfoEnUsCricketWorldCupTimeline2003Index = "espncricinfo-en-us-cricket-world-cup-timeline-2003-index",
}

export enum CricketWorldCupTimeline2007 {
  EspncricinfoEnUsCricketWorldCupTimeline2007Index = "espncricinfo-en-us-cricket-world-cup-timeline-2007-index",
}

export enum CricketWorldCupTimeline2011 {
  EspncricinfoEnUsCricketWorldCupTimeline2011Index = "espncricinfo-en-us-cricket-world-cup-timeline-2011-index",
}

export enum CricketWorldCupTimeline2015 {
  EspncricinfoEnUsCricketWorldCupTimeline2015Index = "espncricinfo-en-us-cricket-world-cup-timeline-2015-index",
}

export enum FantasyPick {
  EspncricinfoEnInFantasyPickIndex = "espncricinfo-en-in-fantasy-pick-index",
}

export interface EspncricinfoEnAuGameSettings {
  topEventsId: number;
  promotedCricketLeaguesCeId: number;
  showBroadcast: boolean;
}

export interface EspncricinfoEnAuTier2NavIDS {
  "cricket-world-cup-timeline": number;
  "cricket-world-cup-timeline-1975": number;
  "cricket-world-cup-timeline-1987": number;
  "cricket-world-cup-timeline-1999": number;
  "cricket-world-cup-timeline-2015": number;
  "cricket-world-cup-timeline-1983": number;
  "cricket-world-cup-timeline-1996": number;
  "cricket-world-cup-timeline-2007": number;
  league: LeagueClass;
  "cricket-world-cup-timeline-2011": number;
  "cricket-world-cup-timeline-1992": number;
  "cricket-world-cup-timeline-2003": number;
  "cricket/iframecontainer": number;
  standings: LeagueClass;
  cricket: number;
  scoreboard: LeagueClass;
  "cricket-world-cup-timeline-1979": number;
}

export interface EspncricinfoEnAuTier3NavIDS {
  clubhouse: LeagueClass;
  scoreboard: LeagueClass;
}

export interface EspncricinfoEnAuURIRewrites {
  urls: TentacledUrls;
  roots: TentacledRoots;
  pathSegments: StickyPathSegments;
  paramKeys: StickyParamKeys;
  paramValues: PathParams;
}

export interface StickyParamKeys {
  series: Liga;
}

export interface StickyPathSegments {
  table: AuthorsEnum;
  series: Liga;
  scores: Resultados;
}

export interface TentacledRoots {
  toEdition: IndecentToEdition;
  toEnglish: FluffyToEnglish;
}

export interface IndecentToEdition {
  "/cricket/leagues/index": CricketLeaguesIndex;
  "/cricket/league": CricketLeagueEnum;
  "/cricket/team": CricketTeam;
  "/cricket/story": CricketStory;
  "/cricket/series": CricketLeagueEnum;
  "/cricket/table": CricketStandingsEnum;
  "/cricket/scoreboard": CricketScoreboardEnum;
  "/cricket/standings": CricketStandingsEnum;
  "/cricket/cricketpicks": CricketCricketpicks;
  "/scoreboard": CricketScoreboardEnum;
}

export enum CricketCricketpicks {
  Cricketpicks = "/cricketpicks",
}

export enum CricketLeagueEnum {
  Series = "/series",
}

export enum CricketLeaguesIndex {
  Series = "/series/",
}

export enum CricketScoreboardEnum {
  Scores = "/scores",
}

export enum CricketStandingsEnum {
  Table = "/table",
}

export enum CricketStory {
  Story = "/story",
}

export enum CricketTeam {
  Team = "/team",
}

export interface FluffyToEnglish {
  "/series/index": SeriesIndex;
  "/series": PurpleSeries;
  "/team": TeamEnum;
  "/story": Story;
  "/table": StandingsEnum;
  "/scores": Score;
  "/scoreboard": Score;
  "/standings": StandingsEnum;
  "/cricketpicks": Cricketpicks;
}

export enum Cricketpicks {
  CricketCricketpicks = "/cricket/cricketpicks",
}

export enum Score {
  CricketScoreboard = "/cricket/scoreboard",
}

export enum PurpleSeries {
  CricketLeague = "/cricket/league",
}

export enum SeriesIndex {
  CricketLeaguesIndex = "/cricket/leagues/index",
}

export enum StandingsEnum {
  CricketStandings = "/cricket/standings",
}

export enum Story {
  CricketStory = "/cricket/story",
}

export enum TeamEnum {
  CricketTeam = "/cricket/team",
}

export interface TentacledUrls {
  toEdition: HilariousToEdition;
  toEnglish: UrlsToEnglish;
}

export interface HilariousToEdition {
  "/cricket/": Cricket;
}

export enum Cricket {
  Empty = "/",
}

export interface UrlsToEnglish {
  "/index": IndexEnum;
}

export enum IndexEnum {
  CricketIndex = "/cricket/index",
}

export interface EspncricinfoEnNzClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspncricinfoEnAuURIRewrites;
  betting: EspncricinfoEnNzBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: EspncricinfoEnAuGameSettings;
  fallback: EspncricinfoEnAuFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspncricinfoEnAuTier2NavIDS;
  tier3NavIds: EspncricinfoEnAuTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
  isSingleSport: boolean;
  defaultSearchParams: DefaultSearchParams;
  featurePhoneLeaguesListId: number;
  cseSearchKey: string;
}

export interface EspncricinfoEnNzBetting {
  enabled: boolean;
  provider: GameProvider;
  providerId: string;
  affiliateCode?: string;
  bet365blacklist: string[];
  game: ChartBeat;
  affiliateCodes?: FluffyAffiliateCodes;
}

export interface FluffyAffiliateCodes {
  headerScoreboard: string;
}

export interface EspncricinfoEnUs {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: ConfigDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspncricinfoEnAuURIRewrites;
  betting: EspncricinfoEnAuBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  espnPlusEnabled: boolean;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: EspncricinfoEnAuGameSettings;
  fallback: EspncricinfoEnAuFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspncricinfoEnAuTier2NavIDS;
  tier3NavIds: EspncricinfoEnAuTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
  isSingleSport: boolean;
  defaultSearchParams: DefaultSearchParams;
  featurePhoneLeaguesListId: number;
  cseSearchKey: string;
}

export interface EspnfcEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: ConfigDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  omniture: EspnauEnOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: EspnfcEnSiteLogo;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: PathParams;
  uriRewrites: EspnfcEnURIRewrites;
  betting: EspnfcEnBetting;
  tickets: Tickets;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: EspnfcEnFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnfcEnTier2NavIDS;
  tier3NavIds: EspnfcEnTier3NavIDS;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
}

export interface EspnfcEnBetting {
  enabled: boolean;
  game: ChartBeat;
}

export interface EspnfcEnFallback {
  football: string;
}

export interface EspnfcEnSiteLogo {
  class: TwitterSite;
}

export interface EspnfcEnTier2NavIDS {
  league: ClubhouseClass;
}

export interface EspnfcEnTier3NavIDS {
  clubhouse: ClubhouseClass;
}

export interface EspnfcEnURIRewrites {
  urls: ParamKeys;
  roots: StickyRoots;
  pathSegments: PathParams;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface StickyRoots {
  "/racing/nascar/": string;
  "/racing/": string;
  "/college-football/": string;
  "/mens-college-basketball/": string;
  "/womens-college-basketball/": string;
  "/womens-basketball/": string;
  "/olympics/": string;
  "/cycling/": string;
  "/figure-skating/": string;
  "/college-sports/": string;
  "/gymnastics/": string;
  "/skiing/": string;
  "/horse-racing/": string;
  "/sports/womenbb/": string;
  "/sports/horse/": string;
  "/sports/endurance/": string;
  "/losangeles/": string;
  "/newyork/": string;
  "/espn/onenacion/": string;
}

export interface EspnfcEnAuClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  omniture: EspnauEnOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: EspnfcEnSiteLogo;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: ConfigSportReplacements;
  uriRewrites: EspnfcEnAuURIRewrites;
  betting: EspnEsCoBetting;
  tickets: ChartBeat;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: EspnfcEnAuFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnfcEnTier2NavIDS;
  tier3NavIds: EspnfcEnTier3NavIDS;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
}

export interface EspnfcEnAuFallback {
  nba: string;
  nfl: string;
  nascar: string;
  tennis: string;
  mlb: string;
  nhl: string;
  womenbb: string;
  ncf: string;
  ncb: string;
  ncaa: string;
  oly: string;
  horse: string;
  boxing: string;
  mma: string;
  endurance: string;
  golf: string;
  "sports-betting": string;
}

export interface EspnfcEnAuURIRewrites {
  urls: ParamKeys;
  roots: IndigoRoots;
  pathSegments: PathParams;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndigoRoots {
  "/american-football/": string;
  "/college-football/": string;
  "/football/": string;
  "/racing/nascar/": string;
  "/racing/": string;
  "/mens-college-basketball/": string;
  "/womens-college-basketball/": string;
  "/womens-basketball/": string;
  "/olympics/": string;
  "/cycling/": string;
  "/fixtures/": string;
  "/figure-skating/": string;
  "/college-sports/": string;
  "/gymnastics/": string;
  "/skiing/": string;
  "/horse-racing/": string;
  "/sports/womenbb/": string;
  "/sports/horse/": string;
}

export interface EspnfcEnNg {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  omniture: EspnauEnOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: EspnfcEnSiteLogo;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: ConfigSportReplacements;
  uriRewrites: EspnfcEnAuURIRewrites;
  betting: EspnEsCoBetting;
  tickets: ChartBeat;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: EspnfcEnAuFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnfcEnNgTier2NavIDS;
  tier3NavIds: EspnNlNlTier3NavIDS;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
}

export interface EspnfcEnNgTier2NavIDS {
  boston: number;
  chicago: number;
  cleveland: number;
  dallas: number;
  "los-angeles": number;
  milwaukee: number;
  "new-york": number;
  "fantasy/mens-basketball": number;
  "fantasy/football": number;
  "fantasy/baseball": number;
  "fantasy/hockey": number;
  fantasy: number;
  ncfrecruiting: number;
  ncbrecruiting: number;
  esports: number;
  onenacion: number;
  "v8-supercars": number;
  motogp: number;
  netball: number;
  "aussies-in-action": number;
  "sports-betting": number;
  league: PurpleLeague;
}

export interface EspnfcEnUk {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  omniture: EspnauEnOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  siteLogo: EspnfcEnSiteLogo;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: ConfigSportReplacements;
  uriRewrites: EspnfcEnUkURIRewrites;
  betting: EspnEsCoBetting;
  tickets: ChartBeat;
  showFavorites: boolean;
  favoriteSportsManagement: boolean;
  showInsider: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: EspnfcEnUkFallback;
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: EspnfcEnTier2NavIDS;
  tier3NavIds: EspnfcEnTier3NavIDS;
  videoAutoStart: VideoAutoStart;
  customPrimaryNav: boolean;
}

export interface EspnfcEnUkFallback {
  nfl: string;
  mlb: string;
  nba: string;
  nhl: string;
  ncf: string;
  mma: string;
  esports: string;
}

export interface EspnfcEnUkURIRewrites {
  urls: ParamKeys;
  roots: ToEnglishClass;
  pathSegments: IndigoPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndigoPathSegments {
  table: AuthorsEnum;
}

export interface EspnidEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnidEnSportReplacements;
  uriRewrites: EspnidEnURIRewrites;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: ChartBeat;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnidEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnidEnSportReplacements {
  f1: string;
  cycling: string;
}

export interface EspnidEnTier3NavIDS {
  clubhouse: { [key: string]: number };
  scoreboard: LeagueClass;
}

export interface EspnidEnURIRewrites {
  urls: StickyUrls;
  roots: IndecentRoots;
  pathSegments: IndecentPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndecentPathSegments {
  "soccer/table": string;
}

export interface IndecentRoots {
  toEdition: IndigoToEdition;
  toEnglish: TentacledToEnglish;
}

export interface TentacledToEnglish {
  "/racing/nascar/": string;
  "/racing/": string;
  "/college-football/": string;
  "/mens-college-basketball/": string;
  "/womens-college-basketball/": string;
  "/womens-basketball/": string;
  "/olympics/": string;
  "/cycling/": string;
  "/figure-skating/": string;
  "/college-sports/": string;
  "/gymnastics/": string;
  "/skiing/": string;
  "/horse-racing/": string;
  "/sports/womenbb/": string;
  "/sports/horse/": string;
  "/sports/endurance/"?: string;
  "/losangeles/"?: string;
  "/newyork/"?: string;
  "/espn/onenacion/"?: string;
  "/american-football/"?: string;
  "/football/"?: string;
  "/fixtures/"?: string;
  "/oly/summer/gymnastics/"?: string;
  "/oly/summer/cycling/"?: string;
  "/nba-summer-league/"?: string;
  "/espn/rss/football/"?: string;
  "/nba-development/"?: string;
  "/olympics/summer/football"?: string;
  "/football/club"?: string;
}

export interface StickyUrls {
  toEdition: ToE;
  toEnglish: ToE;
}

export interface ToE {
  "/series": ToEditionSeries;
}

export enum ToEditionSeries {
  CricketSeries = "/cricket/series",
}

export interface EspninEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: EspninEnSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnidEnSportReplacements;
  uriRewrites: EspninEnURIRewrites;
  betting: EspnEsCoBetting;
  scoreboardFixed: boolean;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnidEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspninEnSportBranding {
  sport: BolaDePrataEnum;
  image: ImageEnum;
}

export interface EspninEnURIRewrites {
  urls: StickyUrls;
  roots: FluffyRoots;
  pathSegments: IndecentPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface EspnphEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  googlePixel: GooglePixel;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: EspnPtBrMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnphEnSportReplacements;
  uriRewrites: EspnphEnURIRewrites;
  betting: EspnphEnBetting;
  pickcenter: boolean;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnphEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnphEnBetting {
  enabled: boolean;
  game: ChartBeat;
  incontentstrip: boolean;
}

export interface GooglePixel {
  enabled: boolean;
  id: number;
}

export interface EspnphEnSportReplacements {
  f1: string;
  cycling: string;
  basketball: string;
}

export interface EspnphEnTier3NavIDS {
  clubhouse: { [key: string]: number };
  doubletruck: number;
}

export interface EspnphEnURIRewrites {
  urls: IndigoUrls;
  roots: HilariousRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface HilariousPathSegments {
  "soccer/table": string;
  fixtures: Calendario;
}

export interface HilariousRoots {
  toEdition: IndigoToEdition;
  toEnglish: StickyToEnglish;
}

export interface StickyToEnglish {
  "/olympics/summer/football": string;
  "/college-football/": string;
  "/football/club": string;
  "/football/": string;
  "/racing/nascar/": string;
  "/racing/": string;
  "/mens-college-basketball/": string;
  "/womens-college-basketball/": string;
  "/womens-basketball/": string;
  "/olympics/": string;
  "/cycling/": string;
  "/figure-skating/": string;
  "/college-sports/": string;
  "/gymnastics/": string;
  "/skiing/": string;
  "/horse-racing/": string;
  "/sports/womenbb/": string;
  "/sports/horse/": string;
  "/nba-summer-league/": string;
  "/espn/rss/football/": string;
  "/nba-development/": string;
}

export interface IndigoUrls {
  toEdition: ToE;
  toEnglish: PathParams;
}

export interface EspnsgEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: EspnEsArOmniture;
  chartBeat: ChartBeat;
  ads: EspnEsCRAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: EspnEsCRSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: EspnPtBrMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnidEnSportReplacements;
  uriRewrites: EspnsgEnURIRewrites;
  betting: EspnsgEnBetting;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: string[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: EspnEsCRGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnEsArFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnsgEnTier3NavIDS;
  latestVideoCollectionId: string;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnsgEnBetting {
  enabled: boolean;
  provider: GameProvider;
  providerId: string;
  affiliateCodes: TentacledAffiliateCodes;
  game: Game;
  incontentstrip: boolean;
  fractional: boolean;
  bettingOdds: boolean;
}

export interface TentacledAffiliateCodes {
  headerScoreboard: string;
  fixtures: string;
  soccerCommentary: string;
  odds_findMore: string;
  odds_details: string;
}

export interface EspnsgEnTier3NavIDS {
  clubhouse: StickyClubhouse;
  doubletruck: string;
}

export interface StickyClubhouse {
  nba: string;
  mlb: string;
  "mens-college-basketball": string;
  "womens-college-basketball": string;
  soccer: string;
  nfl: string;
  "college-football": string;
  cricket: string;
  rugby: string;
  wnba: string;
}

export interface EspnsgEnURIRewrites {
  urls: ParamKeys;
  roots: FluffyRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface EspnukEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  googlePixel: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: ConfigMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnidEnSportReplacements;
  uriRewrites: EspnukEnURIRewrites;
  betting: EspnsgEnBetting;
  scoreboardFixed: boolean;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  showPlayer: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: EspnukEnFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnauEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnukEnFeeds {
  googlenews: TentacledGooglenews;
}

export interface TentacledGooglenews {
  allowedContentTypes: string[];
  apiParamOverrides: APIParamOverrides;
  excludedStoryTypes: SportElement[];
}

export interface APIParamOverrides {
  region: string;
}

export interface EspnukEnURIRewrites {
  urls: IndecentUrls;
  roots: IndecentRoots;
  pathSegments: AmbitiousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface AmbitiousPathSegments {
  "soccer/table": string;
  "football/table": string;
  fixtures: Calendario;
}

export interface IndecentUrls {
  toEdition: AmbitiousToEdition;
  toEnglish: ToE;
}

export interface AmbitiousToEdition {
  "/series": ToEditionSeries;
  "/xfl/fixtures": string;
}

export interface EspnwwEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  siteLogo: ConfigSiteLogo;
  app: App;
  fantasy: ChartBeat;
  meta: EspnPtBrMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: ConfigSportReplacements;
  uriRewrites: EspnwwEnURIRewrites;
  betting: EspnsgEnBetting;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnphEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnwwEnURIRewrites {
  urls: StickyUrls;
  roots: FluffyRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface EspnzaEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: TwitterSite;
  javaLocale: JavaLocale;
  dateTime: EspnauEnDateTime;
  numberFormat: NumberFormat;
  temperature: Temperature;
  taboola: Taboola;
  omniture: ChartBeat;
  chartBeat: ChartBeat;
  googlePixel: GooglePixel;
  ads: ConfigAds;
  partnerModules: PartnerModules;
  sportBranding: ConfigSportBranding[];
  app: App;
  fantasy: ChartBeat;
  meta: EspnPtBrMeta;
  appDetails: AppDetails;
  shop: ChartBeat;
  sportReplacements: EspnidEnSportReplacements;
  uriRewrites: EspnzaEnURIRewrites;
  betting: EspnphEnBetting;
  tickets: Tickets;
  showFavorites: boolean;
  showMobileScoresLink: boolean;
  favoriteSportsManagement: boolean;
  showWatch: boolean;
  showCategory: boolean;
  hideCategoryLinks: number[];
  categorySettings: CategorySettings;
  showFCContent: boolean;
  showCricInfoContent: boolean;
  cookieConsent: boolean;
  scDeepLinking: boolean;
  allowShortUrl: boolean;
  allowPrintUrl: boolean;
  allowUserAccountManagement: boolean;
  nowFeed: boolean;
  searchUrl: string;
  hasSearch: boolean;
  gameSettings: ConfigGameSettings;
  fallback: { [key: string]: string };
  editionAlert: EditionAlert;
  feeds: ConfigFeeds;
  tier2NavIds: ConfigTier2NavIDS;
  tier3NavIds: EspnphEnTier3NavIDS;
  latestVideoCollectionId: number;
  videoAutoStart: VideoAutoStart;
  useMongo: boolean;
  activeSite: boolean;
  countries: Country[];
  disneyId: DisneyID;
  cseSearchKey: string;
  footer: number;
  premiumSettings: ConfigPremiumSettings;
}

export interface EspnzaEnURIRewrites {
  urls: StickyUrls;
  roots: HilariousRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface Rewrites {
  paramValues: ParamKeys;
  urls: RewritesUrls;
  paramKeys: ParamKeys;
  roots: RewritesRoots;
  pathSegments: ParamKeys;
}

export interface Entitlements {
  ESPN_PLUS: boolean;
}

export interface Parameters {
  leagueItems: { [key: string]: LeagueItem[] };
  sportRoot: LeagueElement;
  xhr: string;
  type: AuthorsEnum;
  uri: string;
  root: LeagueElement;
}

export interface LeagueItem {
  links: LeagueItemLink[];
  sort?: string;
}

export interface LeagueItemLink {
  isExternal: boolean;
  shortText: string;
  rel: Equipo[];
  text: string;
  isPremium: boolean;
  href: string;
  lang: Lang;
  attributes?: PurpleAttributes;
  logoUrl?: string;
}

export interface PurpleAttributes {
  teamAbbrev: string;
  teamId: number;
}

export interface Personalized {
  user: boolean;
  news: boolean;
}

export interface PrefetchedContent {
  "feature-gating": FeatureGating;
}

export interface FeatureGating {
  lastPublishedDate: string;
  references: PathParams;
  lastModifiedDate: string;
  sectionRoot: string;
  fullUrl: string;
  publishedKey: string;
  section: string;
  type: string;
  rootUrl: string;
  site: TwitterAppNameGoogleplay;
  customProperties: CustomProperties;
  premium: boolean;
  collections: PathParams;
  name: string;
  location: string;
  id: number;
  dateformat: string;
  createDate: string;
}

export interface CustomProperties {
  PubKey: string;
  Description: string;
  dataSourceIdentifier: string;
  JSON: string;
}

export interface ContentStandings {
  uid: string;
  groupId: number;
  name: string;
  groups: StandingsGroup[];
  abbreviation: string;
}

export interface StandingsGroup {
  uid: string;
  groupId: number;
  name: string;
  groups?: StandingsGroup[];
  abbreviation: string;
  standings?: GroupStandings;
}

export interface GroupStandings {
  entries: Entry[];
  displayName: string;
  name: string;
  id: string;
}

export interface Entry {
  stats: Stat[];
  team: Team;
}

export interface Stat {
  shortDisplayName: Abbreviation;
  displayValue: string;
  displayName: DisplayName;
  name: StatName;
  description: Description;
  type: Sort;
  abbreviation: Abbreviation;
  value: number | string;
  display?: Display;
}

export enum DisplayName {
  Conf = "CONF",
  Div = "DIV",
  Home = "Home",
  Losses = "Losses",
  PointDifferential = "Point Differential",
  PointsAgainst = "Points Against",
  PointsFor = "Points For",
  Road = "Road",
  Streak = "Streak",
  Ties = "Ties",
  WINS = "Wins",
  WinPercentage = "Win Percentage",
}

export enum StatName {
  Differential = "differential",
  Home = "Home",
  Losses = "losses",
  PointsAgainst = "pointsAgainst",
  PointsFor = "pointsFor",
  Road = "Road",
  Streak = "streak",
  Ties = "ties",
  VsConf = "vs. Conf.",
  VsDiv = "vs. Div.",
  WINS = "wins",
  WinPercent = "winPercent",
}

export interface Team {
  shortDisplayName: string;
  uid: string;
  seed: string;
  displayName: string;
  name: string;
  link: string;
  location: string;
  id: string;
  abbreviation: string;
  isActive: boolean;
  logos: Logo[];
  clincher?: string;
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
}

export interface StandingsMeta {
  imageWidth: number;
  image: string;
  twitter_card: Card;
  og_site_name: string;
  twitter_app_id_iphone: string;
  description: string;
  og_type: string;
  twitter_app_name_googleplay: TwitterAppNameGoogleplay;
  label: string;
  canonical: string;
  type: AuthorsEnum;
  title: string;
  imageHeight: number;
  fb_app_id: FbAppID;
  twitter_site: TwitterSite;
  root: LeagueElement;
  twitter_app_id_googleplay: string;
  twitter_app_name_iphone: TwitterAppNameGoogleplay;
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
  links: NavigationLink[];
  attributes: NavigationAttributes;
  id: number;
  text: string;
  title: string;
  $ref: string;
  items: NavigationItem[];
}

export interface NavigationAttributes {
  sport_id: string;
  root: LeagueElement;
  league: boolean;
}

export interface NavigationItem {
  links: NavigationLink[];
  id: number;
  title: string;
  $ref: string;
  text?: string;
  items?: ItemItem[];
  images?: ImageElement[];
}

export interface ImageElement {
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
  rel?: Equipo[];
  lang?: Lang;
  logoUrl?: string;
}

export interface FluffyAttributes {
  mobile?: string;
  teamAbbrev?: string;
  teamId?: number;
}

export interface NavigationLink {
  isExternal: boolean;
  shortText: string;
  rel: LeagueElement[];
  attributes?: TentacledAttributes;
  text: string;
  href: string;
  isPremium: boolean;
}

export interface TentacledAttributes {
  breakpoints?: string;
  route?: string;
  "match-url"?: string;
  sportAbbrev?: LeagueElement;
  icon?: string;
  mobile?: string;
  placeholder?: string;
}
