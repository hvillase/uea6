let capture;

function setup() {
  createCanvas(800, 400);
  capture = createCapture(VIDEO,{flipped:true});
  capture.size(800, 400);
  capture.hide();
}

function draw() {
  background(220);
  image(capture, 0, 0, 800, 400);
}
