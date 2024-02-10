/**
* class for losing State of the game! 
*/
class GameOver {
    //constructor to begin timer 
    constructor() {
        this.startTime = millis();
        this.duration = 10000; //time limit of 10 seconds 
    }

    /**
    * draws losing state message and transitions back to Game State using timer
    */
    draw() {
        //display message 
        textSize(100);
        fill('yellow');
        text('you won', windowWidth / 3, windowHeight / 4);

        textSize(50);
        fill('yellow');
        text('its opposite day remember', windowWidth / 3, windowHeight / 2); //second line of text 

        // check if the duration has elapsed
        let elapsed = millis() - this.startTime;
        if (elapsed > this.duration) {
            currentState = new GameState();  //if 10 seconds pass the state changes back to Game State
        }
    }
}