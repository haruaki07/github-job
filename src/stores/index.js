import { writable, derived } from "svelte/store";

export const jobs = writable([]);

export const isLoading = writable(true);

export const currentPage = writable(1);

export const searchTerm = writable("");

export const selectedLocation = writable("");

export const fullTime = writable(false);

export const filteredJobs = derived(
	[jobs, fullTime, searchTerm, selectedLocation],
	([$jobs, $fullTime, $searchTerm, $selectedLocation]) => {
		return sortByFeatured(
			filterByFullTime(
				filterByLocation(
					filterBySearchTerm($jobs, $searchTerm),
					$selectedLocation
				),
				$fullTime
			)
		);
	}
);

export const locations = derived([jobs], ([$jobs]) => {
	const locs = $jobs.map(({ location }) => location);
	return [...new Map(locs.map((item) => [item, item])).values()];
});

function filterBySearchTerm(jobs, searchTerm) {
	if (!searchTerm) return jobs;

	return jobs.flat().filter((job) => {
		const title = job.title.toLowerCase().replace("-", " ");
		const company = job.company.toLowerCase();
		const location = job.location.toLowerCase();
		const formattedTerm = searchTerm.toLowerCase().trim();

		return (
			title.includes(formattedTerm) ||
			company.includes(formattedTerm) ||
			location.includes(formattedTerm)
		);
	});
}

function filterByFullTime(jobs, fullTime) {
	if (!fullTime) return jobs;

	return jobs.filter((job) => job.type.toLowerCase() === "full time");
}

function filterByLocation(jobs, location) {
	if (!location) return jobs;

	return jobs.filter((job) => job.location === location);
}

function sortByFeatured(jobs) {
	return jobs.sort((a, b) => (a.featured ? -1 : 1));
}
