node-shared-examples-for
========================

Inspired by `shared_example_for` from RSpec

# Usage

Helper can be used with mocha, jasmine runners.

```js

var clone = function () {
  return new this();
};

function Cat() {}
Cat.prototype.clone = proto.clone;

funciton Dog() {}
Dog.prototype.clone = proto.clone;

// example with mocha and chai

var expect = require('chai').expect;
var shared = require('shared-examples-for');

shared.examplesFor('object that implements prototype pattern', function () {

  it('should have clone method', function () {
    expect(this.clonable).to.have.property('clone').that.is.a('function');
  });

});

describe('Dogs', function () {

  before(function () {
    this.clonable = new Dog();
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
