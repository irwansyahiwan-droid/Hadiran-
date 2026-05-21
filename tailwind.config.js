/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#edfcf2',
          100: '#d4f7e0',
          200: '#acedc6',
          300: '#75dea5',
          400: '#3cc87f',
          500: '#18ad63',
          600: '#0c8b4f',
          700: '#0a6f41',
          800: '#0b5835',
          900: '#0a482d',
        },
        surface: {
          0: '#ffffff',
          50: '#fafbfc',
          100: '#f4f5f7',
          200: '#ebedf0',
          300: '#dfe1e6',
        },
        ink: {
          900: '#0f1419',
          700: '#2d3748',
          500: '#596273',
          400: '#7b8494',
          300: '#a0a8b8',
          200: '#c8cdd6',
        },
      },
      borderRadius: {
        card: '16px',
        btn: '12px',
        float: '20px',
        chip: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)',
        float: '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        nav: '0 -1px 0 rgba(0,0,0,0.04), 0 -4px 16px rgba(0,0,0,0.03)',
      },
      fontSize: {
        'balance': ['2.25rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading': ['1.125rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['0.9375rem', { lineHeight: '1.5', fontWeight: '500' }],
        'caption': ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }],
        'micro': ['0.6875rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.16,1,0.3,1)',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
