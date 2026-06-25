/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0F',
        surface: {
          dark: '#12121A',
          light: '#FFFFFF',
        },
        light: '#F8F9FF',
        accent: {
          primary: '#6C63FF',
          secondary: '#00D4FF',
        },
        'text-primary-dark': '#F0F0FF',
        'text-secondary-dark': '#8888AA',
        'text-primary-light': '#0D0D1A',
        'text-secondary-light': '#555577',
        success: '#00E676',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(108, 99, 255, 0.1)',
        'glow-hover': '0 0 50px rgba(108, 99, 255, 0.25)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
