import React from "react";
import { NavLink } from "react-router-dom";

const NavbarNavigation = () => {
	return (
		<section className="row">
			<div className="col-12">
				<nav className=" navbar navbar-expand">
					<ul className="fit-right-nav navbar-nav">
						<li className="ms-3 ms-md-4">
							<NavLink className="nav-link" to="/premier-league/">
								جدول
							</NavLink>
						</li>
						<li className="ms-3 ms-md-4">
							<NavLink className="nav-link" to="/premier-league/fixtures">
								بازی ها
							</NavLink>
						</li>
						<li className="ms-3 ms-md-4">
							<NavLink className="nav-link" to="/premier-league/topplayers">
								بازیکنان برتر
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};
export default NavbarNavigation;
