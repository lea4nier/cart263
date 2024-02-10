/**
Opposite Day
Léa Fournier

In this game the user speaks into the microphone to help the chicken cross the road. 
But uh oh! It's opposite day, so when the user says "up" the chicken goes down and when the user says "right" the chicken goes left! 
*/

"use strict";

let currentState;

/**
nothing to preload
*/
function preload() {

}


/**
set up current state, canvas, and background
*/
function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0); //set background to black 

    // set current state to title state 
    currentState = new TitleState();

}


/**
calls draw method of the current state
*/
function draw() {
    // If the current state is TitleState this will call the TitleState class draw()
    currentState.draw();
}
