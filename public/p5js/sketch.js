var tMsg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

  socket = io.connect('https://println.pullboxlab.com')
  socket.on('printMsg', newDrawing);
}

function draw() {
  //fill(255);
  //rect((windowWidth / 2) - 40, (windowWidth / 2) + 25, 10, 80);

}

function newDrawing(data8){
  background(51);
  tMsg = data8
  textSize(32);
  fill(255);
  var textLength = (data8.length * 17.5) / 2;
  text(data8, (windowWidth / 2) - textLength, windowHeight / 2);
  console.log(data8.length);
  console.log(textLength, windowWidth);

}
