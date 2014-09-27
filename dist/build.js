(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./mob-compose.js":2,"./mob-inherit.js":3}],2:[function(require,module,exports){
/*global module, require, Phaser */

//
// Invader Mob in a composite style

function MobCompose(game) {
  this.game = game;
  this.sprite = game.add.sprite(0, 0, 'invaders', 0);

  // Add animations
  this.animations = this.sprite.animations;
  this.animations.add('fly', [0, 1], 2, true);

  this.animations.play('fly');
}

module.exports = MobCompose;
},{}],3:[function(require,module,exports){
/*global module, require, Phaser */

//
// Invader Mob in a inherit style

function MobInherit(game) {
  this.game = game;
  this.sprite = game.add.sprite(100, 0, 'invaders', 3);
}
MobInherit.prototype = Object.create(Phaser.Sprite);
MobInherit.prototype.constructor = MobInherit;

module.exports = MobInherit;
},{}]},{},[1]);
