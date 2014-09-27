/*global module, require, Phaser */

//
// Invader Mob in a inherit style

function MobInherit(game) {
  Phaser.Sprite.call(this, game, 100, 0, 'invaders', 3);
  // because we didn't use the game.add form, we have to add
	// ourself to the game world.
  game.add.existing(this);
}
MobInherit.prototype = Object.create(Phaser.Sprite.prototype);
MobInherit.prototype.constructor = MobInherit;

module.exports = MobInherit;