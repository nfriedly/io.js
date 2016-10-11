'use strict';
var common = require('../common');
var assert = require('assert');

common.globalCheck = false;
global.gc = 42;  // Not a valid global unless --expose_gc is set.
assert.deepStrictEqual(common.leakedGlobals(), ['gc']);


assert.throws(function() {
  common.mustCall(function() {}, 'foo')();
}, /invalid expected value: foo/i);

assert.throws(function() {
  common.mustCall(function() {}, /foo/)();
}, /invalid expected value: \/foo\//i);
