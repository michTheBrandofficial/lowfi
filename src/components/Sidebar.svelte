<script lang="ts" >
  import Chevron from "../icons/Chevron.svelte";
  import Library from "../icons/Library.svelte";
  import Like from "../icons/Like.svelte";
  import Playlist from "../icons/Playlist.svelte";
  
  let activeIndex: number | null = null
</script>

<section
  class="bg-transparent flex-grow min-w-72 max-w-72 pl-4 pr-6 pt-3 space-y-3 font-Satoshi text-secondary text-lg font-semibold "
  >
  <button class="flex items-center gap-3 " on:click={() => (activeIndex = 0)}  >
    <Library activeIndex={activeIndex} index={0} /> My Library
  </button>
  <button class="w-full flex items-center gap-3 " >
    <Playlist /> 
    Playlist
    <Chevron className="ml-auto" />
  </button>
  <button class="flex items-center gap-3 " on:click={() => (activeIndex = 1)}  >
    <Like activeIndex={activeIndex} index={1} /> Liked Songs
  </button>
</section>
