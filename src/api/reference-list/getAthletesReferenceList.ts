import { AthletesReferenceList } from "../../generatedTypes/reference-list/AthletesReferenceList";
import fetchData from "../fetchData";

export async function getAthletesReferenceList(limit = 1000, active = true) {
  const baseUrl = `https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit${limit}=&active=${active}`;
  return fetchData<AthletesReferenceList>(baseUrl);
}
