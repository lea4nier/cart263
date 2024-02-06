class TitleState {
    constructor() {
        this.title = loadImage('assets/images/title.png');
    }

    draw() {
        image(this.title, windowWidth - windowWidth, windowHeight - windowHeight, windowWidth, windowHeight);
    }
}