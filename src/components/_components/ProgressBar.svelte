<script lang="ts" >
  import { noop, percentage, px } from "@/src/utils";
  import { cubicOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  export let progress: number;
  export let width: number = 320;
  export let onClick: (progress: number) => void = () => undefined;
</script>

<!-- the noop function is used to prevent the default behavior of the button when the Space key is pressed. -->
<button
  in:slide={{
    axis: 'x',
    easing: cubicOut
  }}
  out:slide={{
    axis: 'x',
    easing: cubicOut
  }}
  style="max-width: 320px; width: {px(width)};" 
  class="h-[5px] bg-white/60 rounded-full group relative"
  on:click={(ev) => {
    ev.preventDefault();
    const { currentTarget, offsetX } = ev;
    console.log('Tochi');
    const totalWidth = currentTarget.getBoundingClientRect().width;
    const calculatedProgress = (offsetX / totalWidth) * 100;
    onClick(calculatedProgress);
    progress = calculatedProgress;
  }}
  on:keyup|preventDefault={noop}
>
  <div
    style="width: {percentage(progress)};"
    class="h-full bg-white rounded-full hover:bg-secondary progress-bar hover:after:block group-hover:after:block group-hover:bg-secondary transition-[width] duration-300"
  />
</button>