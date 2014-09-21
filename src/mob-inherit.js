/*global module, require, Phaser */

//
// Invader Mob in a inherit style

function MobInherit(game) {
  this.game = game;
  this.sprite = game.add.sprite(100, 0, 'invaders', 3);
}
MobInherit.prototype = Object.create(Phaser.Sprite);
MobInherit.prototype.constructor = MobInherit;

module.exports = MobInherit;