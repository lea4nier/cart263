class Pothole {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {
        fill(200); // Light gray color
        ellipse(this.x, this.y, this.width, this.height); // Oval shape
    }
}