/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./wp-blocks/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-4': "url('/art.svg')",
        'section-4-mobile': "url('/artmobile.svg')",
        'talk-cover': "url('/talk-cover.svg')",
        'signup-section': "url('/signup-bg.svg')",
        'gradient-1': "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F4F0FF 100%)"
      },
      fontFamily: {
        Satoshi: ['Satoshi', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

