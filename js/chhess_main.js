const WINDW_OFF = 21;

var chess = new Game("chess");

function setup() {
    chess.init(WINDW_OFF);
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

function keyPressed() {
    chess.keyPress();
}

function windowResized() {
    resizeCanvas(windowWidth-WINDW_OFF, windowHeight-WINDW_OFF);
}
