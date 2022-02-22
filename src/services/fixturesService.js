import http from "./httpService";

/*******************  get fixtures **************/
export async function getFixtures() {
	const { data } = await http.get(
		`https://v3.football.api-sports.io/fixtures`,
		{
			params: {
				league: 39,
				season: 2021,
				from: "2021-08-13",
				to: "2022-05-22",
			},
		},
	);

	const fixtures = data.response;
	return fixtures;
}
