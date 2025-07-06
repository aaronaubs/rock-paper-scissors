let computerChoice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    // make the function return "rock" if the value is 0
    if (randomNumber === 0) {
        computerChoice = "rock";
    //"paper" if the value is 1    
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    //or "scissors" if the value is 2 (neither 0 nor 1)    
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let playerChoice;
function getPlayerChoice() {
    let userInput = prompt("Please choose rock, paper or scissors");
    playerChoice = userInput.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
            playerChoice = prompt("Please check you've entered your response correctly").toLowerCase();
        }
        return playerChoice;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore < 5 && computerScore < 5) {
        function playRound(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}. It's a draw!`);
                console.log(`The score is still Player: ${playerScore} to Computer: ${computerScore}.`)
            } else if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}. You win, ${playerChoice} beats ${computerChoice}!`);
                playerScore++;
                console.log(`The score is now Player: ${playerScore} to Computer: ${computerScore}.`)
            } else {
                console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}. You lose, ${computerChoice} beats ${playerChoice}!`)
                computerScore++;
                console.log(`The score is now Player: ${playerScore} to Computer: ${computerScore}.`)
            }
        }

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
            
        playRound(playerSelection, computerSelection);  
    }
    if (playerScore === 5) {
        console.log("You won the game! Great work!");
    } else {
        console.log("You lose! Better luck next time.");
    }
}
