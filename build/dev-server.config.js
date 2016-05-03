module.exports = {
    publicPath: '/assets',
    filename: 'bundle.js',
    port: 8080,
    host: '0.0.0.0',
    proxy: {
        '/*': {
            target: '//sample-local.dev',
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