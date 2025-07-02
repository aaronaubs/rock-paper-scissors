/* 
Requirements for this project:
1. Create HTML page (check!)
2. Write logic to get computer choice (check!)
3. Write logic to get human choice (check!)
4. Declare score variables and enable them to track scores (check!)
5. Write logic to play a round (check!)
6. Write logic to play the entire game (check!)

*/
//Declare a global variable called computerChoice
let computerChoice
//Define a function that will get a random computer choice
function getComputerChoice() {
    //declare a variable called randomNumber
    //and set it to randomly choose either 0, 1 or 2.
    let randomNumber = Math.floor(Math.random() * 3);
    // make the function return the string "rock if the value is 0"
    if (randomNumber === 0) {
        computerChoice = "rock";
    //paper if the value is 1    
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    //and scissors if the value is 2 (neither 0 nor 1)    
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//Declare a global variable called humanChoice
let humanChoice;
//Define a function that gets the choice from a user input
function getHumanChoice() {
    //declare a variable that will hold the response to the prompt
    let userInput = prompt("Please choose rock, paper or scissors");
    //set humanChoice to equal a lowercased version of the user input
    humanChoice = userInput.toLowerCase();
    //log the lowercased input to the console
    return humanChoice;
}



//Define playGame function
function playGame() {
    //declare variables to track the human score and computer score
    let humanScore = 0;
    let computerScore = 0;
    
    //while loop the game so it repeats until one side gets to 5 points
    while (humanScore < 5 && computerScore < 5) {
        //Define a function to play a single round of rock, paper scissors
        function playRound(humanChoice, computerChoice) {
            //check whether the round has ended in a draw
            if (humanChoice === computerChoice) {
                console.log(`You both chose ${humanChoice}. It's a draw!`);
                console.log(`The score is still Player: ${humanScore} to Computer: ${computerScore}.`)
            //if not a draw, check whether the user beat the computer
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                //announce the user's victory
                console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
                //increase user score by 1
                humanScore++;
                console.log(`The score is now Player: ${humanScore} to Computer: ${computerScore}.`)
            //if the user did not win, announce that the user lost
            } else {
                console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
                //increase computer score by 1
                computerScore++;
                console.log(`The score is now Player: ${humanScore} to Computer: ${computerScore}.`)
            }
        }

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
            
        playRound(humanSelection, computerSelection);  
    }
    if (humanScore === 5) {
        console.log("You win the game!");
    } else {
        console.log("You lose! Better luck next time.");
    }
}
