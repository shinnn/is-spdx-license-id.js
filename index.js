/*!
 * is-spdx-license-id | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-spdx-license-id.js
*/
var spdxLicenseIds = require('spdx-license-ids');
module.exports = function isSpdxLicenseId(str) {
  'use strict';
  return spdxLicenseIds.indexOf(str) !== -1;
};
