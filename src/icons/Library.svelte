<script lang="ts">
  export let activeIndex: number | null = null;
  export let index: number;
</script>

{#if activeIndex === index}
  <svg
    width="41"
    height="42"
    viewBox="0 0 41 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7324 12.2324V29.5193"
      stroke="#898989"
      stroke-width="2.02054"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.4946 12.2324V29.5193"
      stroke="#898989"
      stroke-width="2.02054"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.2571 29.5193V12.2324L29.0194 16.2217V29.5193H23.2571Z"
      fill="#898989"
      stroke="#898989"
      stroke-width="2.02054"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    <mask
      id="mask0_7_112"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="41"
      height="41"
    >
      <path
        d="M40.4108 0H0V40.4108H40.4108V0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_7_112)">
      <path
        d="M11.562 11.5621V28.8489"
        stroke="#898989"
        stroke-width="2.02054"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3243 11.5621V28.8489"
        stroke="#898989"
        stroke-width="2.02054"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.0865 28.8489V11.5621L28.8488 15.5514V28.8489H23.0865Z"
        stroke="#898989"
        stroke-width="2.02054"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
{/if}
