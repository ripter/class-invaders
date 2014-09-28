(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
/*global module, Phaser */
'use strict';

function Player(game, options) {
  options = options || {};
  var x = options.x || 0;
  var y = options.y || 0;
  var frames = options.frames || [0];

  Phaser.Sprite.call(this, game, x, y, 'player');
}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

module.exports = Player;
},{}],3:[function(require,module,exports){
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

},{"./mob.js":1}],4:[function(require,module,exports){
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
},{"./inherit/player.js":2,"./inherit/troop.js":3}]},{},[4]);
