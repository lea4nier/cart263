/***********************
Wave 'Hello!' to Arduino!
Léa Fournier

Detects wave gesture to display text on Arduino LCD Display using Ml5.js and p5.serialport libraries.

Attributions:
This project was inspired by a Lesson by Professor Jon E. Froehlich and the Makeability Lab at the University of Washington.
Link to source: https://makeabilitylab.github.io/physcomp/communication/handpose-serial.html 
***********************/


let handpose; //variable for handpose model
let video; // variable to store the video capture
let hands = []; // array to store detected hand poses
let serial; // variable for serial communication
let serialPortName = '/dev/tty.usbmodem101'; // Set the serial port name


// ****************************************************
// setup Function to set up webcam and ml5 handpose
// ****************************************************
function setup() {
    createCanvas(640, 480); // create the canvas
    video = createCapture(VIDEO); // create a video capture object
    video.size(width, height); // set the size of the video capture

    // Initialize Handpose model
    handpose = ml5.handpose(video, modelReady);

    // event listener to update the 'hands' array with detected hand poses
    handpose.on("predict", results => {
        hands = results;
    });

    // hide the video element
    video.hide();

    // create a serial port instance
    serial = new p5.SerialPort();
    serial.list(); // list available serial ports, I found this really helpful for debugging as the serial caused a lot of issues for me 
    serial.openPort(serialPortName); // open the specified serial port
    serial.on('list', gotList); // callback for listing serial ports
    serial.on('data', gotData); // callback for receiving data from serial port
}

// ****************************************************
// modelReady function to put message in console
// ****************************************************

function modelReady() {
    console.log("Handpose model ready!");  //add meesage in console
}

// *********************************************************************************************
// draw function to display webcam, keypoints on the user's hand, and detect the wave gesture
// *********************************************************************************************


function draw() {
    image(video, 0, 0, width, height); // display the webcam video

    // draw keypoints for each detected hand pose
    drawKeypoints();

    // check for wave gesture to send message to arduino through serial
    detectWaveGesture();
}

// function to draw keypoints for each hand pose
function drawKeypoints() {
    for (let i = 0; i < hands.length; i++) {
        const hand = hands[i];
        for (let j = 0; j < hand.landmarks.length; j++) {
            const keypoint = hand.landmarks[j];
            fill(0, 255, 0); // set fill color to green
            noStroke(); // disable stroke
            ellipse(keypoint[0], keypoint[1], 10, 10); // draw a circle at the keypoint position
        }
    }
}

// function to detect wave gesture
function detectWaveGesture() {
    if (hands.length > 0) { // check if at least one hand is detected
        const landmarks = hands[0].landmarks; // get keypoints for the first detected hand
        const thumbTip = landmarks[4]; // get position of thumb tip
        const pinkyTip = landmarks[20]; // get position of pinky tip
        const distance = dist(thumbTip[0], thumbTip[1], pinkyTip[0], pinkyTip[1]); // calculate distance between thumb and pinky tips
        if (distance > 50) { // if distance is above a threshold, trigger action
            console.log('Wave detected!'); // log the wave detection
            serial.write('Wave Detected!'); // send message to Arduino
            serial.write('1'); // set flag on Arduino to indicate wave detection
        }
    }
}

// callback function for listing available serial ports
function gotList(thelist) {
    console.log('List of Serial Ports:');
    for (let i = 0; i < thelist.length; i++) {
        console.log(i + ' ' + thelist[i]);
    }
}

//cCallback function for receiving data from serial port
function gotData() {
    let currentString = serial.readLine(); // read incoming data from serial port
    console.log(currentString); // log the received data
}