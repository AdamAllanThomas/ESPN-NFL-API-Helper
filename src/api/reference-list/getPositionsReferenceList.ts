import { ReferenceList as PositionsReferenceList } from "../../types";
import fetchData from "../fetchData";

export async function getPositionsReferenceList() {
  return fetchData<PositionsReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/positions?limit=75"
  );
}
