/*global module, Phaser */
'use strict';

//
// Bullet group

/* jshint maxparams: 6 */
function Bullets(game, parent, name, addToStage) {
  Phaser.Group.call(this, game, parent, name, addToStage, true, Phaser.Physics.ARCADE);
}
Bullets.prototype = Object.create(Phaser.Group.prototype);
Bullets.prototype.constructor = Bullets;

// creates a new bullet at x, y
Bullets.prototype.fire = function(x, y) {
  var bullet = this.getFirstDead();

  // where we able to get a dead bullet?
  if (!bullet) {
    bullet = this.create(x, y, 'bullet');
    bullet.outOfBoundsKill = true;
    bullet.checkWorldBounds = true;
  } else {
    bullet.reset(x, y);
  }

  console.log('created', bullet);
  return bullet;
}

module.exports = Bullets;