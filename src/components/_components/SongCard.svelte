<script lang="ts">
  import AlbumCover from "@/static/Offset-Set-It-Off-.webp";
  const colors = ["#FFCBD4", "#CCF665", "#FFC668"];
  export let index: number;
  let color = colors[index % colors.length];
</script>

<div class="w-44 min-h-60 flex flex-col items-center relative">
  <div
    style="background-color: {color};"
    class="h-2 w-[84%] opacity-15 rounded-t-full absolute -top-3"
  />
  <div
    style="background-color: {color};"
    class="h-2 w-[94%] opacity-55 rounded-t-full absolute -top-1.5 shadow-top-full"
  />
  <div class="w-full flex flex-col gap-y-1.5 font-medium">
    <div class="w-44 h-44 relative rounded-md shadow-top-full">
      <img
        src={AlbumCover}
        alt="Album Cover"
        class="h-full w-full rounded-inherit"
      />
      <div
        class="w-full h-fit border-b-8 pb-3 absolute bottom-0 rounded-b-inherit"
        style="border-bottom-color: {color};"
      >
        <p class="font-semibold border-l-8 pl-3"
        style="border-left-color: {color};"
        >Set it off</p>
      </div>
    </div>
    <div class="w-full h-fit flex justify-between">
      <p>Clout</p>
      <p style="color: {color};" >50</p>
    </div>
    <p class="text-secondary">Offset, Cardi B</p>
  </div>
</div>
