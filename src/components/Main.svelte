<script>
  import Filter from "./Filter.svelte";
  import JobList from "./JobList.svelte";
  import Pagination from "./Pagination.svelte";
  import { scrollTo } from "svelte-scrollto";
  import { filteredJobs, isLoading, currentPage } from "../stores";
  import { chunk } from "../lib/utils.js";

  let last_page = chunk($filteredJobs, 5).length;

  function handleChange(e) {
    scrollTo({ element: ".joblist" });
    currentPage.set(e.detail);
  }

  $: {
    last_page = chunk($filteredJobs, 5).length;
  }
</script>

<style lang="scss">
  #main {
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    @media (min-width: 640px) {
      flex-direction: row;
    }
  }
</style>

<div id="main">
  <Filter />
  <JobList />
</div>
{#if !$isLoading}
  <Pagination
    current_page={$currentPage}
    {last_page}
    on:change={handleChange} />
{/if}
