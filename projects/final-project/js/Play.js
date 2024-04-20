//Play scene 
// This is the class for the chores scene of my game
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

        // add instruction text at the bottom of the screen
        this.instructionText = this.add.text(this.sys.game.config.width / 2, 575, 'Use arrow keys to move', { fontSize: '18px', fill: '#ffffff' });
        this.instructionText.setOrigin(0.5, 0);


        // create avatar sprite
        this.avatar = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'avatar'); // create avatar sprite with physics
        this.avatar.setDisplaySize(100, 100); // set the display size of the avatar sprite

        // create animation for avatar walking...how can I get the sprite to face other direction when going left? do I have to make a new spritesheet?
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('avatar', { start: 1, end: 3 }), //only 4 frames
            frameRate: 10,
            repeat: -1
        });

        // set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys(); // create cursor keys for keyboard input

        // add bunnies
        this.bunnies = this.physics.add.group(); // Create a new group for bunnies

        // add 30 bunny sprites to the group
        const numberOfBunnies = 30; // number of bunnies to create
        for (let i = 0; i < numberOfBunnies; i++) {
            let x = Phaser.Math.Between(0, this.sys.game.config.width); // random x position within game width
            let y = Phaser.Math.Between(0, this.sys.game.config.height); // random y position within game height
            let bunny = this.bunnies.create(x, y, 'bunny'); // create and add a bunny sprite to the group
            bunny.setScale(2); // scale the sprites
        }


        //timer of 10 seconds 
        this.time.delayedCall(10000, () => {

            this.secret = this.add.sprite(300, 300, 'secret').setOrigin(0).setScale(2); // envelope image appears after 10 seconds

            // the action menu appears
            const actions = ['Open'];
            // create an instance of ActionMenu
            this.actionMenu = new ActionMenu(this, this.sys.game.config.width / 2, 10, actions); //
        });
    }


    // method to update game logic
    update() {
        // reset avatar velocity
        this.avatar.setVelocity(0);

        // avatar movement and animation with arrow keys (left,right,up,down)
        // avatar movement and animation with arrow keys (left,right,up,down)
        if (this.cursors.left.isDown) {    //left
            this.avatar.setVelocityX(-100);
            this.avatar.anims.play('walk', true);
            this.avatar.setFlipX(true); // Flip sprite horizontally
        } else if (this.cursors.right.isDown) {    //right
            this.avatar.setVelocityX(100);
            this.avatar.anims.play('walk', true);
            this.avatar.setFlipX(false); // Ensure sprite faces right (normal orientation)
        } else if (this.cursors.up.isDown) {   //up
            this.avatar.setVelocityY(-100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.down.isDown) {    //down
            this.avatar.setVelocityY(100);
            this.avatar.anims.play('walk', true);
        } else {                                    // if no button is pressed the animation stops
            this.avatar.anims.stop();
            this.avatar.setVelocity(0);
        }

        // check for collision between avatar and bunnies
        this.physics.overlap(this.avatar, this.bunnies, this.handleBunnyCollision, null, this);
    }

    // method to handle bunny collision
    handleBunnyCollision(avatar, bunny) {  //parameters for method
        // make the bunny sprite invisible if there is collision
        bunny.setVisible(false);
        this.bunnies.getChildren().forEach(bunny => {
            // calculate distance between avatar and bunny
            const dx = this.avatar.x - bunny.x;
            const dy = this.avatar.y - bunny.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // if avatar is close enough, make bunny move away
            const minDistance = 200; //minimum distance from bunny

            if (distance < minDistance) { //if the distance is less than 200 the bunny runs away 
                // calculate direction from bunny to avatar
                const angle = Math.atan2(dy, dx);

                // move bunny away from the avatar (add π to the angle to reverse the direction)
                const speed = 50; // adjust this value to change the speed of the bunny
                bunny.setVelocityX(Math.cos(angle + Math.PI) * speed);
                bunny.setVelocityY(Math.sin(angle + Math.PI) * speed);
            }
        });
    }
}