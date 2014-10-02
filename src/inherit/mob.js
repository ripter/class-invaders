/*global module, Phaser */
'use strict';

var Bullets = require('./bullets.js');

//
// Invader Mob in a inherit style

function MobInherit(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [2,3];

  Phaser.Sprite.call(this, game, x, y, 'invaders');

  this.speedFire = 2000;
  this.bullets = new Bullets(game);

  // add animations
  this.animations.add('fly', frames, 2, true);

  this.animations.play('fly');
}
MobInherit.prototype = Object.create(Phaser.Sprite.prototype);
MobInherit.prototype.constructor = MobInherit;

MobInherit.prototype.update = function () {
  if (!this.parent.children.length) {
    return;
  }
  if (Math.floor((Math.random() * 1000) + 1) == 5) {
    this.fire();
  }
};

MobInherit.prototype.fire = function () {
  var game = this.game;
  var speed = this.speedFire;
  var bulletWidth = 8;
  var x = this.parent.x + this.x + this.width/2 - bulletWidth/2;
  var y = this.y + this.height/2;
  var bullet;

  bullet = this.bullets.fire(x, y);
  // because bullets have physics, they have a body property
  bullet.body.velocity.y = 200;
};

module.exports = MobInherit;
