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
            const button = this.scene.add.text(this.x, this.y + index * 50, action, { fill: '#ffffff' });
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
                this.scene.scene.start('Drawer');
        }
    }
}