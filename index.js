//Going to add a modal window which asks for name and then displaying it on page instead of "You" later on
let btn = document.getElementById("startGame");
btn.addEventListener("click", rollDice);

function rollDice() {

    //mam dwie kostki. Funkcja losuje Math.random liczbe 1-6 dla Playera i osobno dla Big Dice. Stosownie do liczby pojawia sie odpowiednie img. Jesli liczba Playera jest wieksza
    //to wygrywa, jesli liczba Big Dice'a jest wieksza, to on wygrywa. Licznik liczy zwyciestwa. Po trzech zwyciestwach komunikat. Gramy do pieciu. Po 5. rundzie wynik.
    let diceOfUser;
    let diceOfBigDice;
    //let userCounter = 0;
    //let bigDiceCounter = 0;

    //for (let i = 1; i < 5; i++) {
    diceOfUser = Math.floor(Math.random() * 6) + 1;
    diceOfBigDice = Math.floor(Math.random() * 6) + 1;

    changeDieImage(diceOfUser, diceOfBigDice);

    if (diceOfUser > diceOfBigDice) {
        //userCounter++;
        generateFeedback("user");


    } else if (diceOfUser < diceOfBigDice) {
        //bigDiceCounter++;
        generateFeedback("bigDice");
    } else {
        //i--;
        generateFeedback("draw");
    }

    //}

    calculateResult(userCounter, bigDiceCounter);
}
//utworz array ze stringami-komentarzami co do gry, losowy z nich bedzie wyswietlany w zaleznosci od zwyciestwa/przegranej
function generateFeedback(player) {
    let arrayOfPlayer = ["Nice one!", "Not your first time, uh? :)", "Don't stop me now!"];
    let arrayOfBigDice = ["Big Dice attacks!", "Don't give up!", "Big Dice knows how to play dice!"];
    let arrayOfDraw = ["That's a draw!", "Let's try again!", "Wait a minute! We need a rerun!"];
    if (player === "user") {
        //display a window with random string of arrayOfPlayer
        alert("you win");
    } else if (player === "bigDice") {
        //display a window with random string of arrayOfBigDice
        alert("Big Dice wins");

    } else if (player === "draw") {
        //display an array about a draw
        alert("it's a draw");
    }
}


function calculateResult(resultOfUser, resultOfBigDice) {
    if (resultOfUser > resultOfBigDice) {
        //display a window with congratulations
    } else {
        //display a window with consolation
    }

}

function changeDieImage(diceOfUser, diceOfBigDice) {
    if (diceOfUser === 1) {
        document.querySelector(".user-dice-img").setAttribute("src", "images/dice1.png")
    } else if (diceOfUser === 2) {
        document.querySelector(".user-dice-img").setAttribute("src", "images/dice2.png");
    } else if (diceOfUser === 3) {
        document.querySelector(".user-dice-img").setAttribute("src", "images/dice3.png");
    } else if (diceOfUser === 4) {
        document.querySelector(".user-dice-img").setAttribute("src", "images/dice4.png");
    } else if (diceOfUser === 5) {
        document.querySelector(".user-dice-img").setAttribute("src", "images/dice5.png");
    } else if (diceOfUser === 6) {
        document.querySelector(".user-dice-img").setAttribute("src", "images/dice6.png");
    }

    if (diceOfBigDice === 1) {
        document.querySelector(".bigdice-dice-img").setAttribute("src", "images/dice1.png");
    } else if (diceOfBigDice === 2) {
        document.querySelector(".bigdice-dice-img").setAttribute("src", "images/dice2.png");
    } else if (diceOfBigDice === 3) {
        document.querySelector(".bigdice-dice-img").setAttribute("src", "images/dice3.png");
    } else if (diceOfBigDice === 4) {
        document.querySelector(".bigdice-dice-img").setAttribute("src", "images/dice4.png");
    } else if (diceOfBigDice === 5) {
        document.querySelector(".bigdice-dice-img").setAttribute("src", "images/dice5.png");
    } else if (diceOfBigDice === 6) {
        document.querySelector(".bigdice-dice-img").setAttribute("src", "images/dice6.png");

    }
}