# is-spdx-license-identifier.js

[![Build Status](https://travis-ci.org/shinnn/is-spdx-license-identifier.js.svg?branch=master)](https://travis-ci.org/shinnn/is-spdx-license-identifier.js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-spdx-license-identifier.js.svg)](https://coveralls.io/r/shinnn/is-spdx-license-identifier.js)
[![Dependency Status](https://david-dm.org/shinnn/is-spdx-license-identifier.js.svg)](https://david-dm.org/shinnn/is-spdx-license-identifier.js)
[![devDependency Status](https://david-dm.org/shinnn/is-spdx-license-identifier.js/dev-status.svg)](https://david-dm.org/shinnn/is-spdx-license-identifier.js#info=devDependencies)

Check if the string is one of the [SPDX license](http://spdx.org/licenses/) identifiers

```javascript
isSpdxLicenseIdentifier('MIT'); //=> true
isSpdxLicenseIdentifier('zlib-acknowledgement'); //=> true

isSpdxLicenseIdentifier('foo-bar-baz'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/is-spdx-license-identifier.svg)](https://www.npmjs.org/package/is-spdx-license-identifier)

```sh
npm install is-spdx-license-identifier
```

#### [Bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/is-spdx-license-identifier.svg)](https://github.com/shinnn/is-spdx-license-identifier.js/releases)

```sh
bower install is-spdx-license-identifier
```

#### [Duo](http://duojs.org/)

```javascript
var isSpdxLicenseIdentifier = require(shinnn/is-spdx-license-identifier.js);
```

### Standalone

[Download the script file directly](https://raw.githubusercontent.com/shinnn/is-spdx-license-identifier.js/master/is-spdx-license-identifier.js) and install its dependency.

#### Dependency

* [spdx-license-identifiers](https://github.com/shinnn/spdx-license-identifiers)

## API

### isSpdxLicenseIdentifier(*string*)

*string*: `String`  
Return: `Boolean`

It returns `true` when the argument is one of the SPDX license identifiers, such as `'MIT'` and `'BSD-4-Clause'`. Otherwise it returns `false`.

It throws a `TypeError` when the argument is not a string.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
