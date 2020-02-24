'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape \'test/*.js\'',
    'lint': () => 'putout lib test .madrun.js',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
};

