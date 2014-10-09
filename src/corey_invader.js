function CoreyInvader(game){
	Phaser.Sprite.call(this, game, 10, 10, 'piskelInvader', [0]);
}
CoreyInvader.prototype = Object.create(Phaser.Sprite.prototype);
CoreyInvader.prototype.constructor = CoreyInvader;

module.exports = CoreyInvader;