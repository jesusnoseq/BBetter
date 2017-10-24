var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

// Where to save bundle.js file
devConfig.module.output.path = __dirname;

var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
