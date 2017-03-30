var webpack = require("webpack");
var combineLoaders = require("webpack-combine-loaders")
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var NODE_DIR = path.resolve(__dirname, "node_modules");

var config = {
    entry: SRC_DIR + "/app/index.js",/*entrypoint -> first file to start transpiling and bundling*/
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
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                include: NODE_DIR,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ])
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};


module.exports = config;