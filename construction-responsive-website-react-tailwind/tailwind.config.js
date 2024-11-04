/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      colors: {
        'first-color': 'var(--first-color)',
        'second-color': 'var(--second-color)',
        'title-color': 'var(--title-color)',
        'text-color': 'var(--text-color)',
        'text-color-light': 'var(--text-color-light)',
        'body-color': 'var(--body-color)',
        'container-color': 'var(--container-color)',
        'black-color': '#16141e',
        'white-color': 'val(--white-color)',
        'gray-border': 'var(--gray-border)',
        'black-border': 'var(--black-border)',
      },
      backgroundImage: {
        'first-gradient': 'linear-gradient(90deg, hsl(18, 95%, 55%), hsl(18, 98%, 64%))',
      },
      fontSize: {
        'big': 'var(--big-font-size)',
        'h1': 'var(--h1-font-size)',
        'h2': 'var(--h2-font-size)',
        'h3': 'var(--h3-font-size)',
        'normal': 'var(--normal-font-size)',
        'small': 'var(--small-font-size)',
      },
      zIndex: {
        'tooltip': 'var(--z-tooltip)',
        'fixed': 'var(--z-fixed)',
      },
      spacing: {
        header: '3.5rem',
      },
    },
  },
  plugins: [],
}

