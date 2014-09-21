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