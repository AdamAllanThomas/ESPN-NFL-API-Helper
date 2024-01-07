import { Base as VenuesReferenceList } from "../../types/reference-list/base";
import fetchData from "../fetchData";

export async function getVenuesReferenceList() {
  return fetchData<VenuesReferenceList>(
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/venues?limit=700"
  );
}
