/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the path according to your project structure
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#020202',
      white: '#ffffff',
      gray: {
        light: '#f7f7f7',
        DEFAULT: '#888888',
        dark: '#333333',
      },
      blue: {
        DEFAULT: '#213547', // Taken from :root (light mode)
        hover: '#747bff', // Matches hover state
      },
      ring: '#00000047', // Used in focus ring
      button: {
        DEFAULT: '#f9f9f9', // Button background in light mode
        hover: '#646cff',
      },
    },
    fontFamily: {
      base: ['Bitum', 'serif'],
      light: ['BitumLight', 'sans-serif'],
    },
    fontSize: {
      xs: '11px',
      sm: '12px',
      base: '13px',
      lg: '18px',
    },
    borderRadius: {
      none: '0',
      DEFAULT: '.5rem',
    },
    borderColor: {
      DEFAULT: '#E3E2E1',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
