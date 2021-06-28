//Going to add a modal window which asks for name and then displaying it on page instead of "You" later on
let btn = document.getElementById("startGame");
btn.addEventListener("click", rollDice);

function rollDice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
    let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


    if (randomNumber1 > randomNumber2) {
        generateFeedback("user");

    } else if (randomNumber1 < randomNumber2) {
        generateFeedback("bigDice");
    } else {
        generateFeedback("draw");
    }


    //calculateResult(userCounter, bigDiceCounter);
}
//utworz array ze stringami-komentarzami co do gry, losowy z nich bedzie wyswietlany w zaleznosci od zwyciestwa/przegranej
function generateFeedback(player) {

    let arrayOfPlayer = ["Nice one!", "Amazing!", "Don't stop me now!", "You got lucky!"];
    let arrayOfBigDice = ["Big Dice attacks!", "Don't give up!", "Maybe next time!"];
    let arrayOfDraw = ["That's a draw!", "Let's try again!", "We need a rerun!"];

    let playerFeedback = Math.floor(Math.random() * arrayOfPlayer.length);
    let bigDiceFeedback = Math.floor(Math.random() * arrayOfBigDice.length);
    let drawFeedback = Math.floor(Math.random() * arrayOfDraw.length);

    if (player === "user") {
        //display a window with random string of arrayOfPlayer
        document.querySelector("h1").innerHTML = arrayOfPlayer[playerFeedback];
    } else if (player === "bigDice") {
        //display a window with random string of arrayOfBigDice
        document.querySelector("h1").innerHTML = arrayOfBigDice[bigDiceFeedback];

    } else if (player === "draw") {
        //display an array about a draw
        document.querySelector("h1").innerHTML = arrayOfDraw[drawFeedback];
    }
}


// function calculateResult(resultOfUser, resultOfBigDice) {
//     if (resultOfUser > resultOfBigDice) {
//         //display a window with congratulations
//     } else {
//         //display a window with consolation
//     }

// }