(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    window.$shared = factory();
  }
}(function () {
  'use strict';

  var sharedScope = {};

  return {
    examplesFor: function (title, fn) {

      if (sharedScope[title]) {
        throw new Error('Shared examples "' + title + '" was registered already.');
      }

      if (typeof fn !== 'function') {
        throw new Error('Shared examples must be a function');
      }

      sharedScope[title] = fn;

      return this;
    },

    shouldBehaveLike: function (title) {
      var args = [].slice.call(arguments, 1);

      if (!sharedScope[title]) {
        throw new Error('Shared examples "' + title + '" was not registered.');
      }

      sharedScope[title].apply(null, args);

      return this;
    }
  };

}));
