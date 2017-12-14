var game = new Chess()

function setup() {
  createCanvas(game.config.size.w, game.config.size.h);
  background(game.config.backgroundColor)
}

function draw() {
  game.draw();
}
