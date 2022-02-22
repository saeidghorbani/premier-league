import React from "react";

const TableCaption = ({ caption }) => {
	if (caption)
		return (
			<caption className="text-center">
				<span className="top-header">{caption}</span>
			</caption>
		);
	else return <React.Fragment></React.Fragment>;
};

export default TableCaption;
