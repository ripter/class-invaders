/*global module, require, Phaser */
'use strict';

var Mob = require('./mob.js');

/* jshint maxparams: 6 */
function Troop(game, parent, name, addToStage) {
  Phaser.Group.call(this, game, parent, name, addToStage, true, Phaser.Physics.ARCADE);

  this.reset(game);

  game.add.tween(this).to({
    x: 610
  }, 3000).to({
    x: 0
  }, 3000).loop().start();
}
Troop.prototype = Object.create(Phaser.Group.prototype);
Troop.prototype.constructor = Troop;
module.exports = Troop;

// resets the troop with fresh mobs
Troop.prototype.reset = function(game) {
  var self = this;
  var margin = 10;
  var formation = [
    [0, 1]
    , [2, 3]
    , [4, 5]
    , [6, 7]
  ];

  formation.forEach(function(frames, y) {
    var mob;
    var x;

    for (x=0; x < 6; x++) {
      mob = new Mob(game, {
        frames: frames
      });

      mob.x = x * (mob.width + margin);
      mob.y = y * (mob.height + margin);

      self.add(mob);
    }
  });
};
