import axios from "axios";

// intercept all requests (add header to requests)
axios.interceptors.request.use((req) => {
	req.headers = {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "d7b0b8f9ccc7b9b7ed58dac72d19cde1",
	};
	return req;
});

// intercept response unexpected errors
axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expectedError) {
		alert("خطای غیر منتظره رخ داده است.");
	}
});

export default {
	get: axios.get,
};
