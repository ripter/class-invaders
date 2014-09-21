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