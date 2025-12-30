import {run} from 'madrun';

export default {
    'test': () => `tape 'test/*.{js,cjs}'`,
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
};
