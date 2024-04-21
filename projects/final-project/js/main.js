/***********************
Escape The Story!
Léa Fournier

In this game the main character becomes self aware and goes on a journey to escape her fairytale story.    
***********************/
"use strict";

let config = {
    type: Phaser.AUTO, // set the renderer type to automatically choose between WebGL and Canvas.
    width: 800, // set the width of the game canvas to 800 pixels.
    height: 600, // set the height of the game canvas to 600 pixels.
    physics: {
        default: 'arcade', // set the default physics system to Arcade Physics.
    },
    scene: [Boot, Intro, Play, Drawer, Maze, Forrest, Glitch, Battle, Fight], // all the scenes used in the game

    gravity: { y: 200 } //set the gravity of the game world along the y-axis to 200 units.
};

let game = new Phaser.Game(config); // create a new game





