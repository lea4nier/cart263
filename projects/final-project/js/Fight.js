//Class for Fight scene where player has 2 options to fight dragon 
class Fight extends Phaser.Scene {
    constructor() {
        super({ key: 'fight' });
    }

    create() {
        // create background
        this.background = this.add.sprite(0, 0, 'sky'); // display background image
        this.background.setOrigin(0, 0); // set the origin of the background 
        this.background.setScale(800 / this.background.width, 600 / this.background.height); // scale the background 

        // add the girl avatar to the scene
        this.ella = this.physics.add.sprite(300, 450, 'ella');
        this.ella.setDisplaySize(80, 80); //resize sprite

        // create dragon sprite
        this.fire = this.physics.add.sprite(500, 400, 'fire'); // create dragon sprite with physics
        this.fire.setDisplaySize(315, 192); // set the display size of the dragon sprite

        // create animation for dragon breathing fire sprite
        this.anims.create({
            key: 'fire',
            frames: this.anims.generateFrameNumbers('fire', { start: 0, end: 23 }), //only 4 frames
            frameRate: 10,
            repeat: 0
        });
        this.fire.anims.play('fire', true); //play animation

        //create new instance of action menu
        this.actionMenu = new ActionMenu(this, 230, 350, ['Fight', 'Laugh']); //2 buttons, fight or laugh, if the user presses "fight" it goes back to the scene before, if they press "laugh" it goes to end scene and they beat the game. 
    }

    update() {

    }
}