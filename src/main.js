/* global require, _, Phaser */

var MobCompose = require('./mob-compose.js');
var MobInherit = require('./mob-inherit.js');

var state = {
  // load game assests.
  preload: function(game) {
    game.load.spritesheet('invaders', 'media/invaders-80x64.png', 80, 64);
  }

  // called after all assests have loaded.
  , create: function(game) {
    var text = 'Class Invaders';
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    var t = game.add.text(game.world.centerX-300, 0, text, style);

    var mob1 = game.add.sprite(100, 100, 'invaders', 1);

    var mobCompose = new MobCompose(game);
    var mobInherit = new MobInherit(game);
  }

  // called every tick
  , update: function() {

  }

  // render any post sprite effects.
  , render: function() {

  }
};

var game = new Phaser.Game(1136, 640, Phaser.AUTO, 'phaser', state);