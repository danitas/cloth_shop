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
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    colors: {
      black: '#020202',
      white: '#ffffff',
      beige: '#F3F3F3',
      gray: {
        light: '#f7f7f7',
        DEFAULT: '#888888',
        dark: '#333333',
      },
      blue: {
        DEFAULT: '#213547',
        hover: '#747bff',
      },
      ring: '#00000047',
      button: {
        DEFAULT: '#f9f9f9',
        hover: '#646cff',
      },
    },
    fontFamily: {
      base: ['Bitum', 'serif'],
      baseLight: ['BitumLight', 'sans-serif'],
    },
    fontSize: {
      xs: '11px',
      sm: '12px',
      base: '13px',
      large: '14px',
      md: '16px',
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
