<script>
  import Job from "./Job.svelte";
  import JobLoader from "./JobLoader.svelte";
  import { chunk, timeFromNow } from "../lib/utils.js";
  import { isLoading, filteredJobs, currentPage } from "../stores";
</script>

<style lang="scss">
  .joblist {
    width: 100%;
    @media (min-width: 640px) {
      width: 66.666666667%;
    }
  }
</style>

<div class="joblist">
  {#if $isLoading}
    {#each [0, 1, 2] as i}
      <JobLoader />
    {/each}
  {:else}
    {#each chunk($filteredJobs, 5)[$currentPage - 1] as job}
      <Job>
        <div slot="image">
          {#if job.company_logo}
            <img src={job.company_logo} alt="{job.company} logo" />
          {:else}not found{/if}
        </div>
        <a href={job.company_url} slot="company">{job.company}</a>
        <a href="jobs/{job.id}" slot="title">{job.title}</a>
        <div slot="location">{job.location}</div>
        <div slot="type">{job.type}</div>
        <div slot="created_at">{timeFromNow(job.created_at)}</div>
      </Job>
    {/each}
  {/if}
</div>
