'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function(file){
    var entry = {};
    entry[file] = './src/assets/less/' + file + '.less';
    return {
        entry: entry,
        output: {
            filename: 'assets/css/'+file + '.css'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                },
                // Optionally extract less files
                // or any other compile-to-css language
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader?root=.")
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
                },
                {
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin( 'assets/css/'+file + '.css')
        ]
    }
}