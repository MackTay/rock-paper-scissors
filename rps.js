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

// Create variables that will track human and computer scores
let humanScore = 0;
let computerScore = 0;

// Create a function that allows user to play a single round
const humanDisplay = document.querySelector("#playerScore");
const compDisplay = document.querySelector("#compScore");
const result = document.querySelector("#result");
function playRound(event, computerChoice) {
    humanChoice = event.target.id;
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        result.textContent = `Computer chose ${computerChoice} It's a tie! Try again.`;
    } else if
    ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}! The score is:`;
        humanScore += 1;
        humanDisplay.textContent = `Player: ${humanScore}`;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}! The score is:`;
        computerScore += 1;
        compDisplay.textContent = `Computer: ${computerScore}`;
    }
    
    if (humanScore == 5) {
        const finalText = document.createElement("p");
        const div = document.querySelector("div");
        finalText.textContent = "You're the winner! Congratulations!!"
        div.appendChild(finalText);
    } else if (computerScore == 5) {
        const finalText = document.createElement("p");
        const div = document.querySelector("div");
        finalText.textContent = "Computer wins. Good luck next time!"
        div.appendChild(finalText);
    }
}



// Add event listeners for each button
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(event);
    });
});