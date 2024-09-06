//Conexion con los plugins al archivo
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({
      preset: "default",
    }),
  ],
};
