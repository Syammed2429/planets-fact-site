import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './container/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        'slate-custom': '#838391',
        'teal-custom': '#419EBB',
        'yellow-custom': '#EDA249',
        'purple-custom': '#6D2ED5',
        'red-custom': '#D83A34',
        'dark-color-custom': '#070724',
        'light-black-custom': '#38384F',
        'marron-red-custom': '#D14C32',
        'light-orange-custom': '#CD5120',
        'sky-blue-custom': '#1EC1A2',
        'dark-blue-custom': '#2D68F0',
      },
      fontFamily: {
        'league-spartan': ['League Spartan'], // Add this line
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
