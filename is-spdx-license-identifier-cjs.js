/*!
 * is-spdx-license-identifier | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-identifier.js
*/
'use strict';

var spdxLicenseIdentifiers = require('spdx-license-identifiers');

module.exports = function isSpdxLicenseIdentifier(str) {
  return spdxLicenseIdentifiers.indexOf(str) !== -1;
};
