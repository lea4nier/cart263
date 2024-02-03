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
        // Set the fill color
        fill(255); // White color
        // Draw the pedestrian as a rectangle
        rect(this.x, this.y, this.width, this.height);
    }
}