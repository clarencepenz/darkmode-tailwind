/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors: {
        'primary': {
          'dark' : '#0f172a',
          'light': "#f8fafc"
        },
        'secondary': {
          'dark' : '#22c55e',
          'light': "#a3e635"
        },
        'outline': {
          'dark': '#9d174d',
          'light': '#1e40af',
        },
      },
  },
  plugins: [],
}

