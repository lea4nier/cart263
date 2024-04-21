class Bunny extends Phaser.Scene {
    constructor() {
        super({ key: 'bunny' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'window'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add the red pill image
        this.red = this.physics.add.sprite(300, 500, 'red');
        this.red.setDisplaySize(80, 80); //resize sprite

        // add the blue pill image
        this.blue = this.physics.add.sprite(500, 500, 'blue'); // create dragon sprite with physics
        this.blue.setDisplaySize(80, 80); // set the display size of the dragon sprite

    }

    update() {

    }
}