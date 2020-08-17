import { getJob } from "../../lib/api.js";

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { id } = req.params;
	const job = await getJob(id);

	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	res.end(job);
}
