var game = new Chess()

function setup() {
  createCanvas(game.config.sizeW, game.config.sizeW);
  background(game.config.backgroundColor);
}

function draw() {
  game.draw();
}
