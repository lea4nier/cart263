//Introduction scene for the beginning of my game
class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' });  //call superclass and add key to scene 
    }

    //method to display book image and typewriter text
    create() {
        // add instruction text at the bottom of the screen
        this.instructionText = this.add.text(this.sys.game.config.width / 2, 575, 'headphones recommended for the best experience', { fontSize: '18px', fill: '#ffffff' });
        this.instructionText.setOrigin(0.5, 0);

        //add voiceover audio
        this.backgroundMusic = this.sound.add('voice1', { loop: false }); //no loop
        this.backgroundMusic.play(); //play

        // Display the book image
        const book = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'book'); //specify where on canvas image is displayed
        book.setScale(2); // adjust scale to make image bigger

        //typewriter text
        const text = "Once upon a time there was a girl...\n whose evil step mother forced to \n clean up dust bunnies in the attic...";

        //create new instance of typewriter
        const typewriter = new Typewriter(this, 60, 50, text, {
            //typewriter text properties
            fontSize: '32px', //size
            fill: '#00ff00', //green
            typingSpeed: 100, //speed 
            onComplete: () => {
                this.createButton(); // call method to create button when typewriter is complete
            }
        });
        typewriter.startTypewriter();  //start typewriter
    }

    //method to create button
    createButton() {
        const button = this.add.text(this.sys.game.config.width / 2, 500, 'Click to enter story', { fill: '#ffffff', fontSize: '24px' }); //button text, size, and fill
        button.setOrigin(0.5);
        button.setInteractive();  //can be pressed 
        button.on('pointerdown', () => {
            this.scene.start('play'); // Switch scene to "Play" when button is clicked
        });
    }

    //not currently being used 
    update() {

    }
}