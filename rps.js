// TOP RPS Challenge

// Create a function that randomly generates rock, paper, or scissors
function getComputerChoice() {
    let answer = Math.random();
    if (answer <= 0.333) {
        return "Rock";
    } else if (answer > 0.333 && answer <= 0.666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Create a function that prompts the user to input their choice and returns it
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

let humanScore = 0;
let computerScore = 0;