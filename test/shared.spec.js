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
    shared.behaveLike('some title');
    expect(this.examples).to.have.been.calledOnce;
  });

});

