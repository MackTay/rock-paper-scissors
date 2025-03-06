// TOP RPS Challenge

// Create a function that randomly generates rock, paper, or scissors
function getComputerChoice() {
    let answer = Math.random();
    if (answer <= 0.333) {
        return "rock";
    } else if (answer > 0.333 && answer <= 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Create a function that prompts the user to input their choice and returns it
function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

// Create variables that will track human and computer scores
let humanScore = 0;
let computerScore = 0;

// Create a function that allows user to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Try again.");
        playRound();
    } else if
    ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
        console.log(`The score is user - ${humanScore}, computer - ${computerScore}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
        console.log(`The score is user - ${humanScore}, computer - ${computerScore}`);
    }
}

// Add event listeners for each button
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});