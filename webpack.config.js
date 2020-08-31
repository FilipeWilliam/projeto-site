const path = require("path");

module.exports = {
  entry: ["whatwg-fetch", "@babel/polyfill", "./js/scriptzada.js"],
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
};
