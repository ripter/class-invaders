/*global module, require, Phaser */
'use strict';

var Bunker = require('./bunker.js');

/* jshint maxparams: 6 */
function Sheild(game, parent, name, addToStage) {
  Phaser.Group.call(this, game, parent, name, addToStage, true, Phaser.Physics.ARCADE);

  this.reset(game);
}

Sheild.prototype = Object.create(Phaser.Group.prototype);
Sheild.prototype.constructor = Sheild;
module.exports = Sheild;

// resets the sheild with fresh pices
Sheild.prototype.reset = function(game) {
  var self = this;
  var margin = 10;
  var formation = [
    [0, 1]
    , [2, 3]
    , [4, 5]
    , [6, 7]
  ];

  formation.forEach(function(frames, y) {
    var bunker;
    var x;

    for (x=0; x < 6; x++) {
      bunker = new bunker(game, {
        frames: frames
      });

      bunker.x = x * (bunker.width + margin);
      bunker.y = y * (bunker.height + margin);

      self.add(bunker);
    }
  });
};
