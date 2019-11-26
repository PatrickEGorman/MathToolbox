const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const jsDir = 'src/main/resources/static/js/';
module.exports = {
    entry: {
        main: './'+jsDir+'main.js',
        editor: './'+jsDir+'editor/editor.js'
    },
    output: {
        path: path.join(__dirname, jsDir+'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',

    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};