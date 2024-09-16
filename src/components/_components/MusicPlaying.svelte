<script lang="ts">
  import AddToPlaylist from "@/src/icons/AddToPlaylist.svelte";
  import MoreOptions from "@/src/icons/MoreOptions.svelte";
  import Pause from "@/src/icons/Pause.svelte";
  import Queue from "@/src/icons/Queue.svelte";
  import { formatVideoDuration } from "@/src/utils";
  import AlbumCover from "@/static/Offset-Set-It-Off-.webp";
  import Song from "@/static/songs/Aoyagi_Ryoko.mp3";
  import { onMount } from "svelte";
  import Like from "~/icons/Like.svelte";
  import Play from "~/icons/Play.svelte";
  import Position from "~/icons/Position.svelte";
  import Repeat from "~/icons/Repeat.svelte";
  import Shuffle from "~/icons/Shuffle.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import Volume from "./Volume.svelte";

  let audioEl: HTMLAudioElement = new Audio(Song);
  let musicStore = {
    currentTime: `00:00`,
    duration: `00:00`,
    progress: 0,
    isPaused: true,
  };
  function togglePlayPause() {
    if (!audioEl.paused) {
      let currentVolume = audioEl.volume;
      audioEl.pause()
      musicStore = {
        ...musicStore,
        isPaused: true,
      };
      return;
    }
    audioEl.play();
    musicStore = {
      ...musicStore,
      isPaused: false,
    };
  }
  function handleSpaceKeyPress({ key }: { key: string }) {
    if (key === " ") togglePlayPause();
  }
  onMount(() => {
    setTimeout(() => {
      const { duration } = {
        ...audioEl,
        duration: Math.floor(audioEl.duration),
      };
      musicStore = {
        ...musicStore,
        duration: formatVideoDuration(duration),
      };
    }, 1000);
    audioEl.addEventListener("timeupdate", () => {
      const { currentTime, duration } = audioEl;
      musicStore = {
        ...musicStore,
        progress: Math.floor((currentTime / duration) * 100),
        currentTime: formatVideoDuration(currentTime),
      };
    });
    audioEl.addEventListener("ended", () => {
      audioEl.pause();
      musicStore = {
        ...musicStore,
        isPaused: true,
        progress: 100,
        currentTime: formatVideoDuration(0),
      };
    });
    audioEl.addEventListener("pause", () => {
      musicStore = {
        ...musicStore,
        isPaused: true,
      };
    });
    audioEl.addEventListener("play", () => {
      musicStore = {
        ...musicStore,
        isPaused: false,
      };
    });
  });
</script>

<section
  class="flex-grow min-h-16 max-h-16 bg-tertiary flex px-4 items-center gap-2 rounded-lg font-Satoshi"
  tabindex={0}
  role="button"
  on:keyup={handleSpaceKeyPress}
>
  <div class="flex items-center gap-2">
    <button on:click={togglePlayPause}>
      {#if musicStore.isPaused}
        <Pause />
      {:else}
        <Play />
      {/if}
    </button>
    <Position position="backward" />
    <Position />
    <Shuffle />
    <Repeat />
  </div>
  <div class="flex items-center gap-2 pr-2">
    <div class="flex items-center gap-2 text-sm text-secondary font-semibold">
      <p class="w-14 text-center">{musicStore.currentTime}</p>
      <ProgressBar
        progress={musicStore.progress}
        onClick={(progress) => {
          audioEl.currentTime = (progress / 100) * audioEl.duration;
        }}
      />
      <p class="w-14 text-center">{musicStore.duration}</p>
    </div>
    <Volume {audioEl} />
  </div>
  <div class="flex-grow flex items-center gap-3">
    <div>
      <img
        src={AlbumCover}
        alt="album cover"
        class="w-12 h-12 rounded-md"
      />
    </div>
    <div class="h-12 text-secondary text-xs font-Satoshi font-medium">
      <p class="text-primary">Clout</p>
      <p>Offset</p>
      <p>Set it off</p>
    </div>
  </div>
  <div class="ml-auto flex items-center gap-1">
    <Like
      activeIndex={1}
      index={0}
    />
    <AddToPlaylist />
    <Queue />
    <MoreOptions />
  </div>
</section>
