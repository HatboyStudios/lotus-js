var player1;

var platform;

function setup() {
    createCanvas(400,400);

    player1 = new player(200, 200, 50, 50);

    platform = new static_sprite(300,300,50,50);
}

function draw() {
    background("black");

    platform.display();

    player1.display();
    player1.gravity();

    player1.movement();

    if(player1.y + 25 >= 400) {
        player1.touching_ground = true;
    }else {
        player1.touching_ground = false;
    }

    if(player1.y + 25 >= platform.y - 25) {
        if(player1.x >= platform.x - 25 && player1.x <= platform.x +25) {
            player1.touching_ground = true;
            player1.y = platform.y - (platform.w/2) -(player1.w/2)
        }
    }
}