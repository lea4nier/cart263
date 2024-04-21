class Battle extends Phaser.Scene {
    constructor() {
        super({ key: 'battle' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'sky'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 
    }

    update() {
        // 
    }
}