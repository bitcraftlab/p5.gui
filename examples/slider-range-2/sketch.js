////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 2                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use sliderRange(min, max, step)
// to adjust the range and step size for sliders

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

// the gui object
var gui;

function setup() {

  // all angles in degrees (0 .. 360)
  angleMode(DEGREES);

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  ////////////////////////////////////////////////////////////////////////////////
  // This is where the magic happens ...

  // create the GUI
  gui = createGui('slider-range-2');

  // set slider range for seeds
  sliderRange(1, 2000, 1);
  gui.addGlobals('seeds');

  // set slider range for angle
  sliderRange(0, 360, 0.1);
  gui.addGlobals('angle');

  // set slider range for radius
  sliderRange(0.5, 5, 0.1);
  gui.addGlobals('radius', 'seedColor');

  // set slider range for zoom
  sliderRange(0, 50, 0.1);
  gui.addGlobals('zoom');

  // set opacity range with magic variables
  sliderRange(0, 255, 1);
  gui.addGlobals('opacity', 'bgColor');

  ////////////////////////////////////////////////////////////////////////////////

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
