/**
* class for Chicken object controlled by user's speech
*/
class Chicken {
    constructor(x, y, chickenAsset) {
        //constructor for Chicken properties
        this.x = x;
        this.y = y;
        this.img = chickenAsset; // Chicken image
        this.width = 100; // Chicken width
        this.height = 100; // Chicken height
        this.speed = 50; // Speed of chicken movement
        this.alive = true;
    }

    // displays the chicken image
    display() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    // moves the chicken up
    moveUp() {
        this.y -= this.speed;
    }

    // moves the chicken down
    moveDown() {
        this.y += this.speed;
    }

    // moves the chicken left
    moveLeft() {
        this.x -= this.speed;
    }

    // moves the chicken right
    moveRight() {
        this.x += this.speed;
    }

    /**
     * function to check if any object from traffic superclass has hit the chicken
     */
    checkHit(traffic) {
        if (this.x < traffic.x + traffic.width / 2 &&
            this.x + this.width > traffic.x - traffic.width / 2 &&
            this.y < traffic.y + traffic.height / 2 &&
            this.y + this.height > traffic.y - traffic.height / 2) {
            this.alive = false;
        }

    }
}