'use strict';

var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = [
    new webpack.NoErrorsPlugin(),
    // new CommonsChunkPlugin("commons.chunk.js"),
    // new LiveReloadPlugin({appendScriptTag: true})
];