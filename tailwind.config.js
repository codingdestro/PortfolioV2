/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        ssm: "8px",
        smd: "10px",
        slg: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "30px",
        "3xl": "36px",
      },
      fontFamily: {
        poppins: ["Poppins"],
        georgia: ["Georgia Regular"],
      },
      colors: {
        primary: "#000000",
        secondary: "#d3d3d3",
        ternary: "#fc345c",
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
      },
      keyframes: {
        fadezoomin: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        fadeslideup: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadezoomin: "fadezoomin 0.4s forwards",
        fadeslideup: "fadeslideup 0.8s ease-out forwards .4s",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".bg-gradient-to-b-fade": {
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
  corePlugins: {
    scrollBehavior: true,
  },
}
