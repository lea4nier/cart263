//Battle scene where countdown displays before transitioning into fight scene 
class Battle extends Phaser.Scene {
    constructor() {
        super({ key: 'battle' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'sky'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // create number countdown sprite
        this.number = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'countdown'); // create avatar sprite with physics
        this.number.setDisplaySize(100, 100); // set the display size of the avatar sprite

        // create animation for avatar walking...how can I get the sprite to face other direction when going left? do I have to make a new spritesheet?
        this.anims.create({
            key: 'number',
            frames: this.anims.generateFrameNumbers('countdown', { start: 0, end: 3 }), //only 4 frames
            frameRate: 1,
            repeat: 0
        });
        this.number.anims.play('number', true); //play countdown animation

        // animation complete event
        this.number.on('animationcomplete', function (animation, frame) {
            if (animation.key === 'number') {
                // change scene to 'fight'
                this.scene.start('fight');
            }
        }, this);
    }

    update() {

    }
}