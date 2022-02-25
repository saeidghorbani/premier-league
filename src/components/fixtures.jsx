import React, { Component } from "react";
import { getFixtures } from "../services/fixturesService";
import Select from "./select";
import Round from "./round";
import moment from "jalali-moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";

class Fixtures extends Component {
	state = {
		fixtures: [],
		selectedRound: 1,
	};

	async componentDidMount() {
		const fixtures = await getFixtures();
		// current Round of season
		const currentRound = this.getCurrentWeekBetweenTwoTime(
			moment("2021/08/13"),
			moment(),
		);

		this.setState({ fixtures, selectedRound: currentRound });
	}

	getCurrentWeekBetweenTwoTime = (startTime, endTime) => {
		const currentWeek = endTime.diff(startTime, "week") - 1;

		return currentWeek;
	};

	// fixtures of one round
	roundFixtures = (fixtures, selectedRound) => {
		const temp = fixtures.filter(
			(f) => f.league.round === `Regular Season - ${selectedRound}`,
		);

		return temp;
	};

	// extract an array of rounds for pass to Select Component to display
	roundsOfSeason = (fixtures) => {
		const temp = fixtures.reduce((result, currentFixture) => {
			if (!result.includes(currentFixture.league.round)) {
				result.push(currentFixture.league.round);
			}
			return result;
		}, []);

		return temp;
	};

	// convert name of rounds to my desirable vlues (farsi)
	mappedRoundsOfSeason = (roundsOfSeason) => {
		const temp = roundsOfSeason.map((r) =>
			digitsEnToFa(r.replace("Regular Season - ", "هفته")),
		);
		return temp;
	};

	handleRoundSelect = (round) => {
		const temp = Number(round);
		this.setState({ selectedRound: temp });
	};

	handleClickPrevNext = (btn) => {
		const round = this.state.selectedRound;
		const newRound = btn === "previous" ? round - 1 : round + 1;

		if (newRound === 0 || newRound === 39) return;

		this.setState({ selectedRound: newRound });
	};

	render() {
		const { fixtures, selectedRound } = this.state;

		const roundFixtures = this.roundFixtures(fixtures, selectedRound);
		const roundsOfSeason = this.roundsOfSeason(fixtures);
		const mappedRoundsOfSeason = this.mappedRoundsOfSeason(roundsOfSeason);

		return (
			<div className="row global-card m-0">
				<div className="col-12">
					<Select
						items={mappedRoundsOfSeason}
						currentItem={this.props.currentRound}
						selectedItem={selectedRound}
						onItemSelect={this.handleRoundSelect}
						onClickPrevNext={this.handleClickPrevNext}
					/>
					<Round items={roundFixtures} />
				</div>
			</div>
		);
	}
}

export default Fixtures;
