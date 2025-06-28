import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        salon: {
          peach: '#FFDEE2',
          pink: '#FFB6C1',
          brown: '#4A2C2A',
          cream: '#FFF5E1',
          gold: '#D4AF37',
          'light-brown': '#8B7355',
          'dark-pink': '#C76B79',
        },
        // Futuristic additions
        glass: 'rgba(255,255,255,0.15)',
        'neon-pink': '#FF4DFE',
        'neon-blue': '#00F0FF',
        'neon-green': '#39FF14',
        'gradient-start': '#FFDEE2',
        'gradient-end': '#00F0FF',
        'space-gray': '#23272F',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '3xl': '2rem',
        'full': '9999px',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'], // Futuristic font
      },
      boxShadow: {
        'neon-pink': '0 0 8px #FF4DFE, 0 0 16px #FF4DFE',
        'neon-blue': '0 0 8px #00F0FF, 0 0 16px #00F0FF',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
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
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        // Futuristic animations
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 8px #00F0FF, 0 0 16px #00F0FF' },
          '50%': { boxShadow: '0 0 24px #00F0FF, 0 0 48px #00F0FF' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 8px #FF4DFE, 0 0 16px #FF4DFE' },
          '50%': { boxShadow: '0 0 24px #FF4DFE, 0 0 48px #FF4DFE' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-fast': 'fade-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        // Futuristic animations
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;