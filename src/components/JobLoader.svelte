<script>
  import Skeleton from "./Skeleton.svelte";
</script>

<style lang="scss">
  .loader {
    width: 100%;
    padding: 12px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 32px;
    display: flex;
    &__image {
      margin-right: 16px;
      width: 90px;
      height: 90px;
    }
    &__detail {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }
    &__bottom {
      margin-top: 17px;
      margin-left: 50%;
    }
  }
</style>

<div class="loader">
  {#if false}
    <slot />
  {/if}
  <div class="loader__image">
    <Skeleton height="100%" width="100%" borderRadius="4px" />
  </div>
  <div class="loader__detail">
    <div class="loader__top">
      <Skeleton height="14px" width="50%" />
    </div>
    <div class="loader__title">
      <Skeleton height="18px" />
    </div>
    <div class="loader__bottom">
      <Skeleton height="15px" />
    </div>
  </div>
</div>
