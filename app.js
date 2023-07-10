let letter = "x";
const h1 = document.querySelector("h1");
const table = document.querySelector("table")

const highlight = (element) => {
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
}

const winOrNot = (table) => {
    if (horizontalWin(table))
        return true;
    if (verticalWin(table))
        return true;
    if (diagonalWin(table))
        return true;
    return false;
}

const horizontalWin = (table) => {
    let counter = 0;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (table.rows[i].cells[j].textContent === "x") {
                counter++;
            } else if (table.rows[i].cells[j].textContent === "o") {
                counter--;
            }
        }
        if (counter === 3 || counter === -3) {
            return true;
        }
    }
    return false;
}

const verticalWin = (table) => {
    let counter = 0;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (table.rows[j].cells[i].textContent === "x") {
                counter++;
            } else if (table.rows[j].cells[i].textContent === "o") {
                counter--;
            }
        }
        if (counter === 3 || counter === -3) {
            return true;
        }
    }
    return false;
}

const diagonalWin = (table) => {
    let counter = 0;
    for (let i=0; i<3; i++) {
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
    let k = 2;
    for (let i=0; i<3; i++) {
        if (table.rows[i].cells[k].textContent === "x") {
            counter++;
        } else if (table.rows[i].cells[k].textContent === "o") {
            counter--;
        }
        k--;
    }
    if (counter === 3 || counter === -3) {
        return true;
    }
    return false;
}