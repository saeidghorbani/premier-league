import React from "react";
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
					<Route path="/premier-league/standings" element={<Standings />} />
					<Route path="/premier-league/topplayers" element={<TopPlayers />} />
					<Route path="/premier-league/fixtures" element={<Fixtures />} />
					<Route path="/premier-league/not-found" element={<NotFound />} />
					<Route path="/premier-league/" exact element={<Standings />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
