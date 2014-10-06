/* global module, require, Phaser */
'use strict';

var state = {
  preload: function(game) {
    game.load.image('galaxy', 'media/galaxy.jpg');
  }

  , create: function(game) {
    game.add.image(0, 0, 'galaxy');
  }
};

module.exports = state;