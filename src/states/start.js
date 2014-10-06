/* global module, require, Phaser */
'use strict';

var TEAM = [
    {name: 'cid',            url: 'media/team/cid.jpeg'}
  , {name: 'kevin_wong',     url: 'media/team/kevin_wong.jpeg'}
  , {name: 'phil_cho',       url: 'media/team/kyle_taborski.png'}
  , {name: 'phil_cho',       url: 'media/team/phil_cho.jpeg'}
  , {name: 'ryan_blair',     url: 'media/team/ryan_blair.jpeg'}
  , {name: 'ryan_cheung',    url: 'media/team/ryan_cheung.jpeg'}
  , {name: 'skip_mcbride',   url: 'media/team/skip_mcbride.jpeg'}
  , {name: 'chris_richards', url: 'media/team/chris_richards.jpeg'}
];

var state = {
  preload: function(game) {
    game.load.image('galaxy', 'media/galaxy.jpg');

    TEAM.forEach(function(member) {
      console.log(member);
      game.load.image(member.name, member.url);
    });
  }

  , create: function(game) {
    game.add.image(0, 0, 'galaxy');

    //game.add.image(100, 100, 'cid');
    var team = this.createTeam(game);
    team.x = 64;
    team.y = 64;
  }

  , createTeam: function(game) {
    var group = game.add.group();

    TEAM.forEach(function(member, index) {
      var x = index * 64;

      member = game.add.image(x, 0, member.name);
      member.scale = {x: .25, y: .25};

      group.add(member);
    });

    return group;
  }
};

module.exports = state;