'use strict';

module.exports = {
    entry: require('./entry.config'),
    output: {
        path         : __dirname + '/../assets/js',
        filename     : 'bundle.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    // plugins: require('./plugins.config'),
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.web.js', '.webpack.js']
    }
}

