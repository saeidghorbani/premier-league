import React, { Component } from "react";
import { getTeams } from "../services/standingsService";
import Table from "./common/table";
import "../css/standings.css";

class Standings extends Component {
	state = {
		teams: [],
	};

	// columns of standings table
	columns = [
		{ path: "rank", lable: "#" },

		{
			key: "standingsTeam",
			content: (team) => (
				<React.Fragment>
					<img
						src={team.team.logo}
						className="standings-team-logo mx-2"
						alt="logo"
					/>
					{team.team.name}
				</React.Fragment>
			),
			lable: "تیم",
		},
		{ path: "all.played", lable: "بازی" },
		{ path: "all.win", lable: "برد" },
		{ path: "all.draw", lable: "مساوی" },
		{ path: "all.lose", lable: "باخت" },
		{ path: "all.goals.for", lable: "گل زده" },
		{ path: "all.goals.against", lable: "گل خورده" },
		{ path: "goalsDiff", lable: "تفاضل" },
		{ path: "points", lable: "امتیاز" },
	];

	async componentDidMount() {
		const teams = await getTeams();
		this.setState({ teams });
	}

	render() {
		return (
			<div dir="rtl" className="row  global-card m-0 px-3 py-3">
				<div className="col-12 table-responsive">
					<Table columns={this.columns} data={this.state.teams} />
				</div>
			</div>
		);
	}
}

export default Standings;
