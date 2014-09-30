/*global module, require, Phaser */
'use strict';

var Bullets = require('./bullets.js');

function Player(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [0];

  // call the parent constructor
  Phaser.Sprite.call(this, game, x, y, 'player');

  this.speedMovement = 10;
  this.speedFire = 500;
  this.bullets = new Bullets(game);

  // we want to use the common cursor keys (Up, Down, Left, Right)
  this.keys = game.input.keyboard.createCursorKeys();
  // createCursorKeys just a shortcut for addKey
  this.keys.fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  var game = this.game;
  var keys = this.keys;
  var speed = this.speedMovement;

  // move the player by adjusting the x pos
  if (keys.left.isDown) {
    this.x -= speed;
  }
  else if (keys.right.isDown) {
    this.x += speed;
  }

  // Player can fire and move
  if (keys.fire.isDown) {
    this.fire();
  }
};

Player.prototype.fire = function() {
  var game = this.game;
  var speed = this.speedFire;
  var time = game.time.now;
  var delayFire = this._delayFire || 0;
  var x = this.x + 13;
  var y = this.y - 10;
  var bullet;

  if (time >= delayFire) {
    bullet = this.bullets.fire(x, y);
    // because bullets have physics, they have a body property
    bullet.body.velocity.y = -200;

    this._delayFire = time + speed;
  }

}

module.exports = Player;