/*global module, Phaser */
'use strict';

/* jshint maxparams: 6 */
function Troop(game, parent, name, addToStage, enableBody, physicsBodyType) {
  Phaser.Group.call(this, game, parent, name, addToStage, enableBody, physicsBodyType);

}
Troop.prototype = Object.create(Phaser.Group.prototype);
Troop.prototype.constructor = Troop;

Troop.prototype.generate = function() {

};

module.exports = Troop;