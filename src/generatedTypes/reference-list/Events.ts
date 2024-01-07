export interface Events {
    leagues: League[];
    events:  any[];
}

export interface League {
    id:                  string;
    uid:                 string;
    name:                string;
    abbreviation:        string;
    slug:                string;
    season:              Season;
    logos:               Logo[];
    calendarType:        string;
    calendarIsWhitelist: boolean;
    calendarStartDate:   string;
    calendarEndDate:     string;
    calendar:            Calendar[];
}

export interface Calendar {
    label:     string;
    value:     string;
    startDate: string;
    endDate:   string;
    entries:   Entry[];
}

export interface Entry {
    label:          string;
    alternateLabel: string;
    detail:         string;
    value:          string;
    startDate:      string;
    endDate:        string;
}

export interface Logo {
    href:        string;
    width:       number;
    height:      number;
    alt:         string;
    rel:         string[];
    lastUpdated: string;
}

export interface Season {
    year:        number;
    startDate:   string;
    endDate:     string;
    displayName: string;
    type:        Type;
}

export interface Type {
    id:           string;
    type:         number;
    name:         string;
    abbreviation: string;
}
