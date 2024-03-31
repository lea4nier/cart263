// ActionMenu class for handling actions
class ActionMenu {
    constructor(scene, x, y, actions) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.actions = actions;
        this.buttons = [];
        this.openSprite = null; // Variable to hold the open sprite

        // Create UI for action selection
        this.createButtons();
    }

    createButtons() {
        this.actions.forEach((action, index) => {
            const button = this.scene.add.text(this.x, this.y + index * 50, action, { fill: '#ffffff' });
            button.setInteractive();
            button.on('pointerdown', () => {
                this.executeAction(action);
            });
            this.buttons.push(button);
        });
    }

    executeAction(action) {
        // Execute selected action
        switch (action) {
            case 'Open':
                this.scene.scene.start('Drawer');
        }
    }
}