'use strict';
var path = require('path');

module.exports = [
    {
        test: /\.[j|t]sx?$/,
        loaders: ['awesome-typescript-loader'],
        include: path.join(__dirname, '/../src')
    },
    {
        test: /\.styl$/,
        loader: 'style!css!autoprefixer!stylus'
    },
    {
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
    },
    {
        test: /\.json$/,
        loader: 'json'
    },
 /*   {
        test: /\.png$/,
        loader: 'url?mimetype=image/png'
    },*/
    {
        test: /\.less$/,
        loader: "style!css!less"
    }
]