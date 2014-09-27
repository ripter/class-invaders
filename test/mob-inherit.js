/*global require, describe, it */
debugger;
var _ = require('lodash');
var should = require('should');
var Phaser = require('phaser');

var MobInherit = require('../src/mob-inherit.js');
var game = {
  add: {
    existing: _.noop
  }
};

describe('instanceof', function() {
  var mob = new MobInherit(game);

  it(' is MobInherit', function() {
    mob.should.be.instanceof(MobInherit);
  });
});