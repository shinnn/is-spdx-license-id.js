'use strict';

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(5);

    t.equal(
      main.name,
      'isSpdxLicenseIdentifier', 'should have a function name.'
    );

    t.strictEqual(
      main('MIT'),
      true,
      'should return true when the string is a SPDX license identifier.'
    );

    t.strictEqual(
      main('foo'),
      false,
      'should return false when the string is not a SPDX license identifier.'
    );

    t.strictEqual(
      main(true),
      false,
      'should return false when the argument is not a string.'
    );

    t.strictEqual(
      main(),
      false,
      'should return false when it takes no arguments.'
    );
  });
}

runTest('require(\'is-spdx-license-identifier\')', require('./'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.isSpdxLicenseIdentifier', window.isSpdxLicenseIdentifier);
