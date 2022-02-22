import http from "./httpService";

export async function getTeams() {
	const { data } = await http.get(
		`https://v3.football.api-sports.io/standings`,
		{
			params: {
				league: 39,
				season: 2021,
			},
		},
	);

	const teams = data.response[0].league.standings[0];
	return teams;
}
