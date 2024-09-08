const path = require("path"); // conecta la ruta a la configuración de webpack
const HtmlWebpackPlugin = require("html-webpack-plugin"); // plugin de conexion
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // conecta mini-css-extract-plugin al proyecto

module.exports = {
  devtool: "inline-source-map",
  entry: {
    // Describiendo el punto de entrada.
    main: "./scripts/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
    clean: true,
  },
  target: ["web", "es5"],
  stats: { children: true },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        // Regla para procesar archivos
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(), // conecta el plugin para fusionar archivos CSS
  ],
};
