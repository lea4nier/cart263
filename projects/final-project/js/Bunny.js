//Bunny Scene where player makes a decision between escaping or following story, reference to the Matrix film
class Bunny extends Phaser.Scene {
    constructor() {
        super({ key: 'bunny' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'window'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add the red pill image
        this.red = this.physics.add.sprite(300, 500, 'red');
        this.red.setDisplaySize(80, 80); //resize sprite

        // add an "escape" button under the red pill 
        this.escapeButton = new ActionMenu(this, 300, 550, ['Escape']); //calls ActionMenu class 

        // add the blue pill image
        this.blue = this.physics.add.sprite(500, 500, 'blue'); // create dragon sprite with physics
        this.blue.setDisplaySize(80, 80); // set the display size of the dragon sprite

        // Add a "forget" button under the blue pill
        this.forgetButton = new ActionMenu(this, 450, 550, ['Forget']); //calls ActionMenu class 

        //typewriter text 
        this.lines = [
            "welcome ella,",
            "I imagine, right now, you must be feeling a bit like \n Alice, tumbling down the rabbit hole?",  //Reference to the matrix :)
            "you are receiving these messages from a \n future version of yourself who is free!",
            "do you believe in fate ella? \n do you believe in magic?",
            "we are trained in this world to accept \n only what stories are written for us.",
            "but you don't want to marry a stinky prince do you?",
            "now use the cursor to make a decision...",
            "You take the blue pill \n and the story continues as it is supposed to. ",
            "you take the red pill, \n and I will give you the chance to escape!",
        ];
        this.displayNextLine(0, 10, 100);
    }

    //method to destroy text after each line calling typewriter class 
    displayNextLine(index, x, y) {
        if (index < this.lines.length) {
            const line = this.lines[index];
            const typewriter = new Typewriter(this, x, y, line, {
                fontSize: '24px',   //I have to change size and color by scene as I change it in different scenes 
                fill: '#000000',
                typingSpeed: 130,
                onComplete: () => {
                    typewriter.destroy(); // destroy the Typewriter after typing the line
                    this.displayNextLine(index + 1, x, y); // Display the next line
                }
            });
            typewriter.startTypewriter();
        }
    }
    update() {

    }
}