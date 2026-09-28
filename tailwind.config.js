/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0B0F14',
        surface: {
          dark: '#121820',
          light: '#FFFFFF',
        },
        light: '#F1F3F5',
        accent: {
          primary: '#2DD4BF',
          secondary: '#F59E0B',
        },
        'text-primary-dark': '#E8EEF2',
        'text-secondary-dark': '#8B9AAB',
        'text-primary-light': '#0B0F14',
        'text-secondary-light': '#5A6570',
        success: '#34D399',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(45, 212, 191, 0.08)',
        'glow-hover': '0 12px 40px rgba(45, 212, 191, 0.18)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'line-draw': 'line-draw 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'line-draw': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};
