import { Leaders } from "../../types";
import fetchData from "../fetchData";

export async function getLeaders() {
  const baseUrl = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/leaders?limit=100`;
  return fetchData<Leaders>(baseUrl);
}
