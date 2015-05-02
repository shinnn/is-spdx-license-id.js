/*!
 * is-spdx-license-id | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-id.js
*/
window.isSpdxLicenseId = function isSpdxLicenseId(str) {
  'use strict';
  return window.spdxLicenseIds.indexOf(str) !== -1;
};
