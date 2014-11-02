/*!
 * is-spdx-license-identifier | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-identifier.js
*/
'use strict';

window.isSpdxLicenseIdentifier = function isSpdxLicenseIdentifier(str) {
  return window.spdxLicenseIdentifiers.indexOf(str) !== -1;
};
