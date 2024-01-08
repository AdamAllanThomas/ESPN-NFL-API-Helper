import { ReferenceList as TeamReferenceList } from "../../types";
import fetchData from "../fetchData";

export async function getTeamReferenceList() {
  const baseUrl = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32`;
  return fetchData<TeamReferenceList>(baseUrl);
}
