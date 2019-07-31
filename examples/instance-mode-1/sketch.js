let sketch = function(p) {

  let div;

  let params = {
    r: 500
  };

  p.setup = function() {

    div = p.canvas.parentElement;

    p.createCanvas(div.clientWidth, div.clientHeight);
    gui = p.createGui(this);
    gui.addObject(params);
  }

  p.draw = function() {
    p.background(220);
    p.ellipse(p.width/2, p.height/2, params.r, params.r);
  }

  p.windowResized = function() {
    p.resizeCanvas(div.clientWidth, div.clientHeight);
  }

}

new p5(sketch, 'sketch1');
new p5(sketch, 'sketch2');

new p5(sketch, 'sketch3');
new p5(sketch, 'sketch4');
