export declare function tryCatch<Args extends unknown[], Result>(fn: (...args: Args) => Result, ...args: Args): [
    Error,
] | [null, Awaited<Result>];

