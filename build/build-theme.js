'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');

module.exports = function(themeName){

    var entry = {
        index: './src/assets/less/themes/' + themeName + '/index.less'
    };

    return {
        entry: entry,
        output: {
            filename: themeName + '.css'
        },
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: "style!css!less"
        }
    ]
        }
        ,
        plugins: [
            new ExtractTextPlugin('./assets/css/themes/' + themeName + '.css')
        ]
    }
}
