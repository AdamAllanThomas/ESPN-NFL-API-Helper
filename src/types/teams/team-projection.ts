export interface TeamProjection {
  $ref: string;
  team: Team;
  chanceToWinThisWeek: number;
  chanceToWinDivision: number;
  projectedWins: number;
  projectedLosses: number;
}

export interface Team {
  $ref: string;
}
