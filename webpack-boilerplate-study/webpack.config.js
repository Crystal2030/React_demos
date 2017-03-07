var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: 'dist',
        inline: true,
        port: 8181,
        stats: {
            colors: true
        }
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "搭建前端工作流",
            template: "./src/index.html"
        }),
        new openBrowserPlugin({
            url: 'http://localhost:8181/'
        })
    ]


};

module.exports = config;