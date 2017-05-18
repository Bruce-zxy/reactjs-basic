var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"],
          "plugins": [
            // 按需加载第二步
            ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
          ]
        }
      },
      {
    		test: /\.less/,
    		loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
    		test: /\.css$/,
    		loaders: ['style-loader', 'css-loader']
	    }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
          mangle: {
              except: ['$super', '$', 'exports', 'require', 'module', '_']
          },
          compress: {
              warnings: false
          },
          output: {
              comments: false,
          }
      })
  ]
};

module.exports = config;
