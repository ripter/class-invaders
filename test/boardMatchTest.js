/*global require, describe, it */
var _ = require('lodash');
var should = require('should');

var matcher = require('../src/matcher.js');

var smallMap = [
  1, 1, 1, 1,
  1, 1, 1, 0,
  0, 1, 1, 0,
  1, 0, 1, 1
];

describe('map', function() {
  var map = buildMap(smallMap);

  it(' should exist', function() {
    should.exist(map);
  });

  it(' should be an array', function() {
    map.should.be.an.Array;
  });
});

describe('getRange', function() {
  it(' index 0', function() {
    var result = matcher.getRange(4, 0);

    should.exist(result);
		result.should.be.an.Object.and.have.keys('left', 'right', 'pos');
    result.left.should.equal(0);
    result.right.should.equal(3);
    result.pos.should.equal(0);
  });
});

describe('Horizontal Length', function() {
  var map = buildMap(smallMap);

  it(' should equal 4', function() {
    var result = matcher.horizontalLength(4, map, 0, 1);

    should.exist(result);
    result.should.equal(4);
  });

  it(' should equal 3', function() {
    var result = matcher.horizontalLength(4, map, 6, 1);

    should.exist(result);
    result.should.equal(3);
  });

  it(' should equal 2', function() {
    var result = matcher.horizontalLength(4, map, 9, 1);

    should.exist(result);
    result.should.equal(2);
  });

  it(' should equal 1', function() {
    var result = matcher.horizontalLength(4, map, 12, 1);

    should.exist(result);
    result.should.equal(1);
  });
});

xdescribe('Vertical Length', function() {
  var map = buildMap(smallMap);

  it(' should equal 4', function() {
    var result = matcher.verticalLength(4, map, 6, 1);

    should.exist(result);
    result.should.equal(4);
  });

  it(' should equal 3', function() {
    var result = matcher.verticalLength(4, map, 9, 1);

    should.exist(result);
    result.should.equal(3);
  });

  it(' should equal 2', function() {
    var result = matcher.verticalLength(4, map, 0, 1);

    should.exist(result);
    result.should.equal(2);
  });

  it(' should equal 1', function() {
    var result = matcher.verticalLength(4, map, 3, 1);

    should.exist(result);
    result.should.equal(1);
  });
});


function buildMap(map) {
  return _.map(map, function(type, index) {
    return { frame: type };
  });
}