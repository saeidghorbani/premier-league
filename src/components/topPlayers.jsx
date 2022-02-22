import React, { Component } from "react";
import { getTopAssists, getTopScores } from "../services/topPlayersService";
import Table from "./common/table";
import "../css/topPlayers.css";
import { digitsEnToFa } from "@persian-tools/persian-tools";

class TopScores extends Component {
	state = {
		topScores: [],
		topAssists: [],
	};

	async componentDidMount() {
		let topScores = await getTopScores();
		topScores = this.addRank(topScores);
		this.setState({ topScores });

		let topAssists = await getTopAssists();
		topAssists = this.addRank(topAssists);
		this.setState({ topAssists });
	}

	// add an unique number to each player object (need of table)
	addRank = (arr) => {
		arr.map((item, index) => (item["rank"] = index + 1));
		return arr;
	};

	topScoresColumns = [
		{ path: "rank", lable: "" },
		{
			key: "xyz2",
			content: (p) => (
				<div className="d-flex flex-row">
					<div>
						<img className="player-image" src={p.player.photo} />
					</div>
					<div>
						<span className="pe-2">{p.player.name}</span>
						<div>
							<img
								className="topscores-team-logo mx-1"
								src={p.statistics[0].team.logo}
								alt=""
							/>
							<span className="top-team-name">{p.statistics[0].team.name}</span>
						</div>
					</div>
				</div>
			),
			lable: "",
		},
		{
			key: "xyz1",
			content: (p) => (
				<div className="align-middle">
					{digitsEnToFa(p.statistics[0].goals.total)}
				</div>
			),
			lable: "",
		},
	];

	topAssistsColumns = [
		{ path: "rank", lable: "" },
		{
			key: "hij1",
			content: (p) => (
				<div className="d-flex flex-row">
					<div>
						<img className="player-image" src={p.player.photo} />
					</div>
					<div>
						<span className="pe-2">{p.player.name}</span>
						<div>
							<img
								className="topscores-team-logo mx-1"
								src={p.statistics[0].team.logo}
								alt=""
							/>
							<span className="top-team-name">{p.statistics[0].team.name}</span>
						</div>
					</div>
				</div>
			),
			lable: "",
		},
		{
			key: "hij2",
			content: (p) => (
				<div className="align-middle">
					{digitsEnToFa(p.statistics[0].goals.assists)}
				</div>
			),
			lable: "",
		},
	];

	render() {
		const { topScores, topAssists } = this.state;

		return (
			<div dir="rtl" className="row">
				<div className="col-12 col-md-6 table-responsive-sm">
					<div className="global-card px-3 py-3">
						<Table
							caption={"گل"}
							columns={this.topScoresColumns}
							data={topScores}
						/>
					</div>
				</div>
				<div className="col-12 col-md-6 table-responsive-sm mt-5 mt-md-0">
					<div className="global-card px-3 py-3">
						<Table
							caption={"پاس گل"}
							columns={this.topAssistsColumns}
							data={topAssists}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TopScores;
