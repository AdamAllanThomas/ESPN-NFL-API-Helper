import { ReferenceList as SeasonsReferenceList } from "../../types";
import fetchData from "../fetchData";

export async function getSeasonsReferenceList() {
  return fetchData<SeasonsReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons?limit=100"
  );
}
