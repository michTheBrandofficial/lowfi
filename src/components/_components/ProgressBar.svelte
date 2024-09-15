<script lang="ts" >
  import { percentage } from "@/src/utils";

  export let progress: number;
</script>

<!-- progress -->
<div class="w-80 h-[5px] bg-white/60 rounded-full">
  <div
    style="width: {percentage(progress)};"
    class="w-[10%] h-full bg-white rounded-full hover:bg-secondary progress-bar hover:after:block"
  />
</div>