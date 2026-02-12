import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ballast: {
          950: '#050816',
          900: '#0a1028',
          700: '#1f2a52',
          500: '#3d7eff',
          300: '#87b0ff',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(135,176,255,0.3), 0 14px 30px rgba(15,23,42,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
