//scene of letter opening and displaying secret note
class Drawer extends Phaser.Scene {
    constructor() {
        super({ key: 'Drawer' });
    }

    //method to display animations on black screen 
    create() {
        //call letter sprite from boot
        const openSprite = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'letter');
        openSprite.setScale(7); // scale to be bigger

        // create animation
        this.anims.create({
            key: 'letter', // Animation key
            frames: this.anims.generateFrameNumbers('letter', { start: 0, end: 7 }), // 8 frames total
            frameRate: 5, // frame rate
            repeat: 0 // does not repeat
        });

        // play animation
        openSprite.anims.play('letter');

        const text = "pssst...hey over here"; //typewriter text

        //create new instance of typewriter
        const typewriter = new Typewriter(this, 360, 500, text, {
            //typewriter text properties
            fontSize: '32px', //size
            fill: '#00ff00', //green
            typingSpeed: 100, //speed 
        });

        // calls next action after the animation completes
        openSprite.on('animationcomplete', () => {
            // Display the image called 'note'
            const note = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'note');
            note.setScale(10); //scale to be larger...I drew it too small oops
            typewriter.startTypewriter();  //start typewriter
        });
    }

    //not currently being used 
    update() {

    }
}