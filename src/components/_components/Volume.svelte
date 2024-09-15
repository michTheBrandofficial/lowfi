<script lang="ts">
  import Volume from "@/src/icons/Volume.svelte";
  import { cubicOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import ProgressBar from "./ProgressBar.svelte";
  let isVolumeProgressShown = false;
  export let audioEl: HTMLAudioElement;
</script>

<div class="flex items-center gap-1">
  <button on:click={() => (isVolumeProgressShown = !isVolumeProgressShown)}>
    <Volume />
  </button>
  {#if isVolumeProgressShown}
    <div
      in:slide={{
        axis: "x",
        easing: cubicOut
      }}
    >
      <ProgressBar
        width={84}
        progress={50}
        onClick={(progress) => {
          audioEl.volume = +(progress / 100).toFixed(1);
        }}
      />
    </div>
  {/if}
</div>
