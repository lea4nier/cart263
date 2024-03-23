"use strict";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
    },
    scene: [Boot, Play],

    gravity: { y: 200 }
};

let game = new Phaser.Game(config);