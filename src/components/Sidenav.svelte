<script>
  import Skeleton from "./Skeleton.svelte";
  import { isLoading } from "../stores";
  import { goto } from "@sapper/app";
</script>

<style lang="scss">
  .sidenav {
    width: 100%;
    position: static;
    top: 20px;
    align-self: self-start;
    @media (min-width: 640px) {
      width: 25%;
      position: -webkit-sticky;
      position: sticky;
    }
    &__back {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #1e86ff;
      display: flex;
      cursor: pointer;
      align-items: center;
      user-select: none;
      margin-bottom: 36px;
      i {
        color: #1e86ff;
        font-size: 24px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        margin-right: 12px;
      }
    }
    &__title {
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      text-transform: uppercase;
      color: #b9bdcf;
    }
    &__subtitle {
      margin-top: 16px;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #334680;
      margin-bottom: 36px;
      :global(a) {
        text-decoration: none;
        color: #1e86ff;
      }
    }
  }
</style>

<div class="sidenav">
  <div class="sidenav__back" on:click|once={() => goto('/')}>
    <i class="material-icons">trending_flat</i>
    Back to search
  </div>
  <h4 class="sidenav__title">How to apply</h4>
  <div class="sidenav__subtitle">
    {#if $isLoading}
      <Skeleton height="14px" />
    {/if}
    <slot name="how_to_apply" />
  </div>
</div>
