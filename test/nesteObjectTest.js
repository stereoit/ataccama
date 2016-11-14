'use strict'

var chai = require('chai')
  , expect = chai.expect
  , data = require('../src/json/data.json')
  , utils = require('../src/utils');


describe('NestedObjectManipulations', function() {
  it('Find first `records` in object to be 0.kids.has_relatives.records', function() {
    var result = '0.kids.has_relatives.records';
    expect(utils.findPathByKey(data, 'records')).to.equal(result)
  });

  it('nestedLookup by path', function () {
    let source = {'a': {'b':1}}
      , path = 'a.b'
      , result = 1;
      expect(utils.nestedLookup(source, path)).to.equal(result)
  });

  it('nestedDel deletes path correctly', function () {
    let source = {'a': {'b':1}}
      , path = 'a.b'
      , result = {'a': {}};

      utils.nestedDel(source, path);

      expect(JSON.stringify(source)).to.equal(JSON.stringify(result))
  });

});
