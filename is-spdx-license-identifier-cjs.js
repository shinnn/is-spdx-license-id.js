/*!
 * is-spdx-license-identifier | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-identifier.js
*/
var spdxLicenseIdentifiers = require('spdx-license-identifiers');
module.exports = function isSpdxLicenseIdentifier(str) {
  'use strict';
  return spdxLicenseIdentifiers.indexOf(str) !== -1;
};
