const windowOffset = 25;

var game = new Chess();

function setup() {
  createCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
  game.init();
}

function draw() {
  game.draw();
  
  fill(255);
  textSize(12); text(width+"x"+height+":  "+int(frameRate())+" fps", 1, height-2);
}

function mouseMoved() {
  game.setHoverCasing(mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
}
