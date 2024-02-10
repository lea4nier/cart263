/**
* class for Game State of the game! 
*/
class GameState {
    constructor() {
        //set up speech recognition
        this.speechRecognizer = new p5.SpeechRec();
        this.speechRecognizer.continuous = true; // enable continuous recognition
        this.speechRecognizer.interimResults = true; // enable partial results
        this.speechRecognizer.onResult = () => this.onResult(); // set callback for recognition results
        this.speechRecognizer.start(); //start speech recognition at the beginning of state

        //define commands for speech recognition
        this.commands = [
            {
                "command": "up", //if the user says "up"
                "callback": () => this.moveChickenDown()  //calls moveChickedDown function
            },
            {
                "command": "down",  //if the user says "down"
                "callback": () => this.moveChickenUp() //calls moveChickenUp function
            },
            {
                "command": "left",  //if the user says "left"
                "callback": () => this.moveChickenRight() //calls moveChickenRight function
            },
            {
                "command": "right", //if the user says "right"
                "callback": () => this.moveChickenLeft() //calls moveChickenLeft function
            }
        ];


        //set up chicken image that user controls
        this.chickenAsset = loadImage('assets/images/chicken.PNG'); //preload chickenAsset image
        this.chicken = new Chicken(width / 2, height - 50, this.chickenAsset); //chicken spawns at the bottom of the screen 

        //create an array for traffic superclass 
        let numCars = 3;  // 3 cars 
        let numPedestrians = 5;  //5 pedestrians 
        let numBuses = 2;  //2 buses 
        this.traffic = [];

        //create cars
        for (let i = 0; i < numCars; i++) {
            let x = random(0, windowWidth);
            let y = random(0, windowHeight);
            let car = new Car(x, y);
            this.traffic.push(car);
        }

        // create buses
        for (let i = 0; i < numBuses; i++) {
            let x = random(0, windowWidth);
            let y = random(0, windowHeight);
            let bus = new Bus(x, y); // Create a new Bus instance
            this.traffic.push(bus); // Add the bus to the traffic array
        }

        //create pedestrians 
        for (let i = 0; i < numPedestrians; i++) {
            let x = random(0, windowWidth);
            let y = random(0, windowHeight);
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

    // speech recognition callback function
    onResult() {
        //check if there is a result 
        if (!this.speechRecognizer.resultValue) {
            return;
        }

        //log the recognized speech 
        console.log(this.speechRecognizer.resultString);
        for (let command of this.commands) {
            if (this.speechRecognizer.resultString.toLowerCase() === command.command) {
                // executes the corresponding callback
                command.callback();
                break;
            }
        }
    }

    /**
    * moves the chicken up 
    */
    moveChickenUp() {
        this.chicken.moveUp();
    }

    /**
    * moves the chicken down 
    */
    moveChickenDown() {
        this.chicken.moveDown();
    }

    /**
    * moves the chicken left 
    */
    moveChickenLeft() {
        this.chicken.moveLeft();
    }

    /**
    * moves the chicken right 
    */
    moveChickenRight() {
        this.chicken.moveRight();
    }


    /**
    * draws the Game State
    * updates objects and checks for collisions 
    */
    draw() {
        background(0);

        this.chicken.display();
        // draw potholes
        for (let i = 0; i < this.potholes.length; i++) {
            let pothole = this.potholes[i];
            pothole.display(); // Draw the pothole
        }

        // set random directions for all objects in traffic superclass 
        for (let i = 0; i < this.traffic.length; i++) {
            let traffic = this.traffic[i];
            traffic.display(); // Draw the object
            // get a random number
            let r = random(0, 1);
            // half the time make the object move left
            if (r < 0.5) {
                traffic.vx = -traffic.speed;
            } else {
                // the other half make it move right
                traffic.vx = traffic.speed;
                traffic.move();
                // wrap the object around the canvas
                traffic.wrap();
                this.chicken.checkHit(traffic);
            }

            // check if the pedestrian is still alive, if not
            // switch to the dead state
            if (!this.chicken.alive) {
                // go to the death state
                currentState = new GameOver();
            }

            // check if the pedestrian crossed the road (top of canvas)
            // if so, switch to the win state
            if (this.chicken.y < 0) {
                // go to the winning state
                currentState = new GameBeat();
            }
        }
    }
}