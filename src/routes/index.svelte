<script>
	import { onMount } from "svelte";
	import SearchForm from "../components/SearchForm.svelte";
	import Main from "../components/Main.svelte";
	import { writeToCache, readFromCache } from "../lib/utils.js";
	import { jobs, filteredJobs, isLoading } from "../stores";

	export let results;

	onMount(async () => {
		if (readFromCache("jobs")) {
			results = readFromCache("jobs");
			jobs.set(results);
			isLoading.set(false);
		} else {
			results = await fetch("jobs.json");
			results = await results.json();
			writeToCache("jobs", results, 7200000); // 2 Hours
			jobs.set(results);
			isLoading.set(false);
		}
	});
</script>

<SearchForm />
<Main />

<svelte:head>
	<title>GitHub Jobs</title>
</svelte:head>