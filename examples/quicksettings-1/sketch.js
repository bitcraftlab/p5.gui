
// gui params
var numShapes = 20;
var strokeWidth = 4;
var strokeColor = '#00ddff';
var fillColor = [180, 255, 255];
var drawStroke = true;
var	drawFill = true;
var radius = 20;
var shape = ['circle', 'triangle', 'square', 'pentagon', 'star'];
var label = 'label';

// gui
var visible = true;
var gui, gui2;

// dynamic parameters
var bigRadius;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Calculate big radius
  bigRadius = height / 3.0;

  // Create Layout GUI
  gui = createGui();
  gui.addGlobals('numShapes', 'bigRadius', 'shape', 'label', 'radius',
  'drawFill', 'fillColor', 'drawStroke', 'strokeColor', 'strokeWidth');

  // Don't loop automatically
  noLoop();

}


function draw() {

  // clear all
  clear();

	// set fill style
	if(drawFill) {
		fill(fillColor);
	} else {
	  noFill();
	}

	// set stroke style
	if(drawStroke) {
	  stroke(strokeColor);
	  strokeWeight(strokeWidth);
	} else {
	  noStroke();
	}

	// draw circles arranged in a circle
	for(var i = 0; i < numShapes; i++) {

		var angle = TWO_PI / numShapes * i;
		var x = width / 2 + cos(angle) * bigRadius;
		var y = height / 2 + sin(angle) * bigRadius;
		var d = 2 * radius;

    // pick a shape
		switch(shape) {

		  case 'circle':
		    ellipse(x, y, d, d);
		    break;

		  case 'square':
		    rectMode(CENTER);
		    rect(x, y, d, d);
		    break;

		  case 'triangle':
		    ngon(3, x, y, d);
		    break;

		  case 'pentagon':
		    ngon(5, x, y, d);
		    break;

		  case 'star':
		    star(6, x, y, d/sqrt(3), d);
		    break;

		}

    // draw a label below the shape
		push();
		noStroke();
		fill(0);
		textAlign(CENTER);
		text(label, x, y + radius + 15);
		pop();

	}

}


// check for keyboard events
function keyPressed() {
  switch(key) {
    // type [F1] to hide / show the GUI
    case 'p':
      visible = !visible;
      if(visible) gui.show(); else gui.hide();
      break;
  }
}


// draw a regular n-gon with n sides
function ngon(n, x, y, d) {
  beginShape();
  for(var i = 0; i < n; i++) {
    var angle = TWO_PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}


// draw a regular n-pointed star
function star(n, x, y, d1, d2) {
  beginShape();
  for(var i = 0; i < 2 * n; i++) {
    var d = (i % 2 === 1) ? d1 : d2;
    var angle = PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}
