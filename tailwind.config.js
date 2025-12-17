/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        savanna: {
          900: '#1c1917', // stone-900
          800: '#292524', // stone-800
          100: '#f5f5f4', // stone-100
          accent: '#d97706', // amber-600
        },
        rift: {
          green: '#10b981', // emerald-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}