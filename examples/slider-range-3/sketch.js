////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 3                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// This example shows how to use *addObject* instead of *addGlobals*
// to provide gui parameters via a javascript object

let params = {

  // seeds
  seeds: 500,
  seedsMin: 1,
  seedsMax: 2000,

  // angle (phi)
  angle: 360 * (Math.sqrt(5)-1) / 2,
  angleMax: 360,
  angleStep: 0.1,

  // radius of the seed
  radius: 3,
  radiusMin: 0.5,
  radiusMax: 5,
  radiusStep: 0.1,

  seedColor: '#ff00dd',

  // scale
  zoom: 15,
  zoomMax: 50,
  zoomStep: 0.1,

  opacity: 150,
  opacityMax: 255,

  bgColor: [0, 0, 0]

};

////////////////////////////////////////////////////////////////////////////////

// the gui object
let gui;

function setup() {

  // all angles in degrees (0 .. 360)
  angleMode(DEGREES);

  // create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  // create the GUI from a settings object
  gui = createGui('slider-range-1');
  gui.addObject(params);

  // only call draw when then gui is changed
  noLoop();

}


function draw() {

  // hello darkness my old friend
  background(params.bgColor);

  // let the seeds be filleth
  let c = color(params.seedColor);
  fill(red(c), green(c), blue(c), params.opacity);
  stroke(0, params.opacity);

  // absolute radius
  let r = params.radius * params.zoom;

  push();

  // go to the center of the sunflower
  translate(width/2, height/2);

  // rotate around the center while going outwards
  for(let i = 0; i < params.seeds; i++) {
    push();
    rotate(i * params.angle);
    // distance to the center of the sunflower
    let d = sqrt(i + 0.5) * params.zoom;
    ellipse(d, 0, r, r);
    pop();
  }

  pop();

}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
