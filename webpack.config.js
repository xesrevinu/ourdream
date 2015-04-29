module.exports = {
    entry: ['./public/js/app.js'],
    output: {
        path:'./public/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' }
        ]
    }
};