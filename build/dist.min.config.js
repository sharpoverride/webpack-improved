'use strict';


module.exports = {
    entry: require('./entry.config'),
    output: {
        path         : __dirname + '/../assets/js',
        filename     : 'bundle.min.js' 
    },
    module: {
        loaders:  require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.web.js', '.webpack.js']
    }
}