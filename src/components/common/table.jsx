import React from "react";
import TableBody from "./tableBody";
import TableCaption from "./tableCaption";
import TableHeader from "./tableHeader";

const Table = ({ caption, columns, data }) => {
	return (
		<table className="table caption-top">
			<TableCaption caption={caption} />
			<TableHeader columns={columns} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
