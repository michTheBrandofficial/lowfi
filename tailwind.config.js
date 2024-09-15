/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        test1: '#FFCBD4',
        test2: '#CCF665',
        test3: '#FFC668',
      },
      backgroundColor: {
        "primary": "#060606",
        secondary: "#1ED760",
        tertiary: '#333842'
      },
      borderColor: {
        'divider': "#898989"
      },
      textColor: {
        primary: '#fff',
        secondary: '#898989'
      },
      stroke: {
        primary: '#fff',
        secondary: '#898989'
      },
      fill: {
        primary: '#fff',
        secondary: '#898989'
      },
      gridTemplateColumns: {
        'with-sidebar': 'minmax(300px, 0.2fr) 0.8fr'
      },
      borderRadius: {
        'inherit': 'inherit'
      },
      boxShadow: {
        'top-full': `0px -1px 1px 0px #060606`
      }
    },
  },
  plugins: [],
}

