<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let checked = false;
  export let text = "";

  function handleClick() {
    checked = !checked;
  }

  function onChange() {
    dispatch("change", checked);
  }
</script>

<style lang="scss">
  .checkbox {
    display: flex;
    align-items: center;
    &__icon {
      color: #b9bdcf;
      user-select: none;
      cursor: pointer;
    }
    &__input {
      display: none;
    }
    &__label {
      margin-left: 12px;
      font-size: 14px;
      color: #334680;
      font-weight: 500;
    }
  }
  .checked {
    color: #1e86ff !important;
  }
</style>

<div class="checkbox">
  {#if checked}
    <i
      class="material-icons checkbox__icon"
      class:checked={(checked = true)}
      on:click={handleClick}>
      check_box
    </i>
  {:else}
    <i class="material-icons checkbox__icon" on:click={handleClick}>
      check_box_outline_blank
    </i>
  {/if}
  <input type="checkbox" class="checkbox__input" bind:checked />
  <label class="checkbox__label" on:click={handleClick}>{text}</label>
</div>
