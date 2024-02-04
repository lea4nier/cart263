class Pedestrian extends Traffic {
    /**
     * 
     */
    constructor(x, y) {
        // Call the superclass constructor to initialize the position of the pedestrian
        super(x, y);
        // Define the dimensions of the pedestrian (for collision detection, if needed)
        this.width = 20; // Example width
        this.height = 40; // Example height
        // Define the speed of the pedestrian
        this.speed = 2; // Example speed
        // Initialize any other properties specific to pedestrians
    }

    /**
     * Moves the pedestrian vertically (up or down) across the canvas
     * The direction and distance moved depend on the pedestrian's speed
     */
    move() {
        // Move the pedestrian downwards (positive y-direction)
        this.y += this.speed;
    }

    /**
     * Checks if the pedestrian has reached the bottom of the canvas
     * If so, resets its position to the top of the canvas
     */
    wrap() {
        // If the pedestrian reaches the bottom of the canvas
        if (this.y > height) {
            // Reset its position to the top of the canvas
            this.y = -this.height;
            // Optionally, you can randomize the x-coordinate to spawn the pedestrian at different positions
            this.x = random(width);
        }
    }

    /**
     * Displays the pedestrian as a simple rectangle (for demonstration purposes)
     */
    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);

        // Draw two dots for eyes
        fill(0);
        ellipse(this.x + this.width * 0.25, this.y + this.height * 0.25, 5, 5); // Left eye
        ellipse(this.x + this.width * 0.75, this.y + this.height * 0.25, 5, 5); // Right eye

        // Draw a smile
        strokeWeight(2);
        line(this.x + this.width * 0.3, this.y + this.height * 0.7, this.x + this.width * 0.7, this.y + this.height * 0.7); // Smile
    }
}

