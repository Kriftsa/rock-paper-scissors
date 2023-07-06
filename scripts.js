// Player enters selection
// Computer generates random selection
// Determine who winner would be

let winsPlayer = 0
let winsComputer = 0
let draws = 0

const container = document.querySelector('.buttons')
const buttons = document.querySelectorAll('button:not(.reset)');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        game(button.className,getComputerChoice());
    });
    
})

const resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', () => {
    resetGame()
})

const lastGame = document.createElement('div');
lastGame.classList.add('lastGame');

const runningScore = document.createElement('div');
runningScore.classList.add('runningScore');


container.appendChild(lastGame);
container.appendChild(runningScore);

resetGame

function getComputerChoice() {
    
    let compNumber = Math.floor(Math.random() * 3) +1 

    switch (compNumber) {
        case 1:
            return "Rock"
        case 2:
            return "Scissors"
        case 3:
            return "Paper"
    }

    return "Something went wrong"
}

function playRound(playerSelection, computerSelection) {

    let scorePlayer = 0
    let scoreComputer = 0

    if (playerSelection === null) {
        return "Cancelled";
    }

    let playerSelectionLower = playerSelection.toLowerCase()
    let computerSelectionLower = computerSelection.toLowerCase()

    const validInputs = ['rock', 'scissors', 'paper'];

    while (!validInputs.includes(playerSelectionLower)) {
        const newPlayerSelection = prompt("User input not recognised, please try again", "Rock/Paper/Scissors");

        if (newPlayerSelection === null) {
            return "Cancelled";
        }

        playerSelectionLower = newPlayerSelection.toLocaleLowerCase();
    }
    
    if ((playerSelectionLower == "rock" && computerSelectionLower == "scissors") ||
        (playerSelectionLower == "scissors" && computerSelectionLower == "paper") ||
        (playerSelectionLower == "paper" && computerSelectionLower == "rock")) {
        lastGame.textContent = (`You won! Your ${playerSelectionLower} beats the computer's ${computerSelectionLower}.`)
        scorePlayer = 1
    } else if (playerSelectionLower == computerSelectionLower) {
        lastGame.textContent = (`It's a draw! You both selected ${playerSelectionLower}.`)
    } else {
        lastGame.textContent = (`Oh no, you lost! Your ${playerSelectionLower} lost to the computer's ${computerSelectionLower}.`)
        scoreComputer = 1
    }

    if (scorePlayer > scoreComputer) {
        return 1
    } else if (scorePlayer < scoreComputer) {
        return -1
    } else {
        return 0
    }

}

function game(playerSelection) {


    switch (playRound(playerSelection, getComputerChoice())) {
        case 1:
            
            winsPlayer += 1;
            break;

        case -1:
        
            winsComputer += 1;
            break;

        case 0:

            draws += 1;
            break;

        case "Cancelled":
            return "User cancelled game"

        default:
            break;
    }

    runningScore.textContent = (`Score is ${winsPlayer} to ${winsComputer}.`)
    checkWinner()

}

function checkWinner() {

    let numberRounds = 5

    if (winsPlayer + winsComputer + draws == numberRounds) {

        if (winsPlayer > winsComputer) {
            runningScore.textContent =  `Congratulations! You won ${winsPlayer} times while the computer won ${winsComputer} times!`
        } else if (winsPlayer < winsComputer) {
            runningScore.textContent =  `Unlucky! You won ${winsPlayer} times while the computer won ${winsComputer} times!`
        } else {
            runningScore.textContent =  `Wow! It was a draw! You both won ${winsPlayer} times!`
        }
    }
}

function resetGame() {

    winsPlayer = 0
    winsComputer = 0
    draws = 0

    lastGame.textContent = 'Pick your choice';
    runningScore.textContent = 'Score is nil all';

}