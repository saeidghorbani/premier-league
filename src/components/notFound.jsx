import React, { Component } from "react";

class NotFound extends Component {
	state = { data: "" };

	render() {
		console.log(this.state.data);
		return (
			<div className="row">
				<div className="col-12 d-flex flex-column justify-content-center align-items-center">
					<h1 className="not-found-text">404</h1>
					<p className="not-found-text">!صفحه مورد نظر پیدا نشد</p>
				</div>
			</div>
		);
	}
}

export default NotFound;
