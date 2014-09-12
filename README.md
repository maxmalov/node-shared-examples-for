node-shared-examples-for
========================

Inspired by `shared_example_for` from RSpec

# Usage

Helper can be used with mocha, jasmine runners.

```js

// example with mocha and chai

var expect = require('chai').expect;
var shared = require('shared-examples-for');

shared.examplesFor('object that implements prototype pattern', function () {

  it('should have clone method', function () {
    expect(this.clonable).to.have.property('clone').that.is.a('function');
  });

});

describe('Pets', function () {

  before(function () {
    this.clonable = new Pet();
  });

  shared.behaveLike('object that implements prototype pattern');

});

describe('Cats', function () {

  before(function () {
    this.clonable = new Cat();
  });
  
  shared.behaveLike('object that implements prototype pattern');
  
});

```
