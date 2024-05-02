class player extends dynamic_sprite {
    constructor(x,y,w,h) {
        super(x,y,w,h);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    movement() {
        if(keyIsDown(87))  {
            this.y -= 5;
        }

        if(keyIsDown(65))  {
            this.x -= 5;
        }

        if(keyIsDown(83))  {
            this.y += 5;
        }

        if(keyIsDown(68))  {
            this.x += 5;
        }
    }
}