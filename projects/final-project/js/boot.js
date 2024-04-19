//Boot scene to replace preload function
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    //preload images and sprites 
    preload() {
        this.load.image('book', 'assets/images/book.png');  //book image
        this.load.image('background', 'assets/images/attic.png');  //attic background image
        this.load.image('bunny', 'assets/images/bunny.png'); //bunny sprite
        this.load.spritesheet('avatar', 'assets/images/avatar.png', {  //avatar sprite of protagonist
            frameWidth: 32, //width
            frameHeight: 32, //height
            endFrame: 3 //only 4 frames 
        });
        this.load.on('complete', () => {
            this.scene.start('forrest'); //game starts in "Intro" scene
        });

        // this.load.image('dresser', 'assets/images/dresser.png'); //dresser image

        // this.load.spritesheet('open', 'assets/images/open.png', {  //dresser opening sprite
        //     frameWidth: 16,
        //     frameHeight: 16,
        //     endFrame: 1 //only 2 frames 
        // });

        this.load.image('secret', 'assets/images/secret.png');  //letter image
        this.load.spritesheet('letter', 'assets/images/letter.png', {  //avatar sprite
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 7 //only 4 frames 
        });

        this.load.image('note', 'assets/images/note.png'); //secret note image that says "GET OUT"
    }

    create() {

    }

    update() {

    }
}