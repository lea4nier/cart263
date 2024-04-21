class Fight extends Phaser.Scene {
    constructor() {
        super({ key: 'fight' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'sky'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add the girl avatar to the scene
        this.ella = this.physics.add.sprite(300, 450, 'ella');
        this.ella.setDisplaySize(80, 80); //resize sprite

        // create number countdown sprite
        this.fire = this.physics.add.sprite(500, 400, 'fire'); // create avatar sprite with physics
        this.fire.setDisplaySize(315, 192); // set the display size of the avatar sprite

        // create animation for avatar walking...how can I get the sprite to face other direction when going left? do I have to make a new spritesheet?
        this.anims.create({
            key: 'fire',
            frames: this.anims.generateFrameNumbers('fire', { start: 0, end: 23 }), //only 4 frames
            frameRate: 10,
            repeat: 0
        });
        this.fire.anims.play('fire', true); //play countdown animation
    }

    update() {

    }
}