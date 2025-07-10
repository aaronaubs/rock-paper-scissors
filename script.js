let playerChoice;
let computerChoice
const choices = document.querySelectorAll(".choice");
const gameStatusDisplay = document.getElementById("gameStatusDisplay");
let playerScorecard = document.getElementById("playerScorecard");
let computerScorecard = document.getElementById("computerScorecard");
let playerScore = playerScorecard.dataset.value;
let computerScore = computerScorecard.dataset.value;
let roundCounter = document.getElementById("roundCounter");

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
    appendParagraph(`Computer choice: ${computerChoice}.`);
    return computerChoice;
}

function appendSpan() {
    let span = document.createElement("span");
    span.classList.add("line");
    gameStatusDisplay.appendChild(span);
}

function determineRoundWinner() {
    roundCounter.dataset.value++;
    roundCounter.textContent = roundCounter.dataset.value;

    if (playerChoice === computerChoice) {
        appendParagraph(`It's a draw.`);
        appendSpan();
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        appendParagraph(`You won the round!`);
        playerScore++;
        playerScorecard.textContent = playerScore;
        appendSpan();
    } else {
        appendParagraph(`You lost the round!`)
        computerScore++;
        computerScorecard.textContent = computerScore;
        appendSpan();
    }
}

function checkGameWinner() {
    if (playerScore === 5 && computerScore < 5) {
        appendParagraph(`You won the game! Great work!`)
        appendSpan();
    } else if (computerScore === 5 && playerScore < 5) {
        appendParagraph(`You lost the game... Better luck next time.`)
        appendSpan();
    } else return;
}


function playRound() {
    choices.forEach(choice => {
        choice.addEventListener("click", (e) => {
            playerChoice = e.target.id;
            appendParagraph(`Your choice: ${playerChoice}.`);
            getComputerChoice();
            determineRoundWinner();
            checkGameWinner();
        });
    });
}

playRound();

let resetBtn = document.getElementById("resetBtn");
function resetGame() {
    playerScore = 0;
    playerScorecard.textContent = playerScore;
    computerScore = 0;
    computerScorecard.textContent = computerScore;
    roundCounter.dataset.value = 1;
    roundCounter.textContent = roundCounter.dataset.value;
    while (gameStatusDisplay.firstChild) {
        gameStatusDisplay.removeChild(gameStatusDisplay.firstChild);
    }
}
