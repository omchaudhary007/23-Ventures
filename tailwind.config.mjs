/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['cursive', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangishRed: '#FE4A23',
      },
      animation: {
        'watereffect': 'waterEffect 3s ease-in-out infinite',
        "bouncetext": 'bounceText 1s ease-out forwards',
        'watervibrate': 'waterVibrate 1s ease-in-out infinite'
      },
      keyframes: {
        waterEffect: {
          '0%, 100%': {
            clipPath: 'polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
          },
          '50%': {
            clipPath: 'polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
          }
        },
        bounceText: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          }
        },
        waterVibrate: {
          '0%, 100%': {
            clipPath: 'polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
            transform: 'translateX(-5%)',
          },
          '50%': {
            clipPath: 'polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
            transform: 'translateX(5%)',
          },
        },
      },
    }
  },
  plugins: []
}
