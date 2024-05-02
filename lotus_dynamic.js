class dynamic_sprite extends base_sprite {
    constructor(x,y,w,h) {
        super(x,y,w,h);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.velocity = {x: 0, y: 0};
        this.acceleration = {x: 0, y: 0.2};
    }

    gravity() {
        if(this.y+25 >= 400) {
            this.velocity.y = 0;
        }else {
            this.velocity.y += this.acceleration.y;
            this.y += this.velocity.y;
        }
    }
}