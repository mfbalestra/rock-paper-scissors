function getRandomInt(min, max) {
    min = Math.ceil(min);     // Round up the minimum value
    max = Math.floor(max);    // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}  

function choiseCodification(choise) {
    choise = choise.toUpperCase();
    switch (choise) {
        case 'ROCK':
            return 1
            break;
        case 'PAPER':
            return 2
            break;
        case 'SCISSORS':
            return 3
            break;
    }
} 

function winnerDecision(playerChoice, computerChoice) {
    
    if (playerChoice == computerChoice){
        return 0;
    }

    if ((playerChoice == 1 && computerChoice == 2) || 
    (playerChoice == 2 && computerChoice == 3) ||
    (playerChoice == 3 && computerChoice == 1)){
        return -1;
    }

    if ((playerChoice == 1 && computerChoice == 3) ||
    (playerChoice == 2 && computerChoice == 1) ||
    (playerChoice == 3 && computerChoice == 2)){
        return 1;
    }
}

function getComputerChoice() {
    let randomNumber = getRandomInt(1,3);
    switch (randomNumber) {
        case 1:
            return 'ROCK';
            break;
        case 2:
            return 'PAPER';
            break;
        case 3:
            return 'SCISSORS'
            break;
    }   
}

function playRound(playerSelection, computerSelection) {
    let codedPlayerSelection = choiseCodification(playerSelection);
    let codedComputerSelection = choiseCodification(computerSelection);
    let result = winnerDecision(codedPlayerSelection, codedComputerSelection);
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = capitalizeFirstLetter(computerSelection);
    switch (result) {
        case 0:
            console.log(`It's a Tie!`)
            return result;
            break;
        case 1:
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return result 
            break;
        case -1:
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return result
            break;
    }
}

function game() {
    let playerDecision;
    let computerDecision
    let result = 0
    for (let i = 1; i < 6; i++) {
        playerDecision = prompt('Enter: Rock Paper or Scissors');
        computerDecision = getComputerChoice();
        result += playRound(playerDecision, computerDecision);
        console.log(result);
    }
    if (result == 0) {
        console.log("It's a Tie");
    } else if (result > 0) {
        console.log('You Win!');
    } else if (result < 0) {
        console.log('You Lose :(');
    }
}

game();