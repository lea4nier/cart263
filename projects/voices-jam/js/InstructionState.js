class InstructionState {
    constructor() {
        this.startTime = millis();
        this.duration = 10000; // time limit of 10 seconds during game 
        this.timerRunning = true; // starts timer 
    }

    /**
    draws text and runs timer
    */
    draw() {
        //draw text with different colors and positioning on screen
        background('black');
        textSize(100);
        fill('yellow');
        text('click to start', windowWidth / 3, windowHeight / 4);
        fill('cornflowerblue');
        text('click to start', windowWidth / 3, windowHeight / 2);
        fill('tomato');
        text('click to start', windowWidth / 3, windowHeight / 8);
        fill('limegreen');
        text('click to start', windowWidth / 3, windowHeight / 16);


        if (this.timerRunning) {
            //calculate the time passed since the start of the state
            let elapsed = millis() - this.startTime;
            if (elapsed > this.duration) {
                currentState = new GameState();  // If 10 seconds pass, change the state to GameState
                this.timerRunning = false; // Stop the timer
            }
        } else {
            // if the timer is not running (mouse has been pressed), switch to TitleState
            currentState = new TitleState();
        }
    }

    /**
    if the user presses the mouse, the timer stops
    */
    mousePressed() {
        this.timerRunning = false; // stops the timer
    }
}

// event listener for mouse pressed
function mousePressed() {
    currentState.mousePressed(); //calls mouse pressed function for InstructionState
}