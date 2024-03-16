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
        ii: "477px",
        five: "586px",
        box: "409px",
        up: "365px",
        lop: "319px",
        mop: "303px",
        but: "425px",
        boxes: "381px",
        mdd: "785px",
        smm: "600px",
        caro: "500px",
        caro2: "455px",
        marg: "389px",
        th: "334px",
        last: "294px",
        destiny: "1375px",
        box5: "1050px"
      }
    },
  },
  plugins: [
    
  ],
}

