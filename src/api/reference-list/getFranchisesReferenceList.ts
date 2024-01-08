import { ReferenceList as FranchisesReferenceList } from "../../types";
import fetchData from "../fetchData";

export async function getFranchisesReferenceList() {
  return fetchData<FranchisesReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/franchises?limit=50"
  );
}
