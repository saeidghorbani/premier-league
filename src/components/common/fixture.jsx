import React, { Component } from "react";
import moment from "jalali-moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";

class Fixture extends Component {
	// decide what should be rendered between two team as result
	getResultFixtureTags = (fixture) => {
		const result = fixture.goals.home !== null ? 1 : 0;
		let tags = "";
		// if fixture has result (fixture finished or is running)
		// the result and status of fixture should be displaied
		if (result)
			tags = (
				<div className="between">
					<span className="between-result">
						{`${digitsEnToFa(fixture.goals.home)} - ${digitsEnToFa(
							fixture.goals.away,
						)}`}
					</span>
					<span className="between-status">{fixture.fixture.status.short}</span>
				</div>
			);
		// if dont have result, fixture time should be displaied
		else
			tags = (
				<div className="between">
					<span className="between-result">
						{digitsEnToFa(
							moment(fixture.fixture.date).locale("fa").format("HH:mm"),
						)}
					</span>
				</div>
			);

		return tags;
	};

	render() {
		const { fixture } = this.props;

		const tags = this.getResultFixtureTags(fixture);

		return (
			<div className="fixture-container">
				{/* left team */}
				<div className="left-team">
					<span>{fixture.teams.home.name}</span>
					<img
						src={fixture.teams.home.logo}
						className="fixtures-team-logo"
						alt="logo"
					/>
				</div>

				{/* between result */}
				{tags}

				{/* right team */}
				<div className="right-team">
					<img
						className="fixtures-team-logo"
						src={fixture.teams.away.logo}
						alt="logo"
					/>
					<span>{fixture.teams.away.name}</span>
				</div>
			</div>
		);
	}
}

export default Fixture;
