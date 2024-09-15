import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  output: {
    dir: 'dist', // or any other directory of your choice
  },
};

export default config;
