//Play scene 
// This is the class for the chores scene of my game
class Forrest extends Phaser.Scene {
    constructor() {
        super({ key: 'forrest' }); // call the superclass constructor
    }

    // method to create game objects and set up the scene
    create() {

        // create background
        this.background = this.add.sprite(0, 0, 'trees'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add instruction text at the top of the screen
        this.instructionText = this.add.text(this.sys.game.config.width / 2, 575, 'Use arrow keys to move', { fontSize: '18px', fill: '#ffffff' });
        this.instructionText.setOrigin(0.5, 0);


        // create avatar sprite
        this.girl = this.physics.add.sprite(50, 400 - 50, 'girl'); // create avatar sprite with physics
        this.girl.setDisplaySize(100, 100); // set the display size of the avatar sprite

        // create animation for avatar walking...how can I get the sprite to face other direction when going left? do I have to make a new spritesheet?
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('girl', { start: 0, end: 3 }), //only 4 frames
            frameRate: 10,
            repeat: -1
        });

        // set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys(); // create cursor keys for keyboard input
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); //add spacebar input for jumping 

        this.platforms = this.physics.add.staticGroup();

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 550, 'platform').setScale(2).refreshBody(); // Lower main platform
        this.platforms.create(150, 400, 'platform').setScale(2).refreshBody();  // Platform on the mid left at mid-height
        this.platforms.create(50, 400, 'platform').setScale(2).refreshBody(); // platform far left mid height 
        this.platforms.create(650, 400, 'platform').setScale(2).refreshBody();  // Platform on the right at mid-height
        this.platforms.create(400, 250, 'platform').setScale(2).refreshBody();  // Higher platform in the middle

        // Creating more platforms to make it easier to jump and navigate
        this.platforms.create(250, 300, 'platform').setScale(2).refreshBody();  // Additional platform to break up large gaps
        this.platforms.create(550, 300, 'platform');  // Additional platform to break up large gaps


        // Collider between the avatar and platforms
        this.physics.add.collider(this.girl, this.platforms);

    }


    // method to update game logic
    update() {
        // reset avatar velocity
        this.girl.setVelocity(0);

        // avatar movement and animation with arrow keys (left,right,up,down)
        if (this.cursors.left.isDown) {    //left
            this.girl.setVelocityX(-100);
            this.girl.anims.play('walk', true);
            this.girl.setFlipX(true); // Flip sprite horizontally
        } else if (this.cursors.right.isDown) {    //right
            this.girl.setVelocityX(100);
            this.girl.anims.play('walk', true);
            this.girl.setFlipX(false); // Ensure sprite faces right (normal orientation)
        }
        // Jumping


        if (this.spacebar.isDown) {
            this.girl.setVelocityY(-330); // Adjust velocity for jump height
        }

        // If no horizontal movement, stop the walking animation
        if (this.cursors.left.isUp && this.cursors.right.isUp) {
            this.girl.anims.stop();
        }


    }


}
