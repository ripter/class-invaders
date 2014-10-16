
function ChrisInvader(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'chris-invader', [0]);
}
ChrisInvader.prototype = Object.create(Phaser.Sprite.prototype);
ChrisInvader.prototype.constructor = ChrisInvader;

module.exports = ChrisInvader;