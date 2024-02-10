/**
* class for Pedestrian object that is a part of Traffic superclass  
*/
class Pedestrian extends Traffic {
    /**
     * constructor for pedestrian properties 
     */
    constructor(x, y) {
        // calls the superclass constructor to initialize the position of the pedestrian
        super(x, y);
        // define the dimensions of the pedestrian 
        this.width = 20;
        this.height = 40;
        // define the speed of the pedestrian
        this.speed = 2;
    }

    /**
     * moves the pedestrian vertically (up or down) across the canvas
     * the direction and distance moved depend on the pedestrian's speed
     */
    move() {
        // move the pedestrian downwards (positive y-direction)
        this.y += this.speed;
    }

    /**
     * checks if the pedestrian has reached the bottom of the canvas
     * if so, resets its position to the top of the canvas
     */
    wrap() {
        //if the pedestrian reaches the bottom of the canvas
        if (this.y > height) {
            // reset its position to the top of the canvas
            this.y = -this.height;
            // randomize the x-coordinate to spawn the pedestrian at different positions
            this.x = random(width);
        }
    }

    /**
     * displays the pedestrian as a simple rectangle (for demonstration purposes)
     */
    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);

        // draw two dots for eyes
        fill(0);
        ellipse(this.x + this.width * 0.25, this.y + this.height * 0.25, 5, 5); // Left eye
        ellipse(this.x + this.width * 0.75, this.y + this.height * 0.25, 5, 5); // Right eye

        // draw a smile
        strokeWeight(2);
        line(this.x + this.width * 0.3, this.y + this.height * 0.7, this.x + this.width * 0.7, this.y + this.height * 0.7); // Smile
    }
}

