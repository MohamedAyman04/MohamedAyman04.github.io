let letter = "x";
let num_of_plays = 0;
const h1 = document.querySelector("h1");
const table = document.querySelector("table")
const section = document.querySelector("section");

const highlight = (element) => {
    if (element.textContent === "" && !winOrNot(table)) {
        let pop = new Audio("./Audio/pop.MP3");
        pop.play();
        if (num_of_plays === 3) {
            let boss = new Audio("./Audio/boss.MP3");
            boss.play();
        } else if (num_of_plays === 6) {
            let hunt = new Audio("./Audio/hunt.MP3");
            hunt.play();
        }
        num_of_plays++;
        element.textContent = letter;
        letter === "x" ? letter = "o" : letter = "x";
        if (winOrNot(table)) {
            if (letter === "x") {
                h1.textContent = "O has won!!";
                let o = new Audio("./Audio/o.mp3");
                o.play();
            } else {
                h1.textContent = "X has won!!";
                let x = new Audio("./Audio/x.mp3");
                x.play();
            }
            h1.classList.add("win");
            const button = document.createElement("p");
            button.textContent = "Play Again";
            button.addEventListener("click", () => {
                pop.play();
                window.location.reload();
            });
            button.classList.add("btn", "btn-primary", "btn-lg");
            section.appendChild(button);
            console.log("went here")
        } else {
            h1.textContent = letter === "o" ? "O's turn" : "X's turn";
        }
    }
}

const winOrNot = (table) => {
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
        counter = 0;
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
        counter = 0;
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