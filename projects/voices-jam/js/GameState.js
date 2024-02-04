class GameState {
    constructor() {
        let numCars = 5;
        let numPedestrians = 3;
        let numBuses = 2;
        this.traffic = [];

        //create cars
        for (let i = 0; i < numCars; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let car = new Car(x, y);
            this.traffic.push(car);
        }

        // Create buses
        for (let i = 0; i < numBuses; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let bus = new Bus(x, y); // Create a new Bus instance
            this.traffic.push(bus); // Add the bus to the traffic array
        }

        //create pedestrians 
        for (let i = 0; i < numPedestrians; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let pedestrian = new Pedestrian(x, y);
            this.traffic.push(pedestrian);
        }


        let numPotholes = 2; // Define numPotholes here
        this.potholes = []; // Array to store potholes
        // create potholes
        for (let i = 0; i < numPotholes; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let potholeWidth = random(50, 100); // Random width for pothole
            let potholeHeight = random(30, 90); // Random height for pothole
            let pothole = new Pothole(x, y, potholeWidth, potholeHeight);
            this.potholes.push(pothole); // Add pothole to the array
        }
    }

    draw() {
        background(0);
        // Draw potholes
        for (let i = 0; i < this.potholes.length; i++) {
            let pothole = this.potholes[i];
            pothole.display(); // Draw the pothole
        }
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