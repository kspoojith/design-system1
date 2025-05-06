import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode via `class`
  theme: {
    extend: {
      fontSize: {
        'heading-1': ['2.25rem', { lineHeight: '2.5rem' }],
        'heading-2': ['1.875rem', { lineHeight: '2.25rem' }],
        'heading-3': ['1.5rem', { lineHeight: '2rem' }],
        'heading-4': ['1.25rem', { lineHeight: '1.75rem' }],
        'heading-5': ['1.125rem', { lineHeight: '1.5rem' }],
        'heading-6': ['1rem', { lineHeight: '1.5rem' }],
        paragraph: ['1rem', { lineHeight: '1.75rem' }],
        label: ['0.875rem', { lineHeight: '1.25rem' }],
        caption: ['0.75rem', { lineHeight: '1rem' }],
        helper: ['0.875rem', { lineHeight: '1.25rem' }],
      },
      fontWeight: {
        label: '500',
        heading: '600',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
