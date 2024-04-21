//Forrest Scene
// This is the class for the small platform mini game scene 
class Forrest extends Phaser.Scene {
    constructor() {
        super({ key: 'forrest' }); // call the superclass constructor
    }

    // method to create game objects and set up the scene
    create() {
        // Set gravity
        this.physics.world.gravity.y = 2000; // Adjust the value as needed
        // create background
        this.background = this.add.sprite(0, 0, 'trees'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add instruction text at the top of the screen
        this.instructionText = this.add.text(this.sys.game.config.width / 2, 575, 'use arrow keys to move, use spacebar to jump', { fontSize: '18px', fill: '#ffffff' });
        this.instructionText.setOrigin(0.5, 0);


        // create avatar sprite
        this.girl = this.physics.add.sprite(50, 400 - 40, 'girl'); // create avatar sprite with physics
        this.girl.setDisplaySize(70, 70); // set the display size of the avatar sprite

        // create animation for girl walking
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


        // ollider between the avatar and platforms
        this.physics.add.collider(this.girl, this.platforms);

        //add book image on lowest platform 
        this.book = this.add.image(400, 530, 'book');
        this.book.setScale(0.3); //resize 


        // create render texture for flashlight effect
        this.rt = this.make.renderTexture({
            x: 100,
            y: 100,
            width: 4000,
            height: 4000,
        }, true); // create render texture

        // fill render texture with black
        this.rt.fill(0x000000, 100); //it is a gradient so it looks like lights are off 

        // create a radial gradient alpha mask
        const gradientMask = this.make.graphics();
        gradientMask.fillStyle(0xffffff, 1);
        gradientMask.fillCircle(this.girl.x, this.girl.y, 250);

        // invert alpha to create the spotlight effect
        gradientMask.generateTexture('gradientMask', 800, 600);

        // apply the gradient as an alpha mask to the render texture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, gradientMask.createGeometryMask());

        // create a flashlight effect
        this.flashlight = this.make.image({
            x: this.girl.x,
            y: this.girl.y,
            key: 'flashlight',
            add: false
        });
        this.flashlight.scale = 2.5;  //size of flashlight around avatar


        // apply the flashlight as a mask to the render texture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, this.flashlight);
        this.rt.mask.invertAlpha = true;

        // pointer event created for the book image
        this.book.setInteractive();
        this.book.on('pointerdown', () => { //if the user's cursor is pressed down
            // change scene to "glitch"
            this.scene.start('glitch');
        });
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


        // update flashlight position to follow the avatar
        this.flashlight.x = this.girl.x;
        this.flashlight.y = this.girl.y;
    }
}

