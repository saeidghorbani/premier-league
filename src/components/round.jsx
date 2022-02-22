import React, { Component } from "react";
import moment from "jalali-moment";
import Fixture from "./common/fixture";
import Day from "./common/day";
import { digitsEnToFa } from "@persian-tools/persian-tools";

class Round extends Component {
	//
	isToday = (date) => {
		const today = moment().locale("fa").format("DD");
		const result =
			moment(date).locale("fa").format("DD") === today ? true : false;

		return result;
	};

	// grouping fixtures based on different days
	getFixturesByDay = (fixtures) => {
		const rows = [];
		let lastDay = null;

		fixtures.forEach((fixture) => {
			const fixtureDate = moment(fixture.fixture.date)
				.locale("fa")
				.format("YYYY/M/D");

			const isToday = this.isToday(fixtureDate);

			if (fixtureDate !== lastDay) {
				rows.push(
					<Day
						day={isToday === 1 ? "امروز" : digitsEnToFa(fixtureDate)}
						key={Math.random()}
					/>,
				);
			}
			rows.push(<Fixture fixture={fixture} key={fixture.fixture.id} />);
			lastDay = fixtureDate;
		});
		return rows;
	};

	render() {
		const { items } = this.props;

		// sort fixtures by time ( needed for rendering fixtures by day)
		items.sort(function (a, b) {
			return new Date(a.fixture.date) - new Date(b.fixture.date);
		});

		// grouping fixtures by different days
		const FixturesByDay = this.getFixturesByDay(items);

		return (
			<div className="round row justify-content-center p-2">
				<div className="col">{FixturesByDay}</div>
			</div>
		);
	}
}

export default Round;
