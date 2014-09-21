(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global module */

function Base() {
}

Base.prototype = {
  // Load assets
  preload: function(game) {
    console.log('Base.preload', arguments, this);
  }
  // create in game world
  , create: function(game) {
    console.log('Base.create', arguments, this);
  }
  // Update every tick
  , update: function(game) {

  }
  // Render to the canvas
  , render: function(game) {

  }
};

module.exports = Base;
},{}],2:[function(require,module,exports){
/*global module, require, Phaser */

var Base = require('./base.js');

function Board(cols, rows) {
  this.cols = cols;
  this.rows = rows;

  this.SIZE = 64;
}
Board.prototype = Object.create(Base.prototype);
Board.prototype.constructor = Board;

// Load all resources
Board.prototype.preload = function(game) {
  game.load.spritesheet('arrows', 'media/arrow-64x64.png', this.SIZE, this.SIZE);
};

// Create the game assets
Board.prototype.create = function(game) {
  var x, y, button;
  var group = game.add.group();
  var size = this.SIZE;
  var mouseDown = keypress.bind(this);

  // create the game board
  for (y=0; y < this.cols; y++) {
    for (x=0; x < this.rows; x++) {
      button = randomButton(game, x * size, y * size, mouseDown);
      group.add(button);
    }
  }

  group.x = 100;
  group.y = 100;
  this.group = group;
};

Board.prototype.update = function(game) {
  //console.log('board update');
};

function keypress(button) {
  var horzLen = horizontalLength(this.cols - 1, this.group.children, button.z-1, button.frame);

  //nextFrame(button);

  console.log('keypress', button.z-1);
}

function horizontalLength(width, list, index, type) {
  var rowPos = 0 | index % width;
  var left = index - rowPos;
	var right = index + (width - rowPos) - 1;
  var original = list[index];
  var isConnected = false;
  var count = 0;
  var i, button;

  for (i=left; i <= right; i++) {
    button = list[i];

    if (button.frame !== type && !isConnected) {
		  count = 0;
    }
		else if (button.frame !== type && isConnected) {
      break;
    }
    else if (button.frame === type) {
      count++;
    }

    if (button === original) {
		 isConnected = true;
    }
  }

  console.log('count', count);
}


function nextFrame(btn) {
  var frame = btn.frame + 1;

	if (frame === 4) {
	  frame = 0;
  }

  btn.frame = frame;
  return btn;
}

function randomButton(game, x, y, cb) {
  var button = new Phaser.Button(game, x, y, 'arrows', cb);
  button.frame = _.random(0, 3);

  return button;
}

module.exports = Board;
},{"./base.js":1}],3:[function(require,module,exports){
/*global module, require */

var Board = require('./board.js');

var config = {
  preload: preload
  , create: create
  , update: update
  , render: render
}


function preload(game) {

	this.board = new Board(7, 6);
  this.board.preload(game);
}

function create(game) {
  var text = "- phaser -\n with a sprinkle of \n pixi dust.";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

  var t = game.add.text(game.world.centerX-300, 0, text, style);

  this.board.create(game);
}

function update(game) {

  this.board.update(game);
}

function render(game) {

  this.board.render(game);
}


module.exports = config;
},{"./board.js":2}],4:[function(require,module,exports){
/* global require, _, Phaser */

var gameConfig = require('./game.js');

var game = new Phaser.Game(1136, 640, Phaser.AUTO, 'phaser', gameConfig);
},{"./game.js":3}]},{},[4]);
