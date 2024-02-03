/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
// let speechRecognizer = new p5.SpeechRec();
let currentState;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    // 2. Tell the program the function to call if the recognizer hears something
    // speechRecognizer.onResult = handleResult;
    // // 3. Tell the recognizer to start listening
    // speechRecognizer.start();

    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    angleMode(DEGREES);

    // We set the state by creating an object of the correct
    // type, in this case we want a title screen
    currentState = new GameState();

}


/**
Description of draw()
*/
function draw() {
    // currentState.draw()
    currentState.draw();
}



// function handleResult() {
//     // 4. Check if there is definitely a result
//     if (speechRecognizer.resultValue === true) {
//         // 5. If there is, print it out in the console
//         console.log(speechRecognizer.resultString);
//         // (e.g. speechRecognizer.resultString has what was said inside it)
//     }
// }