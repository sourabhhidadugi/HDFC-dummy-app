module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "src/"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}