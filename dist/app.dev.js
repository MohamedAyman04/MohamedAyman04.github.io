"use strict";

var letter = "x";
var num_of_plays = 0;
var h1 = document.querySelector("h1");
var table = document.querySelector("table");
var section = document.querySelector("section");

var highlight = function highlight(element) {
  if (element.textContent === "" && !winOrNot(table)) {
    //td 
    var pop = new Audio("./Audio/pop.MP3");
    pop.play();

    if (num_of_plays === 3) {
      var boss = new Audio("./Audio/boss.MP3");
      boss.play();
    } else if (num_of_plays === 6) {
      var hunt = new Audio("./Audio/hunt.MP3");
      hunt.play();
    }

    num_of_plays++;
    element.textContent = letter;
    letter = letter === "x" ? "o" : "x";

    if (winOrNot(table)) {
      if (letter === "x") {
        h1.textContent = "O has won!!";
        var o = new Audio("./Audio/o.mp3");
        o.play();
      } else {
        h1.textContent = "X has won!!";
        var x = new Audio("./Audio/x.mp3");
        x.play();
      }

      h1.classList.add("win");
      var button = document.createElement("p");
      button.textContent = "Play Again";
      button.addEventListener("click", function () {
        pop.play();
        window.location.reload();
      });
      button.classList.add("btn", "btn-primary", "btn-lg");
      section.appendChild(button);
      console.log("went here");
    } else if (num_of_plays == 9) {
      var _button = document.createElement("p");

      _button.textContent = "Play Again";

      _button.addEventListener("click", function () {
        pop.play();
        window.location.reload();
      });

      _button.classList.add("btn", "btn-primary", "btn-lg");

      section.appendChild(_button);
      console.log("went here");
      h1.textContent = "Tie!";
      var tie = new Audio("./Audio/tie.mp3");
      tie.play();
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