const windowOffset = 25;

var game = new Chess();

function setup() {
  createCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
  game.init();
}

function draw() {
  background(game.config.backgroundColor);
  fill(255);
  textSize(12); text(width+"x"+height+":  "+int(frameRate())+" fps", 1, height-2);

  game.draw();
}

function mouseMoved() {
  game.setOverCasing(mouseX, mouseY);
}

function windowResized() {
  createCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
  background(game.config.backgroundColor);
}
