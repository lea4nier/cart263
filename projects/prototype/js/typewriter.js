//class for typewriter text
//code from https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/ by Tommy Leung

class Typewriter {
    constructor(scene, x, y, text, config = {}) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.fullText = text;
        this.config = {
            fontSize: '24px',
            fill: '#ffffff',
            typingSpeed: 50,
            onComplete: null,
            ...config
        };

        this.currentText = '';
        this.typingTimer = null;

        this.createText();
    }

    createText() {
        this.text = this.scene.add.text(this.x, this.y, '', this.config);
    }

    startTypewriter() {
        let index = 0;
        this.typingTimer = this.scene.time.addEvent({
            delay: this.config.typingSpeed,
            callback: () => {
                this.currentText += this.fullText[index];
                this.text.setText(this.currentText);
                index++;

                if (index === this.fullText.length) {
                    this.typingTimer.destroy();
                    if (this.config.onComplete) {
                        this.config.onComplete();
                    }
                }
            },
            callbackScope: this,
            loop: true
        });
    }

   