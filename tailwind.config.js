/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      screens : {
        mn:"940px",
        yu:"739px",
        op:"456px",
        ii: "477px"
      }
    },
  },
  plugins: [
    
  ],
}

