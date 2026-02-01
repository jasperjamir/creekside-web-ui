/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'creekside': {
          'blue-royal': '#2658B2',
          'blue-medium': '#418EB1',
          'blue-soft': '#6DA4D7',
          'blue-light': '#B9D9EB',
          'blue-navy': '#052049',
          'green': '#A4D16A',
          'yellow': '#FAC60B',
          'cream': '#FDF6E8',
        },
      },
      fontFamily: {
        sans: ['"Libre Franklin"', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s ease-in',
      },
    },
  },
  plugins: [],
}
