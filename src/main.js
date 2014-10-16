/* global require, Phaser */
'use strict';

var RyancInvader = require('./ryanc_invader.js');
// Inherit version
var Troop = require('./inherit/troop.js');
var Player = require('./inherit/player.js');

/*
// Compose version
var Mob = require('./compose/mob.js');
*/

var troop, player;
var ryancInvader;

var state = {
  // load game assets.
  preload: function(game) {
    game.load.spritesheet('invaders', 'media/invaders-80x64.png', 80, 64);
    game.load.spritesheet('player', 'media/player.png', 32, 32);
    game.load.spritesheet('bullet', 'media/bullet.png', 8, 16);

    game.load.spritesheet('ryanc-invader', 'media/chris_r.png', 64, 64);

    // make repl easier
    window.game = game;
  }

  // called after all assets have loaded.
  , create: function(game) {
    var text = 'Class Invaders';
    var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };

    game.add.text(game.world.centerX-200, 0, text, style);

    ryancInvader = new RyancInvader(game);
    game.add.existing(ryancInvader);



    player = new Player(game, {
      x: 64
      , y: 600
      , frames: [0]
    });
    game.add.existing(player);
    window.player = player;

    troop = new Troop(game);
    troop.x = 64;
	  troop.y = 64;

    window.troop = troop;
  }

  // Game Loop
  , update: function(game) {

    game.physics.arcade.overlap(troop, player.bullets, function(mob, bullet) {
      // kill both!
      mob.kill();
			bullet.kill();
    });
  }

  // render any post sprite effects.
  , render: function() {

  }
};

/* jshint nonew: false */
new Phaser.Game(1136, 640, Phaser.AUTO, 'phaser', state);
