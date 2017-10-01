////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 3                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use objects variables to control the slider range
// and step for individual variables.

// seed color and alpha
var seedColor = '#ff00dd';
var bgColor = [0, 0, 0];
// seeds
const seeds = {
  seeds: 500,
  seedsMin: 1,
  seedsMax: 2000
};

// angle (phi)
const angle = {
  angle: 360 * (Math.sqrt(5)-1) / 2,
  angleMax: 360,
  angleStep: 0.1
}
// radius of the seed
const radius = {
  radius: 3,
  radiusMin: 0.5,
  radiusMax: 5,
  radiusStep: 0.1
};

// scale
const zoom = {
  zoom: 15,
  zoomMax: 50,
  zoomStep: 0.1
};

// seed opacity
const opacity = {
  opacity: 150,
  opacityMax: 255
};

////////////////////////////////////////////////////////////////////////////////

// the gui object
var gui;

function setup() {

  // all angles in degrees (0 .. 360)
  angleMode(DEGREES);

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  // create the GUI
  gui = createGui('slider-range-1');
  gui.addObject(seeds);
  gui.addObject(angle);
  gui.addObject(zoom);
  gui.addObject(radius);
  gui.addObject(opacity);

  // we keep the colors variables as non objects
  gui.addGlobals('seedColor', 'bgColor');


  // only call draw when then gui is changed
  noLoop();

}


function draw() {

  // hello darkness my old friend
  background(bgColor);

  // let the seeds be filleth
  var c = color(seedColor);
  fill(red(c), green(c), blue(c), opacity.opacity);
  stroke(0, opacity.opacity);

  // absolute radius
  var r = radius.radius * zoom.zoom;

  push();

  // go to the center of the sunflower
  translate(width/2, height/2);

  // rotate around the center while going outwards
  for(var i = 0; i < seeds.seeds; i++) {
    push();
    rotate(i * angle.angle);
    // distance to the center of the sunflower
    var d = sqrt(i + 0.5) * zoom.zoom;
    ellipse(d, 0, r, r);
    pop();
  }

  pop();

}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
