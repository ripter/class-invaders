/*global module, require, Phaser */
'use strict';

var Bunker = require('./bunker.js');

/* jshint maxparams: 6 */
function Shield(game, parent, name, addToStage) {
  Phaser.Group.call(this, game, parent, name, addToStage, true, Phaser.Physics.ARCADE);

  this.reset(game);
}

Shield.prototype = Object.create(Phaser.Group.prototype);
Shield.prototype.constructor = Shield;
module.exports = Shield;

// resets the sheild with fresh pices
Shield.prototype.reset = function(game) {
  var self = this;
  var margin = 10;
  var formation = [
    [0, 1]
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
