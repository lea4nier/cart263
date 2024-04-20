//Glitch scene for after the Forrest Scene once book is collected by player
class Glitch extends Phaser.Scene {
    constructor() {
        super({ key: 'glitch' });  //call superclass and add key to scene 
    }

    //method to display animation 
    create() {
        // display the glitch animation
        this.glitchAnimation = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'color');
        this.glitchAnimation.setScale(800 / this.glitchAnimation.width, 600 / this.glitchAnimation.height); // scale to fit the screen

        // play the animation
        this.anims.create({
            key: 'glitching',
            frames: this.anims.generateFrameNumbers('color', { start: 0, end: 10 }),
            frameRate: 10,
            repeat: 0 //ends on final frame
        });
        this.glitchAnimation.anims.play('glitching', true);
    }




    //not currently being used 
    update() {

    }
}