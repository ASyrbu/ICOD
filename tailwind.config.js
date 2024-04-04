/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfbfb",
          "200": "#909090",
          "300": "#1f2732",
          "400": "#161d27",
          "500": "rgba(31, 39, 50, 0.81)",
          "600": "rgba(255, 255, 255, 0.1)",
          "700": "rgba(31, 39, 50, 0.85)",
        },
        darkslategray: {
          "100": "#4a4f59",
          "200": "#3b434e",
          "300": "#2e3947",
        },
        burlywood: "#d1b06b",
        lightgray: "#d7d7d7",
        white: "#fff",
        dimgray: "#4e555f",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.1)",
        },
        peru: "#9e7d38",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "cormorant-garamond": "'Cormorant Garamond'",
      },
      borderRadius: {
        "21xl": "40px",
        "12xs": "1px",
        "81xl": "100px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      lgi: "19px",
      "11xl": "30px",
      "5xl": "24px",
      "2xl": "21px",
      mid: "17px",
      "26xl": "45px",
      "8xl": "27px",
      "17xl": "36px",
      "6xl": "25px",
      "23xl": "42px",
      "15xl": "34px",
      "31xl": "50px",
      "21xl": "40px",
      "16xl": "35px",
      "9xl": "28px",
      "13xl": "32px",
      "46xl": "65px",
      "20xl": "39px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
