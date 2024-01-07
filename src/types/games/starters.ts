export interface Starters {
  $ref: string;
  entries: Entry[];
  competition: Competition;
  team: Competition;
}

export interface Competition {
  $ref: string;
}

export interface Entry {
  playerId: number;
  period: number;
  active: boolean;
  starter: boolean;
  forPlayerId: number;
  jersey: string;
  valid: boolean;
  athlete: Competition;
  position: Competition;
  statistics?: Competition;
  didNotPlay: boolean;
  displayName: string;
}
