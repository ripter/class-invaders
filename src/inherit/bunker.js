/*global module, Phaser */
'use strict';

// Bunker in a inherit style

function Bunker(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [2,3];
}

Bunker.prototype = Object.create(Phaser.Sprite.prototype);
Bunker.prototype.constructor = BunkerInherit;

module.exports = BunkerInherit;
