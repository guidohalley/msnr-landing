/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Breakpoint para móviles pequeños
      },
      colors: {
        primary: {
          light: '#4f8cff',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        accent: {
          light: '#fbbf24',
          DEFAULT: '#f59e42',
          dark: '#b45309',
        },
        background: '#f9fafb',
        foreground: '#18181b',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
