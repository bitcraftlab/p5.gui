var count = 0;
var generation = 1;
var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui("stats");
  gui.addGlobals("count", "generation");
  noLoop();
}

function draw() {
}
