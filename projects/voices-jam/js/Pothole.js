//class for potholes in the road 
class Pothole {
    //costructor for properties of potholes
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     *displays pothole drawing with text
     */
    display() {
        fill(200); // Light gray color
        ellipse(this.x, this.y, this.width, this.height); // Oval shape

        // display text that says 'pothole' on pothole objects
        fill(255); // set the fill color to white for the text
        textAlign(CENTER, CENTER);
        textSize(12); // set the text size
        text('pothole', this.x, this.y); // display the word "pothole" on the pothole object
    }
}