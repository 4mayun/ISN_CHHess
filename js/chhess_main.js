const windowOffset = 25;

var chess = new Game('saucisse');

function setup() {
  createCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
  chess.init();
}

function draw() {
  chess.draw();

  fill(255);
  textSize(12); text(width+"x"+height+":  "+int(frameRate())+" fps", 1, height-2);
}

function mouseMoved() {
  chess.setHoverCasing(mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
}
