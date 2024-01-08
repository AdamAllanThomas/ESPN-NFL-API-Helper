import { ReferenceList as VenuesReferenceList } from "../../types";
import fetchData from "../fetchData";

export async function getVenuesReferenceList() {
  return fetchData<VenuesReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/venues?limit=700"
  );
}
