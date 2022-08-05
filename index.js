function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "ROCK";
    } else if (result === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

const midSection = document.querySelector('#midSection')

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const options = document.querySelector('#options')

const yourPointsObject = document.querySelector('#yourPoints');
const computerPointsObject = document.querySelector('#computerPoints');
let yourPoints = parseInt(yourPointsObject.textContent);
let computerPoints = parseInt(computerPointsObject.textContent);

const roundEndMessage = document.querySelector('#roundEndMessage');

const yourSide = document.querySelector('#yourSide');
const computerSide = document.querySelector('#computerSide');

rockBtn.addEventListener('click', playRockRound);
paperBtn.addEventListener('click', playPaperRound);
scissorsBtn.addEventListener('click', playScissorsRound);

let youWon = false;
let computerWon = false;

function checkRoundEnd() {
    if (computerPoints === 5)  {
        computerWon = true;
    } else if (yourPoints === 5) {
        youWon = true;
    } else {
        return;
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    promptNewGame();
}

function promptNewGame() {
    const newGameBtn = document.createElement('button')
    newGameBtn.setAttribute('id', 'newGame')
    newGameBtn.textContent = "NEW GAME"
    midSection.appendChild(newGameBtn)
    if (youWon) {
        roundEndMessage.textContent = "You won!"
    } else {
        roundEndMessage.textContent = "You lost!"
    }
    newGameBtn.addEventListener('click', () => {
        youWon = false;
        computerWon = false;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        midSection.removeChild(newGameBtn);
        yourPoints = 0;
        computerPoints = 0;
        yourPointsObject.textContent = 0;
        computerPointsObject.textContent = 0;
        yourSide.innerHTML = "";
        computerSide.innerHTML = "";
        roundEndMessage.textContent = "";
    })
}

function playRockRound() {
    let message = ""

    let playerSelection = "ROCK"
    let computerSelection = getComputerChoice();

    if (computerSelection === "ROCK") {
        message = "It's a tie!"
    } else if (computerSelection === "SCISSORS") {
        message = "You won this round! Rock beats scissors."
        yourPoints += 1;
        yourPointsObject.textContent = yourPoints;
    } else {
        message = "You lost this round! Paper beats rock."
        computerPoints += 1;
        computerPointsObject.textContent = computerPoints;
    }


    roundEndMessage.textContent = message;

    checkRoundEnd();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    yourSide.innerHTML = `<image src="./images/${playerSelection}.png" width="100" height="100"></image>`;
    computerSide.innerHTML = `<image src="./images/${computerSelection}.png" width="100" height="100"></image>`;
}

function playScissorsRound() {
    let message = ""

    let playerSelection = "SCISSORS"
    let computerSelection = getComputerChoice();

    if (computerSelection === "SCISSORS") {
        message = "It's a tie!"
    } else if (computerSelection === "PAPER") {
        message = "You won this round! Scissors beat paper."
        yourPoints += 1;
        yourPointsObject.textContent = yourPoints;
    } else {
        computerPoints += 1;
        computerPointsObject.textContent = computerPoints;
        message = "You lost this round! Rock beats scissors"
    }

    checkRoundEnd();

    roundEndMessage.textContent = message;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    yourSide.innerHTML = `<image src="./images/${playerSelection}.png" width="100" height="100"></image>`;
    computerSide.innerHTML = `<image src="./images/${computerSelection}.png" width="100" height="100"></image>`;
}

function playPaperRound() {
    let message = ""

    let playerSelection = "PAPER"
    let computerSelection = getComputerChoice();

    if (computerSelection === "PAPER") {
        message = "It's a tie!"
    } else if (computerSelection === "SCISSORS") {
        message = "You lost this round! Scissors beat paper."
        computerPoints += 1;
        computerPointsObject.textContent = computerPoints;
    } else {
        yourPoints += 1;
        yourPointsObject.textContent = yourPoints;
        message = "You won this round! Paper beats rock."
    }

    checkRoundEnd();

    roundEndMessage.textContent = message;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    yourSide.innerHTML = `<image src="./images/${playerSelection}.png" width="100" height="100"></image>`;
    computerSide.innerHTML = `<image src="./images/${computerSelection}.png" width="100" height="100"></image>`;
}
