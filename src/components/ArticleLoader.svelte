<script>
  import Skeleton from "./Skeleton.svelte";
  import { isLoading } from "../stores";
</script>

<style lang="scss">
  .loader {
    margin-left: 0;
    width: 100%;
    @media (min-width: 640px) {
      margin-left: 78px;
      width: 75%;
    }
    &__top {
      display: flex;
      align-items: center;
    }
    &__title {
      width: 100%;
      line-height: 28px;
      margin-right: 16px;
      margin-bottom: 10px;
    }
    &__location,
    &__createdAt {
      display: flex;
      align-items: center;
    }
    &__company {
      display: flex;
      margin-top: 35px;
      &-image {
        margin-right: 12px;
      }
      &-name {
        line-height: 21px;
        margin-bottom: 5px;
      }
    }
    &__description {
      margin-top: 32px;
    }
  }
</style>

<div class="loader">
  <div class="loader__top">
    <div class="loader__title">
      <Skeleton height="24px" width="80%" />
    </div>
  </div>
  <div class="loader__createdAt">
    <Skeleton height="12px" width="50px" />
  </div>
  <div class="loader__company">
    <div class="loader__company-image">
      <Skeleton width="42px" height="42px" />
    </div>
    <div>
      <div class="loader__company-name">
        <Skeleton height="18px" width="150px" />
      </div>
      <div class="loader__location">
        <Skeleton height="12px" width="80px" />
      </div>
    </div>
  </div>
  <div class="loader__description">
    <Skeleton height="16px" />
    <Skeleton height="16px" />
    <Skeleton height="16px" />
    <Skeleton height="16px" width="50%" />
  </div>
</div>
