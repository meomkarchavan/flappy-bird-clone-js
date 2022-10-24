var bird;
var pipes = [];
function setup() {
    createCanvas(800, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show();

    if (frameCount % 200 == 0) {
        pipes.push(new Pipe());
    }
    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].hits(bird)) {
            console.log("HITT");
        }
        if (pipes[i].offScreen()) {
            pipes.splice(i, 1)
        }
    }

}

function keyPressed() {
    if (key == ' ') {
        bird.up()
        // console.log("SPACE");
    }

}