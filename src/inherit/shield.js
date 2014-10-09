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

  var formation = [
    [0,6,12]
  ];

  formation.forEach(function(frames, y) {
    var bunker;
    var x;

    for (x=0; x < 3; x++) {
      bunker = new Bunker(game, {
        frames: frames
      });

    bunker.x = x * (bunker.width);
    bunker.y = y * (bunker.height);
debugger;
    self.add(bunker);
   }
  });
};
