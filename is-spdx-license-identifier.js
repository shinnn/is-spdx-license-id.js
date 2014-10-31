/*!
 * block-comment | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/block-comment
*/
'use strict';

window.isSpdxLicenseIdentifier = function isSpdxLicenseIdentifier(str) {
  if (typeof str !== 'string') {
    throw new TypeError(str + ' is not a string.');
  }

  return window.spdxLicenseIdentifiers.indexOf(str) !== -1;
};
