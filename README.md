# Try Catch [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]: https://img.shields.io/npm/v/try-catch.svg?style=flat
[NPMURL]: https://npmjs.org/package/try-catch "npm"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageURL]: https://coveralls.io/github/coderaiser/try-catch?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/try-catch/badge.svg?branch=master&service=github
[BuildStatusURL]: https://github.com/coderaiser/try-catch/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/try-catch/workflows/Node%20CI/badge.svg

Functional `try-catch` wrapper

## Install

```
npm i try-catch
```

## Example

```js
const tryCatch = require('try-catch');
const {parse} = JSON;
const [error, result] = tryCatch(parse, 'hello');

if (error)
    console.error(error.message);

```

## Related

- [try-to-catch](https://github.com/coderaiser/try-to-catch "TryToCatch") - functional try-catch wrapper for promises.

## License

MIT
