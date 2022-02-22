import React from "react";

const ForwardButton = ({ onClickPrevNext }) => {
	return (
		<span onClick={() => onClickPrevNext("next")} className="but row me-2">
			<div className="col-6 d-flex justify-content-center align-items-center">
				<span className="font-16 d-none d-md-inline">{"بعد"}</span>
			</div>
			<div className="i-bg col-6 rounded-circle d-flex justify-content-center align-items-center">
				<i className="bi bi-chevron-right select-icon"></i>
			</div>
		</span>
	);
};

export default ForwardButton;
