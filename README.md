# is-spdx-license-id

[![NPM version](https://img.shields.io/npm/v/is-spdx-license-id.svg)](https://www.npmjs.com/package/is-spdx-license-id)
[![Bower version](https://img.shields.io/bower/v/is-spdx-license-id.svg)](https://github.com/shinnn/is-spdx-license-id.js/releases)
[![Build Status](https://travis-ci.org/shinnn/is-spdx-license-id.js.svg?branch=master)](https://travis-ci.org/shinnn/is-spdx-license-id.js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-spdx-license-id.js.svg)](https://coveralls.io/r/shinnn/is-spdx-license-id.js)
[![Dependency Status](https://img.shields.io/david/shinnn/is-spdx-license-id.js.svg?label=deps)](https://david-dm.org/shinnn/is-spdx-license-id.js)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/is-spdx-license-id.js.svg?label=devDeps)](https://david-dm.org/shinnn/is-spdx-license-id.js#info=devDependencies)

Check if the string is one of the [SPDX license](http://spdx.org/licenses/) identifiers

```javascript
isSpdxLicenseId('MIT'); //=> true
isSpdxLicenseId('zlib-acknowledgement'); //=> true

isSpdxLicenseId('foo-bar-baz'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```sh
npm install is-spdx-license-id
```

#### [Bower](http://bower.io/)

```sh
bower install is-spdx-license-id
```

#### [Duo](http://duojs.org/)

```javascript
var isSpdxLicenseId = require('shinnn/is-spdx-license-id.js');
```

### Standalone

Download [the script file](https://raw.githubusercontent.com/shinnn/is-spdx-license-id.js/master/browser.js) and [its dependency](https://raw.githubusercontent.com/shinnn/spdx-license-ids/master/spdx-license-ids-browser.js).

## API

### isSpdxLicenseId(*string*)

*string*: `String`  
Return: `Boolean`

It returns `true` when the argument is one of the SPDX license identifiers, such as `'MIT'` and `'BSD-4-Clause'`. Otherwise it returns `false`.

## License

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
