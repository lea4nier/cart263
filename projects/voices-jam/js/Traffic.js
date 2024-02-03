/**
Class for all the objects in the road! Code for their position, dimensions, and velocity. 
*/
class Traffic {
    constructor(x, y) {
        // Position
        this.x = x;
        this.y = y;
        // Dimensions (defined by subclasses)
        this.width = undefined;
        this.height = undefined;
        // Current velocity
        this.vx = 0;
        this.vy = 0;
        // Max speed (defined by subclasses)
        this.speed = undefined;
    }

    /**
    Function for velocity to move object
    */
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    /**
    Wraps on the left and right edges of the screen
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
    To be implemented by subclasses. This one does nothing for now.
    */
    display() {

    }
}
