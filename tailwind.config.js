module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      container: {
        padding: '2rem',
        center: true,
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }