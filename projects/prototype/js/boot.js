//Boot scene to replace preload function
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    //preload images and sprites 
    preload() {
        this.load.image('background', 'assets/images/room.png');  //room image
        this.load.image('ghost', 'assets/images/ghost.png'); //ghost sprite
        this.load.spritesheet('avatar', 'assets/images/avatar.png', {  //avatar sprite
            frameWidth: 16,
            frameHeight: 16,
            endFrame: 1 //only 2 frames 
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