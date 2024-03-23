class Play extends Phaser.Scene {
    constructor() {
        super({ key: 'play' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'background');
        this.background.setOrigin(0, 0);
        this.background.setScale(800 / this.background.width, 600 / this.background.height);

        // create avatar sprite
        this.avatar = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'avatar');
        this.avatar.setDisplaySize(50, 50);

        // create animations
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('avatar', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        // set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();

        // create RenderTexture for flashlight effect
        this.rt = this.make.renderTexture({
            x: 100,
            y: 100,
            width: 4000, // fill entire screen
            height: 4000, // fill entire screen - I had issues when making it 800 x 600 so I made it much larger 
        }, true);

        // fill it with black
        this.rt.fill(0x000000, 100);

        // create a radial gradient alpha mask
        const gradientMask = this.make.graphics();
        gradientMask.fillStyle(0xffffff, 1);
        gradientMask.fillCircle(this.avatar.x, this.avatar.y, 250); // Adjust radius as needed

        // invert alpha to create the spotlight effect
        gradientMask.generateTexture('gradientMask', 800, 600); // Generate texture with correct dimensions


        // apply the gradient as an alpha mask to the RenderTexture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, gradientMask.createGeometryMask());

        // create a flashlight effect
        this.flashlight = this.make.image({
            x: this.avatar.x,
            y: this.avatar.y,
            key: 'flashlight',
            add: false
        });
        this.flashlight.scale = 2.5; //flashlight size

        // apply the flashlight as a mask to the RenderTexture
        this.rt.mask = new Phaser.Display.Masks.BitmapMask(this, this.flashlight);
        this.rt.mask.invertAlpha = true; // invert alpha to create the spotlight effect
    }

    update() {
        // reset avatar velocity
        this.avatar.setVelocity(0);

        // avatar movement and animation with arrow key input
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