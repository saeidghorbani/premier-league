import React, { Component, useEffect, useState } from "react";
import { getFixtures } from "../services/fixturesService";
import Select from "./select";
import Round from "./round";
import moment from "jalali-moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Loading from "./common/loading";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [selectedRound, setSelectedRound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFixturesFn();
  }, []);

  const getFixturesFn = async () => {
    setLoading(true);
    try {
      const fixtures = await getFixtures();
      // current Round of season
      const currentRound = getCurrentWeekBetweenTwoTime(
        moment("2022/10/06"),
        moment()
      );

      setFixtures(fixtures);
      setSelectedRound(currentRound);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentWeekBetweenTwoTime = (startTime, endTime) => {
    const currentWeek = endTime.diff(startTime, "week") - 1;

    return currentWeek;
  };

  // fixtures of one round
  const computeRoundFixtures = (fixtures, selectedRound) => {
    const temp = fixtures.filter((f) => {
      return f.league.round === `Regular Season - ${selectedRound}`;
    });

    return temp;
  };

  // extract an array of rounds for pass to Select Component to display
  const computeRoundsOfSeason = (fixtures) => {
    const temp = fixtures.reduce((result, currentFixture) => {
      if (!result.includes(currentFixture.league.round)) {
        result.push(currentFixture.league.round);
      }
      return result;
    }, []);

    return temp;
  };

  // convert name of rounds to my desirable vlues (farsi)
  const computeMappedRoundsOfSeason = (roundsOfSeason) => {
    const temp = roundsOfSeason.map((r) =>
      digitsEnToFa(r.replace("Regular Season - ", "هفته"))
    );
    return temp;
  };

  const handleRoundSelect = (round) => {
    const temp = Number(round);
    setSelectedRound(temp);
  };

  const handleClickPrevNext = (btn) => {
    const round = selectedRound;
    const newRound = btn === "previous" ? round - 1 : round + 1;

    if (newRound === 0 || newRound === 39) return;

    setSelectedRound(newRound);
  };

  const roundFixtures = computeRoundFixtures(fixtures, selectedRound);
  const roundsOfSeason = computeRoundsOfSeason(fixtures);
  const mappedRoundsOfSeason = computeMappedRoundsOfSeason(roundsOfSeason);

  return (
    <div className="row global-card m-0">
      {loading && (
        <div className="vw-50 m-h-50 d-flex justify-content-center align-items-center">
          <Loading />
        </div>
      )}

      {!loading && (
        <div className="col-12">
          <Select
            items={mappedRoundsOfSeason}
            selectedItem={selectedRound}
            onItemSelect={handleRoundSelect}
            onClickPrevNext={handleClickPrevNext}
          />
          <Round items={roundFixtures} />
        </div>
      )}
    </div>
  );
};

export default Fixtures;
