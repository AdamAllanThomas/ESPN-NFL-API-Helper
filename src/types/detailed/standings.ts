export interface Standings {
  analytics: Analytics;
  ads: StandingsAds;
  DTCpackages: DTCpackages;
  meta: StandingsMeta;
  nowFeedSupported: boolean;
  type: string;
  sport: string[];
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
  sections: string;
  authors: string;
  path: string;
  title: string;
  zone: string;
  loadPubJS: boolean;
  loadVidJS: boolean;
}

export interface Metrics {
  nav_method: string;
  page_url: string;
  premium: boolean;
  content_type: string;
  page_infrastructure: string;
  page_type: string;
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

export interface AnalyticsOmniture {
  espn3ContentType: string;
  league: string;
  countryRegion: string;
  navMethod: string;
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
  contentType: string;
  sport: string;
  account: string;
  siteType: string;
  prop58: string;
}

export interface Content {
  title: string;
  description: string;
  sport: string;
  league: string;
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
  league: string;
  canonical: string;
  clinchers: Clinchers;
}

export interface Category {
  key: string;
  defaultAbbreviation: string;
  colgroup: number;
  sortable: boolean;
  sortDirection?: string;
  mutable: boolean;
  abbreviation: string;
  description: string;
  sorted?: string;
  display?: string;
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
  view: string;
  group: string;
  sort: string;
  dir: string;
  season: number;
  seasontype: string;
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
  seasonName: string;
  seasonType: string;
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

export interface SeasonTypesByYear {
  id: string;
  name: string;
  abbreviation: string;
}

export interface Params {
  sportRoot: string;
  xhr: string;
  pathParams: PathParams;
  root: string;
  lang: string;
  type: string;
  uri: string;
  req: Req;
}

export interface Req {
  entitlements: Entitlements;
  template: string;
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
  language: string;
  domain: string;
  site: string;
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
  dictionarySection: string;
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
  outputType: string;
  disableAdRequestOnBackgroundedVideo?: boolean;
  featurePhone: AdsFeaturePhone;
  parnterAd?: boolean;
  network?: number;
}

export interface AdsFeaturePhone {
  outputType: string;
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
  name: string;
  deepLinkUrl: string;
  deepLinkUrlScheme: string;
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
  long: string;
  medium: string;
  short: string;
  timeFormat: string;
  firstDayOfWeek: string;
  timeZone: string;
  timeZoneBucket: string;
  defaultFormat: string;
  timeZoneString: string;
  displayTimeZone?: boolean;
  "ddd, M/D"?: string;
  age: Age;
}

export interface Age {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
}

export interface DisneyID {
  css: string;
  langPref: string;
  editionSource: string;
  clientId: string;
  loginMethod?: string;
  stuff?: string;
}

export interface EditionAlert {
  enabled: boolean;
  text: string;
}

export interface ConfigEditionSettings {
  key: string;
  site: string;
  language: string;
  country: string;
  domain: string;
  editionSiteId: string;
  https: boolean;
  supportsOneSite: boolean;
  showPremVideoAds?: boolean;
  name?: string;
  localePrependedPath?: boolean;
  countryName?: string;
  section?: string;
  isStarPartner?: boolean;
  isSonyPartner?: boolean;
}

export interface ConfigFeeds {
  googlenews: PurpleGooglenews;
}

export interface PurpleGooglenews {
  allowedContentTypes: string[];
  excludedStoryTypes: string[];
}

export interface ConfigGameSettings {
  topEventsId: number;
  topSoccerId: number;
  promotedSoccerLeaguesCeId: number;
  showBroadcast: boolean;
}

export interface JavaLocale {
  language: string;
  region: string;
}

export interface ConfigMeta {
  titleBranding: string;
  titleBrandingWithDomain?: string;
  schema: Schema;
  defaultMetaImage?: string;
  social: PurpleSocial;
  description?: string;
}

export interface Schema {
  name: string;
}

export interface PurpleSocial {
  twitter: PurpleTwitter;
  facebook: Facebook;
}

export interface Facebook {
  id: string;
  qa_id: string;
  og_site_name: string;
  locale: string;
}

export interface PurpleTwitter {
  twitterId: string;
  card: string;
  site: string;
  language: string;
}

export interface NumberFormat {
  long: string;
  short: string;
  currency: string;
  percent: string;
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
  class: string;
  featurePhone: PurpleFeaturePhone;
}

export interface PurpleFeaturePhone {
  name: string;
  width: number;
  height: number;
  class?: string;
}

export interface ConfigSportBranding {
  sport: string;
  image: string;
  url?: string;
}

export interface ConfigSportReplacements {
  f1: string;
}

export interface Taboola {
  enabled: boolean;
  publisher: string;
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
  type: string;
  mode: string;
  placement: string;
  target_type?: string;
  mode_webview?: string;
  targetType?: string;
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
  scale: string;
  symbol: string;
}

export interface Tickets {
  enabled: boolean;
  provider: string;
  baseUrl: string;
  callToAction: string;
  trackSection: string;
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
  scoreboard?: Scoreboard;
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

export interface Scoreboard {
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
  dictionarySection: string;
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
  "h:mm a z": string;
  "M/d": string;
  "ddd, M/D": string;
  "M/D": string;
  "M/D, LT"?: string;
  "h:mm a": string;
  "MMMM d, yyyy": string;
  "MMM d, yyyy": string;
  "MMM D, YYYY": string;
  "MMM D": string;
  "MMMM D": string;
  "M/d/yyyy": string;
  "M/D/YYYY": string;
  "M/d/yy": string;
  "MM/DD/YYYY": string;
  "MMMM D, YYYY": string;
  "MMM DD YYYY": string;
  "MMMM DO YYYY": string;
  "MMM DD": string;
  "MMMM d": string;
  "dddd, MMMM Do": string;
  "DDDD, M/D": string;
  "dddd, M/D": string;
  E: string;
  "EEE, d MMM yyyy HH:mm:ss"?: string;
  "EEEE, MMMM d": string;
  "EEEE, MMMM d, yyyy": string;
  "EEEE, MMM d": string;
  "MMM d, yyyy, hh:mm a": string;
  "M-d-yyyy h:mm:ss": string;
  firstDayOfWeek: string;
  timeZone: string;
  timeZoneBucket: string;
  displayTimeZone: boolean;
  defaultFormat: string;
  timeZoneString: string;
  age: Age;
  "h:mm A"?: string;
}

export interface EspnEsArFeeds {
  googlenews: FluffyGooglenews;
}

export interface FluffyGooglenews {
  allowedContentTypes: string[];
}

export interface EspnEsArOmniture {
  enabled: boolean;
  site: string;
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
  juegoId: string;
  fecha: string;
  nombre: string;
  partido: string;
  liga: string;
  tipodetemporada: string;
  ano: string;
  semana: string;
  deportes: string;
  evento: string;
  torneo: string;
  deportista: string;
  vista: string;
  pais: string;
  paisId: string;
  pagina: string;
  continuo: string;
  ronda?: string;
  posicion?: string;
}

export interface PurpleParamValues {
  liga: string;
  todo: string;
  deportistas: string;
  paises: string;
}

export interface PurplePathSegments {
  reporte: string;
  juego: string;
  equipo: string;
  plantel: string;
  estadisticas: string;
  calendario: string;
  estadio: string;
  profundidad: string;
  conversacion: string;
  ficha: string;
  previa: string;
  partido: string;
  jugadas: string;
  cronica: string;
  fotos: string;
  duelo: string;
  jugador: string;
  posiciones: string;
  lesiones: string;
  bateo: string;
  grilla: string;
  piloto: string;
  resultados: string;
  liga: string;
  ligas: string;
  nota: string;
  comentario: string;
  alineacion: string;
  numeritos: string;
  medallas: string;
  deportes: string;
  deportistas: string;
  lideres: string;
  envivo: string;
  ronda: string;
  equipos: string;
  posicion: string;
  mejordisponible: string;
  proyeccion: string;
  noticias: string;
  noticiasdelequipo: string;
  busqueda: string;
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
  "/futbol-americano/nfl/": string;
  "/beisbol/mlb/": string;
  "/basquetbol/nba/": string;
  "/basquetbol/fiba/": string;
  "/football/club"?: string;
  "/basquetbol/wnba/"?: string;
  "/beisbol/serie-del-caribe/": string;
  "/beisbol/clasico-mundial-beisbol/": string;
}

export interface EspnEsCl {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  dictionarySection: string;
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
  provider: string;
}

export interface EspnEsCRClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  outputType: string;
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
  name: string;
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
  dictionarySection: string;
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
  dictionarySection: string;
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
  dictionarySection: string;
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
  dictionarySection: string;
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
  dictionarySection: string;
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
  dictionarySection: string;
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
  site: string;
  language: string;
  country: string;
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
  wedstrijdId: string;
  competitie: string;
  datum: string;
  naam: string;
  toernooiId: string;
  atleet: string;
  ronde: string;
  positie: string;
}

export interface FluffyParamValues {
  competitie: string;
  atleten: string;
}

export interface FluffyPathSegments {
  stand: string;
  verslag: string;
  selectie: string;
  statistieken: string;
  speelkalender: string;
  voorbeschouwing: string;
  wedstrijd: string;
  speler: string;
  blessures: string;
  scorebord: string;
  competitie: string;
  competities: string;
  artikel: string;
  minuutperminuut: string;
  wedstrijdstatistieken: string;
  atleten: string;
  medailles: string;
  sporten: string;
  nieuws: string;
  rondes: string;
  posities: string;
  draftcast: string;
  bestbeschikbaar: string;
  projecties: string;
  zoeken: string;
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
  dictionarySection: string;
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
  titleBranding: string;
  defaultMetaImage: string;
  social: FluffySocial;
  titleBrandingWithDomain?: string;
}

export interface FluffySocial {
  twitter: FluffyTwitter;
  facebook: Facebook;
}

export interface FluffyTwitter {
  twitterId: string;
  card: string;
  app_id_iphone: string;
  site: string;
  app_name_googleplay: string;
  app_id_googleplay: string;
  app_name_iphone: string;
  language: string;
}

export interface EspnPtBrSportReplacements {
  athletics: string;
  f1: string;
  cycling: string;
  "bola-de-prata": string;
  "data-espn": string;
  "ranking-dos-treinadores": string;
  motogp: string;
  "selecao-brasileira": string;
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
  jogoId: string;
  data: string;
  nome: string;
  partida: string;
  tipodetemporada: string;
  ano: string;
  semana: string;
  modalidade: string;
  evento: string;
  tournamentId: string;
  atleta: string;
  "vs-division": string;
  pais: string;
  paisId: string;
  pagina: string;
  continuo: string;
  rodada: string;
  posicao: string;
  time: string;
  ligas: string;
  liga: string;
}

export interface TentacledParamValues {
  liga: string;
  ligas: string;
  todos: string;
  atletas: string;
  paises: string;
}

export interface TentacledPathSegments {
  artigo: string;
  atletas: string;
  "bate-papo": string;
  calendario: string;
  classificacao: string;
  clipe: string;
  comentario: string;
  confronto: string;
  cronica: string;
  deportes: string;
  fotos: string;
  elenco: string;
  escalacao: string;
  escalacoes: string;
  estadio: string;
  estatisticas: string;
  jogador: string;
  jogo: string;
  lesoes: string;
  liga: string;
  ligas: string;
  medalhas: string;
  melhordisponivel: string;
  projecao: string;
  "minuto-a-minuto": string;
  olimpiada: string;
  partida: string;
  "partida-estatisticas": string;
  piloto: string;
  placar: string;
  posicao: string;
  previa: string;
  profundidad: string;
  noticias: string;
  ranking: string;
  rebatendo: string;
  reporte: string;
  resultados: string;
  rodada: string;
  temporeal: string;
  time: string;
  times: string;
  verao: string;
  busqueda: string;
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
  dictionarySection: string;
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
  provider: string;
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
  long: string;
  medium: string;
  short: string;
  timeFormat: string;
  firstDayOfWeek: string;
  timeZone: string;
  defaultFormat: string;
  displayTimeZone?: boolean;
  timeZoneString: string;
  timeZoneBucket: string;
  "MMM D, YYYY": string;
  "M/D/YYYY": string;
  "MM/DD/YYYY": string;
  MMDDYYYY: string;
  "MMMM Do YYYY": string;
  "dddd, MMMM Do YYYY": string;
  "EEEE, MMMM d"?: string;
  "dddd, MMMM Do"?: string;
  "ddd, MMM D YYYY": string;
  "ddd, M/D"?: string;
  "M/D": string;
  "M/D, LT"?: string;
  "MMMM D, YYYY": string;
  "dddd, M/D": string;
  "MMM D"?: string;
  "MMMM D"?: string;
  age: Age;
  timeZoneDstOffset?: number;
  timeZoneDstString?: string;
  "M/D LT"?: string;
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
  toEnglish: TentacledRoots;
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

export interface TentacledRoots {
  "/olympics/summer/football"?: string;
  "/college-football/": string;
  "/football/": string;
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
  "/oly/summer/gymnastics/"?: string;
  "/oly/summer/cycling/"?: string;
  "/football/club"?: string;
}

export interface EspncricinfoEnAuClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  sport: string;
}

export interface EspncricinfoEnAuFallback {
  "cricket-world-cup-timeline": string;
  "cricket-world-cup-timeline-1975": string;
  "fantasy-pick": string;
  "cricket-world-cup-timeline-1987": string;
  "cricket-world-cup-timeline-1999": string;
  "cricket-world-cup-timeline-2015": string;
  "cricket-world-cup-timeline-1983": string;
  "cricket-world-cup-timeline-1996": string;
  "cricket-world-cup-timeline-2007": string;
  "cricket-world-cup-timeline-2011": string;
  "cricket-world-cup-timeline-1992": string;
  "cricket-world-cup-timeline-2003": string;
  "cricket-world-cup-timeline-1979": string;
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
  roots: StickyRoots;
  pathSegments: StickyPathSegments;
  paramKeys: StickyParamKeys;
  paramValues: PathParams;
}

export interface StickyParamKeys {
  series: string;
}

export interface StickyPathSegments {
  table: string;
  series: string;
  scores: string;
}

export interface StickyRoots {
  toEdition: IndecentToEdition;
  toEnglish: FluffyToEnglish;
}

export interface IndecentToEdition {
  "/cricket/leagues/index": string;
  "/cricket/league": string;
  "/cricket/team": string;
  "/cricket/story": string;
  "/cricket/series": string;
  "/cricket/table": string;
  "/cricket/scoreboard": string;
  "/cricket/standings": string;
  "/cricket/cricketpicks": string;
  "/scoreboard": string;
}

export interface FluffyToEnglish {
  "/series/index": string;
  "/series": string;
  "/team": string;
  "/story": string;
  "/table": string;
  "/scores": string;
  "/scoreboard": string;
  "/standings": string;
  "/cricketpicks": string;
}

export interface TentacledUrls {
  toEdition: HilariousToEdition;
  toEnglish: UrlsToEnglish;
}

export interface HilariousToEdition {
  "/cricket/": string;
}

export interface UrlsToEnglish {
  "/index": string;
}

export interface EspncricinfoEnNzClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  provider: string;
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
  dictionarySection: string;
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
  dictionarySection: string;
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
  class: string;
}

export interface EspnfcEnTier2NavIDS {
  league: ClubhouseClass;
}

export interface EspnfcEnTier3NavIDS {
  clubhouse: ClubhouseClass;
}

export interface EspnfcEnURIRewrites {
  urls: ParamKeys;
  roots: IndigoRoots;
  pathSegments: PathParams;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndigoRoots {
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
  "/american-fb/"?: string;
  "/football/club"?: string;
  "/football/"?: string;
  "/fixtures/"?: string;
  "/olympics/summer/football"?: string;
  "/nba-summer-league/"?: string;
  "/espn/rss/football/"?: string;
  "/nba-development/"?: string;
  "/football/team"?: string;
}

export interface EspnfcEnAuClass {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  roots: TentacledRoots;
  pathSegments: PathParams;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface EspnfcEnNg {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  dictionarySection: string;
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
  roots: IndigoRoots;
  pathSegments: IndigoPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndigoPathSegments {
  table: string;
}

export interface EspnidEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  roots: FluffyRoots;
  pathSegments: IndecentPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndecentPathSegments {
  "soccer/table": string;
}

export interface StickyUrls {
  toEdition: ToE;
  toEnglish: ToE;
}

export interface ToE {
  "/series": string;
}

export interface EspninEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  sport: string;
  image: string;
}

export interface EspninEnURIRewrites {
  urls: StickyUrls;
  roots: IndecentRoots;
  pathSegments: IndecentPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface IndecentRoots {
  toEdition: IndigoToEdition;
  toEnglish: IndigoRoots;
}

export interface EspnphEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  roots: FluffyRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface HilariousPathSegments {
  "soccer/table": string;
  fixtures: string;
}

export interface IndigoUrls {
  toEdition: ToE;
  toEnglish: PathParams;
}

export interface EspnsgEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  provider: string;
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
  roots: IndecentRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface EspnukEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  excludedStoryTypes: string[];
}

export interface APIParamOverrides {
  region: string;
}

export interface EspnukEnURIRewrites {
  urls: IndecentUrls;
  roots: FluffyRoots;
  pathSegments: AmbitiousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface AmbitiousPathSegments {
  "soccer/table": string;
  "football/table": string;
  fixtures: string;
}

export interface IndecentUrls {
  toEdition: AmbitiousToEdition;
  toEnglish: ToE;
}

export interface AmbitiousToEdition {
  "/series": string;
  "/xfl/fixtures": string;
}

export interface EspnwwEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  roots: IndecentRoots;
  pathSegments: HilariousPathSegments;
  paramKeys: PathParams;
  paramValues: PathParams;
}

export interface EspnzaEn {
  editionSettings: ConfigEditionSettings;
  navId: string;
  dictionarySection: string;
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
  roots: FluffyRoots;
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
  sportRoot: string;
  xhr: string;
  type: string;
  uri: string;
  root: string;
}

export interface LeagueItem {
  links: LeagueItemLink[];
  sort?: string;
}

export interface LeagueItemLink {
  isExternal: boolean;
  shortText: string;
  rel: string[];
  text: string;
  isPremium: boolean;
  href: string;
  lang: string;
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
  site: string;
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
  shortDisplayName: string;
  displayValue: string;
  displayName: string;
  name: string;
  description: string;
  type: string;
  abbreviation: string;
  value: number | string;
  display?: string;
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
  root: string;
  league: boolean;
}

export interface NavigationItem {
  links: NavigationLink[];
  id: number;
  title: string;
  $ref: string;
  text?: string;
  items?: ItemItem[];
  images?: Image[];
}

export interface Image {
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

export interface NavigationLink {
  isExternal: boolean;
  shortText: string;
  rel: string[];
  attributes?: TentacledAttributes;
  text: string;
  href: string;
  isPremium: boolean;
}

export interface TentacledAttributes {
  breakpoints?: string;
  route?: string;
  "match-url"?: string;
  sportAbbrev?: string;
  icon?: string;
  mobile?: string;
  placeholder?: string;
}
