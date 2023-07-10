"use strict";

var letter = "x";
var h1 = document.querySelector("h1");
var table = document.querySelector("table");

var highlight = function highlight(element) {
  if (element.textContent === "" && !winOrNot(table)) {
    element.textContent = letter;
    letter === "x" ? letter = "o" : letter = "x";

    if (winOrNot(table)) {
      h1.textContent = letter === "x" ? "O has won!!" : "X has won!!";
      h1.classList.add("win");
    } else {
      h1.textContent = letter === "o" ? "O's turn" : "X's turn";
    }
  }
};

var winOrNot = function winOrNot(table) {
  if (horizontalWin(table)) {
    console.log("won by horizontal");
    return true;
  }

  if (verticalWin(table)) {
    console.log("won by vertical");
    return true;
  }

  if (diagonalWin(table)) {
    console.log("won by diagonal");
    return true;
  }

  return false;
};

var horizontalWin = function horizontalWin(table) {
  var counter = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (table.rows[i].cells[j].textContent === "x") {
        counter++;
      } else if (table.rows[i].cells[j].textContent === "o") {
        counter--;
      }
    }

    if (counter === 3 || counter === -3) {
      return true;
    }

    counter = 0;
  }

  return false;
};

var verticalWin = function verticalWin(table) {
  var counter = 0;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (table.rows[j].cells[i].textContent === "x") {
        counter++;
      } else if (table.rows[j].cells[i].textContent === "o") {
        counter--;
      }
    }

    if (counter === 3 || counter === -3) {
      return true;
    }

    counter = 0;
  }

  return false;
};

var diagonalWin = function diagonalWin(table) {
  var counter = 0;

  for (var i = 0; i < 3; i++) {
    if (table.rows[i].cells[i].textContent === "x") {
      counter++;
    } else if (table.rows[i].cells[i].textContent === "o") {
      counter--;
    }
  }

  if (counter === 3 || counter === -3) {
    return true;
  }

  counter = 0;
  var k = 2;

  for (var _i = 0; _i < 3; _i++) {
    if (table.rows[_i].cells[k].textContent === "x") {
      counter++;
    } else if (table.rows[_i].cells[k].textContent === "o") {
      counter--;
    }

    k--;
  }

  if (counter === 3 || counter === -3) {
    return true;
  }

  return false;
};