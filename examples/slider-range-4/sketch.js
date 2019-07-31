////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//         P5.GUI  :    Slider-Range Example 4                                //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// Note: this example uses *Instance Mode* to create three sketches on one page
// See here: https://p5js.org/examples/instance-mode-instantiation.html

////////////////////////////////////////////////////////////////////////////////

// create sketches using different hues for the background colors
function makeSketch(id, hue) {

  // note that the hue value is injected into the params
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

    seedColor: '#ffffff',

    // scale
    zoom: 5,
    zoomMax: 50,
    zoomStep: 0.1,

    opacity: 150,
    opacityMax: 255,

    bgColor: [hue, 255, 255]

  };

  // this is the sketch function
  let sketch = function(p) {

    // the gui object
    let gui;

    // the container of the canvas
    let div;

    p.setup = function() {

      // color mode used for interpreting param colors
      p.colorMode(p.HSB, 100, 255, 255, 255);

      // all angles in degrees (0 .. 360)
      p.angleMode(p.DEGREES);

      // create a canvas that fills the div
      div = p.canvas.parentElement;
      p.createCanvas(div.clientWidth, div.clientHeight);

      // create the GUI from a settings object
      gui = p.createGui(this);
      gui.addObject(params);

      // only call draw when then gui is changed
      p.noLoop();

    }

    p.draw = function() {

      // hello darkness my old friend
      p.background(params.bgColor);

      // let the seeds be filleth
      let c = p.color(params.seedColor);
      p.fill(p.hue(c), p.saturation(c), p.brightness(c), params.opacity );
      p.stroke(0, params.opacity);

      // absolute radius
      let r = params.radius * params.zoom;

      p.push();

      // go to the center of the sunflower
      p.translate(p.width/2, p.height/2);

      // rotate around the center while going outwards
      for(let i = 0; i < params.seeds; i++) {
        p.push();
        p.rotate(i * params.angle);
        // distance to the center of the sunflower
        let d = p.sqrt(i + 0.5) * params.zoom;
        p.ellipse(d, 0, r, r);
        p.pop();
      }

      p.pop();
    }

    // dynamically adjust the canvas to the window
    p.windowResized = function() {
      // p.resizeCanvas(div.clientWidth, div.clientHeight);
      p.resizeCanvas(div.clientWidth, div.clientHeight);
    }


  }

  return new p5(sketch, id);

}

// create three sketches on a single page
let sketch1 = makeSketch('sketch1', 5);
let sketch2 = makeSketch('sketch2', 10);
let sketch3 = makeSketch('sketch3', 15);
