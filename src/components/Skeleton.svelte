<script>
  import { onMount } from "svelte";
  let Skeleton;

  export let height = "25px";
  export let width = "100%";
  export let borderRadius = "4px";

  onMount(async () => {
    const module = await import("svelte-loading-skeleton");
    Skeleton = module.Skeleton;
  });
</script>

<svelte:component
  this={Skeleton}
  {height}
  {width}
  {borderRadius}
  baseColor="#f2f2f2" />
