/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'old-english': ['"UnifrakturMaguntia"', 'serif'],
        'serif': ['"Crimson Text"', 'Georgia', 'serif'],
        'sans': ['"Source Sans Pro"', 'Arial', 'sans-serif'],
        'mono': ['"Courier Prime"', 'monospace'],
      },
      colors: {
        paper: {
          light: '#f8f6f1',
          DEFAULT: '#f2f0e6',
          dark: '#e8e6dc'
        },
        ink: {
          light: '#464646',
          DEFAULT: '#1a1a1a',
          dark: '#000000'
        }
      }
    },
  },
  plugins: [],
};