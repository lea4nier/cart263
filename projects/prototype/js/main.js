/***********************
Don't get possessed!
Léa Fournier

Turn the lights on and off to avoid the ghost. 
***********************/
"use strict";

let config = {
    type: Phaser.AUTO, // set the renderer type to automatically choose between WebGL and Canvas.
    width: 800, // set the width of the game canvas to 800 pixels.
    height: 600, // set the height of the game canvas to 600 pixels.
    physics: {
        default: 'arcade', // set the default physics system to Arcade Physics.
    },
    scene: [Boot, Play, Drawer], // specify the scenes to be used in the game (Boot and Play)

    gravity: { y: 200 } //set the gravity of the game world along the y-axis to 200 units.
};

let game = new Phaser.Game(config); // create a new game





