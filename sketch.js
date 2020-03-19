// animation variables
var numCols = 30;
var numRows = 30;
var maxSquareSize = 20;
var phase = 0;
var col_c = 0; var row_r = 0;
var y = 100;

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/r9YkmmWl/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(1000, 1000);
  video = createCapture(VIDEO);
  video.size(100, 100);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  // Create the video
  classifyVideo();
}


function draw() {
  background(255, 120, 120);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);


  // as long as label == 1
    // keep showing constructStaticSquares

  // when label == 2
    // start the ripple effect
    // complete ripple effect (with no reference to labels)
    // once complete launch constructStaticSquares

  console.log(label)
  // if (label == "Class 2") {
  //
  //   constructRipple(0.09);
  // } else {

  constructRipple(0.09);
  // }
}
// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();

}

// static square
function constructSquares(){
  for(var col = 0; col<numCols; col+=1) {
    {
      for (var row = 0; row < numRows; row += 1) {
        var pos_y = height / 3.5 + row * 20;
        var pos_x = width / 3.5 + col * 20;
        square(pos_x, pos_y, 20);
      }
    }
  }
}

// ripple animation
function constructRipple(speed, squareSize){
  redraw();
  phase = frameCount*speed;
  for(var col = 0; col<numCols; col+=1) {
      for (var row = 0; row < numRows; row += 1) {
        var pos_y = height / 3.5 + row * 20;
        var pos_x = width / 3.5 + col * 20;
        // // fill(lerpColor(colorA, colorB, row/numRows))
        var sizeOffset = sin(col / (phase*row));
        //
        // // var sizeOffset = (cos(phase - row * 10) + 1) * 0.5;
        var squareSize = sizeOffset * maxSquareSize;
        square(pos_x, pos_y, squareSize);
      }
  }
  squareSize = 20;
}

function resetSketch() {
}
