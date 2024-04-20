class Maze extends Phaser.Scene {
    constructor() {
        super({ key: 'maze' });
    }

    create() {
        // Add the evil stepmother to the scene
        this.mother = this.physics.add.sprite(100, 100, 'mother');
        this.mother.setDisplaySize(80, 80);

        // Add the girl avatar to the scene
        this.ella = this.physics.add.sprite(700, 500, 'ella');
        this.ella.setDisplaySize(80, 80);
        // Set up keyboard input for controlling the girl avatar (if needed)
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

    }
}