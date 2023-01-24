module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //sans: ["Euclid", "Roboto", "sans-serif"],
        //euclid: ["Euclid"],
      },
    },
  },
  transitionProperty: {
    rotate: "rotate",
    outline: "outline",
  },
  plugins: [],
  fontFamily: {
    display: ["Oswald"],
    body: ['"Open Sans"'],
  },
};
