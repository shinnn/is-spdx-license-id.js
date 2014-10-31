/*!
 * is-spdx-license-identifier | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-identifier
*/
'use strict';

var spdxLicenseIdentifiers = require('spdx-license-identifiers');

module.exports = function isSpdxLicenseIdentifier(str) {
  if (typeof str !== 'string') {
    throw new TypeError(str + ' is not a string.');
  }

  return spdxLicenseIdentifiers.indexOf(str) !== -1;
};
