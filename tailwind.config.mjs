/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A3729',
          50: '#f0f2f0',
          100: '#d9ddd8',
          200: '#b8c0b6',
          300: '#95a391',
          400: '#738670',
          500: '#516953',
          600: '#4a5f4a',
          700: '#3f533f',
          800: '#2A3729',
          900: '#1e2a1e',
          950: '#151d15'
        },
        secondary: {
          DEFAULT: '#265143',
          50: '#f0f4f2',
          100: '#d8e4df',
          200: '#b5ccc3',
          300: '#8fb2a4',
          400: '#6a9685',
          500: '#4e7b6a',
          600: '#446856',
          700: '#3a5748',
          800: '#265143',
          900: '#1d3e33',
          950: '#132a23'
        },
        tertiary: {
          DEFAULT: '#272831',
          50: '#f1f1f2',
          100: '#dddde0',
          200: '#bbbbc0',
          300: '#96969d',
          400: '#71717a',
          500: '#545461',
          600: '#474750',
          700: '#3c3c44',
          800: '#272831',
          900: '#1f1f26',
          950: '#14141a'
        },
        accent: {
          DEFAULT: '#0D1518',
          50: '#e6e8e9',
          100: '#c4c8ca',
          200: '#9ea5a8',
          300: '#788286',
          400: '#52606b',
          500: '#2e3e50',
          600: '#293749',
          700: '#232f40',
          800: '#1c2733',
          900: '#0D1518',
          950: '#070a0c'
        },
        surface: {
          DEFAULT: '#061717',
          50: '#e5e8e8',
          100: '#c2c8c8',
          200: '#9ba5a5',
          300: '#748282',
          400: '#536565',
          500: '#324848',
          600: '#2d4141',
          700: '#263838',
          800: '#1f2f2f',
          900: '#061717',
          950: '#030b0b'
        }
      },
      fontFamily: {
        sans: ['Amble', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Amble', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        amble: ['Amble', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mountain-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
      },
    },
  },
  plugins: [],
}
