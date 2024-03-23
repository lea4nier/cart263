class Play extends Phaser.Scene {
    constructor() {
        super({ key: 'play' });
    }

    create() {
        this.background = this.add.sprite(0, 0, 'background');
        this.background.setOrigin(0, 0); // set the origin to the top-left corner
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale 

    }

    update() {

    }
}
