import { Events } from "../../types";
import { SeasonType } from "../../types/api-enums";
import fetchData from "../fetchData";

export async function getEvents(
  year: number,
  seasonType?: SeasonType,
  week?: number
) {
  const baseUrl = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=${year}`;
  const fullUrl =
    week && seasonType
      ? `${baseUrl}&seasontype=${seasonType}&week=${week}`
      : seasonType
      ? `${baseUrl}&seasontype=${seasonType}`
      : week
      ? `${baseUrl}&seasontype=${SeasonType.Regular}&week=${week}`
      : baseUrl;
  return fetchData<Events>(fullUrl);
}
