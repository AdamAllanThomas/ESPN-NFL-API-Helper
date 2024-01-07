import { TeamId } from "../api-enums";

export interface EventLog {
  $ref: string;
  teams: Teams;
  events: Events;
}

export interface Events {
  count: number;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  items: Item[];
}

export interface Item {
  event: Team;
  competition: Team;
  statistics?: Team;
  teamId: string;
  played: boolean;
}

export interface Team {
  $ref: string;
}

export type Teams = {
  [key in TeamId]: TeamDetails;
};

export interface TeamDetails {
  team: Team;
  id: TeamId;
}
