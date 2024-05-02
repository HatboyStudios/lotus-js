var player1;

function setup() {
    createCanvas(400,400);

    player1 = new player(200, 200, 50, 50);
}

function draw() {
    background("black");

    player1.display();
    player1.gravity();

    player1.movement();
}