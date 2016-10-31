require('app-module-path').addPath(__dirname);
var path = require('path');
process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config');
