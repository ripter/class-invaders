(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
/*global module, Phaser */
'use strict';

//
// Invader Mob in a inherit style

function MobInherit(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [2,3];

  Phaser.Sprite.call(this, game, x, y, 'invaders');

  // add animations
  this.animations.add('fly', frames, 2, true);

  this.animations.play('fly');
}
MobInherit.prototype = Object.create(Phaser.Sprite.prototype);
MobInherit.prototype.constructor = MobInherit;

module.exports = MobInherit;
},{}],3:[function(require,module,exports){
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
  this.speedFire = 200;
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
    bullet.body.velocity.y = -200;

    this._delayFire = time + speed;
  }

}

module.exports = Player;
},{"./bullets.js":1}],4:[function(require,module,exports){
/*global module, require, Phaser */
'use strict';

var Mob = require('./mob.js');

/* jshint maxparams: 6 */
function Troop(game, parent, name, addToStage, enableBody, physicsBodyType) {
  Phaser.Group.call(this, game, parent, name, addToStage, enableBody, physicsBodyType);

  this.reset(game);

  game.add.tween(this).to({
    x: 610
  }, 3000).to({
    x: 0
  }, 3000).loop().start();
}
Troop.prototype = Object.create(Phaser.Group.prototype);
Troop.prototype.constructor = Troop;
module.exports = Troop;

// resets the troop with fresh mobs
Troop.prototype.reset = function(game) {
  var self = this;
  var margin = 10;
  var formation = [
    [0, 1]
    , [2, 3]
    , [4, 5]
    , [6, 7]
  ];

  formation.forEach(function(frames, y) {
    var mob;
    var x;

    for (x=0; x < 6; x++) {
      mob = new Mob(game, {
        frames: frames
      });

      mob.x = x * (mob.width + margin);
      mob.y = y * (mob.height + margin);

      self.add(mob);
    }
  });
};

},{"./mob.js":2}],5:[function(require,module,exports){
/* global require, Phaser */
'use strict';

// Inherit version
var Troop = require('./inherit/troop.js');
var Player = require('./inherit/player.js');

/*
// Compose
var Mob = require('./compose/mob.js');
*/

var state = {
  // load game assests.
  preload: function(game) {
    game.load.spritesheet('invaders', 'media/invaders-80x64.png', 80, 64);
    game.load.spritesheet('player', 'media/player.png', 32, 32);
    game.load.spritesheet('bullet', 'media/bullet.png', 8, 16);

    // make repl easier
    window.game = game;
  }

  // called after all assests have loaded.
  , create: function(game) {
    var text = 'Class Invaders';
    var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };

    game.add.text(game.world.centerX-200, 0, text, style);

    // Two ways to create sprites
    // var mob1 = game.add.sprite(100, 100, 'invaders', 4);
    // var mob2 = new Phaser.Sprite(game, 0, 100, 'invaders', 5);
    // // game.add.sprite creates and adds, because we used new Phaser.Sprite we
		// // have to add it ourselves.
    // game.add.existing(mob2);

    var player = new Player(game, {
      x: 64
      , y: 600
      , frames: [0]
    });
    game.add.existing(player);
    window.player = player;

    var troop = new Troop(game);
    troop.x = 64;
	  troop.y = 64;

    window.troop = troop;
  }

  // called every tick
  , update: function() {

  }

  // render any post sprite effects.
  , render: function() {

  }
};

/* jshint nonew: false */
new Phaser.Game(1136, 640, Phaser.AUTO, 'phaser', state);
},{"./inherit/player.js":3,"./inherit/troop.js":4}]},{},[5]);
