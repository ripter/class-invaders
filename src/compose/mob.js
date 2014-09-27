/*global module, require, Phaser */

//
// Invader Mob in a composite style

function MobCompose(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [2,3];

  this.game = game;
  this.sprite = game.add.sprite(0, 0, 'invaders');

  // Add animations
  this.animations = this.sprite.animations;
  this.animations.add('fly', frames, 2, true);

  this.animations.play('fly');
}

module.exports = MobCompose;