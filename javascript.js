// Variables to track scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "Player wins!";
        humanScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById('results').innerHTML = `
        <p>${result}</p>
        <p>Player Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;

    if (humanScore === 5) {
        document.getElementById('results').innerHTML += '<p>Congratulations! You win the game!</p>';
    } else if (computerScore === 5) {
        document.getElementById('results').innerHTML += '<p>Computer wins the game! Better luck next time.</p>';
    }
}

function playGame() {
    // Event listeners for buttons
    document.getElementById('one').addEventListener('click', () => playRound('rock'));
    document.getElementById('two').addEventListener('click', () => playRound('paper'));
    document.getElementById('three').addEventListener('click', () => playRound('scissors'));
}

// Start the game
playGame();
