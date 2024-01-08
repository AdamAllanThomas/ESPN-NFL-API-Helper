import fetchData from "../fetchData";

export async function getScoreboardCDN() {
  console.log("getScoreboardCDN");
  return fetchData("https://cdn.espn.com/core/nfl/scoreboard?xhr=1&limit=50");
}
