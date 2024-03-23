// class play extends phaser.scene
//
// initializes the play scene
class Play extends Phaser.Scene {
    constructor() {
        super({ key: 'play' }); // call the superclass constructor
    }

    // method to create game objects and set up the scene
    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'background'); // create background sprite
        this.background.setOrigin(0, 0); // set the origin of the background sprite
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background sprite

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
        this.rt.fill(0x000000, 100);

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
        this.flashlight.scale = 2.5;

        // apply the flashlight as a mask to the render texture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, this.flashlight);
        this.rt.mask.invertAlpha = true;

        // create a button
        const lightsButton = this.add.text(this.sys.game.config.width - 100, this.sys.game.config.height - 50, 'Lights', { fontSize: '24px', fill: '#ffffff' });
        lightsButton.setOrigin(1, 1);
        lightsButton.setInteractive();
        lightsButton.on('pointerdown', this.toggleLights, this);

        // create a box around the button
        const buttonBox = this.add.graphics();
        buttonBox.lineStyle(2, 0xff69b4);
        buttonBox.strokeRect(lightsButton.x - lightsButton.width - 10, lightsButton.y - lightsButton.height - 10, lightsButton.width + 20, lightsButton.height + 20);

        //add ghost sprite
        this.ghost = this.add.sprite(600, 400, 'ghost');
        this.ghost.setScale(2);
        this.ghost.setVisible(true); // initially hide the ghost

    }
    toggleGhost() {
        // toggle visibility of the ghost
        this.ghost.setVisible(!this.ghost.visible);
    }
    // method to toggle flashlight visibility

    toggleLights() {
        // toggle visibility of flashlight
        console.log('Lights button clicked');
        this.flashlight.visible = !this.flashlight.visible;
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

        // avatar movement and animation with arrow keys
        if (this.cursors.left.isDown) {
            this.avatar.setVelocityX(-100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.right.isDown) {
            this.avatar.setVelocityX(100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.up.isDown) {
            this.avatar.setVelocityY(-100);
            this.avatar.anims.play('walk', true);
        } else if (this.cursors.down.isDown) {
            this.avatar.setVelocityY(100);
            this.avatar.anims.play('walk', true);
        } else {
            this.avatar.anims.stop('walk');
        }

        // update flashlight position to follow the avatar
        this.flashlight.x = this.avatar.x;
        this.flashlight.y = this.avatar.y;
    }
}