export interface News {
    header:   string;
    link:     Link;
    articles: Article[];
}

export interface Article {
    images:               Image[];
    dataSourceIdentifier: string;
    description:          string;
    published:            string;
    type:                 string;
    premium:              boolean;
    links:                ArticleLinks;
    lastModified:         string;
    categories:           Category[];
    headline:             string;
    byline?:              string;
}

export interface Category {
    id?:              number;
    description?:     string;
    type:             string;
    sportId?:         number;
    topicId?:         number;
    createDate?:      string;
    leagueId?:        number;
    league?:          League;
    uid?:             string;
    teamId?:          number;
    team?:            Team;
    guid?:            string;
    athleteId?:       number;
    athlete?:         Athlete;
    fantasyPlayerId?: number;
}

export interface Athlete {
    id:          number;
    description: string;
    links:       AthleteLinks;
}

export interface AthleteLinks {
    api:    PurpleAPI;
    web:    PurpleAPI;
    mobile: PurpleAPI;
}

export interface PurpleAPI {
    athletes: Mobile;
}

export interface Mobile {
    href?: string;
}

export interface League {
    id:          number;
    description: string;
    links:       LeagueLinks;
}

export interface LeagueLinks {
    api:    FluffyAPI;
    web:    FluffyAPI;
    mobile: FluffyAPI;
}

export interface FluffyAPI {
    leagues: Mobile;
}

export interface Team {
    id:          number;
    description: string;
    links:       TeamLinks;
}

export interface TeamLinks {
    api:    TentacledAPI;
    web:    TentacledAPI;
    mobile: TentacledAPI;
}

export interface TentacledAPI {
    teams: Mobile;
}

export interface Image {
    name:                  string;
    width?:                number;
    alt?:                  string;
    caption?:              string;
    url:                   string;
    height?:               number;
    type?:                 string;
    ratio?:                string;
    dataSourceIdentifier?: string;
    _id?:                  number;
    id?:                   number;
    credit?:               string;
}

export interface ArticleLinks {
    api:     StickyAPI;
    web:     Mobile;
    mobile?: Mobile;
}

export interface StickyAPI {
    news: Mobile;
    self: Mobile;
}

export interface Link {
    language:   string;
    rel:        string[];
    href:       string;
    text:       string;
    shortText:  string;
    isExternal: boolean;
    isPremium:  boolean;
}
