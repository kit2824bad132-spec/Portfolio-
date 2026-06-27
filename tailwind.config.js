/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow':   'spin 20s linear infinite',
        'pulse-glow':  'pulse-glow 2s ease-in-out infinite',
        'float':       'float 4s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
