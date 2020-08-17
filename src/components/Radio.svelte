<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let group = "";
  export let text = "";
  export let value = "";
  // export let items = [];
</script>

<style lang="scss">
  .radio {
    &__icon {
      color: #b9bdcf;
      user-select: none;
      cursor: pointer;
      margin-right: 12px;
      &.checked {
        color: #1e86ff !important;
      }
    }
    &__input {
      display: none;
    }
    &__label {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #334680;
      font-weight: 500;
    }
  }
</style>

<div class="radio">
  <label class="radio__label">
    {#if group === value}
      <i
        class="material-icons radio__icon checked"
        class:checked={group === value}>
        check_box
      </i>
    {:else}
      <i class="material-icons radio__icon">check_box_outline_blank</i>
    {/if}
    <input type="radio" class="radio__input" bind:group {value} />
    {text}
  </label>
</div>
