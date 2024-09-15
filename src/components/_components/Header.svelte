<script lang="ts" >
  import Home from "~/icons/Home.svelte";
  import Search from "./Search.svelte";
  let activeHeaderButton: ActiveHeaderButton = {
    Home: 0,
    Search: 1
  }
  let activeHeaderButtonIndex = activeHeaderButton.Home as number
</script>

<header class="flex-grow min-h-12 max-h-12 flex items-center justify-between font-Satoshi">
  <section class="h-full flex items-center gap-2 font-semibold ">
    <button 
    class="w-fit h-full flex items-center min-w-40 pl-3 gap-2 {activeHeaderButton.Home === activeHeaderButtonIndex ? 'text-primary bg-white/20 backdrop-blur-2xl' : 'text-secondary'} text-lg rounded-xl transition-colors duration-1000 ease-[ease] "
    on:click={() => activeHeaderButtonIndex = activeHeaderButton.Home}
    >
      <Home
        activeIndex={activeHeaderButton.Home}
        index={activeHeaderButtonIndex}
      />
      Home
    </button>
    <Search onClose={() => activeHeaderButtonIndex = activeHeaderButton.Home} onOpen={() => activeHeaderButtonIndex = activeHeaderButton.Search} />
  </section>
</header>
