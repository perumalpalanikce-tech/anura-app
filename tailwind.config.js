/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          soft: '#1C1C1E',
          line: '#2C2C2E',
        },
        gold: {
          DEFAULT: '#D4A373',
          deep: '#B8895A',
          pale: '#E8CBA8',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          card: '#FFFFFF',
          line: '#E8E1D6',
        },
        maroon: {
          DEFAULT: '#6B1F2A',
          soft: '#8C2E3A',
        },
        muted: '#8E8E93',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      borderRadius: {
        sm: '4px',
      },
    },
  },
  plugins: [],
};
