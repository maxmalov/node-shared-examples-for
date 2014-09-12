'use strict';

var chai = require('chai');
chai.use(require('sinon-chai'));
var expect = chai.expect;
var sinon = require('sinon');
var shared = require('../index');

describe('Shared examples', function () {

  before(function () {
    this.examples = sinon.stub();
    shared.examplesFor('some title', this.examples);
  });

  it('should call examples function', function () {
    shared.shouldBehaveLike('some title');
    expect(this.examples).to.have.been.calledOnce;
  });

  it('should throw an exception when examples was not registered', function () {
    expect(function () {
      shared.shouldBehaveLike('bad examples');
    }).to.throw('Shared examples "bad examples" was not registered');
  });

  it('should throw an exception when examples was already registered', function () {
    expect(function () {
      shared.examplesFor('examples duplication', function () { });
      shared.examplesFor('examples duplication', function () { });
    }).to.throw('Shared examples "examples duplication" was registered already');
  });

  it('should throw an exception when shared examples is not a funciton', function () {
    expect(function () {
      shared.examplesFor('invalid examples', {});
    }).to.throw('Shared examples must be a function');
  });

});

