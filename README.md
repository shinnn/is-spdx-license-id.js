# is-spdx-license-identifier

[![NPM version](https://img.shields.io/npm/v/is-spdx-license-identifier.svg)](https://www.npmjs.com/package/is-spdx-license-identifier)
[![Bower version](https://img.shields.io/bower/v/is-spdx-license-identifier.svg)](https://github.com/shinnn/is-spdx-license-identifier.js/releases)
[![Build Status](https://travis-ci.org/shinnn/is-spdx-license-identifier.js.svg?branch=master)](https://travis-ci.org/shinnn/is-spdx-license-identifier.js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-spdx-license-identifier.js.svg)](https://coveralls.io/r/shinnn/is-spdx-license-identifier.js)
[![Dependency Status](https://img.shields.io/david/shinnn/is-spdx-license-identifier.js.svg?label=deps)](https://david-dm.org/shinnn/is-spdx-license-identifier.js)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/is-spdx-license-identifier.js.svg?label=devDeps)](https://david-dm.org/shinnn/is-spdx-license-identifier.js#info=devDependencies)

Check if the string is one of the [SPDX license](http://spdx.org/licenses/) identifiers

```javascript
isSpdxLicenseIdentifier('MIT'); //=> true
isSpdxLicenseIdentifier('zlib-acknowledgement'); //=> true

isSpdxLicenseIdentifier('foo-bar-baz'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```sh
npm install is-spdx-license-identifier
```

#### [Bower](http://bower.io/)

```sh
bower install is-spdx-license-identifier
```

#### [Duo](http://duojs.org/)

```javascript
var isSpdxLicenseIdentifier = require('shinnn/is-spdx-license-identifier.js');
```

### Standalone

Download [the script file](https://raw.githubusercontent.com/shinnn/is-spdx-license-identifier.js/master/is-spdx-license-identifier.js) and [its dependency](https://raw.githubusercontent.com/shinnn/spdx-license-identifiers/master/spdx-license-identifiers.js).

## API

### isSpdxLicenseIdentifier(*string*)

*string*: `String`  
Return: `Boolean`

It returns `true` when the argument is one of the SPDX license identifiers, such as `'MIT'` and `'BSD-4-Clause'`. Otherwise it returns `false`.

## License

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
