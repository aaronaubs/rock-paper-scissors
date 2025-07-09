let playerChoice;
let computerChoice
const choices = document.querySelectorAll(".choice");
const gameStatusDisplay = document.getElementById("gameStatusDisplay");
let playerScorecard = document.getElementById("playerScorecard");
let computerScorecard = document.getElementById("computerScorecard");
let playerScore = playerScorecard.dataset.value;
let computerScore = computerScorecard.dataset.value;

function appendParagraph(text) {
    let para = document.createElement("p");
    para.textContent = text;
    gameStatusDisplay.appendChild(para);
    gameStatusDisplay.scrollTo({
        top: gameStatusDisplay.scrollHeight,
        behavior: "smooth"
    }); 
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) computerChoice = "rock";
    if (randomNumber === 1) computerChoice = "paper";
    if (randomNumber === 2) computerChoice = "scissors";
    appendParagraph(`The computer chose ${computerChoice}.`);
    return computerChoice;
}


function determineRoundWinner() {
    let roundCounter = document.getElementById("roundCounter");
    roundCounter.dataset.value++;
    roundCounter.textContent = roundCounter.dataset.value;

    if (playerChoice === computerChoice) {
        appendParagraph(`It's a draw.`);
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        appendParagraph(`You won the round!`);
        playerScore++;
        playerScorecard.textContent = playerScore;
    } else {
        appendParagraph(`You lost the round!`)
        computerScore++;
        computerScorecard.textContent = computerScore;
    }
}

function checkGameWinner() {
    if (playerScore === 5) {
        appendParagraph(`You won the game! Great work!.`)
    } else if (computerScore === 5) {
        appendParagraph(`You lost the game... Better luck next time.`)
    } else return;
}


function playRound() {
    choices.forEach(choice => {
        choice.addEventListener("click", (e) => {
            playerChoice = e.target.id;
            appendParagraph(`You chose ${playerChoice}.`);
            getComputerChoice();
            determineRoundWinner();
            checkGameWinner();
        });
    });
}

playRound();
