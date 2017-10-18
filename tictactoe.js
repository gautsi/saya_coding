var topLeft = [50, 50];
var cellSize = 100;
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var currentPlayer =  1;
var winner = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  clear();
  drawBoard();
}

function drawBoard() {
  // first draw the border around the board
  strokeWeight(4);
  stroke(color('green'));
  line(topLeft[0], topLeft[1], topLeft[0], topLeft[1] + 3 * cellSize);
  line(topLeft[0], topLeft[1], topLeft[0] + 3 * cellSize, topLeft[1]);
  line(topLeft[0] + 3 * cellSize, topLeft[1], topLeft[0] + 3 * cellSize, topLeft[1] + 3 * cellSize);
  line(topLeft[0], topLeft[1] + 3 * cellSize, topLeft[0] + 3 * cellSize, topLeft[1] + 3 * cellSize);

  // draw inner lines of board
  stroke(color('blue'));
  line(topLeft[0] + cellSize, topLeft[1], topLeft[0] + cellSize, topLeft[1] + 3 * cellSize);
  line(topLeft[0] + 2 * cellSize, topLeft[1], topLeft[0] + 2 * cellSize, topLeft[1] + 3 * cellSize);
  line(topLeft[0], topLeft[1] + cellSize, topLeft[0] + 3 * cellSize, topLeft[1] + cellSize)
  line(topLeft[0], topLeft[1] + 2 * cellSize, topLeft[0] + 3 * cellSize, topLeft[1] + 2 * cellSize)

  // draw the pieces
  for (row = 0; row < 3; row ++) {
    for (col = 0; col < 3; col ++) {
      if (board[row][col] == 1) {
        drawO(row, col);
      }
      else if (board[row][col] == 2) {
        drawX(row, col);
      }
    }
  }

  // print winner
  if (winner > 0) {
    text('Player ' + winner + ' wins!', 400, 400);
  }
}

function drawO(row, col) {
  ellipse(topLeft[0] + col * cellSize + cellSize / 2, topLeft[1] + row * cellSize + cellSize / 2, cellSize / 2, cellSize / 2);
}

function drawX(row, col) {
  line(topLeft[0] + col * cellSize + cellSize / 4, topLeft[1] + row * cellSize + cellSize / 4, topLeft[0] + col * cellSize + cellSize - cellSize / 4, topLeft[1] + row * cellSize + cellSize - cellSize / 4);
  line(topLeft[0] + col * cellSize + cellSize - cellSize / 4, topLeft[1] + row * cellSize + cellSize / 4, topLeft[0] + col * cellSize + cellSize / 4, topLeft[1] + row * cellSize + cellSize - cellSize / 4);
}

function mouseClicked() {
  if (winner == 0) {
    makeMove();
  }
  printPos();
}

function makeMove() {
  if (board[getRow(mouseY)][getCol(mouseX)] == 0) {
    board[getRow(mouseY)][getCol(mouseX)] = currentPlayer;
    winner = checkForWin();
    if (currentPlayer == 1) {
      currentPlayer = 2;
    }
    else if (currentPlayer == 2) {
      currentPlayer = 1;
    }
  }
}

function checkForWin() {
  for (i = 0; i < 3; i ++) {
    if (checkThree(board[i][0], board[i][1], board[i][2]) > 0) {
      return checkThree(board[i][0], board[i][1], board[i][2]);
    }
    else if (checkThree(board[0][i], board[1][i], board[2][i]) > 0) {
      return checkThree(board[0][i], board[1][i], board[2][i]);
    }
  }
  if (checkThree(board[0][0], board[1][1], board[2][2]) > 0) {
    return checkThree(board[0][0], board[1][1], board[2][2]);
  }
  else if (checkThree(board[2][0], board[1][1], board[0][2]) > 0) {
    return checkThree(board[2][0], board[1][1], board[0][2]);
  }
  else {
    return 0;
  }
}

function checkThree(a, b, c) {
  if (a == b & b == c & a > 0) {
    return a;
  }
  else {
    return 0;
  }
}

function getRow(ypos) {
  return Math.floor((ypos - topLeft[1]) / cellSize);
}

function getCol(xpos) {
  return Math.floor((xpos - topLeft[0]) / cellSize);
}

function printPos() {
  var printString = 'x position = ' + mouseX + ', y position = ' + mouseY;
  printString += ', row = ' + getRow(mouseY) + ', col = ' + getCol(mouseX);
  printString += ', winner = ' + winner;
  printString += ', board = ' + board;
  console.log(printString);
}
