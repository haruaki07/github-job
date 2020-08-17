<script>
  import {
    fullTime,
    locations,
    selectedLocation,
    searchTerm,
    isLoading
  } from "../stores";
  import { getRandom } from "../lib/utils.js";
  import Radio from "./Radio.svelte";
  import Checkbox from "./Checkbox.svelte";

  let location = "";

  function handleSearch() {
    if (!$isLoading) $searchTerm = location;
  }

  function handleKeyup() {
    if (location.length === 0 && !$isLoading) $searchTerm = location;
  }
</script>

<style lang="scss">
  .filter {
    width: 100%;
    padding-right: 0;
    @media (min-width: 640px) {
      padding-right: 32px;
      width: 33.333333%;
    }
    &__location {
      margin-top: 32px;
      margin-bottom: 14px;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      color: #b9bdcf;
    }
    &__cities {
      display: grid;
      gap: 9px;
      margin: 26px 0;
    }
    &__form {
      position: relative;
      width: 100%;
      i {
        user-select: none;
        position: absolute;
        top: 14px;
        left: 14px;
        color: #b9bdcf;
        font-size: 18px;
      }
    }
    &__input {
      outline: none;
      width: 100%;
      background: #fff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      padding: 17px;
      padding-left: 45px;
      font-size: 12px;
    }
    &__reset {
      color: #fff;
      background: #1e86ff;
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      padding: 8px 16px;
      width: 100%;
      &:hover {
        background: #1b71d4;
      }
    }
  }
</style>

<div class="filter">
  <Checkbox text="Full Time" bind:checked={$fullTime} />
  <h4 class="filter__location">LOCATION</h4>
  <form class="filter__form" on:submit|preventDefault>
    <i class="material-icons">public</i>
    <input
      type="search"
      class="filter__input"
      bind:value={location}
      on:search={handleSearch}
      on:keyup={handleKeyup}
      placeholder="City, state, zip code or country" />
  </form>
  <div class="filter__cities">
    {#each getRandom($locations, 4) as loc}
      <Radio text={loc} value={loc} bind:group={$selectedLocation} />
    {/each}
  </div>
  {#if $selectedLocation}
    <button class="filter__reset" on:click={() => ($selectedLocation = '')}>
      Reset
    </button>
  {/if}
</div>
