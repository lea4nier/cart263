/**
* class for Car object that is a part of traffic superclass!
*/
class Car extends Traffic {
    /**
     * constructor to initialize the car object with position, dimensions, speed, and color!
     */
    constructor(x, y) {
        // create the vehicle part with the superclass constructor
        super(x, y);
        // define the dimensions 
        this.width = 50;
        this.height = 20;
        //defines speed
        this.speed = 7;
        //defines car colors
        this.color = this.randomColor();
    }

    /**
     * method to set the color of the car randomly to green or blue
     */
    randomColor() {
        if (random(1) < 0.5) {
            // Green color
            return color(0, random(100, 255), 0);
        } else {
            // Blue color
            return color(0, 0, random(100, 200));
        }
    }

    /**
    displays the car as a rectangle
    */
    display() {
        super.display();
        push();
        rectMode(CENTER);
        fill(this.color); // set the fill color to the assigned color
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        fill(255); // set the fill color to white for the text
        textAlign(CENTER, CENTER);
        textSize(12); //sSet the text size
        text('car', this.x, this.y); // display the word "car" on the car object
        pop();
    }

    /**
    draws the car and calls functions from Traffic class 
    */
    draw() {
        background(0); //clear the canvas 
        // Go through all the vehicles
        for (let i = 0; i < this.traffic.length; i++) {
            // Call the vehicle's method to simulate it
            let traffic = this.traffic[i];
            traffic.move();
            traffic.wrap();
            traffic.display();
        }
    }
}
