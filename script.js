/* 
Requirements for this project:
1. Create HTML page (check!)
2. Write logic to get computer choice
3. Write logic to get human choice
4. Declare score variables and enable them to track score to best of 5
5. Write logic to play a round
6. Write logic to play the entire game

*/
//Declare a global variable called computerChoice
let computerChoice
//Declare a function that will get a random computer choice
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
    console.log(computerChoice);
}