import React from "react";
import logo from "../../../src/icon.png";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const NavbarHeader = () => {
	return (
		<header className="row mb-2">
			<div className="navbar-logo-div col-3">
				<img className="navbar-logo-img" src={logo} alt="logo" />
			</div>
			<div className="col-9 col-md-6">
				<div>
					<h5 className="mt-2">لیگ برتر انگلیس</h5>
					<span className="d-inline-block">{digitsEnToFa("2022 - 2021")}</span>
				</div>
			</div>
			<div className="d-none d-md-block col-md-3 me-auto">
				<p className="navbar-text-logo mt-3 text-start">PREMIER LEAGUE</p>
			</div>
		</header>
	);
};

export default NavbarHeader;
