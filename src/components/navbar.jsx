import React from "react";
import NavbarHeader from "./common/navbarHeader";
import NavbarNavigation from "./common/navbarNavigation";

const NavBar = () => {
	return (
		<section
			dir="rtl"
			className="top-header-section row box-radius card-bg m-0 py-3 px-4 mb-3">
			<div className="col-12">
				<NavbarHeader />
			</div>
			<div className="col-12">
				<NavbarNavigation />
			</div>
		</section>
	);
};

export default NavBar;
