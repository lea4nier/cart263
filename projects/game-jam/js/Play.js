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

        // create avatar sprite
        this.avatar = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'avatar'); // create avatar sprite with physics
        this.avatar.setDisplaySize(50, 50); // set the display size of the avatar sprite

        // create animations
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('avatar', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        // set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys(); // create cursor keys for keyboard input

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
        gradientMask.fillCircle(this.avatar.x, this.avatar.y, 250);

        // invert alpha to create the spotlight effect
        gradientMask.generateTexture('gradientMask', 800, 600);

        // apply the gradient as an alpha mask to the render texture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, gradientMask.createGeometryMask());

        // create a flashlight effect
        this.flashlight = this.make.image({
            x: this.avatar.x,
            y: this.avatar.y,
            key: 'flashlight',
            add: false
        });
        this.flashlight.scale = 2.5;  //size of flashlight around avatar


        // apply the flashlight as a mask to the render texture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, this.flashlight);
        this.rt.mask.invertAlpha = true;

        // create a button for lights
        const lightsButton = this.add.text(this.sys.game.config.width - 100, this.sys.game.config.height - 50, 'Lights', { fontSize: '24px', fill: '#ffffff' });
        lightsButton.setOrigin(1, 1);
        lightsButton.setInteractive();
        lightsButton.on('pointerdown', this.toggleLights, this);

        // create a pink box around the button
        const buttonBox = this.add.graphics();
        buttonBox.lineStyle(2, 0xff69b4);
        buttonBox.strokeRect(lightsButton.x - lightsButton.width - 10, lightsButton.y - lightsButton.height - 10, lightsButton.width + 20, lightsButton.height + 20);

        //add ghost sprite
        this.ghost = this.add.sprite(600, 400, 'ghost'); //where ghost appears on screen at the start of game
        this.ghost.setScale(2); //enlarge image twice the original size
        this.ghost.setVisible(true); // initially hide the ghost
        this.ghostSpeed = 0.01; //speed of ghost when moving

    }

    //method to change visibility of ghost sprite
    toggleGhost() {
        // toggle visibility of the ghost
        this.ghost.setVisible(!this.ghost.visible);
    }

    // method to toggle flashlight visibility
    toggleLights() {
        // console.log('Lights button clicked');
        this.flashlight.visible = !this.flashlight.visible;  //toggles value
        this.toggleGhost(); // toggle visibility of the ghost
        if (this.flashlight.visible) {
            // make black areas visible
            this.rt.alpha = 1;
        } else {
            // make black areas disappear
            this.rt.alpha = 0;
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

        // update flashlight position to follow the avatar
        this.flashlight.x = this.avatar.x;
        this.flashlight.y = this.avatar.y;

        // move ghost towards avatar if lights are off
        if (this.flashlight.visible) {
            // calculate direction towards the avatar
            const dx = this.avatar.x - this.ghost.x;
            const dy = this.avatar.y - this.ghost.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // calculate the fraction of the distance to move
            const fraction = 2 / distance; // adjust this value to control the speed of the ghost

            // move the ghost towards the avatar by a fraction of the distance
            this.ghost.x += dx * fraction;
            this.ghost.y += dy * fraction;
        }
    }
}