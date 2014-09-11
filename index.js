'use strict';

var assert = require('assert');
var sharedScope = {};

exports.examplesFor = function (title, fn) {
  assert(!sharedScope[title], 'Shared examples "' + title + '" was registered already.');
  assert.equal(typeof fn, 'function', 'Shared examples must be a function');
  sharedScope[title] = fn;
};

exports.behaveLike = function (title) {
  assert(sharedScope[title], 'Shared examples "' + title + '" was not registered.');
  sharedScope[title]();
};
