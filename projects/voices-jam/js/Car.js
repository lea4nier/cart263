class Car extends Traffic {
    /**
     * Constructor to initialize the car object with position, dimensions, speed, and color!
     */
    constructor(x, y) {
        // Create the vehicle part with the superclass constructor
        super(x, y);
        // Define the dimensions and speed
        this.width = 50;
        this.height = 20;
        this.speed = 10;
        this.color = this.randomColor();
    }

    /**
     * Method to set the color of the car randomly to green or blue
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
    Displays the car as a rectangle
    */
    display() {
        super.display();
        push();
        rectMode(CENTER);
        fill(this.color); // Set the fill color to the assigned color
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        pop();
    }

    /**
    Draws the car and calls functions from Traffic class 
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
