import React from "react";

const BackwardButton = ({ onClickPrevNext }) => {
	return (
		<span onClick={() => onClickPrevNext("previous")} className="but row ms-2">
			<div className="i-bg col-6 rounded-circle d-flex justify-content-center align-items-center">
				<i className="bi bi-chevron-left select-icon"></i>
			</div>
			<div className="col-6 d-flex justify-content-center align-items-center">
				<span className="font-16 d-none d-md-inline">{"قبل"}</span>
			</div>
		</span>
	);
};

export default BackwardButton;
