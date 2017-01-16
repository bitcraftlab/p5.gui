////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 1                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use magic variables to control the slider range
// and step for individual variables.
// Just append 'min', 'max' or 'step' to your variable names...


// seed color and alpha
var seedColor = '#ff00dd';
var bgColor = [0, 0, 0];

// inital number of seeds
var seeds = 500;

// angle (phi)
var angle = 360 * (Math.sqrt(5) - 1) / 2;

// radius of the seed
var radius = 3;

// scale
var zoom = 15;

// seed opacity
var opacity = 150;

////////////////////////////////////////////////////////////////////////////////

// This is where the magic happens ...

// set slider range with magic variables
var seedsMin = 1;
var seedsMax = 2000;

// set angle range and step with magic variables
var angleMax = 360;
var angleStep = 0.1;

// set radius range and step with magic variables
var radiusMin = 0.5;
var radiusMax = 5;
var radiusStep = 0.1;

// set step range with magic variables
var zoomMax = 50;
var zoomStep = 0.1;

// set opacity range with magic variables
var opacityMax = 255;

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
  gui.addGlobals('seeds', 'angle', 'zoom', 'radius', 'seedColor', 'opacity', 'bgColor');

  // only call draw when then gui is changed
  noLoop();

}


function draw() {

  // hello darkness my old friend
  background(bgColor);

  // let the seeds be filleth
  var c = color(seedColor);
  fill(red(c), green(c), blue(c), opacity);
  stroke(0, opacity);

  // absolute radius
  var r = radius * zoom;

  push();

  // go to the center of the sunflower
  translate(width/2, height/2);

  // rotate around the center while going outwards
  for(var i = 0; i < seeds; i++) {
    push();
    rotate(i * angle);
    // distance to the center of the sunflower
    var d = sqrt(i + 0.5) * zoom;
    ellipse(d, 0, r, r);
    pop();
  }

  pop();

}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
