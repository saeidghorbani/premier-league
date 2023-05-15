import React, { Component, useEffect, useState } from "react";
import { getTeamsApi } from "../services/standingsService";
import Table from "./common/table";
import "../css/standings.css";
import Loading from "./common/loading";

const Standings = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  // columns of standings table
  const columns = [
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

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    setLoading(true);
    try {
      const teams = await getTeamsApi();
      setTeams(teams);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="row  global-card m-0 px-3 py-3">
      <div className="col-12 table-responsive">
        {loading && (
          <div className="vw-50 min-vh-100 d-flex justify-content-center align-items-center">
            <Loading />
          </div>
        )}

        {!loading && <Table columns={columns} data={teams} />}
      </div>
    </div>
  );
};

export default Standings;
