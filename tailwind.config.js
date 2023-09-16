/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        space:
          "url('https://economictimes.indiatimes.com/thumb/msid-96270449,width-3000,height-1732,resizemode-4,imgsize-949414/james-webb-space-telescope.jpg?from=mdr')",
      },
    },
  },
  plugins: [],
};
