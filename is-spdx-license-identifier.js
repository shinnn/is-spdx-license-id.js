/*!
 * is-spdx-license-identifier | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-identifier.js
*/
window.isSpdxLicenseIdentifier = function isSpdxLicenseIdentifier(str) {
  'use strict';
  return window.spdxLicenseIdentifiers.indexOf(str) !== -1;
};
