"use strict";
// Selecting Elements
const mainScore0 = document.getElementsByClassName("sc0")[0];
const mainScore1 = document.querySelector(".sc1");
const dice = document.querySelector(".dice-img");
const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const ply0CurrentScore = document.querySelector(".ply0currentscore");
const ply1CurrentScore = document.querySelector(".ply1currentscore");
const activePlayer0 = document.querySelector(".box0");
const activePlayer1 = document.querySelector(".box1");

// Starting point
let playing, total_score, currentScore, activePlayer;
init();

// let playing = true;
// let total_score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

// Adding class to a img tag.
// dice.classList.add("hidden");
// activePlayer0.classList.remove("player--winner");
// ply0CurrentScore.classList.remove("winner-player-shadow");
// activePlayer0.classList.add("player--active");
// activePlayer1.classList.remove("player--active");

rollDice.addEventListener("click", function() {
    if (playing) {
        // 1. Generating a random dice roll
        const roll = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        dice.classList.remove("hidden");
        dice.src = `./image/${roll}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if (roll !== 1) {
            currentScore += roll;
            document.querySelector(
                `.ply${activePlayer}currentscore`
            ).innerHTML = currentScore;

            //Switching to another player.
        } else {
            switchPlayer();
        }
    }
});
hold.addEventListener("click", function() {
    if (playing) {
        // Adding a total current score when click hold
        total_score[activePlayer] += Number(
            document.querySelector(`.ply${activePlayer}currentscore`)
            .textContent
        );
        document.querySelector(`.sc${activePlayer}`).innerHTML =
            total_score[activePlayer];
        // Winner  Check
        if (total_score[activePlayer] >= 60) {
            playing = false;
            document
                .querySelector(`.box${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.ply${activePlayer}`)
                .classList.add("winner-player-shadow");
            // Switching Player
        } else {
            switchPlayer();
        }
    }
});
newGame.addEventListener("click", init);
//  {
//     // init();
//     currentScore = 0;
//     mainScore0.innerHTML = 0;
//     mainScore1.innerHTML = 0;
//     ply0CurrentScore.innerHTML = 0;
//     ply1CurrentScore.innerHTML = 0;
//     total_score[activePlayer] = 0;
//     activePlayer0.classList.add("player--active");
//     activePlayer1.classList.remove("player--active");
//     resetWinner();
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     resetWinner();
//     total_score[activePlayer] = 0;

//     activePlayer = 0;

//     // if (activePlayer0.classList.contains("player--active")) {
//     //     console.log("Ok contains");
//     // } else {
//     //     activePlayer0.classList.add("player--active");
//     //     activePlayer1.classList.remove("player--active");
//     // }
//     dice.classList.add("hidden");
//     playing = true;
// });

function switchPlayer() {
    activePlayer0.classList.toggle("player--active");
    activePlayer1.classList.toggle("player--active");
    currentScore = 0;
    document.querySelector(`.ply${activePlayer}currentscore`).innerHTML =
        currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
}

function resetWinner() {
    document
        .querySelector(`.box${activePlayer}`)
        .classList.remove("player--winner");
    document
        .querySelector(`.ply${activePlayer}`)
        .classList.remove("winner-player-shadow");
}

function init() {
    total_score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    mainScore0.innerHTML = 0;
    mainScore1.innerHTML = 0;
    ply0CurrentScore.innerHTML = 0;
    ply1CurrentScore.innerHTML = 0;

    dice.classList.add("hidden");
    activePlayer0.classList.remove("player--winner");
    activePlayer1.classList.remove("player--winner");
    document.querySelector(".ply0").classList.remove("winner-player-shadow");
    document.querySelector(".ply1").classList.remove("winner-player-shadow");
    activePlayer0.classList.add("player--active");
    activePlayer1.classList.remove("player--active");
}