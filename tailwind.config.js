export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        blush: '#ff5e9e',
        royal: '#8b3ff0',
        ink: '#140a1f',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212,175,55,0.35)',
      },
    },
  },
  plugins: [],
}
