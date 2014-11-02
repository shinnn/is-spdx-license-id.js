'use strict';

var mainBowerFiles = require('main-bower-files');
var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(4);

    t.strictEqual(
      main('MIT'), true,
      'should return true when the string is a SPDX license identifier.'
    );

    t.strictEqual(
      main('foo'), false,
      'should return false when the string is not a SPDX license identifier.'
    );

    t.strictEqual(
      main(true), false,
      'should return false when the argument is not a string.'
    );

    t.strictEqual(
      main(), false,
      'should return false when it takes no arguments.'
    );
  });
}

runTest('require(\'is-spdx-license-identifier\')', require('./'));

global.window = {};

var bowerMain = require('./bower.json').main;
require(bowerMain);

var bowerDependencies = mainBowerFiles();
require(bowerDependencies[0]);

runTest('window.isSpdxLicenseIdentifier', window.isSpdxLicenseIdentifier);
