import { Base as FranchisesReferenceList } from "../../types/reference-list/base";
import fetchData from "../fetchData";

export async function getFranchisesReferenceList() {
  return fetchData<FranchisesReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/franchises?limit=50"
  );
}
