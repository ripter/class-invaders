/*global module, require, Phaser */

//
// Invader Mob in a inherit style

function MobInherit(game) {
  Phaser.Sprite.call(this, game, 100, 0, 'invaders', 3);
  // because we didn't use the game.add form, we have to add
	// ourself to the game world.
  game.add.existing(this);

  // add animations
  this.animations.add('fly', [2, 3], 2, true);

  this.animations.play('fly');
}
MobInherit.prototype = Object.create(Phaser.Sprite.prototype);
MobInherit.prototype.constructor = MobInherit;

module.exports = MobInherit;