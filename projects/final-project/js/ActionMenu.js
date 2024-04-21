// ActionMenu class for options for player
class ActionMenu {
    //costructor for parameters 
    constructor(scene, x, y, actions) {
        //menu will appear in scene it is called in
        this.scene = scene;
        //x value can be changed in scene 
        this.x = x;
        //y value can be changed in scene 
        this.y = y;
        //actions available in the menu
        this.actions = actions;
        //array to store buttons for each action
        this.buttons = [];
        // create button to select action
        this.createButtons();
    }

    // method to create buttons for each action
    createButtons() {
        this.actions.forEach((action, index) => {
            //create a text button for each action
            const button = this.scene.add.text(this.x + index * 100, this.y, action, { fill: '#ffffff' });
            //create hit area for button
            button.setInteractive();
            //button is pressed when clicked
            button.on('pointerdown', () => {
                this.executeAction(action);
            });
            //button is pushed into array
            this.buttons.push(button);
        });
    }

    //method to execute action that has been selected
    executeAction(action) {
        // if the action picked is "open" the the scene called "drawer" starts
        switch (action) {
            case 'Open':
                this.scene.scene.start('Drawer'); //switches to drawer scene
                break;
            case 'Go':
                this.scene.scene.start('bunny'); //switches to drawer scene
                break;
            case 'Escape':
                this.scene.scene.start('maze'); //switches to drawer scene
                break;
            case 'Forget':
                this.scene.scene.start('Intro'); //switches to drawer scene
                break;
            case 'Fight':
                this.scene.scene.start('battle'); //switches back to battle scene before
                break;
            case 'Laugh':
                this.scene.scene.start('end');  //switches to end scene 
                break;
            case 'Click to Play Again':
                this.scene.scene.start('play'); //switches to play scene 
                break;
            // Add more cases for additional actions
        }
    }
}