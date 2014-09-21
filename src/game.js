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