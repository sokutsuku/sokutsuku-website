import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem', // 24px (mobile margin)
        sm: '2rem',
        md: '1.5rem',      // 24px (gutter)
        lg: '1.5rem',      // 24px (gutter)
        xl: '1.5rem',      // 24px (gutter)
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',   // new breakpoint for wide content
      },
    },
    extend: {
      maxWidth: {
        'content': '1120px',        // <1440px
        'content-wide': '1240px',   // ≥1440px (2xl)
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // カスタムブランドカラー
        brand: {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#22c55e',
          '600': '#16a34a',
          '700': '#15803d',
          '800': '#14532d',
          '900': '#064e3b',
          '950': '#052e16',
          DEFAULT: '#14532d',
        },
        // カスタムニュートラルカラー
        neutral: {
          '50': '#FBFDFB',
          '100': '#F8FAF8',
          '200': '#F1F5F2',
          '300': '#E9EFEA',
          '400': '#DDE6DE',
          '500': '#BCCDC1',
          '600': '#99B2A3',
          '700': '#779885',
          '800': '#557D67',
          '900': '#336349',
          '950': '#224F36',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px  (8px × 0.5)
        '2': '0.5rem',      // 8px  (8px × 1)
        '4': '1rem',        // 16px (8px × 2)
        '6': '1.5rem',      // 24px (8px × 3)
        '8': '2rem',        // 32px (8px × 4)
        '10': '2.5rem',     // 40px (8px × 5)
        '12': '3rem',       // 48px (8px × 6)
        '16': '4rem',       // 64px (8px × 8)
        '20': '5rem',       // 80px (8px × 10)
        '24': '6rem',       // 96px (8px × 12)
      },
      fontFamily: {
        'bebas': ['var(--font-bebas-neue)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'noto-jp': ['var(--font-noto-sans-jp)', 'sans-serif'],
        'heading': ['var(--font-bebas-neue)', 'sans-serif'], // 英語見出し用
        'body': ['var(--font-dm-sans)', 'var(--font-noto-sans-jp)', 'sans-serif'], // 本文用
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config