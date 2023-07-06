// Player choose button
// Computer generates random selection
// Determine who winner would be

// Setup scoring variables
let winsPlayer = 0
let winsComputer = 0
let draws = 0

// Select button containers. Reset Button not included
const container = document.querySelector('.buttons')
const buttons = document.querySelectorAll('button:not(.reset)');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        game(button.className,getComputerChoice());
    });
    
})

// Define reset button separately
const resetButton = document.querySelector('.reset')

resetButton.addEventListener('click', () => {
    resetGame()
})

// Create a row for the last game result and the running score
const lastGame = document.createElement('div');
lastGame.classList.add('lastGame');

const runningScore = document.createElement('div');
runningScore.classList.add('runningScore');

container.appendChild(lastGame);
container.appendChild(runningScore);

// Call the resetGame function before first run to ensure all is clean
resetGame

function getComputerChoice() {
    //Use a random number to determine the computer's selection

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
    // Compare the players selection against the computers selection and choose the winner

    let scorePlayer = 0
    let scoreComputer = 0

    if (playerSelection === null) {
        return "Cancelled";
    }

    // Sensitise both inputs by converting to lower case
    let playerSelectionLower = playerSelection.toLowerCase()
    let computerSelectionLower = computerSelection.toLowerCase()

    const validInputs = ['rock', 'scissors', 'paper'];

    // If user input is not found within validInputs display a prompt
    while (!validInputs.includes(playerSelectionLower)) {
        const newPlayerSelection = prompt("User input not recognised, please try again", "Rock/Paper/Scissors");

        if (newPlayerSelection === null) {
            return "Cancelled";
        }

        playerSelectionLower = newPlayerSelection.toLocaleLowerCase();
    }
    
    // Compare player selection and computer selection and result
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

    // Use result to return value which is used in switch in game function
    if (scorePlayer > scoreComputer) {
        return 1
    } else if (scorePlayer < scoreComputer) {
        return -1
    } else {
        return 0
    }

}

function game(playerSelection) {
    // Take the players input and use the playRound function to find a winner
    // Check for a winner after each round

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
    // Check if the required number of rounds has been played. If so, find the winner

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
    // Sensitise all inputs for a blacnk canvas

    winsPlayer = 0
    winsComputer = 0
    draws = 0

    lastGame.textContent = 'Pick your choice';
    runningScore.textContent = 'Score is nil all';

}