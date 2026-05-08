/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Variable"', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg: '#0A0E1A',
        surface: {
          DEFAULT: '#0F1629',
          2: '#141C33',
        },
        ink: {
          DEFAULT: '#E5E7EB',
          dim: '#9CA3AF',
          muted: '#6B7280',
        },
        accent: {
          indigo: '#6366F1',
          cyan: '#06B6D4',
          violet: '#A78BFA',
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 60px -15px rgba(99, 102, 241, 0.45)',
        'glow-cyan': '0 0 60px -15px rgba(6, 182, 212, 0.40)',
        'glow-violet': '0 0 60px -15px rgba(167, 139, 250, 0.45)',
        'inner-hairline': 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 25%, rgba(6,182,212,0.10), transparent 60%)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
