<script lang="ts">
  export let position: "forward" | "backward" = "forward";
</script>

{#if position === "forward"}
  <svg
    width="42"
    height="41"
    viewBox="0 0 42 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.0784 15.1539V25.2566"
      stroke="#898989"
      stroke-width="2.52568"
      stroke-linecap="round"
    />
    <path
      d="M24.07 18.9169C25.0089 19.5192 25.0089 20.8914 24.07 21.4937L17.07 25.9841C16.0513 26.6377 14.7128 25.9061 14.7128 24.6957L14.7128 15.7149C14.7128 14.5045 16.0513 13.7729 17.07 14.4265L24.07 18.9169Z"
      fill="#898989"
    />
  </svg>
{:else}
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5648 15.1539V25.2566"
      stroke="#898989"
      stroke-width="2.52568"
      stroke-linecap="round"
    />
    <path
      d="M17.5732 21.4937C16.6343 20.8914 16.6343 19.5193 17.5732 18.9169L24.5731 14.4265C25.5919 13.7729 26.9304 14.5045 26.9304 15.7149V24.6958C26.9304 25.9061 25.5919 26.6377 24.5731 25.9842L17.5732 21.4937Z"
      fill="#898989"
    />
  </svg>
  <!-- prev song -->
{/if}
