<script>
  import Header from "./_components/Header.svelte";
  import MainPane from "./_components/MainPane.svelte";
  import MusicPlaying from "./_components/MusicPlaying.svelte";
  let isLoading = false;
</script>
<section class="flex-grow py-1.5 pr-1.5 flex flex-col gap-y-1.5 " >
  <Header />
  <MainPane {isLoading} />
  <MusicPlaying />
</section>