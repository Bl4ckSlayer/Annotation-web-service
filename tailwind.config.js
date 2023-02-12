module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        corporate: {
          primary: "#4B6BFB",

          secondary: "#7B92B2",

          accent: "#67CBA0",

          neutral: "#181A2A",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#661AE6",

          secondary: "#4c6cc4",

          accent: "#1FB2A5",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
