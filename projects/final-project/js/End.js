//End scene for the beginning of my game
class End extends Phaser.Scene {
    constructor() {
        super({ key: 'end' });  //call superclass and add key to scene 
    }

    //method to display book image and typewriter text
    create() {
        //add voiceover audio
        this.backgroundMusic = this.sound.add('voice5', { loop: false }); //no loop
        this.backgroundMusic.play(); //play
        // Display the book image
        const book = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'book');
        book.setScale(2); // Adjust scale if needed

        const text = "####The end?¿!!!#######\n ..for now;" //typewriter text

        //create new instance of typewriter
        const typewriter = new Typewriter(this, 60, 50, text, {
            //typewriter text properties
            fontSize: '32px', //size
            fill: '#00ff00', //green
            typingSpeed: 100, //speed 
            onComplete: () => {
                this.actionMenu = new ActionMenu(this, this.sys.game.config.width / 2, 500, ['Click to Play Again']);
            }
        });
        typewriter.startTypewriter();  //start typewriter
    }

    // //method to create button
    // createButton() {
    //     const button = this.add.text(this.sys.game.config.width / 2, 500, 'click to play again', { fill: '#ffffff', fontSize: '24px' });
    //     button.setOrigin(0.5);
    //     button.setInteractive();
    //     button.on('pointerdown', () => {
    //         this.scene.start('play'); // Switch scene to "Play" when button is clicked
    //     });
    // }

    //not currently being used 
    update() {

    }
}