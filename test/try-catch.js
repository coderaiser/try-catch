'use strict';

const test = require('supertape');
const tryCatch = require('..');

test('try-catch: error', (t) => {
    /*eslint no-undef: 0*/
    const fn = () => hello;
    const [e] = tryCatch(fn);
    const message = 'hello is not defined';
    
    t.equal(e.message, message, 'should equal');
    t.end();
});

test('try-catch: result', (t) => {
    const fn = () => 'hello';
    const [, data] = tryCatch(fn);
    
    t.equal(data, 'hello', 'should equal');
    t.end();
});

test('try-catch: args: result', (t) => {
    const fn = (a) => JSON.stringify(a);
    const [, data] = tryCatch(fn, {a: 'b'});
    
    t.equal(data, '{"a":"b"}', 'should equal');
    t.end();
});

