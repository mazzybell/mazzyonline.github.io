function setup() {
  createCanvas(1000, 500);
  background('rgb(0,255,0)');
}

function draw() {
  if (mouseIsPressed) {
    fill(100);
  } else {
    fill(255, 150, 200);
  }
  stroke(100);
  strokeWeight(1);
  ellipse(mouseX, mouseY, 100, 100);
}
