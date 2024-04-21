//class for typewriter text
//code from https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/ by Tommy Leung
//although I specify fill and size here, I change it many times throughout the game so some of the code repeats, I would have liked to keep it consistent but it was easier to read depending on the scene.

class Typewriter {
    constructor(scene, x, y, text, config = {}) { //constructor for text 
        this.scene = scene;  //can be used in multiple scenes 
        this.x = x; //x-coordinate of text
        this.y = y; //y-coordinate of text 
        this.fullText = text; //the full text is displayed 
        this.config = {
            fontSize: '24px', //default faunt size unless changes
            fill: '#ffffff', //default fill to white 
            typingSpeed: 50, //default typing speed 
            onComplete: null, //callback function to tell computer when typing is complete
            ...config //lets me change the properties in other scenes 
        };

        this.currentText = ''; //current text being displayed 
        this.typingTimer = null; //used later so that I can destroy lines of typewriter text 

        this.createText(); //method to create text 
    }

    //method to create text at specified position
    createText() {
        this.text = this.scene.add.text(this.x, this.y, '', this.config);
    }

    //method to begin typewriter in scenes 
    startTypewriter() {
        let index = 0; //index tracks the current character being typed since it is one character at a time
        this.typingTimer = this.scene.time.addEvent({
            delay: this.config.typingSpeed, //delay between typing each character
            callback: () => {
                this.currentText += this.fullText[index]; //add the next character
                this.text.setText(this.currentText); //update text object with current text 
                index++; //adds next character

                //checks if all characters have been typed
                if (index === this.fullText.length) {
                    this.typingTimer.destroy(); //stop animation timer
                    if (this.config.onComplete) {
                        this.config.onComplete(); //checks if there is an event in the code that is supposed to happen when typewriter is complete
                    }
                }
            },
            callbackScope: this, //context for callback is this
            loop: true //timer will restart after full text is complete 
        });
    }

    //method used to clear text from screen 
    destroy() {
        if (this.typingTimer) {
            this.typingTimer.destroy(); //stops animation timer
        }
        this.text.destroy(); //destroys text 
    }
}