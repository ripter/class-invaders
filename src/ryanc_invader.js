
function RyancInvader(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'ryanc-invader', [0]);
  this.forward = true;
}
RyancInvader.prototype = Object.create(Phaser.Sprite.prototype);
RyancInvader.prototype.constructor = RyancInvader;

RyancInvader.prototype.update = function() {
  var max = this.game.width - this.width;
  var speed = 10;

  if (this.forward) {
    this.x += speed;
  } else {
    this.x -= speed;
  }

  if (this.x >= max) {
    this.forward = false;
  } else if (this.x <= 0) {
    this.forward = true;
  }
};

module.exports = RyancInvader;
