/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          jersey: ["Jersey 25", "cursive"], // Custom font family
          'inknut': ['"Inknut Antiqua"', 'serif'],
        },
        colors: {
          'newspaper-red': {
            light: '#db4439',
            dark: '#75241e',
          },
          'newspaper-cream': '#eaecd7',
          'coffee': {
            light: '#c48f7d',
            dark: '#8a5f52',
            text: '#ffffff',
          }
        }
      },
    },
    plugins: [],
  };
  