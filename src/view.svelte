<script>
  import { appWindow } from "@tauri-apps/api/window";
  import { onMount } from "svelte";
  import ContentPane from "./components/ContentPane.svelte";
  import Sidebar from "./components/Sidebar.svelte";

  onMount(() => {
    window.addEventListener("keyup", async ({ key }) => {
      const isFullscreen = await appWindow.isFullscreen();
      if (key === 'F11') appWindow.setFullscreen(!isFullscreen)
    });
  });
</script>

<section class="h-full w-full bg-primary flex text-primary">
  <Sidebar />
  <ContentPane />
</section>
