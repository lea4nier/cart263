class GameState {
    constructor() {
        this.speechRecognizer = new p5.SpeechRec();
        this.speechRecognizer.continuous = true;
        this.speechRecognizer.interimResults = true; // Enable partial results
        this.speechRecognizer.onResult = () => this.onResult();
        this.speechRecognizer.start();
        this.commands = [
            {
                "command": "up",
                "callback": () => this.moveChickenDown()
            },
            {
                "command": "down",
                "callback": () => this.moveChickenUp()
            },
            {
                "command": "left",
                "callback": () => this.moveChickenRight()
            },
            {
                "command": "right",
                "callback": () => this.moveChickenLeft()
            }
        ];


        //set up chicken image that user controls
        this.chickenAsset = loadImage('assets/images/chicken.PNG'); //preload chickenAsset image
        this.chicken = new Chicken(width / 2, height - 50, this.chickenAsset);

        //create an array for traffic superclass 
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

        // create buses
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

        //array for potholes
        let numPotholes = 2;
        this.potholes = [];

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

    // Speech recognition callback function
    onResult() {
        if (!this.speechRecognizer.resultValue) {
            return;
        }
        console.log(this.speechRecognizer.resultString);
        for (let command of this.commands) {
            if (this.speechRecognizer.resultString.toLowerCase() === command.command) {
                // Execute the corresponding callback
                command.callback();
                break;
            }
        }
    }

    moveChickenUp() {
        this.chicken.moveUp();
    }

    // Method to move the chicken down
    moveChickenDown() {
        this.chicken.moveDown();
    }

    // Method to move the chicken left
    moveChickenLeft() {
        this.chicken.moveLeft();
    }

    // Method to move the chicken right
    moveChickenRight() {
        this.chicken.moveRight();
    }
    //
    draw() {
        background(0);

        this.chicken.display();
        // draw potholes
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
                this.chicken.checkHit(traffic);
            }

            // Check if the pedestrian is still alive, if not
            // switch to the dead state
            if (!this.chicken.alive) {
                // Go to the death state
                currentState = new GameOver();
            }

            // Check if the pedestrian crossed the road (top of canvas)
            // If so, switch to the win state
            if (this.chicken.y < 0) {
                // Go to the success state
                currentState = new GameBeat();
            }
        }
    }
}