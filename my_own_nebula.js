
radius = 0;
r = 255;
g = 255;
b = 255;
var displayWidth, displayHeight;

function setup() {
  createCanvas(displayWidth, displayHeight-150);
  background(0);
  noFill();
  stroke(255, 45);
  radius = width;
}

function draw() {
  var center_x, center_y, noiseFactor, x, y;
  center_x = mouseX;
  center_y = mouseY;
  stroke(r, g, b, 30);
  beginShape();
  TOTAL_DEGREES = document.getElementById("degrees").value;
  
  for (var i = 0, _pj_a = TOTAL_DEGREES; i < _pj_a; i += 1) {
    noiseFactor = noise(i * 0.02, Number.parseFloat(frameCount) / 140);
    x = center_x + radius * cos(radians(i)) * noiseFactor;
    y = center_y + radius * sin(radians(i)) * noiseFactor;
    r = random(255);
    g = random(120);
    b = random(220);
    curveVertex(x, y);
  }

  endShape();
  radius -= 1;

  if (radius === -600) {
    radius += 1200;
  }
}

function keyPressed() {
  save("my_own_nebula.tif");
}
