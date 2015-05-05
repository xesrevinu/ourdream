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
    // 增加第三方
    addVendor: function(name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp('^' + name + '$'));
    },
    // 入口文件
    entry: {
        app: ['./public/js/app.js'],
        vendors: ['react']
    },
    // 指定别名
    resolve: {
        alias: {},
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'css'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("[name].css")
    ],
    // 编译文件
    output: {
        path: process.env.NODE_ENV === 'production' ? './public/dist' : './public/build',
        filename: "bundle.js",
        publicPath: '/public'
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?optional=runtime'
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
        }]
    }
};


// 不加到bundle来
config.addVendor('react', bower_dir + '/react/react.min.js');
//config.addVendor('bootstrap', bower_dir + '/bootstrap/dist/js/bootstrap.min.js');
//config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js');

module.exports = config;