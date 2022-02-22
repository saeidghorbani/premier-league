import React, { Component } from "react";

const Day = ({ day }) => {
	return (
		<div dir="rtl" className="day">
			<span>{day}</span>
		</div>
	);
};

export default Day;
