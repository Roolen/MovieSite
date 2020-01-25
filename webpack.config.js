var path = require('path');
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoadeerPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './public/js/main.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        publicPath: './public/dist/',
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /.s[ac]ss$/,
                use: [{ loader: 'style-loader' },
                      { loader: 'css-loader' },
                      { loader: 'sass-loader' }]
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoadeerPlugin(),
    ],
};