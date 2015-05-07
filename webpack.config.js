const webpack = require('webpack');
const bower_dir = __dirname + '/public/bower_components';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
    "css-loader",
    "autoprefixer-loader?browsers=last 2 version",
    "sass-loader?includePaths[]=" + path.resolve(__dirname, "/public/css"),
];

const config = {
    debug: process.env.NODE_ENV === 'production' ? false : true,
    // 入口文件
    entry: {
        app: ['./public/js/app.js'],
        vendors: ['react','jquery']
    },
    // 指定别名
    resolve: {
        alias: {},
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'css'
        ],
        root: '/public/js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("app.css")
    ],
    // 编译文件
    output: {
        path: process.env.NODE_ENV === 'production' ? './public/dist' : './public/build',
        filename: "bundle.js",
        publicPath: '/public'
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'jquery': 'jQuery'
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
        }]
    }
};

module.exports = config;