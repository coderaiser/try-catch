import test from 'supertape';
import {tryCatch} from 'try-catch';

test('try-catch: error', (t) => {
    const fn = (a) => a();
    const [e] = tryCatch(fn, 'a');
    const message = 'a is not a function';
    
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
    const [, data] = tryCatch(JSON.stringify, {
        a: 'b',
    });
    
    t.equal(data, '{"a":"b"}');
    t.end();
});

test('try-catch: named export', (t) => {
    const [, data] = tryCatch(JSON.stringify, {
        a: 'b',
    });
    
    t.equal(data, '{"a":"b"}');
    t.end();
});
