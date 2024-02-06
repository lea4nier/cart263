class InstructionState {
    constructor() {
        this.startTime = millis();
        this.duration = 10000; //time limit of 10 seconds during game 
    }

    draw() {
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

        let elapsed = millis() - this.startTime;
        if (elapsed > this.duration) {
            currentState = new GameState();  //if 10 seconds pass the state changes to instruction State
        }
    }
}
