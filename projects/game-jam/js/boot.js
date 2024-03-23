class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    preload() {
        this.load.image('background', 'assets/images/room.png');
        this.load.on('complete', () => {
            this.scene.start('play');
        });
    }

    create() {

    }

    update() {

    }
}