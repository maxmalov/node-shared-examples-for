'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var sinon = require('sinon');
var shared = require('../index');

describe('Shared examples', function () {

  beforeEach(function () {
    this.examples = sinon.stub();
  });

  it('should call examples function', function () {
    shared.examplesFor('some title', this.examples)
      .shouldBehaveLike('some title');

    expect(this.examples).to.have.been.calledOnce;
  });

  it('should throw an exception when examples was not registered', function () {
    expect(function () {
      shared.shouldBehaveLike('bad examples');
    }).to.throw('Shared examples "bad examples" was not registered');
  });

  it('should throw an exception when examples was already registered', function () {
    expect(function () {
      shared
        .examplesFor('examples duplication', function () { })
        .examplesFor('examples duplication', function () { });
    }).to.throw('Shared examples "examples duplication" was registered already');
  });

  it('should throw an exception when shared examples is not a funciton', function () {
    expect(function () {
      shared.examplesFor('invalid examples', {});
    }).to.throw('Shared examples must be a function');
  });

  it('should pass arguments to an example', function () {
    shared.examplesFor('example with arguments', this.examples)
      .shouldBehaveLike('example with arguments', 1, 'string', {}, []);

    expect(this.examples.args[0]).to.deep.eq([1, 'string', {}, []]);
  });

});
