//Ending final scene of game
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
        book.setScale(2); // adjust scale of image to be twice the size of original drawing 

        //Typewriter text
        const text = "####The end?¿!!!#######\n ..for now;" //typewriter text
        const typewriter = new Typewriter(this, 60, 50, text, { //create new instance of typewriter
            //typewriter text properties
            fontSize: '32px', //size
            fill: '#00ff00', //green
            typingSpeed: 100, //speed 
            onComplete: () => {
                this.actionMenu = new ActionMenu(this, this.sys.game.config.width / 2, 500, ['Click to Play Again']);  //call new instance of actionMenu class
            }
        });
        typewriter.startTypewriter();  //start typewriter
    }


    update() {

    }
}