'use strict';

const test = require('supertape');
const tryCatch = require('..');

test('try-catch: error', (t) => {
    /*eslint no-undef: 0*/
    const fn = () => hello;
    const [e] = tryCatch(fn);
    const message = 'hello is not defined';
    
    t.equal(e.message, message);
    t.end();
});

test('try-catch: result', (t) => {
    const fn = () => 'hello';
    const [, data] = tryCatch(fn);
    
    t.equal(data, 'hello');
    t.end();
});

test('try-catch: args: result', (t) => {
    const [, data] = tryCatch(JSON.stringify, {a: 'b'});
    
    t.equal(data, '{"a":"b"}');
    t.end();
});

