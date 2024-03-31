//Play scene 
// This is the class for the game state of my prototype
//flashlight effect was created inspired by this tutorial by Tommy Leung: https://blog.ourcade.co/posts/2020/phaser3-fog-of-war-field-of-view-roguelike/ 
class Play extends Phaser.Scene {
    constructor() {
        super({ key: 'play' }); // call the superclass constructor
    }

    // method to create game objects and set up the scene
    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'background'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add instruction text at the top of the screen
        this.instructionText = this.add.text(this.sys.game.config.width / 2, 10, 'Use arrow keys to move', { fontSize: '18px', fill: '#ffffff' });
        this.instructionText.setOrigin(0.5, 0);

        const text = "Hello, this is typewriter text!";
        const typewriter = new Typewriter(this, 100, 100, text, {
            fontSize: '32px',
            fill: '#00ff00',
            typingSpeed: 100,
            onComplete: () => {
                console.log("Typewriter effect complete!");
            }
        });
        typewriter.startTypewriter();


        // create avatar sprite
        this.avatar = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'avatar'); // create avatar sprite with physics
        this.avatar.setDisplaySize(100, 100); // set the display size of the avatar sprite

        // create animations
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('avatar', { start: 1, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        // set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys(); // create cursor keys for keyboard input

        // Add bunnies
        this.bunnies = this.physics.add.group(); // Create a new group for bunnies

        // Add 30 bunny sprites to the group
        const numberOfBunnies = 30; // Number of bunnies to create
        for (let i = 0; i < numberOfBunnies; i++) {
            let x = Phaser.Math.Between(0, this.sys.game.config.width); // Random x position within game width
            let y = Phaser.Math.Between(0, this.sys.game.config.height); // Random y position within game height
            let bunny = this.bunnies.create(x, y, 'bunny'); // Create and add a bunny sprite to the group
            bunny.setScale(2); // Scale the bunny if needed
        }
    }


    // method to update game logic
    update() {
        // reset avatar velocity
        this.avatar.setVelocity(0);

        // avatar movement and animation with arrow keys (left,right,up,down)
        if (this.cursors.left.isDown) {    //left
            this.avatar.setVelocityX(-100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.right.isDown) {    //right
            this.avatar.setVelocityX(100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.up.isDown) {   //up
            this.avatar.setVelocityY(-100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.down.isDown) {    //down
            this.avatar.setVelocityY(100);
            this.avatar.anims.play('walk', true);
        } else {                                    // if no button is pressed the animation stops
            this.avatar.anims.stop('walk');
        }

        this.bunnies.getChildren().forEach(bunny => {
            // Calculate distance between avatar and bunny
            const dx = this.avatar.x - bunny.x;
            const dy = this.avatar.y - bunny.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If avatar is close enough, make bunny move away
            const minDistance = 100; // Adjust this value to change the sensitivity
            if (distance < minDistance) {
                // Calculate direction from bunny to avatar
                const angle = Math.atan2(dy, dx);

                // Move bunny away from the avatar (add π to the angle to reverse the direction)
                const speed = 50; // Adjust this value to change the speed of the bunny
                bunny.setVelocityX(Math.cos(angle + Math.PI) * speed);
                bunny.setVelocityY(Math.sin(angle + Math.PI) * speed);
            }
        });
    }
}