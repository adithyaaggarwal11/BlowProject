var phase = 0;
var speed = 0.03;
var maxSquareSize = 20;
var numRows = 30;
var numCols = 30;

function setup() {


  // put setup code here
  createCanvas(1000, 1000);
  noStroke();
  // capture = createCapture(VIDEO);
  // capture.size(500, 500);
  colorA = color(255,255,255);
  colorB = color(255, 255, 255);

function draw() {
  background(255);
  // image(capture, 0, 0, 320, 240);
  // filter(INVERT);
}

}

function draw() {
  // put drawing code here
  background(255,120,120);
  // image(capture, 0, 0, 500, 500);
  // filter(INVERT);
  phase = frameCount*0.03;

  for(var col = 0; col<numCols; col+=1) {
    {
      for (var row = 0; row < numRows; row += 1) {
        var pos_y = height / 3.5 + row * 20;
        var pos_x = width / 3.5 + col * 20;
        // fill(lerpColor(colorA, colorB, row/numRows))
        var sizeOffset = sin(sin((phase))

        // var sizeOffset = (cos(phase - row * 10) + 1) * 0.5;
        var squareSize = sizeOffset * maxSquareSize;
        square(pos_x, pos_y, squareSize);
      }

    }

  }
}
