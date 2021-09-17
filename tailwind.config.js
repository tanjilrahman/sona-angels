module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'ui-sans-serif', 'system-ui'],
      display: ['Poppins'],
    },
    extend: {
      colors: {
        primary: '#FD5B2F',
      },
      animation: {
        grow: 'grow 1s ease-in-out infinite',
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scaleX(3)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
