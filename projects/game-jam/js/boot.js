class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    preload() {
        this.load.image('background', 'assets/images/room.png');
        this.load.image('ghost', 'assets/images/ghost.png');
        this.load.spritesheet('avatar', 'assets/images/avatar.png', {
            frameWidth: 16,
            frameHeight: 16,
            endFrame: 1
        });
        this.load.on('complete', () => {
            this.scene.start('play');
        });
    }

    create() {

    }

    update() {

    }
}