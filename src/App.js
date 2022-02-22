import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Standings from "./components/standings";
import TopPlayers from "./components/topPlayers";
import Fixtures from "./components/fixtures";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<main className="container pt-5">
				<NavBar />
				<Routes>
					<Route path="/standings" element={<Standings />} />
					<Route path="/topplayers" element={<TopPlayers />} />
					<Route path="/fixtures" element={<Fixtures />} />
					<Route path="/not-found" element={<NotFound />} />
					<Route path="/" exact element={<Standings />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
