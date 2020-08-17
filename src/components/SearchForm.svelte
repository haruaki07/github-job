<script>
  import { searchTerm, isLoading } from "../stores";

  let query;

  const onSearch = () => {
    if (!query.length) {
      handleSearch();
    }
  };

  const handleKeyup = () => {
    if (location.length === 0 && !$isLoading) $searchTerm = location;
  };

  const handleSearch = () => {
    if (!$isLoading) $searchTerm = query;
  };
</script>

<style lang="scss">
  @import "../styles/theme.scss";
  .search-form {
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("/bg-searchForm.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    padding: 0 18px;
    @media (min-width: 640px) {
      padding: 0 205px;
    }
    &__form {
      position: relative;
      width: 100%;
    }
    &__prepend {
      font-size: 18px;
      color: #b9bdcf;
      position: absolute;
      top: 20px;
      left: 16px;
    }
    &__input {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding: 21px 42px 20px;
      padding-right: 151px;
      font-size: 12px;
      line-height: 14px;
      width: 100%;
    }
    &__button {
      color: #fff;
      background: $btn-primary;
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      padding: 14px 48px;
      position: absolute;
      top: 4px;
      right: 4px;
      line-height: 19px;
      &:hover {
        background: $btn-primary-hover;
      }
    }
    &__input,
    &__button {
      outline: none;
    }
  }
</style>

<div class="search-form">
  <form class="search-form__form" on:submit|preventDefault>
    <i class="search-form__prepend material-icons">work_outline</i>
    <input
      type="search"
      class="search-form__input"
      placeholder="Title, companies, expertise or benefits"
      bind:value={query}
      on:search={onSearch}
      on:keyup={handleKeyup} />
    <button type="submit" class="search-form__button" on:click={handleSearch}>
      Search
    </button>
  </form>
</div>
