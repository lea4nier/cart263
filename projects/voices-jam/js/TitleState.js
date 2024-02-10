//class for title screen of game. This displays an image I drew in Procreate. 
class TitleState {
    constructor() {
        this.startTime = millis();
        this.duration = 5000; //time limit of 5 seconds during game 
        this.title = loadImage('assets/images/title.png'); //load image from images folder
    }

    //draws title image and starts timer 
    draw() {
        background(0);
        image(this.title, windowWidth - windowWidth, windowHeight - windowHeight, windowWidth, windowHeight);
        let elapsed = millis() - this.startTime;
        if (elapsed > this.duration) {
            currentState = new InstructionState();  //if 5 seconds pass the state changes to Instruction State
        }
    }
}