//this file isn't transpiled so commonjs and es5

//register babel to transpile before test run
require('babel-register');

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function () {};
