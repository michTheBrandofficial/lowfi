<script lang="ts" >
  import { noop, percentage, px } from "@/src/utils";

  export let progress: number;
  export let width: number = 320;
  export let onClick: (progress: number) => void = () => undefined;
</script>

<!-- the noop function is used to prevent the default behavior of the button when the Space key is pressed. -->
<button 
  type="button"
  style="max-width: 320px; width: {px(width)};" 
  class="h-[5px] bg-white/60 rounded-full group"
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
    class="h-full bg-white rounded-full hover:bg-secondary progress-bar hover:after:block group-hover:after:block group-hover:bg-secondary"
  />
</button>