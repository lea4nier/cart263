let handpose;
let video;
let hands = [];
let serial;
let serialPortName = '/dev/tty.usbmodem101';

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);

    // Initialize Handpose model
    handpose = ml5.handpose(video, modelReady);

    // This sets up an event that fills the global variable "hands"
    // with an array every time new hand poses are detected
    handpose.on("predict", results => {
        hands = results;
    });

    // Hide the video element, and just show the canvas
    video.hide();

    // Create a serial port instance
    serial = new p5.SerialPort();
    serial.list();
    serial.openPort(serialPortName);
    serial.on('list', gotList);
    serial.on('data', gotData);
}

function modelReady() {
    console.log("Handpose model ready!");
}

function draw() {
    image(video, 0, 0, width, height);

    // Call function to draw keypoints
    drawKeypoints();

    // Check for wave gesture and trigger action
    detectWaveGesture();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
    for (let i = 0; i < hands.length; i++) {
        const hand = hands[i];
        for (let j = 0; j < hand.landmarks.length; j++) {
            const keypoint = hand.landmarks[j];
            fill(0, 255, 0);
            noStroke();
            ellipse(keypoint[0], keypoint[1], 10, 10);
        }
    }
}

// Function to detect wave gesture
function detectWaveGesture() {
    // If at least one hand is detected
    if (hands.length > 0) {
        // Get keypoints for the first hand detected
        const landmarks = hands[0].landmarks;
        // Calculate distance between thumb and pinky
        const thumbTip = landmarks[4];
        const pinkyTip = landmarks[20];
        const distance = dist(thumbTip[0], thumbTip[1], pinkyTip[0], pinkyTip[1]);
        // If distance is above a threshold, trigger action
        if (distance > 50) {
            console.log('Wave detected!');
            // Send message to Arduino
            serial.write('Wave Detected!');
            // Set flag on Arduino to indicate wave detection
            serial.write('1');
        }
    }
}

// Callback functions for serial communication
function gotList(thelist) {
    console.log('List of Serial Ports:');
    for (let i = 0; i < thelist.length; i++) {
        console.log(i + ' ' + thelist[i]);
    }
}

function gotData() {
    let currentString = serial.readLine();
    console.log(currentString);
}