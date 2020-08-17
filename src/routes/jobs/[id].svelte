<script context="module">
  export async function preload({ params }) {
    const { id } = params;
    return { id };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { timeFromNow } from "../../lib/utils.js";
  import { isLoading } from "../../stores";
  import Sidenav from "../../components/Sidenav.svelte";
  import Article from "../../components/Article.svelte";
  import ArticleLoader from "../../components/ArticleLoader.svelte";

  export let id;
  let job;

  isLoading.set(true);

  onMount(async () => {
    const res = await fetch(`jobs/${id}.json`);
    job = await res.json();
    isLoading.set(false);
  });
</script>

<style lang="scss">
  @import "../../styles/theme.scss";
  .detail {
    display: flex;
    flex-direction: column;
    position: relative;
    @media (min-width: $screen-md) {
      flex-direction: row;
    }
  }
</style>

<svelte:head>
  <title>GitHub Jobs</title>
</svelte:head>

<div class="detail">
    <Sidenav>
      <div slot="how_to_apply">
        {@html $isLoading ? '' : job.how_to_apply}
      </div>
    </Sidenav>
    {#if $isLoading}
      <ArticleLoader />
    {:else}
      <Article>
        <div slot="title">{job.title}</div>
        <div slot="type">{job.type}</div>
        <div slot="company_image">
          {#if job.company_logo}
            <img src={job.company_logo} alt="{job.company} logo" />
          {:else}not found{/if}
        </div>
        <div slot="created_at">{timeFromNow(job.created_at)}</div>
        <a href={job.company_url} slot="company_name">{job.company}</a>
        <div slot="location">{job.location}</div>
        <div slot="description" class="markdown">
          {@html job.description}
        </div>
      </Article>
    {/if}
</div>
