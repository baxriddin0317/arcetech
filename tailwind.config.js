/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-button": "rgba(0, 0, 0, 0.42)",
        "sources-gray": "rgba(151, 146, 146, 0.26)",
        "drill": "#282828",
        "fromBlue": "#0E15CE",
        "toBlue": "#52DBF9",
      },
      spacing: {
        '21': '21px',
        '22': '22px',
        '33': '33px',
        '79': '79px',
        '200': '200px',
        '844': '844px'
      },
      fontFamily: {
        "darker": "Darker Grotesque"
      },
      fontSize: {
        "headline-sm": ["25px", "34px"],
        "headline-lg": ["40px", "54px"],
        "headline-md": ["35px", "47px"],
        "hero-sm": ["65px", "50px"],
        "sources-sm": ["10px", "13px"],
        "production-sm": ["15px", "20px"],
        "solution-xl": ["150px", "125px"],
        "8.5xl": ["125px", "125px"],
        "10xl": ["200px", "200px"],
        "4.5xl": ["48px", "54px"],
        "5.5xl": ["50px", "50px"],
      },
      boxShadow: {
        "light-shadow": '0px 3px 8px rgba(255, 255, 255, 0.24)'
      },
      maxWidth: {
        "7.5xl": "1352px",
        "8xl": "1600px",
        "6.5xl": "1220px"
      },
      backgroundImage: {
        "text-gradeint": "conic-gradient(from 156.47deg at 28.23% 50%, #0E15CE 0deg, #52DBF9 40.54deg, #50D5F7 65.63deg, #0E15CE 360deg)",
        "flow": "url(../public/assets/flow.png)"
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
