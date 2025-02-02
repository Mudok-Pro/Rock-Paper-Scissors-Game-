
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(`Round ${i + 1}: ${result}`);
        if (result === "Player wins!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Player ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score: Player ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score: Player ${humanScore} - Computer ${computerScore}`);
    }
}

// Start the game
playGame();
