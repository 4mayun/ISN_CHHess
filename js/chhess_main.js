const windowOffset = 21;

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

function mousePressed() {
    chess.onClick();
}

function windowResized() {
    resizeCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
}
