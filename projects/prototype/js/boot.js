//Boot scene to replace preload function
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    //preload images and sprites 
    preload() {
        this.load.image('background', 'assets/images/attic.png');  //room image
        this.load.image('bunny', 'assets/images/bunny.png'); //bunny sprite
        this.load.spritesheet('avatar', 'assets/images/avatar.png', {  //avatar sprite
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 3 //only 2 frames 
        });
        this.load.on('complete', () => {
            this.scene.start('play');
        });
        this.load.image('dresser', 'assets/images/dresser.png'); //dresser image
    }

    create() {

    }

    update() {

    }
}