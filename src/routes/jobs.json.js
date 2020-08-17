import { getAllJobs } from "../lib/api.js";

export async function get(req, res, next) {
	const jobs = await getAllJobs();

	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	res.end(JSON.stringify(jobs));
}
