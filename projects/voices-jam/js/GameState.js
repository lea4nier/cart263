class GameState {
    constructor() {
        let numCars = 5;
        this.traffic = [];

        for (let i = 0; i < numCars; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let car = new Car(x, y);
            this.traffic.push(car);
        }
    }

    draw() {
        background(0);
        // Set random directions for all vehicles
        for (let i = 0; i < this.traffic.length; i++) {
            let traffic = this.traffic[i];
            traffic.display(); // Draw the vehicle
            // Get a random number
            let r = random(0, 1);
            // Half the time make the vehicle move left
            if (r < 0.5) {
                traffic.vx = -traffic.speed;
            } else {
                // The other half make it move right
                traffic.vx = traffic.speed;
                traffic.move();
                // Wrap the vehicle around the canvas
                traffic.wrap();
            }
        }
    }
}