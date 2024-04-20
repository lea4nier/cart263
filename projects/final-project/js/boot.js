//Boot scene to replace preload function
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    //preload images and sprites assets 
    preload() {
        //change this to change scene 
        this.load.on('complete', () => {
            this.scene.start('glitch'); //game starts in "Intro" scene
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

        //scene 3 - Drawer - Assets
        this.load.spritesheet('letter', 'assets/images/letter.png', {  //letter opening animation
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 7 //only 4 frames 
        });
        this.load.image('note', 'assets/images/note.png'); //secret note image that says "GET OUT"
        //scene 4 - Maze - Assets

        //scene 5 - Forrest - Assets
        this.load.image('trees', 'assets/images/trees.png');  //forrest background image
        this.load.spritesheet('girl', 'assets/images/girl.png', {  //avatar sprite of protagonist without broom called "girl"
            frameWidth: 16, //width
            frameHeight: 22, //height
            endFrame: 3 //only 4 frames 
        });
        this.load.image('platform', 'assets/images/platform.png'); //platform image 

        //scene 6 - Glitch - Assets
        this.load.spritesheet('color', 'assets/images/color.png', {  //animation of background glitching and changing color
            frameWidth: 960, //width
            frameHeight: 720, //height
            endFrame: 10 //only 11 frames 
        });
    }

    create() {

    }

    update() {

    }
}