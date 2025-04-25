/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c2d8ff',
          300: '#9abbff',
          400: '#6d95ff',
          500: '#4c6ef5',
          600: '#4C1D95', // Deep Purple
          700: '#3a1673',
          800: '#2e1259',
          900: '#24094a',
        },
        secondary: {
          50: '#edfcf9',
          100: '#d2f9f1',
          200: '#acf0e4',
          300: '#75e1d2',
          400: '#40cabb',
          500: '#0D9488', // Teal
          600: '#0a766c',
          700: '#0d5f58',
          800: '#0f4b47',
          900: '#0f3d3a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse': 'pulse 8s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};