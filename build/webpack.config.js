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
    devServer: {
        publicPath: '/assets',
        filename: 'bundle.js',
        port: 8080,
        host: '0.0.0.0',
        proxy: {
            '/*': {
                target: '//www.ucms.demo',
                secure: false,
                bypass: function (req, res, proxyOptions) {
                    if (req.url.endsWith('favicon.ico') ||
                        req.url.startsWith('/assets')) {
                        return req.url;
                    }
                    return '/index.html';
                }
            }
        }
    }
}

