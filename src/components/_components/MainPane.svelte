<script lang="ts">
  import { fade } from "svelte/transition";
  import Loader from "../Loader.svelte";
  import SongCard from "./SongCard.svelte";
  export let isLoading: boolean = false;
</script>

<section
  class="flex-grow border-2 border-divider/10 rounded-lg px-6 py-14 font-Satoshi overflow-y-scroll no-scroll space-y-9"
>
  {#if isLoading}
    <div class="w-full h-full flex items-center justify-center">
      <div
        in:fade
        class="w-fit h-fit"
      >
        <Loader />
      </div>
    </div>
  {:else}
    <section
      in:fade
      class="space-y-9"
    >
      <h1 class="font-bold text-3xl">Top Songs</h1>
      <section class="w-full min-h-96 pt-4 flex flex-wrap gap-9">
        {#each Array(10).fill("") as _, index}
          <SongCard {index} />
        {/each}
      </section>
    </section>
  {/if}
</section>
