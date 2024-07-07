import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      colors: {
        border: {
          500: '#1e293b',
        },
        dark: {
          900: '#09090b',
        },
        light: {
          100: '#ffffff',
          200: '#f6f8fa',
          300: '#ebebeb',
          400: '#f1f5f9',
          500: '#8894a6',
          600: '#7f8ca0',
        },
        primary: {
          500: '#3b82f6',
          400: '#2563eb',
          600: '#1f4586',
          700: '#020817',
        },
        secondary: {
          300: '#d3e0fb',
          400: '#92b1f5',
          500: '#1e293b',
          600: '#0e2043',
        },
        destructive: {
          500: '#dc2626',
        },
        success: {
          500: '#22c55e',
        },
        muted: {
          400: '#7f8ca0',
        },
        accent: {
          400: '#3b82f6',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        quicksand: ['var(--font-quicksand)'],
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
      },
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
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
