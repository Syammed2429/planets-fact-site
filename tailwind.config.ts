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
        mercury: '#419EBB',
        venus: '#EDA249',
        'earth-color': '#6f2ed6',
        mars: '#D14C32',
        jupiter: '#D83A34',
        saturn: '#CD5120',
        uranus: '#1ec2a4',
        neptune: '#2D68F0',
        'dark-color-custom': '#070724',
        'light-black-custom': '#38384F',
      },
      fontFamily: {
        'league-spartan': ['League Spartan'], // Add this line
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
