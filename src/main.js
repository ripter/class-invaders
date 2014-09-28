/* global require, Phaser */
'use strict';

// Inherit version
var Mob = require('./inherit/mob.js');
var Troop = require('./inherit/troop.js');

/*
// Compose
var Mob = require('./compose/mob.js');
*/

var state = {
  // load game assests.
  preload: function(game) {
    game.load.spritesheet('invaders', 'media/invaders-80x64.png', 80, 64);
  }

  // called after all assests have loaded.
  , create: function(game) {
    var text = 'Class Invaders';
    var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };

    game.add.text(game.world.centerX-300, 0, text, style);

    // Two ways to create sprites
    // var mob1 = game.add.sprite(100, 100, 'invaders', 4);
    // var mob2 = new Phaser.Sprite(game, 0, 100, 'invaders', 5);
    // // game.add.sprite creates and adds, because we used new Phaser.Sprite we
		// // have to add it ourselves.
    // game.add.existing(mob2);

    var badguy = new Mob(game, {
      x: 0
			, y: 0
      , frames: [4, 5]
    });

    var troop = new Troop(game);
    troop.x = 64;
	  troop.y = 64;
    troop.add(badguy);
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