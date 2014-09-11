'use strict';

var assert = require('assert');
var sharedScope = {};

exports.examplesFor = function (title, fn) {
  assert(!sharedScope[title], 'Shared example "' + title + '" was registered already.');
  sharedScope[title] = fn;
};

exports.behaveLike = function (title) {
  assert(sharedScope[title], 'Shared example "' + title + '" was not registered.');
  sharedScope[title]();
};
