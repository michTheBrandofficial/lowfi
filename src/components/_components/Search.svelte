<script lang="ts">
  import { slide } from "svelte/transition";
  import Search from "~/icons/Search.svelte";
  let isSearchActive = false;
  let inputRef: HTMLInputElement;
  $: {
    if (isSearchActive === true) {
      inputRef?.focus();
    }
  }
  export let onOpen: VoidFunction;
  export let onClose: VoidFunction;
</script>

<div class="min-w-[400px] h-full">
  {#if isSearchActive === false}
    <button
      in:slide
      class="w-fit h-full flex items-center min-w-44 pl-3 gap-2 text-secondary text-lg"
      on:click={() => {
        onOpen();
        isSearchActive = true;
      }}
    >
      <Search
        activeIndex={0}
        index={1}
      />
      Search
    </button>
  {:else}
    <form
      in:slide={{ axis: "x" }}
      class="w-[384px] h-full flex pl-3 gap-2"
      on:submit|preventDefault={({ currentTarget: _current }) => {
        // const data = new FormData(currentTarget).get('search')
        isSearchActive = false;
      }}
    >
      <input
        bind:this={inputRef}
        on:keyup={({ key }) => {
          if (key === "Escape") isSearchActive = false;
        }}
        on:blur={() => {
          onClose();
          isSearchActive = false;
        }}
        type="text"
        name="search"
        class="w-full h-full bg-white/20 backdrop-blur-2xl pl-6 pr-6 text-primary text-lg rounded-full placeholder:text-secondary focus:outline-none"
        placeholder="Search"
      />
      <button class="hidden"></button>
    </form>
  {/if}
</div>
