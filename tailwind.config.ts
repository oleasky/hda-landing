import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0E112B',
          700: '#151936',
          800: '#0F1329',
          900: '#0E112B',
        },
        hda: {
          blue: {
            DEFAULT: '#368EFF',
            light: '#5BA3FF',
            dark: '#2B71CC',
          },
          cyan: { DEFAULT: '#00C3D0' },
          green: { DEFAULT: '#1EB367' },
          navy: {
            DEFAULT: '#0E112B',
            light: '#0F172A',
          },
          slate: {
            DEFAULT: '#94a3b8',
            light: '#cbd5e1',
            dark: '#64748b',
            muted: '#abbbd0',
          },
          text: {
            DEFAULT: '#E2E8F0',
            featured: '#8FC0FF',
            paragraph: '#C1CEE1',
            light: '#F5F5F5',
          },
        },
      },
      letterSpacing: {
        luxury: '0.08em',
        'wide-caps': '0.25em',
      },
    },
  },
  plugins: [],
};

export default config;
