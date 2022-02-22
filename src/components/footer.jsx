import React from "react";
import FooterTopSection from "./common/footerTopSection";
import FooterBottomSection from "./common/footerBottomSection";

const Footer = () => {
	return (
		<footer>
			<div className="inner-footer">
				<FooterTopSection />
				<p></p>
				<FooterBottomSection />
			</div>
		</footer>
	);
};

export default Footer;
