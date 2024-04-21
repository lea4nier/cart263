//Boot scene to replace preload function
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    //preload images and sprite assets 
    preload() {
        //change this to change scene 
        this.load.on('complete', () => {
            this.scene.start('play'); //game starts in "Intro" scene
        });

        //scene 1 - Intro - Assets
        this.load.image('book', 'assets/images/book.png');  //book image, I also use this in the final scene "End"
        this.load.audio('voice1', 'assets/sounds/voice1.m4a'); //narrator voiceover

        //scene 2 - Play - Assets
        this.load.image('background', 'assets/images/attic.png');  //attic background image
        this.load.image('bunny', 'assets/images/bunny.png'); //bunny sprite
        this.load.spritesheet('avatar', 'assets/images/avatar.png', {  //avatar sprite of protagonist
            frameWidth: 32, //width
            frameHeight: 32, //height
            endFrame: 3 //only 4 frames 
        });
        this.load.image('secret', 'assets/images/secret.png');  //letter image
        this.load.audio('voice2', 'assets/sounds/voice2.m4a'); //narrator voiceover

        //scene 3 - Drawer - Assets
        this.load.spritesheet('letter', 'assets/images/letter.png', {  //letter opening animation
            frameWidth: 32,
            frameHeight: 32,
            endFrame: 7 //only 4 frames 
        });
        this.load.image('note', 'assets/images/note.png'); //secret note image that says "GET OUT"

        //scene 4 - Bunny - Assets 
        this.load.image('window', 'assets/images/window.png');  //window image with bunny 
        this.load.image('red', 'assets/images/red.png');  //red pill image
        this.load.image('blue', 'assets/images/blue.png');  //blue pill image


        //scene 5 - Maze - Assets
        this.load.image('mother', 'assets/images/evil.png'); //evil step mother image
        this.load.image('ella', 'assets/images/mazegirl.png'); //girl avatar image, not an animated sprite for this scene

        this.load.image('key', 'assets/images/key.png'); //key image

        //scene 6 - Forrest - Assets
        this.load.image('trees', 'assets/images/trees.png');  //forrest background image
        this.load.spritesheet('girl', 'assets/images/girl.png', {  //avatar sprite of protagonist without broom called "girl"
            frameWidth: 16, //width
            frameHeight: 22, //height
            endFrame: 3 //only 4 frames 
        });
        this.load.image('platform', 'assets/images/platform.png'); //platform image 

        //scene 7 - Glitch - Assets
        this.load.spritesheet('color', 'assets/images/color.png', {  //animation of background glitching and changing color
            frameWidth: 960, //width
            frameHeight: 720, //height
            endFrame: 10 //only 11 frames 
        });

        //scene 8 - Battle - Assets
        this.load.spritesheet('countdown', 'assets/images/text.png', {  //animation of number countdown
            frameWidth: 64, //width
            frameHeight: 64, //height
            endFrame: 3 //only 4 frames 
        });

        //scene 9 - Fight - Assets
        this.load.image('sky', 'assets/images/sky.png'); //red forrest background image to match glitch
        this.load.spritesheet('fire', 'assets/images/fire.png', {  //animation of dragon breathing fire
            frameWidth: 105, //width
            frameHeight: 64, //height
            endFrame: 23 //24 frames 
        });

        this.load.image('dragon', 'assets/images/dragon.png'); //dragon image

    }

    create() {

    }

    update() {

    }
}