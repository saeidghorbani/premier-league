import React, { Component } from "react";
import _ from "lodash";
import { digitsEnToFa } from "@persian-tools/persian-tools";

class TableBody extends Component {
	// decide what should render for each table cell based on columns and data
	renderCell(item, column) {
		if (column.content) return column.content(item);
		// return _.get(item, column.path);
		const cellValue = _.get(item, column.path);
		return digitsEnToFa(cellValue);
	}

	createKey = (item, column) => {
		return item.rank + (column.path || column.key);
	};

	render() {
		const { data, columns } = this.props;

		return (
			<tbody>
				{data.map((item) => (
					<tr key={item.rank}>
						{columns.map((column) => (
							<td key={this.createKey(item, column)}>
								{this.renderCell(item, column)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		);
	}
}

export default TableBody;
