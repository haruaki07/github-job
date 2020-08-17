<style lang="scss">
  .job {
    width: 100%;
    padding: 12px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 32px;
    display: flex;
    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f2f2f2;
      margin-right: 16px;
      border-radius: 4px;
      width: 90px;
      height: 90px;
    }
    :global(&__image div) {
      user-select: none;
      font-size: 12px;
      color: rgb(189, 189, 189);
    }
    :global(&__image img) {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    &__position {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }
    &__company {
      font-weight: bold;
      line-height: 14px;
      font-size: 12px;
      color: #334680;
    }
    &__title {
      font-size: 18px;
      color: #334680;
      margin: 8px 0 12px;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__fulltime {
      width: fit-content;
      border: 1px solid #334680;
      padding: 6px 8px;
      font-weight: bold;
      font-size: 12px;
      color: #334680;
      border-radius: 4px;
      line-height: 14px;
      white-space: nowrap;
      margin-bottom: 40px;
      @media (min-width: 640px) {
        margin-bottom: 0;
      }
    }
    &__detail {
      position: absolute;
      bottom: 2px;
      right: 12px;
      display: flex;
    }
    &__location,
    &__createdAt {
      color: #b9bdcf;
      font-size: 12px;
      font-weight: 500;
      display: flex;
      align-items: center;
      white-space: nowrap;
      i {
        margin-right: 8px;
        font-size: 18px;
        user-select: none;
      }
    }
    &__createdAt {
      margin-left: 28px;
    }
  }
</style>

<div class="job">
  {#if false}
    <slot />
  {/if}
  <div class="job__image">
    <slot name="image">not found</slot>
  </div>
  <div class="job__position">
    <div class="job__company">
      <slot name="company">Company</slot>
    </div>
    <div class="job__title">
      <slot name="title">Job title</slot>
    </div>
    <div class="job__fulltime">
      <slot name="type">Full time</slot>
    </div>
    <div class="job__detail">
      <div class="job__location">
        <i class="material-icons">public</i>
        <slot name="location">Location</slot>
      </div>
      <div class="job__createdAt">
        <i class="material-icons">access_time</i>
        <slot name="created_at">Created at</slot>
      </div>
    </div>
  </div>
</div>
