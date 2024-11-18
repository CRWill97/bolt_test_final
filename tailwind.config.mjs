/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tech-primary': '#2D3748',
        'tech-accent': '#4C51BF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}