import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  entry: {
    app: "./src/index.tsx",
    appStyles: "./src/styles.scss",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    port: 8081,
    static: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
