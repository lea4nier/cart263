class Drawer extends Phaser.Scene {
    constructor() {
        super({ key: 'Drawer' });
    }

    create() {
        const openSprite = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'letter');
        openSprite.setScale(7); // Adjust scale if needed

        // Create animation
        this.anims.create({
            key: 'letter', // Animation key
            frames: this.anims.generateFrameNumbers('letter', { start: 0, end: 7 }), // Specify frames from the spritesheet
            frameRate: 5, // Frame rate of the animation
            repeat: 0 // Number of times to repeat (-1 for infinite loop)
        });

        // Play animation
        openSprite.anims.play('letter');

        // Execute the next action after the animation completes
        openSprite.on('animationcomplete', () => {
            // Display the image called 'note'
            const note = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'note');
            note.setScale(10);
        });
    }

    update() {
        // Update logic if needed
    }
}