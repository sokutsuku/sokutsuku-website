export type ThemeMode = 'dark' | 'light'

export const themeColors = {
  'dark': {
    background: '143 13% 6%',      // neutral-dark-950: #101411
    foreground: '143 15% 81%',     // neutral-dark-200: #A4C8A8
    card: '143 13% 8%',            // neutral-dark-900: #131A15
    'card-foreground': '143 15% 78%', // neutral-dark-300: #86A98C
    popover: '143 13% 8%',         // neutral-dark-900: #131A15
    'popover-foreground': '143 15% 78%', // neutral-dark-300: #86A98C
    primary: '142 75% 96%',        // brand-50: #f0fdf4
    'primary-foreground': '142 72% 16%', // brand-800: #14532d
    secondary: '143 13% 11%',      // neutral-dark-800: #1C2A20
    'secondary-foreground': '143 15% 78%', // neutral-dark-300: #86A98C
    muted: '143 13% 11%',          // neutral-dark-800: #1C2A20
    'muted-foreground': '143 15% 60%', // neutral-dark-400: #678A6F
    accent: '143 13% 11%',         // neutral-dark-800: #1C2A20
    'accent-foreground': '143 15% 78%', // neutral-dark-300: #86A98C
    destructive: '0 62% 30%',
    'destructive-foreground': '0 85% 97%',
    border: '143 13% 11%',         // neutral-dark-800: #1C2A20
    input: '143 13% 11%',          // neutral-dark-800: #1C2A20
    ring: '142 75% 96%',           // brand-50: #f0fdf4
  },
  'light': {
    background: '143 14% 98%',     // neutral-light-50: #FBFDFB
    foreground: '143 24% 20%',     // neutral-light-950: #224F36
    card: '143 11% 97%',           // neutral-light-100: #F8FAF8
    'card-foreground': '143 24% 20%', // neutral-light-950: #224F36
    popover: '143 11% 97%',        // neutral-light-100: #F8FAF8
    'popover-foreground': '143 24% 20%', // neutral-light-950: #224F36
    primary: '142 72% 16%',        // brand-800: #14532d
    'primary-foreground': '142 75% 96%', // brand-50: #f0fdf4
    secondary: '143 7% 94%',       // neutral-light-200: #F1F5F2
    'secondary-foreground': '143 24% 20%', // neutral-light-950: #224F36
    muted: '143 7% 94%',           // neutral-light-200: #F1F5F2
    'muted-foreground': '143 14% 46%', // neutral-light-600: #99B2A3
    accent: '143 7% 94%',          // neutral-light-200: #F1F5F2
    'accent-foreground': '143 24% 20%', // neutral-light-950: #224F36
    destructive: '0 84% 60%',
    'destructive-foreground': '0 0% 98%',
    border: '143 10% 89%',         // neutral-light-300: #E9EFEA
    input: '143 10% 89%',          // neutral-light-300: #E9EFEA
    ring: '142 72% 16%',           // brand-800: #14532d
  }
}

export const applyTheme = (mode: ThemeMode) => {
  const colors = themeColors[mode]
  const root = document.documentElement
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
}