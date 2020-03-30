const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  // devtool: 'cheap-source-map',
  // entry: __dirname + "/src/lib/index.js",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.less$|\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}


module.exports = config;