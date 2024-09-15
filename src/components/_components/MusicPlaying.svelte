<script lang="ts">
  import AddToPlaylist from "@/src/icons/AddToPlaylist.svelte";
  import MoreOptions from "@/src/icons/MoreOptions.svelte";
  import Pause from "@/src/icons/Pause.svelte";
  import Queue from "@/src/icons/Queue.svelte";
  import { formatVideoDuration } from "@/src/utils";
  import AlbumCover from "@/static/Offset-Set-It-Off-.webp";
  import Song from "@/static/songs/Aoyagi_Ryoko.mp3";
  import Like from "~/icons/Like.svelte";
  import Play from "~/icons/Play.svelte";
  import Position from "~/icons/Position.svelte";
  import Repeat from "~/icons/Repeat.svelte";
  import Shuffle from "~/icons/Shuffle.svelte";
  import Volume from "~/icons/Volume.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  let audioEl: HTMLAudioElement = new Audio(Song);
  let musicStore = {
    currentTime: `00:00`,
    duration: `00:00`,
    progress: 0,
    isPaused: true,
  };
  let intervalId = 0;
  function togglePlayPause() {
    if (!audioEl.paused) {
      clearInterval(intervalId);
      audioEl.pause();
      musicStore = {
        ...musicStore,
        isPaused: true,
      };
      return;
    }
    audioEl.volume = 0;
    audioEl.play();
    const { duration } = {
      ...audioEl,
      duration: Math.floor(audioEl.duration),
    };
    musicStore = {
      ...musicStore,
      isPaused: false,
      duration: formatVideoDuration(duration),
    };
    intervalId = setInterval(() => {
      const { currentTime, duration } = audioEl;
      if (currentTime >= duration) {
        clearInterval(intervalId);
        console.log("Done playing video");
        audioEl.pause();
        musicStore = {
          ...musicStore,
          isPaused: true,
          progress: 100,
          currentTime: formatVideoDuration(currentTime),
        };
      } else
        musicStore = {
          ...musicStore,
          progress: Math.floor((currentTime / duration) * 100),
          currentTime: formatVideoDuration(currentTime),
        };
    }, 400);
  }
</script>

<section
  class="flex-grow min-h-16 max-h-16 bg-tertiary flex px-4 items-center gap-2 rounded-lg font-Satoshi"
  on:keyup={({key}) => {
    if (key === ' ') togglePlayPause();
  }}
  tabindex={0}
  role="button"
>
  <div class="flex items-center gap-2">
    <button on:click={togglePlayPause} on:keyup|stopPropagation={({key}) => {
      if (key === ' ') togglePlayPause();
    }}>
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
  <div class="flex items-center gap-2">
    <div class="flex items-center gap-2 text-base text-secondary font-semibold">
      <p class="w-14 text-center">{musicStore.currentTime}</p>
      <ProgressBar progress={musicStore.progress} />
      <p class="w-14 text-center">{musicStore.duration}</p>
    </div>
    <Volume />
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
