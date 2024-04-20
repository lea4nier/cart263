class Maze extends Phaser.Scene {
    constructor() {
        super({ key: 'maze' });
    }

    create() {
        // add the evil stepmother to the scene
        this.mother = this.physics.add.sprite(100, 100, 'mother');
        this.mother.setDisplaySize(80, 80); //resize sprite

        // add the girl avatar to the scene
        this.ella = this.physics.add.sprite(700, 500, 'ella');
        this.ella.setDisplaySize(80, 80); //resize sprite

        // set up keyboard input for controlling the girl avatar (if needed)
        this.cursors = this.input.keyboard.createCursorKeys();

        //add key image 
        this.key = this.physics.add.sprite(700, 100, 'key');
        this.key.setDisplaySize(30, 50); //resize image
    }

    update() {

    }
}