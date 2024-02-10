/**
Superclass for all the objects in the road! Code for their position, dimensions, and velocity. 
*/
class Traffic {
    //constructor for properties of objects in Traffic superclass (Bus/Car/Pedestrian)
    constructor(x, y) {
        // position
        this.x = x;
        this.y = y;
        // dimensions (defined by subclasses)
        this.width = undefined;
        this.height = undefined;
        // current velocity
        this.vx = 0;
        this.vy = 0;
        // max speed (defined by subclasses)
        this.speed = undefined;
    }

    /**
    function for velocity to move object
    */
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    /**
    wraps on the left and right edges of the screen
    */
    wrap() {
        if (this.x > width) {
            this.x -= width;
        }
        else if (this.x < 0) {
            this.x += width;
        }
    }

    /**
    this will be implemented by subclasses. This one does nothing for now.
    */
    display() {

    }
}
