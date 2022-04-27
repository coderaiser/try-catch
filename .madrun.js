'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => `tape 'test/*.js'`,
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
};

