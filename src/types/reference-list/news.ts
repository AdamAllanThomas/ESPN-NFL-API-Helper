export interface News {
  header: string;
  link: Link;
  articles: Article[];
}

export interface Article {
  images: Image[];
  dataSourceIdentifier: string;
  description: string;
  published: Date;
  type: ArticleType;
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
  leagueId?: number;
  league?: League;
  uid?: string;
  createDate?: Date;
  teamId?: number;
  team?: Team;
  athleteId?: number;
  athlete?: Athlete;
  guid?: string;
  topicId?: number;
  fantasyPlayerId?: number;
}

export interface Athlete {
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
  athletes: Mobile;
}

export interface Mobile {
  href?: string;
}

export interface League {
  id: number;
  description: Description;
  links: LeagueLinks;
}

export enum Description {
  Betting = "Betting",
  CollegeFootball = "College Football",
  Fantasy = "Fantasy",
  FantasyNFL = "Fantasy NFL",
  Mlb = "MLB",
  NFLDraft = "NFL Draft",
  Nfl = "NFL",
}

export interface LeagueLinks {
  api: FluffyAPI;
  web: FluffyAPI;
  mobile: FluffyAPI;
}

export interface FluffyAPI {
  leagues: Mobile;
}

export interface Team {
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
  teams: Mobile;
}

export enum CategoryType {
  Athlete = "athlete",
  FantasyPlayer = "fantasyPlayer",
  GUID = "guid",
  League = "league",
  Team = "team",
  Topic = "topic",
}

export interface Image {
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
  ratio?: Ratio;
}

export enum Ratio {
  The16X9 = "16x9",
  The1X1 = "1x1",
  The5X2 = "5x2",
}

export enum ImageType {
  Header = "header",
  Media = "Media",
  Stitcher = "stitcher",
}

export interface ArticleLinks {
  api?: StickyAPI;
  web: Mobile;
  mobile?: Mobile;
}

export interface StickyAPI {
  news: Mobile;
  self: Mobile;
}

export enum ArticleType {
  Eticket = "Eticket",
  HeadlineNews = "HeadlineNews",
  Media = "Media",
  Preview = "Preview",
  Recap = "Recap",
  Story = "Story",
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
