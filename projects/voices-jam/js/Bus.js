/**
Class for buses! 
*/
class Bus extends Traffic {
    constructor(x, y) {
        // Call the superclass constructor to initialize the position
        super(x, y);
        // Define the dimensions and speed for the bus
        this.width = 100;
        this.height = 40;
        this.speed = 5;
        // Define the color of the bus
        this.color = color(255, 0, 0); // Red color (for example)
    }

    /**
     * Method to display the bus as a rectangle
     */
    display() {
        // Draw the bus
        push();
        rectMode(CENTER);
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        fill(255); // Set the fill color to white for the text
        textAlign(CENTER, CENTER);
        textSize(12); // Set the text size
        text('bus', this.x, this.y); // Display the word "bus" on the bus object
        pop();
    }

    /**
     * Method to move the bus from right to left across the screen
     */
    move() {
        // Move the bus towards the left
        this.x -= this.speed;
        // Wrap around the canvas if the bus moves off-screen
        if (this.x + this.width < 0) {
            this.x = width;
        }
    }
}