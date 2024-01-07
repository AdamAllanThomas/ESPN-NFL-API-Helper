import { Base as SeasonsReferenceList } from "../../types/reference-list/base";
import fetchData from "../fetchData";

export async function getSeasonsReferenceList() {
  return fetchData<SeasonsReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons?limit=100"
  );
}
