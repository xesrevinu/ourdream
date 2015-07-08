const webpack = require('webpack');
const bower_dir = __dirname + '/public/bower_components';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
    "css-loader?sourceMap",
    "autoprefixer-loader?browsers=last 2 version",
    "sass-loader?outputStyle=expanded&sourceMap&includePaths[]=" + (path.resolve(__dirname, "/public/css"))
        + "&"
        +"includePaths[]=" + (path.resolve(__dirname, "./bower_components"))
        + "&"
        + (path.resolve(__dirname, "./node_modules")),
];

const config = {
    debug: process.env.NODE_ENV === 'production' ? false : true,
    // 入口文件
    entry: {
        app: ['./public/js/main.js'],
        vendors: ['jwt-decode', 'reqwest']
    },
    devtool: 'inline-source-map',
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
        filename: "[name].entry.js",
        chunkFilename: "[id].chunk.js",
        publicPath: '/build/',
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-router': 'ReactRouter',
        'noty':'noty',
        'reflux':'Reflux'
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                optional: ['runtime'],
                stage: 0
            }
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
