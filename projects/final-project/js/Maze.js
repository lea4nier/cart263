class Maze extends Phaser.Scene {
    constructor() {
        super({ key: 'maze' });
    }

    create() {
        // add the evil stepmother to the scene
        this.mother = this.physics.add.sprite(100, 100, 'mother');
        this.mother.setDisplaySize(80, 80); //resize sprite

        // add the girl avatar to the scene
        this.ella = this.physics.add.sprite(700, 500, 'ella');
        this.ella.setDisplaySize(80, 80); //resize sprite

        // set up keyboard input for controlling the girl avatar (if needed)
        this.cursors = this.input.keyboard.createCursorKeys();

        //add key image 
        this.key = this.physics.add.sprite(700, 100, 'key');
        this.key.setDisplaySize(30, 50); //resize image
        //number of steps taken by ella
        this.stepsTaken = 0;
        // flag to indicate if the mother should move, she only starts moving after user moves ella 
        this.motherCanMove = false;
    }

    update() {
        // ella velocity
        let ellaVelocityX = 0; //she doesn't move until arrow is pressed down
        let ellaVelocityY = 0;

        //keyboard controls, arrow cursors to move ella 
        if (this.cursors.left.isDown) {
            ellaVelocityX = -200; // move left
        } else if (this.cursors.right.isDown) {
            ellaVelocityX = 200; // move right
        }

        if (this.cursors.up.isDown) {
            ellaVelocityY = -200; // move up
        } else if (this.cursors.down.isDown) {
            ellaVelocityY = 200; // move down
        }

        // set the velocity of the girl avatar
        this.ella.setVelocity(ellaVelocityX, ellaVelocityY);

        // count ella's steps, when it increments the mother can move
        if (ellaVelocityX !== 0 || ellaVelocityY !== 0) {
            this.stepsTaken++;
            this.motherCanMove = true; // mother can move after Ella takes a step
        }

        // move the evil stepmother closer to the girl avatar every 2 steps taken by the girl
        if (this.motherCanMove && this.stepsTaken % 2 === 0) {
            // move mother horizontally towards ella
            if (this.ella.x < this.mother.x) {
                this.mother.x -= 10; // move left
            } else if (this.ella.x > this.mother.x) {
                this.mother.x += 10; // move right
            }

            // move mother vertically towards ella
            if (this.ella.y < this.mother.y) {
                this.mother.y -= 10; // move up
            } else if (this.ella.y > this.mother.y) {
                this.mother.y += 10; // move down
            }

            // stop mother movement until Ella takes another step
            this.motherCanMove = false;
        }
    }

}
