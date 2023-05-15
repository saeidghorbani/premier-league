import http from "./httpService";

/*******************  get fixtures **************/
export async function getFixtures() {
  const { data } = await http.get(
    `https://v3.football.api-sports.io/fixtures`,
    {
      params: {
        league: 39,
        season: 2022,
        from: "2022-08-13",
        to: "2023-05-22",
      },
    }
  );

  const fixtures = data.response;
  return fixtures;
}
