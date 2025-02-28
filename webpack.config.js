const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Agrupar el css en un archivo de salida

module.exports = {
  entry: "./src/app.js", //entrada
  output: {
    filename: "cod.js",
    path: path.resolve(__dirname, "public"), //donde se crea el archivo
  }, //salida
  module: { //modulos
    rules: [ //Reglas
      {
        test: /\.scss$/, // Detecta archivos .scss
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", // Inyecta el CSS en el DOM
          "css-loader", // Interpreta los archivos CSS
          "sass-loader", // Compila SASS a CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css", // Nombre del archivo CSS generado
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
}; //objeto de JavaScript
