/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep "systems" canvas
        base: {
          900: '#06080C',
          800: '#0A0E14',
          700: '#0E141C',
          600: '#131A24',
          500: '#1A2330',
        },
        // Primary accent — teal/emerald
        accent: {
          DEFAULT: '#2DD4BF',
          50: '#ECFDF7',
          200: '#9BF1DF',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
        },
        // Secondary accent — electric sky for dataflow contrast
        signal: {
          DEFAULT: '#5B9DFF',
          400: '#5B9DFF',
          500: '#3B82F6',
        },
        ink: {
          DEFAULT: '#E6EDF3',
          soft: '#AEB9C6',
          dim: '#6B7785',
          faint: '#3A4350',
        },
        line: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45,212,191,0.18), 0 0 40px -8px rgba(45,212,191,0.35)',
        'glow-soft': '0 0 60px -20px rgba(45,212,191,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -30px rgba(0,0,0,0.9)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,212,191,0.10), transparent 70%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'flow-dash': {
          to: { strokeDashoffset: '-100' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.12)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sweep': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'flow-dash': 'flow-dash 1.6s linear infinite',
        'pulse-node': 'pulse-node 2.6s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'sweep': 'sweep 2.8s ease-in-out infinite',
        'blink': 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
