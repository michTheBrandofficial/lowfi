<script lang="ts">
  export let activeIndex: number | null = null;
  export let index: number;
</script>

{#if index === activeIndex}
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.4056 25.0313C26.9432 23.4628 27.8913 21.3143 27.8913 18.9443C27.8913 14.1418 23.9981 10.2487 19.1957 10.2487C14.3932 10.2487 10.5 14.1418 10.5 18.9443C10.5 23.7468 14.3932 27.64 19.1957 27.64C21.6282 27.64 23.8274 26.6411 25.4056 25.0313ZM25.4056 25.0313L30.5 30.2487"
      stroke="#898989"
      stroke-width="2.02054"
      stroke-linecap="round"
    />
    <circle
      cx="19.2"
      cy="18.9487"
      r="5.7"
      fill="#898989"
    />
  </svg>
{:else}
  <svg
    width="41"
    height="42"
    viewBox="0 0 41 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.1546 25.0313C26.6922 23.4628 27.6403 21.3143 27.6403 18.9443C27.6403 14.1418 23.7472 10.2487 18.9447 10.2487C14.1422 10.2487 10.249 14.1418 10.249 18.9443C10.249 23.7468 14.1422 27.64 18.9447 27.64C21.3772 27.64 23.5764 26.6411 25.1546 25.0313ZM25.1546 25.0313L30.249 30.2487"
      stroke="#898989"
      stroke-width="2.02054"
      stroke-linecap="round"
    />
  </svg>
{/if}
