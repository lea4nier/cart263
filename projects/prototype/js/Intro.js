class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' });
    }

    create() {
        // Display the book image
        const book = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'book');
        book.setScale(2); // Adjust scale if needed

        const text = "Once upon a time there was a girl...\n whose evil step mother forced to \n clean up dust bunnies in the attic...";
        const typewriter = new Typewriter(this, 60, 50, text, {
            fontSize: '32px',
            fill: '#00ff00',
            typingSpeed: 100,
            onComplete: () => {
                this.createButton(); // Call method to create button when typewriter is complete
            }
        });
        typewriter.startTypewriter();
    }

    createButton() {
        const button = this.add.text(this.sys.game.config.width / 2, 500, 'Click to enter story', { fill: '#ffffff', fontSize: '24px' });
        button.setOrigin(0.5);
        button.setInteractive();
        button.on('pointerdown', () => {
            this.scene.start('play'); // Switch scene to "Play" when button is clicked
        });
    }

    update() {

    }
}