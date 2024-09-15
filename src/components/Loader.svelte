<script lang="ts" >
  import { deg, percentage, sec } from "../utils";
  export let className: string = '';
</script>

<section class="w-12 h-12 flex justify-center items-center {className}" >
  <div class="relative w-fit h-fit flex" >
    {#each Array(12).fill('') as _, i}
      <div
        class="w-[4px] h-3.5 bg-white/80 backdrop-blur-3xl rounded-lg fade-animation "
        style="position: absolute; left: 49%; top: 43%; animation-delay: {sec(i * 0.08333)}; transform: rotate({deg(i * 30)}) translateY({percentage(140)});"
        />
    {/each}
  </div>
</section>