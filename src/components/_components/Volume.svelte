<script lang="ts">
  import Volume from "@/src/icons/Volume.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  let isVolumeProgressShown = false;
  export let audioEl: HTMLAudioElement;
</script>

<div class="flex items-center gap-1">
  <button on:click={() => (isVolumeProgressShown = !isVolumeProgressShown)}>
    <Volume />
  </button>
  {#if isVolumeProgressShown}
    <ProgressBar
      width={84}
      progress={Math.floor(audioEl.volume * 100)}
      onClick={(progress) => {
        audioEl.volume = +(progress / 100).toFixed(1);
      }}
    />
  {/if}
</div>
