import { News } from "../../types";
import fetchData from "../fetchData";

export async function getNews(limit = 50) {
  return fetchData<News>(
    `https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=${limit}`
  );
}
