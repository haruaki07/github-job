const fetch = process.browser ? window.fetch : require("node-fetch").default;

export const getJob = (id) =>
	fetch(`https://jobs.github.com/positions/${id}.json`, {
		headers: { "Content-Type": "application/json" },
		method: "GET",
	})
		.then((res) => res.text())
		.then((res) => {
			return res;
		})
		.catch((e) => {
			console.log(e);
			return { e };
		});

// https://stackoverflow.com/a/48633898
export const getAllJobs = (page = 1, jobs = []) =>
	//you need to return the promise here, arrow without {} block
	//  returns the single statement (x=>y = function(x){return y;})

	fetch(`https://jobs.github.com/positions.json?page=${page}`, {
		headers: { "Content-Type": "application/json" },
		method: "GET",
	})
		.then((res) => res.text())
		.then((res) => {
			res = JSON.parse(res);
			//you need to return the promise here
			//  call recursively
			if (res.length <= 0) {
				return jobs;
			} else {
				res = res.map(
					({
						id,
						type,
						url,
						created_at,
						company,
						company_url,
						company_logo,
						location,
						title,
					}) => ({
						id,
						type,
						url,
						created_at,
						company,
						company_url,
						company_logo,
						location,
						title,
					})
				);
				return getAllJobs(page + 1, jobs.concat(res));
			}
		})
		.catch((e) => {
			console.log(e);
		});
