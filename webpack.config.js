const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const fs = require("fs");

function getHtmlFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".html");
}

module.exports = {
  entry: "./development/index.js",
  output: {
    path: path.resolve(__dirname, "production"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false, // отключаем автоматический парсинг <img src=...>
        },
      },
      {
        test: /\.scss$/i,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", // можешь убрать, если не используешь postcss
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /fontawesome|webfont/i, // исключаем svg-шрифты
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "development/pages/main.html"),
      filename: "index.html", // это будет главная страница
    }),
    ...getHtmlFiles(path.resolve(__dirname, "development/pages")).map(
      (file) => {
        return new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "development/pages", file),
          filename: `pages/${file}`, // Сохранение в папке "pages"
        });
      }
    ),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'development/assets/image'),
            to:   path.resolve(__dirname, 'production/assets/image')
          }
        ]
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['@popperjs/core', 'default'],
      }),
  ],
  devServer: {
    port: 8080,
    open: true,
    static: {
      directory: path.resolve(__dirname, "production"),
    },
    historyApiFallback: true,
  },
};
