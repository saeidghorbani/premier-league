import http from "./httpService";

////// topScores
export async function getTopScores() {
	const { data } = await http.get(
		"https://v3.football.api-sports.io/players/topscorers",
		{
			params: {
				season: 2018,
				league: 61,
			},
		},
	);

	const topScorers = data.response;
	return topScorers;
}

// topAssists
export async function getTopAssists() {
	const { data } = await http.get(
		`https://v3.football.api-sports.io/players/topassists`,
		{
			params: {
				season: 2021,
				league: 39,
			},
		},
	);

	const topAssists = data.response;
	return topAssists;
}
