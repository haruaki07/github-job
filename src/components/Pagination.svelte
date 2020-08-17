<script>
  import { createEventDispatcher } from "svelte";
  import { pagination } from "./../lib/utils.js";
  const dispatch = createEventDispatcher();

  export let current_page;
  export let last_page;

  let paging = [];

  function changePage(page) {
    dispatch("change", page);
  }

  function handleClick(page) {
    if (!isNaN(page)) changePage(page);
  }

  $: {
    paging = pagination(current_page, last_page, 1);
  }
</script>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: flex-end;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      list-style: none;
    }
    &__page,
    &__dots {
      background: none;
      outline: none;
      width: 36px;
      height: 36px;
      margin: 6px;
      border: 1px solid #b7bcce;
      border-radius: 4px;
      cursor: pointer;
      span {
        font-size: 12px;
        color: #b9bdcf;
      }
    }
    &__dots {
      border: none;
      width: unset;
      span {
        font-size: 18px;
      }
    }
    .active &__page {
      background: #1e86ff;
      border: 1px solid #1e86ff;
      border-radius: 4px;
      span {
        color: #fff;
      }
    }
  }
</style>

<nav class="pagination">
  <ul>
    <li>
      <button
        class="pagination__page"
        on:click={() => (current_page - 1 >= 1 ? changePage(current_page - 1) : void 0)}>
        <span class="material-icons">keyboard_arrow_left</span>
      </button>
    </li>
    {#each paging as page}
      <li class:active={current_page === page}>
        {#if !isNaN(page)}
          <button class="pagination__page" on:click={handleClick(page)}>
            <span aria-hidden="true">{page}</span>
          </button>
        {:else}
          <button class="pagination__dots" on:click={handleClick(page)}>
            <span class="material-icons">more_horiz</span>
          </button>
        {/if}
      </li>
    {/each}
    <li>
      <button
        class="pagination__page"
        on:click={() => (current_page + 1 <= last_page ? changePage(current_page + 1) : void 0)}>
        <span class="material-icons">keyboard_arrow_right</span>
      </button>
    </li>
  </ul>
</nav>
