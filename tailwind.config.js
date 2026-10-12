/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          navy: '#0B1722',
          navySecondary: '#122333',
          darkText: '#17212B',
          red: '#D9232E',
          redHover: '#B91F29',
          amber: '#F4B323',
          lightBg: '#F5F7FA',
          secondaryText: '#647384',
          border: '#E1E7ED',
          success: '#16835D',
        },
        vikram: {
          red: '#D9232E',
          darkRed: '#B91F29',
          lightRed: '#EF4444',
          navy: '#0B1722',
          surface: '#122333',
          panel: '#1A2E42',
          border: '#E1E7ED',
          borderRed: 'rgba(217, 35, 46, 0.4)',
        },
        brand: {
          navy: '#0B1722',
          navySecondary: '#122333',
          red: '#D9232E',
          amber: '#F4B323',
          lightBg: '#F5F7FA',
          border: '#E1E7ED',
          darkText: '#17212B',
          secondaryText: '#647384',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-horizontal': 'flow-horizontal 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        'flow-horizontal': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
