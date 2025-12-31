'use strict';

const test = require('supertape');
const {tryCatch} = require('try-catch');

test('try-catch: cjs: error', (t) => {
    const fn = () => hello;
    const [e] = tryCatch(fn);
    const message = 'hello is not defined';
    
    t.equal(e.message, message);
    t.end();
});

test('try-catch: cjs: result', (t) => {
    const fn = () => 'hello';
    const [, data] = tryCatch(fn);
    
    t.equal(data, 'hello');
    t.end();
});

test('try-catch: cjs: args: result', (t) => {
    const [, data] = tryCatch(JSON.stringify, {
        a: 'b',
    });
    
    t.equal(data, '{"a":"b"}');
    t.end();
});

test('try-catch: cjs: named export', (t) => {
    const [, data] = tryCatch.tryCatch(JSON.stringify, {
        a: 'b',
    });
    
    t.equal(data, '{"a":"b"}');
    t.end();
});
