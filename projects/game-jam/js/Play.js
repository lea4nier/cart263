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

        // Set up keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();
    }

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
    }
}