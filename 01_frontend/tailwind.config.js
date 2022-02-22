module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#454545",
        highlight: "#5085E8",
        light: "#D3D8E0",
        medal: "#A9C7FD",
        muted: "#EBEBEB",
        selected: "#3C5A99",
      },
      boxShadow: {
        small: "0 3px 1px 0 rgba(211, 216, 224, 0.4)",
        large: "0 3px 25px 0 rgba(0, 0, 0, 0.15)",
        button: "0 13px 30px 0 rgba(3, 65, 177, 0.39)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
