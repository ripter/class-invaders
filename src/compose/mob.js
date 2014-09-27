/*global module, require, Phaser */

//
// Invader Mob in a composite style

function MobCompose(game) {
  this.game = game;
  this.sprite = game.add.sprite(0, 0, 'invaders', 0);

  // Add animations
  this.animations = this.sprite.animations;
  this.animations.add('fly', [0, 1], 2, true);

  this.animations.play('fly');
}

module.exports = MobCompose;