/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        superman: {
          blue: '#001a4d',
          'blue-light': '#003366',
          red: '#8b0000',
          'red-light': '#b30000',
          gold: '#b8860b',
          'gold-light': '#daa520',
          dark: '#000000',
          'dark-light': '#0d0d0d',
        },
        krypton: {
          crystal: '#2c5f5f',
          'crystal-light': '#4a8080',
          energy: '#0066cc',
          'energy-light': '#0080ff',
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
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'energy-flow': 'energy-flow 3s linear infinite',
        'particle-drift': 'particle-drift 15s linear infinite',
        'cosmic-rotation': 'cosmic-rotation 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0066cc, 0 0 10px #0066cc, 0 0 15px #0066cc' },
          '100%': { boxShadow: '0 0 10px #0066cc, 0 0 20px #0066cc, 0 0 30px #0066cc' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 102, 204, 0.4), 0 0 40px rgba(139, 0, 0, 0.2)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 102, 204, 0.8), 0 0 80px rgba(139, 0, 0, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        hologram: {
          '0%, 100%': { 
            transform: 'rotateY(0deg) rotateX(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            transform: 'rotateY(5deg) rotateX(2deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            transform: 'rotateY(0deg) rotateX(-2deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            transform: 'rotateY(-5deg) rotateX(2deg)',
            filter: 'hue-rotate(270deg)'
          },
        },
        'energy-flow': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-45deg)',
            opacity: '0'
          },
          '50%': { opacity: '1' },
          '100%': { 
            transform: 'translateX(200%) skewX(-45deg)',
            opacity: '0'
          },
        },
        'particle-drift': {
          '0%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translate(50px, -100px) rotate(180deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translate(100px, -200px) rotate(360deg)',
            opacity: '0'
          },
        },
        'cosmic-rotation': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'space': 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
      }
    },
  },
  plugins: [],
}