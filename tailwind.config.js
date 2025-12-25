/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        superman: {
          blue: '#003f7f',
          'blue-light': '#1e5aa8',
          red: '#dc143c',
          'red-light': '#ff4757',
          gold: '#ffd700',
          'gold-light': '#ffed4e',
          dark: '#0a0a0a',
          'dark-light': '#1a1a1a',
        },
        krypton: {
          crystal: '#4ecdc4',
          'crystal-light': '#7fdbda',
          energy: '#00d4ff',
          'energy-light': '#4de6ff',
        }
      },
      fontFamily: {
        'hero': ['Orbitron', 'monospace'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
          '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'space': 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
      }
    },
  },
  plugins: [],
}