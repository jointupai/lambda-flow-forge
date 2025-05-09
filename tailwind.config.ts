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
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#d9e2ec", 
        'brand-primary': {
          50: '#fcfcca',
          100: '#f9f9a0',
          200: '#f5f576',
          300: '#f2f24c',
          400: '#EBF212',
          500: '#EBF212',
          600: '#d6dd0f',
          700: '#c2ca0c',
          800: '#adb609',
          900: '#99a306',
        },
        'brand-secondary': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'modern': '0 10px 25px rgba(0, 112, 243, 0.1)',
        'hover': '0 15px 35px rgba(0, 112, 243, 0.15)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50%))' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
