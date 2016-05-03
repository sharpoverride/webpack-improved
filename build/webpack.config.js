module.exports = {
    devtool: 'eval',
    entry: require('./devEntry.config'),
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.web.js', '.webpack.js']
    },
    output: require('./output.config'),
    plugins: require('./plugins.config'),
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
      'jquery': 'jQuery'
    },
    node: {
        net: 'mock',
        dns: 'mock'
    },
    devServer: require('./dev-server.config')
}

