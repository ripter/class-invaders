/*global module, Phaser */
'use strict';

function Player(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [0];

  Phaser.Sprite.call(this, game, x, y, 'player');
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

module.exports = Player;