var player1;

var platform;

function setup() {
    createCanvas(400,400);

    player1 = new player_sprite(200, 200, 50, 50);

    platform = new tile_sprite(300,300,50,50);
}

function draw() {
    background("purple");

    platform.display();

    player1.display();
    player1.gravity();

    player1.movement();

    if(player1.y + 25 >= 400) {
        player1.touching_ground = true;
    }else {
        player1.touching_ground = false;
    }

    if(player1.y + 25 >= platform.y - 25 && player1.y + 25 <= platform.y + 25) {
        if(player1.x-25 >= platform.x - 25 && player1.x-25 <= platform.x +25 || player1.x+25 >= platform.x - 25 && player1.x+25 <= platform.x +25) {
            player1.touching_ground = true;
            player1.y = platform.y - (platform.w/2) -(player1.w/2)
        }
    }
}