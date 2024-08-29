import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#000000',
          secondary: '#ffffff',
          accent: '#f000b8',
          neutral: '#3d4451',
          'base-100': '#ffffff', // Ensure the base background color is white
        },
      },
      'dark', // Optionally include other themes if needed
    ],
  },
};


