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
console.log(getComputerChoice());