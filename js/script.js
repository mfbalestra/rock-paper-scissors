let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        showResult("It's a tie!");
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        showResult("You win this round!");
    } else {
        computerScore++;
        showResult("Computer wins this round!");
    }

    updateScores();

    if (playerScore === 5) {
        showResult("Congratulations! You win the game!");
        setTimeout(() => {
            resetGame();
        }, 3000);
    } else if (computerScore === 5) {
        showResult("Sorry, you lose the game!");
        setTimeout(() => {
            resetGame();
        }, 3000);
    }
}

function showResult(message) {
    document.getElementById('result').textContent = message;
}

function updateScores() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
}

function playGame () {
    updateScores();

    showResult('Game starts now!');

    document.getElementById('rock').addEventListener('click', () => {
        playRound('rock');
    });

    document.getElementById('paper').addEventListener('click', () => {
        playRound('paper');
    });

    document.getElementById('scissors').addEventListener('click', () => {
        playRound('scissors');
    });
}

playGame();