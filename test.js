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
      'should return true when the string is a SPDX license identifier.'
    );

    t.throws(function() {
      main(true);
    }, /TypeError/, 'should throw a type error when the argument is not a string.');

    t.throws(function() {
      main();
    }, /TypeError/, 'should throw a type error when it takes no arguments.');
  });
}

runTest('require(\'is-spdx-license-identifier\')', require('./'));

global.window = {};

var bowerMain = require('./bower.json').main;
require(bowerMain);

var bowerDependencies = mainBowerFiles();
bowerDependencies.forEach(function(dependencyPath) {
  require(dependencyPath);
});

runTest('window.isSpdxLicenseIdentifier', window.isSpdxLicenseIdentifier);
