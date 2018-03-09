var mazeArray = [];

function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 20; i ++) {
    mazeArray[i] = [];
    for (var j = 0; j < 20; j ++) {
      mazeArray[i][j] = random();
    }
  }

  // console.log(mazeArray);

}

function draw() {
  background(0);

  rectMode(CENTER);
  noStroke();
  fill(255);

  for (var i = 0; i < mazeArray.length; i ++) {
    for (var j = 0; j < mazeArray[0].length; j ++) {
      if (mazeArray[i][j] > 0.6) {
        if ((i + j) % 2 == 0) {
          if (j % 2 == 0) {
            rect(10 * i + 50, 10 * j + 60, 1, 15);
          }
          else {
            rect(10 * i + 60, 10 * j + 50, 1, 15);
          }
        }
        else {
          if (j % 2 == 0){
            rect(10 * i + 50, 10 * j + 50, 15, 1);
          }
          else {
            rect(10 * i + 60, 10 * j + 60, 15, 1);
          }
        }
      }
    }
  }

}
