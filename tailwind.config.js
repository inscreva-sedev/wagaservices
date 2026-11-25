/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        waga: {
          ink: '#171A20',
          muted: '#5C5E62',
          subtle: '#F4F4F4',
          accent: '#3E6AE1',
          accentHover: '#3457B1',
        },
      },
      transitionTimingFunction: {
        tesla: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
