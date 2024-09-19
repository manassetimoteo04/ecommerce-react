/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
      screens: {
        xxs: '320px', // => @media (min-width: 320px) { ... } (telas super pequenas, tipo iPhone SE)
        xs: '480px', // => @media (min-width: 480px) { ... } (telas pequenas, tipo smartphones)
        sm: '640px', // => @media (min-width: 640px) { ... }
        md: '768px', // => @media (min-width: 768px) { ... }
        lg: '1024px', // => @media (min-width: 1024px) { ... }
        xl: '1280px', // => @media (min-width: 1280px) { ... }
        '2xl': '1536px', // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
