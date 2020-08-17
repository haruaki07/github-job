<script>

</script>

<style lang="scss">
  .article {
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
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #334680;
      margin-right: 16px;
      margin-bottom: 10px;
    }
    &__fulltime {
      border: 1px solid #334680;
      padding: 6px 8px;
      font-weight: bold;
      font-size: 12px;
      color: #334680;
      border-radius: 4px;
      line-height: 14px;
    }
    &__location,
    &__createdAt {
      color: #b9bdcf;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      display: flex;
      align-items: center;
      i {
        margin-right: 8px;
        font-size: 18px;
        user-select: none;
      }
    }
    &__company {
      display: flex;
      margin-top: 35px;
      &-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
        border-radius: 4px;
        margin-right: 12px;
        background-color: rgb(242, 242, 242);
        :global(div) {
          color: rgb(189, 189, 189);
          font-size: 8px;
          user-select: none;
        }
        :global(img) {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &-name {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #334680;
        margin-bottom: 5px;
      }
    }
    :global(&__description div) {
      font-size: 16px !important;
      line-height: 24px !important;
      color: #334680 !important;
      margin-top: 32px !important;
    }
  }
</style>

<div class="article">
  <div class="article__top">
    <div class="article__title">
      <slot name="title">Front-End Software Engineer</slot>
    </div>
    <div class="article__fulltime">
      <slot name="type">Full time</slot>
    </div>
  </div>
  <div class="article__createdAt">
    <i class="material-icons">access_time</i>
    <slot name="created_at">Created at</slot>
  </div>
  <div class="article__company">
    <div class="article__company-image">
      <slot name="company_image" />
    </div>
    <div>
      <div class="article__company-name">
        <slot name="company_name">Company</slot>
      </div>
      <div class="article__location">
        <i class="material-icons">public</i>
        <slot name="location">Location</slot>
      </div>
    </div>
  </div>
  <div class="article__description">
    <slot name="description">Description...</slot>
  </div>
</div>
