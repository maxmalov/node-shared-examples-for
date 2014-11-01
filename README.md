node-shared-examples-for
========================

Inspired by `shared_example_for` from RSpec

# Usage

Helper can be used with mocha, jasmine runners. Also shared examples can be defined with arguments, ex (mocha + chai):

```js

var expect = require('chai').expect;
var shared = require('shared-examples-for');

shared.examplesFor('user', function (userAttributes) { // shared example can have any number of arguments

  it('should have login', function () {
    expect(this.user).to.have.property('login', userAttributes.login);
  });

  it('should have email', function () {
    expect(this.user).to.have.property('email', userAttributes.email);
  });

});

describe('Users', function () {
  var attributes = {
    login: 'foo',
    email: 'bar@baz.test'
  };

  describe('Usual user', function () {
    before(function () {
      this.user = new User(attributes);
    });

    shared.shouldBehaveLike('user', attributes); // all arguments after shared example title will be passed to shared example function
  });

  describe('Admin', function () {

    before(function () {
      this.user = new Admin(attributes);
    });

    shared.shouldBehaveLike('user', attributes);

    it('should be admin', function () {
      expect(this.user.isAdmin()).to.be.true;
    });
  });

});

```
