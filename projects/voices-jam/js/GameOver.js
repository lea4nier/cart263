class GameOver {
    constructor() {
        this.startTime = millis();
        this.duration = 10000; //time limit of 10 seconds during game 
    }

    draw() {

        textSize(100);
        fill('yellow');
        text('you won', windowWidth / 3, windowHeight / 4);

        textSize(50);
        fill('yellow');
        text('its opposite day remember', windowWidth / 3, windowHeight / 2);


        let elapsed = millis() - this.startTime;
        if (elapsed > this.duration) {
            currentState = new GameState();  //if 10 seconds pass the state changes to instruction State
        }
    }
}