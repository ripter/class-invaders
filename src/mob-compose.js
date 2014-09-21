/*global module, require, Phaser */

//
// Invader Mob in a composite style

function MobCompose(game) {
  this.game = game;
  this.sprite = game.add.sprite(0, 0, 'invaders', 2);
}

module.exports = MobCompose;