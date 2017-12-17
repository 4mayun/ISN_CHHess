var game = new Chess()

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  game.init();
}

function draw() {
  background(game.config.backgroundColor);
  game.draw();
}

function mouseMoved() {
  game.setOverCasing(mouseX, mouseY);
}

function windowResized() {
  createCanvas(windowWidth-20, windowHeight-20);
  background(game.config.backgroundColor);
}
