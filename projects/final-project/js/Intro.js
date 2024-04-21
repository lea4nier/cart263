//Introduction scene for the beginning of my game
class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' });  //call superclass and add key to scene 
    }

    //method to display book image and typewriter text
    create() {
        //add voiceover audio
        this.backgroundMusic = this.sound.add('voice1', { loop: false }); //no loop
        this.backgroundMusic.play(); //play

        // Display the book image
        const book = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'book');
        book.setScale(2); // Adjust scale if needed

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
        const button = this.add.text(this.sys.game.config.width / 2, 500, 'Click to enter story', { fill: '#ffffff', fontSize: '24px' });
        button.setOrigin(0.5);
        button.setInteractive();
        button.on('pointerdown', () => {
            this.scene.start('play'); // Switch scene to "Play" when button is clicked
        });
    }

    //not currently being used 
    update() {

    }
}