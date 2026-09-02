import {tryCatch} from '../lib/try-to-catch.js';

// THROWS Argument of type 'number' is not assignable to parameter of type '() => unknown'.
await tryCatch(5);

await tryCatch(fn, 'hello', 'world', 'a', 'b', 'c', 'd');

function fn(a: string, b: string, c: string, d: string, e: string, f: string) {
    return [a, b, c, d, e, f];
}
