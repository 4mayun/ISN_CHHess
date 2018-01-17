const windowOffset = 20;

var chess = new Game("chess");

function setup() {
    chess.init();
}

function draw() {
    chess.draw();
}

function mouseMoved() {
    chess.setHoverCasing(mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
}
