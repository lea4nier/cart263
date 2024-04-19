//Boot scene to replace preload function
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    //preload images and sprites 
    preload() {
        //change this to change scene 
        this.load.on('complete', () => {
            this.scene.start('forrest'); //game starts in "Intro" scene
        });

        //scene 1 - Intro - Assets
        this.load.image('book', 'assets/images/book.png');  //book image

        //scene 2 - Play - Assets
        this.load.image('background', 'assets/images/attic.png');  //attic background image
        this.load.image('bunny', 'assets/images/bunny.png'); //bunny sprite
        this.load.spritesheet('avatar', 'assets/images/avatar.png', {  //avatar sprite of protagonist
            frameWidth: 32, //width
            frameHeight: 32, //height
            endFrame: 3 //only 4 frames 
        });
        this.load.image('secret', 'assets/images/secret.png');  //letter image
        this.load.spritesheet('letter', 'assets/images/letter.png', {  //avatar sprite
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 7 //only 4 frames 
        });
        this.load.image('note', 'assets/images/note.png'); //secret note image that says "GET OUT"

        //scene 4 - Forrest - Assets
        this.load.image('trees', 'assets/images/trees.png');  //forrest background image
        this.load.spritesheet('girl', 'assets/images/girl.png', {  //avatar sprite of protagonist without broom called "girl"
            frameWidth: 32, //width
            frameHeight: 32, //height
            endFrame: 3 //only 4 frames 
        });
    }

    create() {

    }

    update() {

    }
}